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
     * <p>index10的逻辑类</p>
     * @date  :2020-05-06 17:16:21
     * @EasyGame.org Tools
     */
    var index10View = (function (_super) {
        __extends(index10View, _super);
        function index10View() {
            var _this = _super.call(this) || this;
            _this.quesIndex = 0;
            _this.clickArr1 = [false, false, false, false, false, false, false, false]; //不能同时被多个问题选中
            _this.clickArr2 = [false, false, false, false, false, false, false, false]; //不能同时被多个问题选中
            _this.clickArr3 = [false, false, false, false, false, false, false, false];
            _this.clickArr4 = [false, false, false, false, false, false, false, false];
            _this.clickArr5 = [false, false, false, false, false, false, false, false];
            _this.clickArr6 = [false, false, false, false, false, false, false, false];
            _this.clickArr7 = [false, false, false, false, false, false, false, false];
            _this.clickArr8 = [false, false, false, false, false, false, false, false];
            _this.activeArr = [];
            _this.ansArr = [5, 4, 2, 8, 7, 3, 6, 1];
            _this.yesorNo = 0;
            return _this;
        }
        /**
         * 初始化主场景的组件,加入场景时,主动调用一次
         * 子类覆写该方法,添加UI逻辑
         */
        index10View.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.ui = new modules.index10();
        };
        Object.defineProperty(index10View.prototype, "ui", {
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
        index10View.prototype.initData = function () {
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
            //this.ui.img1.texture;
            //this.ui.img2.texture;
            //this.ui.img3.texture;
            //this.ui.imgWord1.texture;
            //this.ui.imgLeft1.texture;
            //this.ui.imgLeft2.texture;
            //this.ui.imgLeft3.texture;
            //this.ui.imgLeft4.texture;
            //this.ui.imgLeft5.texture;
            //this.ui.imgLeft6.texture;
            //this.ui.imgLeft7.texture;
            //this.ui.imgLeft8.texture;
            //this.ui.imgRig1.texture;
            //this.ui.imgRig2.texture;
            //this.ui.imgRig3.texture;
            //this.ui.imgRig4.texture;
            //this.ui.imgRig5.texture;
            //this.ui.imgRig6.texture;
            //this.ui.imgRig7.texture;
            //this.ui.imgRig8.texture;
            //this.ui.img1_1.texture;
            //this.ui.img1_2.texture;
            //this.ui.img1_3.texture;
            //this.ui.img1_4.texture;
            //this.ui.img1_5.texture;
            //this.ui.img1_6.texture;
            //this.ui.img1_7.texture;
            //this.ui.img1_8.texture;
            //this.ui.img2_1.texture;
            //this.ui.img2_2.texture;
            //this.ui.img2_3.texture;
            //this.ui.img2_4.texture;
            //this.ui.img2_5.texture;
            //this.ui.img2_6.texture;
            //this.ui.img2_7.texture;
            //this.ui.img2_8.texture;
            //this.ui.img3_1.texture;
            //this.ui.img3_2.texture;
            //this.ui.img3_3.texture;
            //this.ui.img3_4.texture;
            //this.ui.img3_5.texture;
            //this.ui.img3_6.texture;
            //this.ui.img3_7.texture;
            //this.ui.img3_8.texture;
            //this.ui.img4_1.texture;
            //this.ui.img4_2.texture;
            //this.ui.img4_3.texture;
            //this.ui.img4_4.texture;
            //this.ui.img4_5.texture;
            //this.ui.img4_6.texture;
            //this.ui.img4_7.texture;
            //this.ui.img4_8.texture;
            //this.ui.img5_1.texture;
            //this.ui.img5_2.texture;
            //this.ui.img5_3.texture;
            //this.ui.img5_4.texture;
            //this.ui.img5_5.texture;
            //this.ui.img5_6.texture;
            //this.ui.img5_7.texture;
            //this.ui.img5_8.texture;
            //this.ui.img6_1.texture;
            //this.ui.img6_2.texture;
            //this.ui.img6_3.texture;
            //this.ui.img6_4.texture;
            //this.ui.img6_5.texture;
            //this.ui.img6_6.texture;
            //this.ui.img6_7.texture;
            //this.ui.img6_8.texture;
            //this.ui.img7_1.texture;
            //this.ui.img7_2.texture;
            //this.ui.img7_3.texture;
            //this.ui.img7_4.texture;
            //this.ui.img7_5.texture;
            //this.ui.img7_6.texture;
            //this.ui.img7_7.texture;
            //this.ui.img7_8.texture;
            //this.ui.img8_1.texture;
            //this.ui.img8_2.texture;
            //this.ui.img8_3.texture;
            //this.ui.img8_4.texture;
            //this.ui.img8_5.texture;
            //this.ui.img8_6.texture;
            //this.ui.img8_7.texture;
            //this.ui.img8_8.texture;
            //this.ui.btnAgain.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchBtnAgain, this);
            //this.ui.btnPage.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchBtnPage, this);
            //TODO View逻辑可在此继续添加
            this.ui.group.width = easy.GlobalSetting.DISPLAY_WIDTH;
            this.ui.group.height = easy.GlobalSetting.DISPLAY_HEIGHT;
            this.ui.mask1.x = -(easy.GlobalSetting.DISPLAY_WIDTH - 640) / 2;
            this.ui.mask1.y = -(easy.GlobalSetting.DISPLAY_HEIGHT - 960) / 2;
            this.ui.mask1.width = easy.GlobalSetting.DISPLAY_WIDTH;
            this.ui.mask1.height = easy.GlobalSetting.DISPLAY_HEIGHT;
            easy.TweenEffect.setAnchorXY(this.ui.btnAgain);
            easy.TweenEffect.setAnchorXY(this.ui.btnPage);
            this.ui.btnAgain.addEventListener(egret.TouchEvent.TOUCH_TAP, this.skipPage, this);
            this.ui.btnPage.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchBtnPage, this);
            for (var i = 1; i < 9; i++) {
                this.ui["imgLeft" + i].addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.clickType, this);
                this.ui["imgRig" + i].addEventListener(egret.TouchEvent.TOUCH_END, this.clickRight, this);
            }
            this.ui.groupMask.addEventListener(egret.TouchEvent.TOUCH_TAP, this.deleteMakk, this);
        };
        //click button btnPage response funciton
        index10View.prototype.onTouchBtnPage = function (event) {
            //TODO 此处填写 btnPage按钮点击逻辑
            easy.ViewManager.show(modules.index9View, null, false);
        };
        //private activeArr2 = [];
        index10View.prototype.clickType = function (e) {
            this.quesIndex = e.currentTarget.data;
            console.log(this.quesIndex);
        };
        index10View.prototype.clickRight = function (e) {
            this.answerIndex = e.currentTarget.data;
            for (var i = 1; i < 9; i++) {
                this.ui["groupType" + i].visible = true;
            }
            if (this.quesIndex != 0) {
                if (this["clickArr" + this.quesIndex][this.answerIndex - 1]) {
                    this["clickArr" + this.quesIndex][this.answerIndex - 1] = false;
                }
                else {
                    for (var i = 1; i < 9; i++) {
                        this["clickArr" + i][this.answerIndex - 1] = false;
                        this["clickArr" + this.quesIndex][i - 1] = false;
                    }
                    this["clickArr" + this.quesIndex][this.answerIndex - 1] = true;
                }
                console.log(this["clickArr" + this.quesIndex]);
            }
            for (var i = 1; i < 9; i++) {
                for (var j = 1; j < 9; j++) {
                    if (this["clickArr" + i][j - 1]) {
                        this.ui["img" + i + "_" + j].alpha = 1;
                    }
                    else {
                        this.ui["img" + i + "_" + j].alpha = 0;
                    }
                }
            }
            this.quesIndex = 0;
        };
        index10View.prototype.skipPage = function () {
            this.yesorNo++;
            console.log(this.yesorNo);
            this.activeArr = [];
            //this.activeArr2 = [];
            for (var i = 0; i < 8; i++) {
                for (var j = 0; j < 8; j++) {
                    if (this["clickArr" + (i + 1)][j] == true) {
                        this.activeArr.push(j + 1);
                    }
                }
            }
            if (this.activeArr.toString() != this.ansArr.toString()) {
                console.log("错误");
                if (this.yesorNo == 1 || this.yesorNo == 2) {
                    this.ui.label1.text = "回答错误";
                    this.ui.label2.text = "请再试一次";
                    this.ui.label3.text = "";
                    this.ui.groupMask.visible = true;
                    this.clickArr1 = [false, false, false, false, false, false, false, false];
                    this.clickArr2 = [false, false, false, false, false, false, false, false];
                    this.clickArr3 = [false, false, false, false, false, false, false, false];
                    this.clickArr4 = [false, false, false, false, false, false, false, false];
                    this.clickArr5 = [false, false, false, false, false, false, false, false];
                    this.clickArr6 = [false, false, false, false, false, false, false, false];
                    this.clickArr7 = [false, false, false, false, false, false, false, false];
                    this.clickArr8 = [false, false, false, false, false, false, false, false];
                    for (var i = 1; i < 9; i++) {
                        for (var j = 1; j < 9; j++) {
                            this.ui["img" + i + "_" + j].alpha = 0;
                        }
                    }
                }
                else if (this.yesorNo == 3) {
                    this.ui.groupMask.visible = true;
                    this.ui.label1.text = "你已答错3次";
                    this.ui.label2.text = "正确答案是";
                    this.ui.label3.text = "5,4,2,8,7,3,6,1";
                }
                else {
                    easy.ViewManager.show(modules.index11View, null, false);
                }
            }
            else {
                console.log("正确");
                easy.ViewManager.show(modules.index11View, null, false);
            }
        };
        index10View.prototype.deleteMakk = function () {
            this.ui.groupMask.visible = false;
            if (this.yesorNo == 3) {
                console.log("显示正确图");
                for (var i = 1; i < 9; i++) {
                    this.ui["groupType" + i].visible = true;
                    for (var j = 1; j < 9; j++) {
                        this.ui["img" + i + "_" + j].alpha = 0;
                    }
                }
                this.ui.img1_5.alpha = 1;
                this.ui.img2_4.alpha = 1;
                this.ui.img3_2.alpha = 1;
                this.ui.img4_8.alpha = 1;
                this.ui.img5_7.alpha = 1;
                this.ui.img6_3.alpha = 1;
                this.ui.img7_6.alpha = 1;
                this.ui.img8_1.alpha = 1;
                this.ui.btnAgain.texture = easy.ResManager.getTexture("Page2-18");
                for (var i = 1; i < 9; i++) {
                    this.ui["imgLeft" + i].touchEnabled = false;
                    this.ui["imgRig" + i].touchEnabled = false;
                }
            }
        };
        /**
         * 进入的逻辑
         * 可以再次根据外部数据情况做一些逻辑处理
         */
        index10View.prototype.enter = function () {
            _super.prototype.enter.call(this);
            //TODO 在这里写,进入时,初始数据的操作
            this.yesorNo = 0;
            this.clickArr1 = [false, false, false, false, false, false, false, false];
            this.clickArr2 = [false, false, false, false, false, false, false, false];
            this.clickArr3 = [false, false, false, false, false, false, false, false];
            this.clickArr4 = [false, false, false, false, false, false, false, false];
            this.clickArr5 = [false, false, false, false, false, false, false, false];
            this.clickArr6 = [false, false, false, false, false, false, false, false];
            this.clickArr7 = [false, false, false, false, false, false, false, false];
            this.clickArr8 = [false, false, false, false, false, false, false, false];
            this.activeArr = [];
            this.ui.imgBg.alpha = 0;
            this.ui.img1.x = -500;
            this.ui.img2.x = 1000;
            this.ui.imgWord1.alpha = 0;
            for (var i = 1; i < 9; i++) {
                this.ui["imgLeft" + i].touchEnabled = true;
                this.ui["imgLeft" + i].data = i;
                this.ui["imgLeft" + i].alpha = 0;
                this.ui["imgLeft" + i].x = 0;
            }
            for (var i = 1; i < 9; i++) {
                this.ui["imgRig" + i].touchEnabled = true;
                this.ui["imgRig" + i].data = i;
                this.ui["imgRig" + i].alpha = 0;
                this.ui["imgRig" + i].x = 420;
                for (var j = 1; j < 9; j++) {
                    this.ui["img" + i + "_" + j].alpha = 0;
                }
            }
            this.ui.groupMask.touchEnabled = true;
            this.ui.groupMask.visible = false;
            this.ui.btnAgain.alpha = 0;
            this.ui.btnPage.alpha = 0;
            egret.Tween.get(this.ui.img1).to({ x: 0 }, 500);
            egret.Tween.get(this.ui.img2).to({ x: 153 }, 500);
            egret.Tween.get(this.ui.imgWord1).wait(500).to({ alpha: 1 }, 500);
            egret.Tween.get(this.ui.imgBg).wait(1000).to({ alpha: 1 }, 500);
            for (var i = 1; i < 9; i++) {
                egret.Tween.get(this.ui["imgLeft" + i]).wait(1500 + (i - 1) * 200).to({ alpha: 1, x: 39 }, 500);
                egret.Tween.get(this.ui["imgRig" + i]).wait(1500 + (i - 1) * 200).to({ alpha: 1, x: 382 }, 500);
            }
            egret.Tween.get(this.ui.btnPage).wait(3500).to({ alpha: 1 }, 500);
            egret.Tween.get(this.ui.btnAgain).wait(4000).to({ alpha: 1 }, 500);
        };
        /**
         * enter的过渡效果
         */
        index10View.prototype.enterTransition = function () {
            _super.prototype.enterTransition.call(this);
            //TODO 可以覆盖这里,写自己想要的enter效果
        };
        /**
         * 退出的逻辑
         * 做一些数据的销毁或者初始化,保证下次进入的时候,不会残留
         */
        index10View.prototype.outer = function () {
            _super.prototype.outer.call(this);
            //TODO 在这里写,退出时,清理数据的操作
        };
        /**
         * outer的过渡效果
         */
        index10View.prototype.outerTransition = function () {
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
        index10View.prototype.validateNow = function () {
            _super.prototype.validateNow.call(this);
            //TODO 初始特殊的素材资源,需要调用可以写在这里
            //if (this.ui && this.ui.spriteSheet) {
            //
            //}
        };
        return index10View;
    }(easy.View));
    modules.index10View = index10View;
    __reflect(index10View.prototype, "modules.index10View");
})(modules || (modules = {}));
