var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
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
var modules;
(function (modules) {
    /**
     * <p>index8的逻辑类</p>
     * @date  :2020-05-08 11:44:27
     * @EasyGame.org Tools
     */
    var index8View = (function (_super) {
        __extends(index8View, _super);
        function index8View() {
            var _this = _super.call(this) || this;
            _this.answerArr = [2, 1, 2, 2, 2];
            _this.activeArr = [];
            _this.yesorNo = 0;
            _this.yesClickAll = [false, false, false, false, false];
            _this.startActiveArr = [[], [], [], [], []];
            return _this;
        }
        /**
         * 初始化主场景的组件,加入场景时,主动调用一次
         * 子类覆写该方法,添加UI逻辑
         */
        index8View.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.ui = new modules.index8();
        };
        Object.defineProperty(index8View.prototype, "ui", {
            /**
             * 获取ui对象
             * @returns
             */
            get: function () {
                return this._ui;
            },
            /**
             * 设置ui对象
             * @param
             */
            set: function (myui) {
                this.setUI(myui);
            },
            enumerable: true,
            configurable: true
        });
        /**
         * 初始化一些必要的逻辑数据
         * 这个方法是在第一次加入stage的时候,做调用
         */
        index8View.prototype.initData = function () {
            _super.prototype.initData.call(this);
            //TODO 添加协议弱响应的方法,一般是用来驱动刷新当前的ui
            //参数说明:第一个参数是协议的id号
            //        第二个参数是本类public的方法,方法唯一的参数就是对应的协议实例,如下方法全名为onPktLoginResult(pkt:MyProtocalCmd)
            //this.addHandlePacket(ID_PACKET, "onPktLoginResult")
            //TODO 添加事件的弱响应的方法,一般是用来驱动刷新当前的ui
            //注意:必须调用MessageControler.addEvent()注册事件名称,否者不会转发到这里
            //参数说明:第一个参数是事件名称
            //        第二个参数是本类public的方法,方法唯一的参数就是MyEvent实例,如下方法全名为onMyEventLoginResult(event:easy.MyEvent)
            //this.addHandleEvent("LOGIN_RESULT", "onMyEventLoginResult");
            //TODO UI层声明的组件,可能会用到,请自行启用
            //this.ui.imgas.texture;
            //this.ui.imgBg.texture;
            //this.ui.imgGray.texture;
            //this.ui.img1.texture;
            //this.ui.img2.texture;
            //this.ui.img3.texture;
            //this.ui.imgWord1.texture;
            //this.ui.imgWord2.texture;
            //this.ui.imgWord3.texture;
            //this.ui.imgLeft1.texture;
            //this.ui.imgLeft2.texture;
            //this.ui.imgLeft3.texture;
            //this.ui.imgLeft4.texture;
            //this.ui.imgLeft5.texture;
            //this.ui.imgA1.texture;
            //this.ui.imgA2.texture;
            //this.ui.imgB1.texture;
            //this.ui.imgB2.texture;
            //this.ui.imgC1.texture;
            //this.ui.imgC2.texture;
            //this.ui.imgD1.texture;
            //this.ui.imgD2.texture;
            //this.ui.imgE1.texture;
            //this.ui.imgE2.texture;
            //this.ui.imgArrows.texture;
            //this.ui.btnLook.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchBtnLook, this);
            //this.ui.btnAgain.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchBtnAgain, this);
            //this.ui.btnPage.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchBtnPage, this);
            //TODO View逻辑可在此继续添加
            this.ui.group.width = easy.GlobalSetting.DISPLAY_WIDTH;
            this.ui.group.height = easy.GlobalSetting.DISPLAY_HEIGHT;
            this.ui.mask1.x = -(easy.GlobalSetting.DISPLAY_WIDTH - 640) / 2;
            this.ui.mask1.y = -(easy.GlobalSetting.DISPLAY_HEIGHT - 960) / 2;
            this.ui.mask1.width = easy.GlobalSetting.DISPLAY_WIDTH;
            this.ui.mask1.height = easy.GlobalSetting.DISPLAY_HEIGHT;
            this.ui.groupMask.visible = false;
            this.ui.groupMask.touchEnabled = true;
            this.ui.groupMask.addEventListener(egret.TouchEvent.TOUCH_TAP, this.deleteMakk, this);
            easy.TweenEffect.setAnchorXY(this.ui.btnAgain);
            easy.TweenEffect.setAnchorXY(this.ui.btnPage);
            easy.TweenEffect.setAnchorXY(this.ui.btnLook);
            easy.TweenEffect.setAnchorXY(this.ui.btnDele);
            this.ui.btnAgain.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchBtnAgain, this);
            this.ui.btnPage.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchBtnPage, this);
            this.ui.btnLook.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchBtnLook, this);
            this.ui.btnDele.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchBtnDele, this);
            for (var i = 1; i < 3; i++) {
                this.ui["imgA" + i].touchEnabled = true;
                this.ui["imgA" + i].data = i;
                this.ui["imgB" + i].touchEnabled = true;
                this.ui["imgB" + i].data = i;
                this.ui["imgC" + i].touchEnabled = true;
                this.ui["imgC" + i].data = i;
                this.ui["imgD" + i].touchEnabled = true;
                this.ui["imgD" + i].data = i;
                this.ui["imgE" + i].touchEnabled = true;
                this.ui["imgE" + i].data = i;
                this.ui["imgA" + i].addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchA, this);
                this.ui["imgB" + i].addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchB, this);
                this.ui["imgC" + i].addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchC, this);
                this.ui["imgD" + i].addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchD, this);
                this.ui["imgE" + i].addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchE, this);
            }
        };
        //click button btnAgain response funciton
        index8View.prototype.deleteMakk = function () {
            this.ui.groupMask.visible = false;
            console.log(this.yesorNo);
            if (this.yesorNo == 3) {
                console.log("跳转页面");
                easy.ViewManager.show(modules.index9View, null, false);
            }
        };
        //click button btnAgain response funciton
        index8View.prototype.onTouchBtnAgain = function (event) {
            //TODO 此处填写 btnAgain按钮点击逻辑
            this.ui.groupClick.visible = false;
            this.activeArr = [];
            for (var i = 0; i < this.startActiveArr.length; i++) {
                this.activeArr.push(this.startActiveArr[i][0]);
            }
            console.log(this.activeArr);
            this.yesorNo++;
            var activeStr = this.activeArr.toString();
            var answerStr = this.answerArr.toString();
            if (activeStr != answerStr) {
                console.log("错误");
                if (this.yesorNo != 3) {
                    this.ui.label1.text = "回答错误";
                    this.ui.label2.text = "请再试一次";
                    this.ui.label3.text = "";
                }
                else {
                    this.ui.label1.text = "您已答错3次";
                    this.ui.label2.text = "正确答案是";
                    this.ui.label3.text = "否,是,否,否,否";
                }
                this.ui.groupMask.visible = true;
            }
            else {
                console.log("正确");
                easy.ViewManager.show(modules.index9View, null, false);
            }
        };
        //click button btnPage response funciton
        index8View.prototype.onTouchBtnPage = function (event) {
            //TODO 此处填写 btnPage按钮点击逻辑
            easy.ViewManager.show(modules.index7View, null, false);
        };
        index8View.prototype.onTouchBtnLook = function (event) {
            //TODO 此处填写 btnPage按钮点击逻辑
            this.ui.groupClick.visible = true;
            this.ui.btnAgain.visible = true;
        };
        index8View.prototype.onTouchBtnDele = function (event) {
            //TODO 此处填写 btnPage按钮点击逻辑
            this.ui.groupClick.visible = false;
        };
        index8View.prototype.showAgain = function () {
            if (this.yesClickAll.indexOf(false) != -1) {
                this.ui.groupLook.visible = false;
            }
            else {
                this.ui.groupLook.visible = true;
            }
        };
        index8View.prototype.onTouchA = function (e) {
            //TODO 此处填写 btnPage按钮点击逻辑
            var index = e.currentTarget.data;
            for (var i = 1; i < 3; i++) {
                this.ui["imgA" + i].texture = this.ui.spriteSheet.getTexture("Page08-9");
            }
            this.ui["imgA" + index].texture = this.ui.spriteSheet.getTexture("Page08-10");
            this.yesClickAll[0] = true;
            this.showAgain();
            this.startActiveArr[0] = [];
            this.startActiveArr[0].push(index);
        };
        index8View.prototype.onTouchB = function (e) {
            //TODO 此处填写 btnPage按钮点击逻辑
            var index = e.currentTarget.data;
            for (var i = 1; i < 3; i++) {
                this.ui["imgB" + i].texture = this.ui.spriteSheet.getTexture("Page08-9");
            }
            this.ui["imgB" + index].texture = this.ui.spriteSheet.getTexture("Page08-10");
            this.yesClickAll[1] = true;
            this.showAgain();
            this.startActiveArr[1] = [];
            this.startActiveArr[1].push(index);
        };
        index8View.prototype.onTouchC = function (e) {
            //TODO 此处填写 btnPage按钮点击逻辑
            var index = e.currentTarget.data;
            for (var i = 1; i < 3; i++) {
                this.ui["imgC" + i].texture = this.ui.spriteSheet.getTexture("Page08-9");
            }
            this.ui["imgC" + index].texture = this.ui.spriteSheet.getTexture("Page08-10");
            this.yesClickAll[2] = true;
            this.showAgain();
            this.startActiveArr[2] = [];
            this.startActiveArr[2].push(index);
        };
        index8View.prototype.onTouchD = function (e) {
            //TODO 此处填写 btnPage按钮点击逻辑
            var index = e.currentTarget.data;
            for (var i = 1; i < 3; i++) {
                this.ui["imgD" + i].texture = this.ui.spriteSheet.getTexture("Page08-9");
            }
            this.ui["imgD" + index].texture = this.ui.spriteSheet.getTexture("Page08-10");
            this.yesClickAll[3] = true;
            this.showAgain();
            this.startActiveArr[3] = [];
            this.startActiveArr[3].push(index);
        };
        index8View.prototype.onTouchE = function (e) {
            //TODO 此处填写 btnPage按钮点击逻辑
            var index = e.currentTarget.data;
            for (var i = 1; i < 3; i++) {
                this.ui["imgE" + i].texture = this.ui.spriteSheet.getTexture("Page08-9");
            }
            this.ui["imgE" + index].texture = this.ui.spriteSheet.getTexture("Page08-10");
            this.yesClickAll[4] = true;
            this.showAgain();
            this.startActiveArr[4] = [];
            this.startActiveArr[4].push(index);
        };
        /**
         * 进入的逻辑
         * 可以再次根据外部数据情况做一些逻辑处理
         */
        index8View.prototype.enter = function () {
            _super.prototype.enter.call(this);
            //TODO 在这里写,进入时,初始数据的操作
            this.activeArr = [];
            this.yesorNo = 0;
            this.startActiveArr = [[], [], [], [], []];
            this.yesClickAll = [false, false, false, false, false];
            this.ui.imgBg.alpha = 0;
            this.ui.img1.x = -500;
            this.ui.img2.x = 1000;
            this.ui.img3.alpha = 0;
            this.ui.imgWord1.alpha = 0;
            this.ui.imgWord2.alpha = 0;
            this.ui.imgWord3.alpha = 0;
            this.ui.imgGray.alpha = 0;
            for (var i = 1; i < 6; i++) {
                this.ui["imgLeft" + i].alpha = 0;
                this.ui["imgLeft" + i].x = 100;
            }
            for (var i = 1; i < 3; i++) {
                this.ui["imgA" + i].alpha = 0;
                this.ui["imgB" + i].alpha = 0;
                this.ui["imgC" + i].alpha = 0;
                this.ui["imgD" + i].alpha = 0;
                this.ui["imgE" + i].alpha = 0;
                this.ui["imgA" + i].texture = this.ui.spriteSheet.getTexture("Page08-9");
                this.ui["imgB" + i].texture = this.ui.spriteSheet.getTexture("Page08-9");
                this.ui["imgC" + i].texture = this.ui.spriteSheet.getTexture("Page08-9");
                this.ui["imgD" + i].texture = this.ui.spriteSheet.getTexture("Page08-9");
                this.ui["imgE" + i].texture = this.ui.spriteSheet.getTexture("Page08-9");
            }
            this.ui.groupClick.visible = false;
            this.ui.btnAgain.visible = false;
            this.ui.groupLook.visible = false;
            this.ui.groupLook.alpha = 0;
            this.ui.btnAgain.alpha = 0;
            this.ui.btnPage.alpha = 0;
            egret.Tween.get(this.ui.img1).to({ x: 0 }, 500);
            egret.Tween.get(this.ui.img2).to({ x: 153 }, 500);
            egret.Tween.get(this.ui.img3).wait(500).to({ alpha: 1 }, 500);
            egret.Tween.get(this.ui.imgWord1).wait(1000).to({ alpha: 1 }, 500);
            egret.Tween.get(this.ui.imgWord2).wait(1500).to({ alpha: 1 }, 500);
            egret.Tween.get(this.ui.imgWord3).wait(2000).to({ alpha: 1 }, 500);
            egret.Tween.get(this.ui.imgBg).wait(2500).to({ alpha: 1 }, 500);
            for (var i = 1; i < 6; i++) {
                egret.Tween.get(this.ui["imgLeft" + i]).wait(2500 + (i - 1) * 300).to({ alpha: 1, x: 26 }, 500);
                if (i == 1) {
                    for (var j = 1; j < 3; j++) {
                        egret.Tween.get(this.ui["imgA" + j]).wait(2800 + (j - 1) * 300).to({ alpha: 1 }, 500);
                    }
                }
                else if (i == 2) {
                    for (var j = 1; j < 3; j++) {
                        egret.Tween.get(this.ui["imgB" + j]).wait(3100 + (j - 1) * 300).to({ alpha: 1 }, 500);
                    }
                }
                else if (i == 3) {
                    for (var j = 1; j < 3; j++) {
                        egret.Tween.get(this.ui["imgC" + j]).wait(3400 + (j - 1) * 300).to({ alpha: 1 }, 500);
                    }
                }
                else if (i == 4) {
                    for (var j = 1; j < 3; j++) {
                        egret.Tween.get(this.ui["imgD" + j]).wait(3700 + (j - 1) * 300).to({ alpha: 1 }, 500);
                    }
                }
                else if (i == 5) {
                    for (var j = 1; j < 3; j++) {
                        egret.Tween.get(this.ui["imgE" + j]).wait(4000 + (j - 1) * 300).to({ alpha: 1 }, 500);
                    }
                }
            }
            egret.Tween.get(this.ui.groupLook).wait(5000).to({ alpha: 1 }, 500);
            egret.Tween.get(this.ui.btnPage).wait(5500).to({ alpha: 1 }, 500);
            egret.Tween.get(this.ui.btnAgain).wait(6000).to({ alpha: 1 }, 500);
        };
        /**
         * enter的过渡效果
         */
        index8View.prototype.enterTransition = function () {
            _super.prototype.enterTransition.call(this);
            //TODO 可以覆盖这里,写自己想要的enter效果
        };
        /**
         * 退出的逻辑
         * 做一些数据的销毁或者初始化,保证下次进入的时候,不会残留
         */
        index8View.prototype.outer = function () {
            _super.prototype.outer.call(this);
            //TODO 在这里写,退出时,清理数据的操作
        };
        /**
         * outer的过渡效果
         */
        index8View.prototype.outerTransition = function () {
            _super.prototype.outerTransition.call(this);
            //TODO 可以覆盖这里,写自己想要的out效果
        };
        /**
         * 通过ResManager.getTexture(url)触发下载的url资源,会通知到当前显示的view中的onMyEventResDownloaded方法
         * 参数myevent携带两个数据
         *    url:完成加载的url
         *    data:完成加载的数据内容
         * 可以通过ResManager.getTexture(url),再次取到data数据
         * @param event
         */
        //public onMyEventResDownloaded(myevent:easy.MyEvent):void {
        //TODO 当前view动态加载的资源,请在这里添加刷新逻辑
        //}
        /**
         * View自身的材质,首次下载完成会调用加载一次,刷新UI皮肤显示
         * 使用了框架的UI机制,单ui的资源下载完成会调用改方法刷新
         * 若view中有逻辑使用到ui的素材,应该在这里做素材的赋值
         */
        index8View.prototype.validateNow = function () {
            _super.prototype.validateNow.call(this);
            //TODO 初始特殊的素材资源,需要调用可以写在这里
            //if (this.ui && this.ui.spriteSheet) {
            //
            //}
        };
        return index8View;
    }(easy.View));
    modules.index8View = index8View;
    __reflect(index8View.prototype, "modules.index8View");
})(modules || (modules = {}));
