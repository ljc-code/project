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
     * 方便便捷的监听utils
     * 它的计时单位是帧
     */
    var HeartBeat = (function () {
        function HeartBeat() {
        }
        /**
         * 暂停
         */
        HeartBeat.pause = function () {
            egret.stopTick(HeartBeat.onEnterFrame, HeartBeat);
        };
        /**
         * 重新开始
         */
        HeartBeat.restart = function () {
            if (HeartBeat._listeners.length > 0) {
                egret.startTick(HeartBeat.onEnterFrame, HeartBeat);
            }
        };
        /**
         * 帧呼吸
         */
        HeartBeat.onEnterFrame = function (time) {
            var i = 0;
            var j = 0;
            var lenght = 0;
            var item = null;
            //检索并整理数据
            lenght = HeartBeat._listeners.length - 1;
            for (i = lenght; i >= 0; i--) {
                item = HeartBeat._listeners[i];
                item.index++;
                if (item.del) {
                    HeartBeat._listeners.splice(i, 1);
                    easy.ObjectPool.recycleClass(item);
                    continue;
                }
                if (item.count <= 1 || item.index % item.count == 0) {
                    item.loopcount++;
                    if (item.loop > 0 && item.loop <= item.loopcount) {
                        item.del = true;
                    }
                    //加入call的列表中
                    HeartBeat._functionCallList.unshift(item);
                }
            }
            //执行
            lenght = HeartBeat._functionCallList.length;
            for (i = 0; i < lenght; i++) {
                item = HeartBeat._functionCallList.pop();
                //判断func的参数情况
                if (item.param && item.param.length > 0) {
                    //显式定义参数,直接用指定参数返回
                    item.func.apply(item.thisArg, item.param);
                }
                else {
                    if (item.func.length == 0) {
                        item.func.call(item.thisArg);
                    }
                    else {
                        //console.log("heatbeat=" + typeof(item.func.arguments[0]))
                        //if (item.func.arguments[0] instanceof boolean) {
                        item.func.call(item.thisArg, item.del);
                        //} else if (item.func.arguments[0] instanceof number) {
                        //    item.func.call(item.thisArg, item.loopcount);
                        //} else {
                        //    item.func.call(item.thisArg, null);
                        //}
                    }
                }
            }
            if (HeartBeat._listeners.length == 0) {
                egret.stopTick(HeartBeat.onEnterFrame, HeartBeat);
            }
            return true;
        };
        /**
         *  添加呼吸监听
         * @param thisArg 方法的this宿主
         * @param respone call back 的方法
         * @param heartRrate 心率, 从加入开始计算,当达到frameCount的值时,进行一次func call
         * @param repeat 要循环 call func 的次数
         * @param params 回传的参数值
         * @param nowExecute 立即执行
         */
        HeartBeat.addListener = function (thisArg, respone, heartRrate, repeat, delay, params, nowExecute) {
            if (heartRrate === void 0) { heartRrate = 1; }
            if (repeat === void 0) { repeat = -1; }
            if (delay === void 0) { delay = 0; }
            if (params === void 0) { params = null; }
            if (nowExecute === void 0) { nowExecute = false; }
            if (respone == null || HeartBeat.isContainerListener(thisArg, respone))
                return false; //同一个func防止重复添加
            var item = easy.ObjectPool.getByClass(BeatItem);
            item.setData(thisArg, respone, heartRrate, repeat, delay, params);
            HeartBeat._listeners.push(item);
            if (nowExecute) {
                item.loopcount++;
                if (item.param && item.param.length > 0) {
                    //显式定义参数,直接用指定参数返回
                    item.func.apply(item.thisArg, item.param);
                }
                else {
                    if (item.func.length == 0) {
                        item.func.call(item.thisArg);
                    }
                    else {
                        //console.log("heatbeat=" + typeof(item.func.arguments[0]))
                        //if (item.func.arguments[0] instanceof boolean) {
                        item.func.call(item.thisArg, item.del);
                        //} else if (item.func.arguments[0] instanceof number) {
                        //    item.func.call(item.thisArg, item.loopcount);
                        //} else {
                        //    item.func.call(item.thisArg, null);
                        //}
                    }
                }
            }
            egret.startTick(HeartBeat.onEnterFrame, HeartBeat);
            return true;
        };
        /**
         * 移除呼吸
         * @param thisArg 方法的this宿主
         * @param respone
         */
        HeartBeat.removeListener = function (thisArg, respone) {
            var i = 0;
            for (i = 0; i < HeartBeat._listeners.length; i++) {
                if (HeartBeat._listeners[i].func == respone && HeartBeat._listeners[i].thisArg == thisArg) {
                    HeartBeat._listeners[i].del = true;
                    break;
                }
            }
        };
        /**
         * 呼吸中是否包含指定的回调func
         * @param thisArg 方法的this宿主
         * @param respone
         * @return
         */
        HeartBeat.isContainerListener = function (thisArg, respone) {
            var i = 0;
            for (i = 0; i < HeartBeat._listeners.length; i++) {
                if (HeartBeat._listeners[i].thisArg == thisArg && HeartBeat._listeners[i].func == respone && !HeartBeat._listeners[i].del) {
                    return true;
                }
            }
            return false;
        };
        /**
         * 当前呼吸内容长度
         * @return
         */
        HeartBeat.getHearBeatLenght = function () {
            return HeartBeat._listeners.length;
        };
        /**
         * 打印输出方法的追踪信息以及活动状态
         * @return
         */
        HeartBeat.getHearBeatTrace = function () {
            var i = 0;
            var msg = "";
            var item = null;
            msg += "总数:" + HeartBeat._listeners.length + "\n";
            msg += "========================================================\n";
            for (i = 0; i < HeartBeat._listeners.length; i++) {
                item = HeartBeat._listeners[i];
                if (item) {
                    msg += "基本信息 (" + i + "): ";
                    msg += "del=" + item.del + ", count=" + item.count + ", index=" + item.index + ", loop=" + item.loop + ", loopCount=" + item.loopcount + "\n";
                    //msg += "追踪信息:\n";
                    //if (StringUtil.isUsage(item.traceMsg))msg += item.traceMsg.substring(item.traceMsg.indexOf("]") + 2, item.traceMsg.length)  + "\n";
                    msg += "------------------------------------\n";
                }
            }
            msg += "========================================================\n";
            return msg;
        };
        HeartBeat._listeners = new Array(); //{func:方法, count:频率, index:计数, loop:循环次数 -1:无限循环, loopcount:已call计数}
        HeartBeat._functionCallList = new Array(); //;需要进行调用的方法列表
        return HeartBeat;
    }());
    easy.HeartBeat = HeartBeat;
    __reflect(HeartBeat.prototype, "easy.HeartBeat");
    var BeatItem = (function () {
        function BeatItem() {
            //要回call的方法
            this.func = null;
            //方法的宿主
            this.thisArg = null;
            //频率
            this.count = 0;
            //当前计数频率
            this.index = 0;
            //循环次数
            this.loop = 0;
            //已经循环的次数
            this.loopcount = 0;
            //延迟
            this.delay = 0;
            //完成,删除标记
            this.del = false;
            //trace信息追踪
            this.traceMsg = null;
            //call back function的参数
            this.param = null;
        }
        BeatItem.prototype.setData = function (thisArg, respone, heartRrate, repeat, delay, params) {
            this.thisArg = thisArg;
            this.func = respone;
            this.count = heartRrate;
            this.loop = repeat;
            this.delay = delay;
            this.index = 0;
            this.loopcount = 0;
            this.del = false;
            this.param = params;
        };
        return BeatItem;
    }());
    __reflect(BeatItem.prototype, "BeatItem");
})(easy || (easy = {}));
