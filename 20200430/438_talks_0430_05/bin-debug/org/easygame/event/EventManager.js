var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * Copyright (c) 2014,www.easygame.org
 * All rights reserved.
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 *     * Redistributions of source code must retain the above copyright
 *       notice, this list of conditions and the following disclaimer.
 *     * Redistributions in binary form must reproduce the above copyright
 *       notice, this list of conditions and the following disclaimer in the
 *       documentation and/or other materials provided with the distribution.
 *     * Neither the name of the easygame.org nor the
 *       names of its contributors may be used to endorse or promote products
 *       derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY EASYEGRET.COM AND CONTRIBUTORS "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL EGRET-LABS.ORG AND CONTRIBUTORS BE LIABLE FOR ANY
 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */
var easy;
(function (easy) {
    /**
     * 这个是一个点对点的事件派发管理器
     * 系统的逻辑事件和协议事件,都会经过这里派发出去
     * 集中控制的好处是,可以插入一些预处理,过滤和控制流程
     */
    var EventManager = (function () {
        function EventManager() {
        }
        /**
         * 取得一个对应id的协议包
         * @param messageId 命令id号
         * @param clientSide true:客户端协议,false:服务器端协议(针对客户端和服务器端的id号一样的情况)
         */
        EventManager.getPacket = function (messageId, clientSide) {
            if (clientSide === void 0) { clientSide = true; }
            var packetArray = EventManager.packetCachePool[(clientSide ? "c_" : "s_") + messageId];
            if (packetArray == null) {
                packetArray = new Array();
                EventManager.packetCachePool[(clientSide ? "c_" : "s_") + messageId] = packetArray;
            }
            if (packetArray.length == 0) {
                var packetFactory = egret.getDefinitionByName("easy.PacketFactory");
                if (packetFactory) {
                    return packetFactory.createPacket(messageId, clientSide);
                }
                return null;
            }
            return packetArray.shift();
        };
        EventManager.releasePacket = function (packet) {
            var packetArray = EventManager.packetCachePool[(packet.clientSide ? "c_" : "s_") + packet.header.messageId];
            if (packetArray == null) {
                packetArray = new Array();
                EventManager.packetCachePool[(packet.clientSide ? "c_" : "s_") + packet.header.messageId] = packetArray;
            }
            //清理残余数据
            // packet.destory();
            packetArray.push(packet);
        };
        /**
         * 获取一个type类型的事件对象
         * 如果事件对象池中有回收的同类型事件对象,优先使用
         * @param type
         * @returns {*}
         */
        EventManager.getEvent = function (type) {
            var eventArray = EventManager.eventCachePool[type];
            if (eventArray == null) {
                eventArray = [];
                EventManager.eventCachePool[type] = eventArray;
            }
            if (eventArray.length == 0) {
                return new easy.MyEvent(type);
            }
            return eventArray.pop();
        };
        /**
         * 释放一个时间对象回事件对象池
         * @param e
         */
        EventManager.releaseEvent = function (e) {
            var eventArray = EventManager.eventCachePool[e.type];
            if (eventArray == null) {
                eventArray = [];
                EventManager.eventCachePool[e.type] = eventArray;
            }
            //清理残余数据
            e.destory();
            eventArray.push(e);
        };
        /**
         * <p>添加packet包事件响应service</p>
         * @param serverId 服务器id
         * @param service  服务器id对应的响应service
         */
        EventManager.addPacketEvent = function (messageId, response, thisArg) {
            if (response == null || EventManager.isContainerPacketEventListener(messageId, response, thisArg))
                return;
            var serverList = null;
            serverList = EventManager.packetEventList[EventManager.PREFIX + messageId];
            if (serverList == null) {
                serverList = new Array();
                EventManager.packetEventList[EventManager.PREFIX + messageId] = serverList;
            }
            serverList.push({ func: response, owner: thisArg });
        };
        EventManager.removePacketEvent = function (messageId, response, thisArg) {
            if (response == null || !EventManager.isContainerPacketEventListener(messageId, response, thisArg))
                return;
            var listenerList = EventManager.packetEventList[EventManager.PREFIX + messageId];
            if (listenerList)
                for (var i = 0; i < listenerList.length; i++) {
                    if (listenerList[i]["func"] == response && listenerList[i]["owner"] == thisArg) {
                        listenerList.splice(i, 1);
                        break;
                    }
                }
        };
        //同一事件类型,是否包含相同的响应方法
        EventManager.isContainerPacketEventListener = function (messageId, response, thisArg) {
            var listenerList = EventManager.packetEventList[EventManager.PREFIX + messageId];
            if (listenerList != null) {
                for (var i = 0; i < listenerList.length; i++) {
                    if (listenerList[i]["func"] == response && listenerList[i]["owner"] == thisArg) {
                        return true;
                    }
                }
            }
            return false;
        };
        /**
        *  <p>派发packet事件响应到service<br>
        *  再由service对注册其中的方法进行派发</p>
        *  @param packet 要派发的包实例
        */
        EventManager.dispactchPacket = function (packet) {
            if (packet != null) {
                easy.Debug.log = packet;
                this.packetSendCacheList.push(packet);
                easy.HeartBeat.addListener(EventManager, EventManager.onFireDispactchPacket);
            }
            ;
        };
        /**
         * 队列派发协议
         */
        EventManager.onFireDispactchPacket = function () {
            if (EventManager.packetSendCacheList.length > 0) {
                var packet = EventManager.packetSendCacheList.shift();
                //console.log("@@@@@@dispactchPacket=" + egret.getQualifiedClassName(packet));
                //优先handle处理数据
                var serverList = EventManager.packetEventList[EventManager.PREFIX + packet.header.messageId];
                if (serverList != null) {
                    var length = serverList.length;
                    for (var i = 0; i < length; i++) {
                        var service = serverList[i];
                        serverList[i]["func"].call(serverList[i]["owner"], packet);
                    }
                    EventManager.releasePacket(packet);
                }
                easy.ViewManager.receivePacket(packet);
            }
            if (this.packetSendCacheList.length == 0) {
                easy.HeartBeat.removeListener(EventManager, EventManager.onFireDispactchPacket);
            }
        };
        /**
         * 无参数的事件快捷派发
         * @param type 事件的类型
         */
        EventManager.dispatch = function (type, param, fireNow) {
            if (param === void 0) { param = null; }
            if (fireNow === void 0) { fireNow = false; }
            var myEvent = EventManager.getEvent(type);
            if (param) {
                var value = null;
                for (var key in param) {
                    //console.log(key + "=" + data[key]);
                    if (key != "__class__" && key != "hashCode" && key != "__types__" && key != "__proto__") {
                        value = param[key];
                        if (!(value instanceof Function)) {
                            myEvent.addItem(key, value);
                        }
                    }
                }
            }
            EventManager.dispatchEvent(myEvent);
            if (fireNow) {
                this.onFiredispatchEvent();
            }
        };
        /**
         * 事件派发
         * @param event 要派发的事件对象
         */
        EventManager.dispatchEvent = function (e) {
            if (e != null) {
                EventManager.eventSendCacheList.push(e);
                easy.HeartBeat.addListener(EventManager, EventManager.onFiredispatchEvent);
            }
        };
        /**
         * 队列派发事件
         * @param e
         */
        EventManager.onFiredispatchEvent = function () {
            if (EventManager.eventSendCacheList.length > 0) {
                var e = EventManager.eventSendCacheList.shift();
                var listenerList = EventManager.commEventList[e.type];
                if (listenerList != null) {
                    for (var i = listenerList.length - 1; i >= 0; i--) {
                        listenerList[i]["func"].call(listenerList[i]["owner"], e);
                    }
                }
                easy.ViewManager.receiveEvent(e);
                EventManager.releaseEvent(e);
            }
            if (EventManager.eventSendCacheList.length == 0) {
                easy.HeartBeat.removeListener(EventManager, EventManager.onFiredispatchEvent);
            }
        };
        /**
         * 移除事件监听
         * @param eventType 事件的类型
         * @param respone 对应的call back function
         * @param thisArg 方法所在的this对象
         */
        EventManager.removeEventListener = function (eventType, response, thisArg) {
            var listenerList = EventManager.commEventList[eventType];
            if (listenerList != null) {
                for (var i = 0; i < listenerList.length; i++) {
                    if (listenerList[i]["func"] == response && listenerList[i]["owner"] == thisArg) {
                        listenerList.splice(i, 1);
                        break;
                    }
                }
            }
        };
        /**
         * 添加时间监听
         * @param eventType 事件的类型
         * @param respone 对应的call back function
         * @param thisArg 方法所在的this对象
         */
        EventManager.addEventListener = function (eventType, response, thisArg) {
            if (response == null || EventManager.isContainerEventListener(eventType, response, thisArg))
                return;
            var listenerList = EventManager.commEventList[eventType];
            if (listenerList == null) {
                listenerList = new Array();
                EventManager.commEventList["" + eventType] = listenerList;
            }
            listenerList.push({ func: response, owner: thisArg });
        };
        /**
         * 同样的事件监听是否已经存在,防止二次添加
         * @param eventType 事件的类型
         * @param respone  对应的call back function
         * @param thisArg  方法所在的this对象
         * @returns {boolean}  true:已经存在, false:不存在
         */
        EventManager.isContainerEventListener = function (eventType, response, thisArg) {
            var listenerList = EventManager.commEventList["" + eventType];
            if (listenerList != null) {
                for (var i = 0; i < listenerList.length; i++) {
                    if (listenerList[i]["func"] == response && listenerList[i]["owner"] == thisArg) {
                        return true;
                    }
                }
            }
            return false;
        };
        /**
         * 协议的的事件,会自动加一个前缀
         * @type {string}
         */
        EventManager.PREFIX = "PKT_";
        /**
         * 协议事件的监听列表
         * @type {{}}
         */
        EventManager.packetEventList = {}; //server event list
        /**
         * 逻辑时间的监听列表
         * @type {{}}
         */
        EventManager.commEventList = {}; //comm event list
        /**
         * 事件回收池
         */
        EventManager.eventCachePool = {};
        /**
         * 需要发送的事件列表
         * 用来解耦同步调用
         */
        EventManager.eventSendCacheList = [];
        /**
         * 协议回收池
         */
        EventManager.packetCachePool = {};
        /**
         * 需要发送的协议列表
         * 用来解耦同步调用
         */
        EventManager.packetSendCacheList = [];
        return EventManager;
    }());
    easy.EventManager = EventManager;
    __reflect(EventManager.prototype, "easy.EventManager");
})(easy || (easy = {}));
