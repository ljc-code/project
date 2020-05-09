var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * @copyright www.egret.com
 * @author
 * @desc ��Ҫ���ƶ��豸��Ԥ����������ָ�ɿ���DisplayObject���ź���ת
 *      ��
 */
var easy;
(function (easy) {
    var MoreTouch = (function () {
        function MoreTouch() {
        }
        /**
         * ��������ʶ��
         * @param object Ҫ��ת�����ƶ��Ķ���
         * @param isControlGlobal �Ƿ���������̨�Ͽ��ƶ���
         * @param minScale ������С�Ŵ�ϵ��
         * @param maxScale ���������Ŵ�ϵ��
         * @param isMiddle �Ƿ��������ĵ��Ŵ�
         */
        MoreTouch.start = function (object, isControlGlobal, minScale, maxScale, isMiddle) {
            if (isControlGlobal === void 0) { isControlGlobal = true; }
            if (minScale === void 0) { minScale = 0; }
            if (maxScale === void 0) { maxScale = 9999; }
            if (isMiddle === void 0) { isMiddle = true; }
            if (isControlGlobal) {
                var stage = egret.MainContext.instance.stage;
                stage.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.mouseDown, this);
                stage.addEventListener(egret.TouchEvent.TOUCH_END, this.mouseUp, this);
                stage.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.mouseMove, this);
            }
            else {
                this._moveObject.touchEnabled = true;
                this._moveObject.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.mouseDown, this);
                this._moveObject.addEventListener(egret.TouchEvent.TOUCH_END, this.mouseUp, this);
                this._moveObject.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.mouseMove, this);
            }
            this._moveObject = object;
            if (isMiddle) {
                easy.TweenEffect.setAnchorXY(this._moveObject);
            }
            this._minScale = minScale * this._moveObject.width;
            this._maxScale = maxScale * this._moveObject.width;
            if (this._moveObject instanceof easy.Image) {
                this._moveObject["autoSize"] = true;
            }
        };
        /**
         * ��ʼ����
         * @param e
         */
        MoreTouch.mouseDown = function (e) {
            if (this._touchPoints[e.touchPointID] == null) {
                this._touchPoints[e.touchPointID] = new egret.Point(e.stageX, e.stageY);
                this._touchPoints["names"].push(e.touchPointID);
            }
            this._touchCount++;
            if (this._touchCount == 1) {
                var names = this._touchPoints["names"];
                this._oldX = this._touchPoints[names[0]].x - this._moveObject.x;
                this._oldY = this._touchPoints[names[0]].y - this._moveObject.y;
                this._firstTouchId = e.touchPointID;
            }
            if (this._touchCount == 2) {
                this._distance = this.getTouchDistance();
                this._angle = this.getTouchAngle();
            }
        };
        /**
         * �����ƶ�
         */
        MoreTouch.mouseMove = function (e) {
            this._touchPoints[e.touchPointID].x = e.stageX;
            this._touchPoints[e.touchPointID].y = e.stageY;
            if (e.touchPointID == this._firstTouchId) {
                this._moveObject.x = e.stageX - this._oldX;
                this._moveObject.y = e.stageY - this._oldY;
            }
            if (this._touchCount == 2) {
                var newDistance = this.getTouchDistance();
                var scale = newDistance / this._distance;
                if (scale * this._moveObject.width < this._minScale)
                    scale = this._minScale / this._moveObject.width;
                if (scale * this._moveObject.width > this._maxScale)
                    scale = this._maxScale / this._moveObject.width;
                this._moveObject.scaleX = scale;
                this._moveObject.scaleY = scale;
                var newAngle = this.getTouchAngle();
                this._moveObject.rotation = newAngle - this._angle + this._currentRotation;
            }
        };
        /**
         * ��������
         * @param e
         */
        MoreTouch.mouseUp = function (e) {
            delete this._touchPoints[e.touchPointID];
            var index = this._touchPoints["names"].indexOf(e.touchPointID);
            if (index != -1) {
                this._touchPoints["names"].splice(index, 1);
            }
            this._touchCount--;
            this._moveObject.width *= this._moveObject.scaleX;
            this._moveObject.height *= this._moveObject.scaleY;
            this._moveObject.scaleX = 1;
            this._moveObject.scaleY = 1;
            if (this._isMiddle) {
                this._moveObject.anchorOffsetX = this._moveObject.width / 2;
                this._moveObject.anchorOffsetY = this._moveObject.height / 2;
            }
            this._moveObject.draw();
            this._currentRotation = this._moveObject.rotation;
        };
        /**
         * ��ȡ������ָ�ľ���
         */
        MoreTouch.getTouchDistance = function () {
            var names = this._touchPoints["names"];
            var distance = 0;
            return distance = egret.Point.distance(this._touchPoints[names[names.length - 1]], this._touchPoints[names[names.length - 2]]);
        };
        /**
         * ����������ָ���ĽǶ�
         */
        MoreTouch.getTouchAngle = function () {
            var angle = 0;
            var names = this._touchPoints["names"];
            var p1 = this._touchPoints[names[names.length - 1]]; //��һ����ָ����λ��
            var p2 = this._touchPoints[names[names.length - 2]]; //�ڶ�����ָ����λ��
            return angle = Math.atan2(p1.y - p2.y, p1.x - p2.x) * 180 / Math.PI;
        };
        MoreTouch._touchPoints = { names: [] };
        MoreTouch._distance = 0; //����
        MoreTouch._angle = 0; //�Ƕ�
        MoreTouch._touchCount = 0; //��������
        MoreTouch._currentRotation = 0; //��ǰ�Ƕ�
        MoreTouch._moveObject = null; //Ҫ�仯�Ķ���
        MoreTouch._isMiddle = true; //�Ƿ��������ĵ��ı�
        MoreTouch._minScale = 0; //��С�Ŵ�ϵ��
        MoreTouch._maxScale = 0; //�����Ŵ�ϵ��
        MoreTouch._oldX = 0; //��ʼx����
        MoreTouch._oldY = 0; //��ʼy����
        MoreTouch._firstTouchId = 0; //��һ�ε�����id
        return MoreTouch;
    }());
    __reflect(MoreTouch.prototype, "MoreTouch");
})(easy || (easy = {}));
