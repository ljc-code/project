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
    var HitTestUtil = (function () {
        function HitTestUtil() {
        }
        //碰撞检测
        HitTestUtil.testHitBitmap = function (b1, b2) {
            var b1Rect = b1.getBounds();
            var b2Rect = b2.getBounds();
            return b1Rect.intersects(b2Rect) || b2Rect.intersects(b1Rect);
        };
        HitTestUtil.testHitRect = function (b1Rect, b2Rect) {
            return b1Rect.intersects(b2Rect);
        };
        HitTestUtil.testHit = function (obj1, obj2) {
            //console.log("p1=" + obj1.parent + ", p2=" + obj2.parent)
            if (!obj1.parent || !obj2.parent) {
                return false;
            }
            var x = obj1.x;
            var y = obj1.y;
            var b1Rect = obj1.getBounds();
            //对象1的数据准备
            var tempPoint = new egret.Point();
            obj1.parent.localToGlobal(x, y, tempPoint);
            b1Rect.x = tempPoint.x;
            b1Rect.y = tempPoint.y;
            //console.log("x1=" + x + ", x2=" + tempPoint.x + ", y1=" + y + ", y2=" + tempPoint.y + ", w="+ b1Rect.width + ", h=" + b1Rect.height);
            //对象2的数据准备
            x = obj2.x;
            y = obj2.y;
            //对象1的数据准备
            var b2Rect = obj2.getBounds();
            obj2.parent.localToGlobal(x, y, tempPoint);
            b2Rect.x = tempPoint.x;
            b2Rect.y = tempPoint.y;
            return b1Rect.intersects(b2Rect);
        };
        HitTestUtil._shape = null;
        return HitTestUtil;
    }());
    easy.HitTestUtil = HitTestUtil;
    __reflect(HitTestUtil.prototype, "easy.HitTestUtil");
})(easy || (easy = {}));
