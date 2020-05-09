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
     * 对象池,针对经常创建的对象进行 回收并复用,减少对象创建的消耗
     * 不给垃圾回收的机会
     */
    var ObjectPool = (function () {
        function ObjectPool() {
        }
        //public static length:number = 0;//长度
        /**
         * 传入一个class,给你一个class对象的实例
         * 使用class的名称作为对象映射的key
         * 该class的构造函数必须是无参数要求
         * 从对象池中提取Object
         * @param clz 要提取的objec的Class
         * @return clz 对象的实例
         */
        ObjectPool.getByClass = function (clz, flag, pop) {
            if (flag === void 0) { flag = ""; }
            if (pop === void 0) { pop = true; }
            var key = egret.getQualifiedClassName(clz);
            key = flag + key;
            var item = ObjectPool.getObject(key, pop);
            if (item == null)
                item = new clz();
            if (!pop) {
                ObjectPool.recycleClass(item, flag);
            }
            return item;
        };
        /**
         * 释放object,使得objec返回到pool池,可以继续重复利用
         * 使用class的名称作为对象映射的key
         * @param item 要返回池中的item对象
         */
        ObjectPool.recycleClass = function (obj, flag) {
            if (flag === void 0) { flag = ""; }
            if (!obj)
                return;
            var key = egret.getQualifiedClassName(obj);
            key = flag + key;
            ObjectPool.recycleObject(key, obj);
        };
        /**
         * 查询是否有某class名称的对象池存在
         * @param clz
         * @returns {any}
         */
        ObjectPool.hasClass = function (clz, flag) {
            if (flag === void 0) { flag = ""; }
            return ObjectPool.getByClass(clz, flag, false);
        };
        /**
         * 根据name从对象池中提取Object
         * @param name 要提取的objec的name
         * @param pop 是否从对象池中弹出
         * @return clz 对象的实例
         */
        ObjectPool.getObject = function (name, pop) {
            if (pop === void 0) { pop = true; }
            if (ObjectPool._dataPool.hasOwnProperty(name) && ObjectPool._dataPool[name].length > 0) {
                var obj = null;
                if (pop) {
                    obj = ObjectPool._dataPool[name].pop();
                    if (ObjectPool._dataPool[name].length == 0)
                        delete ObjectPool._dataPool[name];
                }
                else {
                    obj = ObjectPool._dataPool[name][0];
                }
                return obj;
            }
            return null;
        };
        /**
         * 使用name存储对象
         * @param item
         * @param name
         * @param group
         */
        ObjectPool.setObject = function (name, item) {
            ObjectPool.recycleObject(name, item);
        };
        /**
         * 回收对象,使用name存储
         * 反之,通过name提取
         * @param name
         * @param item
         */
        ObjectPool.recycleObject = function (name, item) {
            if (!item)
                return;
            if (!ObjectPool._dataPool.hasOwnProperty(name)) {
                ObjectPool._dataPool[name] = [];
            }
            if (item.hasOwnProperty("destroy"))
                item.destroy();
            if (ObjectPool._dataPool[name].indexOf(item) < 0) {
                ObjectPool._dataPool[name].push(item);
            }
        };
        /**
         * 查询是否有name名称的对象池存在
         * @param name
         * @returns {any}
         */
        ObjectPool.hasObject = function (name) {
            return ObjectPool.getObject(name, false);
        };
        /**
         * 释放所有clz归属的objec的引用
         * 获取class的名称作为对象映射的key,把对应的对象列表引用释放
         * @param clz 要释放的objec的Class
         */
        ObjectPool.dispose = function (clz) {
            var key = egret.getQualifiedClassName(clz);
            ObjectPool.disposeObjects(key);
        };
        /**
         * 释放某个对象池的所有对象
         * 获取name对应的对象列表, 把引用释放
         * @param name
         */
        ObjectPool.disposeObjects = function (name) {
            if (ObjectPool._dataPool.hasOwnProperty(name)) {
                ObjectPool._dataPool[name].length = 0;
                delete ObjectPool._dataPool[name];
            }
        };
        ObjectPool._dataPool = {}; //池数据
        return ObjectPool;
    }());
    easy.ObjectPool = ObjectPool;
    __reflect(ObjectPool.prototype, "easy.ObjectPool");
})(easy || (easy = {}));
