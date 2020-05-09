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
     * <p></p>
     * @date  :2020-05-06 14:26:11
     * @EasyGame.org Tools
     */
    var index4 = (function (_super) {
        __extends(index4, _super);
        function index4() {
            var _this = _super.call(this, true) || this;
            _this.resSpriteSheet = "index4"; //合并材质资源名称
            _this.resTexture = ["4", "page08-03", "Page2-18"]; //单材质资源名称
            _this.resGroup = ["courseware_index4"]; //配置文件的Group
            _this.resFiles = ["courseware/index4_loader_200506142611.json"]; //需要下载的资源group
            _this.spriteSheet = null; //ui对应的材质集,已经分割好,方便外部读取方便
            _this.group = null;
            _this.imgas = null;
            _this.groupAll = null;
            _this.imgBg = null;
            _this.img1 = null;
            _this.img2 = null;
            _this.img3 = null;
            _this.imgWord1 = null;
            _this.imgWord2 = null;
            _this.imgLeft1 = null;
            _this.imgLeft2 = null;
            _this.imgRig1 = null;
            _this.imgRig2 = null;
            _this.imgRig3 = null;
            _this.imgRig4 = null;
            _this.imgRig5 = null;
            _this.imgRig6 = null;
            _this.imgRig7 = null;
            _this.groupType1 = null;
            _this.img1_1 = null;
            _this.img1_2 = null;
            _this.img1_3 = null;
            _this.img1_4 = null;
            _this.img1_5 = null;
            _this.img1_6 = null;
            _this.img1_7 = null;
            _this.groupType2 = null;
            _this.img2_1 = null;
            _this.img2_2 = null;
            _this.img2_3 = null;
            _this.img2_4 = null;
            _this.img2_5 = null;
            _this.img2_6 = null;
            _this.img2_7 = null;
            _this.btnAgain = null;
            _this.btnPage = null;
            _this.groupMask = null;
            _this.mask1 = null;
            _this.groupLabel = null;
            _this.label1 = null;
            _this.label2 = null;
            _this.label3 = null;
            _this.temp = null;
            return _this;
        }
        /**
         * 初始化主场景的组件,加入场景时,主动调用一次
         * 子类覆写该方法,添加UI逻辑
         */
        index4.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.showBg = false;
            this.border = false;
            this.width = 640;
            this.height = 960;
            //group 
            this.group = new easy.Group(true);
            this.group.name = "group";
            this.addChild(this.group);
            this.group.bgColor = 0xffffff;
            this.group.border = false;
            this.group.width = 640;
            this.group.height = 960;
            //imgas 
            this.imgas = new easy.Image(true);
            this.imgas.name = "imgas";
            this.addChild(this.imgas);
            this.imgas.x = -230;
            this.imgas.y = -114;
            this.imgas.width = 1100;
            this.imgas.height = 1188;
            this.imgas.visible = false;
            //groupAll 
            this.groupAll = new easy.Group(true);
            this.groupAll.name = "groupAll";
            this.addChild(this.groupAll);
            this.groupAll.showBg = false;
            this.groupAll.border = false;
            this.groupAll.width = 640;
            this.groupAll.height = 960;
            this.groupAll.horizontalEnabled = true;
            this.groupAll.verticalEnabled = true;
            //imgBg 
            this.imgBg = new easy.Image(true);
            this.imgBg.name = "imgBg";
            this.groupAll.addChild(this.imgBg);
            this.imgBg.x = -228;
            this.imgBg.y = -114;
            this.imgBg.width = 1100;
            this.imgBg.height = 1188;
            //img1 
            this.img1 = new easy.Image(true);
            this.img1.name = "img1";
            this.groupAll.addChild(this.img1);
            this.img1.width = 155;
            this.img1.height = 21;
            //img2 
            this.img2 = new easy.Image(true);
            this.img2.name = "img2";
            this.groupAll.addChild(this.img2);
            this.img2.x = 153;
            this.img2.width = 487;
            this.img2.height = 21;
            //img3 
            this.img3 = new easy.Image(true);
            this.img3.name = "img3";
            this.groupAll.addChild(this.img3);
            this.img3.x = 9;
            this.img3.y = 60;
            this.img3.width = 33;
            this.img3.height = 20;
            //imgWord1 
            this.imgWord1 = new easy.Image(true);
            this.imgWord1.name = "imgWord1";
            this.groupAll.addChild(this.imgWord1);
            this.imgWord1.x = 139;
            this.imgWord1.y = 57;
            this.imgWord1.width = 362;
            this.imgWord1.height = 51;
            //imgWord2 
            this.imgWord2 = new easy.Image(true);
            this.imgWord2.name = "imgWord2";
            this.groupAll.addChild(this.imgWord2);
            this.imgWord2.x = 151;
            this.imgWord2.y = 119;
            this.imgWord2.width = 321;
            this.imgWord2.height = 27;
            //imgLeft1 
            this.imgLeft1 = new easy.Image(true);
            this.imgLeft1.name = "imgLeft1";
            this.groupAll.addChild(this.imgLeft1);
            this.imgLeft1.x = 28;
            this.imgLeft1.y = 295;
            this.imgLeft1.width = 197;
            this.imgLeft1.height = 46;
            //imgLeft2 
            this.imgLeft2 = new easy.Image(true);
            this.imgLeft2.name = "imgLeft2";
            this.groupAll.addChild(this.imgLeft2);
            this.imgLeft2.x = 28;
            this.imgLeft2.y = 602;
            this.imgLeft2.width = 197;
            this.imgLeft2.height = 46;
            //imgRig1 
            this.imgRig1 = new easy.Image(true);
            this.imgRig1.name = "imgRig1";
            this.groupAll.addChild(this.imgRig1);
            this.imgRig1.x = 280;
            this.imgRig1.y = 169;
            this.imgRig1.width = 318;
            this.imgRig1.height = 91;
            //imgRig2 
            this.imgRig2 = new easy.Image(true);
            this.imgRig2.name = "imgRig2";
            this.groupAll.addChild(this.imgRig2);
            this.imgRig2.x = 280;
            this.imgRig2.y = 271;
            this.imgRig2.width = 318;
            this.imgRig2.height = 91;
            //imgRig3 
            this.imgRig3 = new easy.Image(true);
            this.imgRig3.name = "imgRig3";
            this.groupAll.addChild(this.imgRig3);
            this.imgRig3.x = 280;
            this.imgRig3.y = 373;
            this.imgRig3.width = 318;
            this.imgRig3.height = 91;
            //imgRig4 
            this.imgRig4 = new easy.Image(true);
            this.imgRig4.name = "imgRig4";
            this.groupAll.addChild(this.imgRig4);
            this.imgRig4.x = 280;
            this.imgRig4.y = 475;
            this.imgRig4.width = 318;
            this.imgRig4.height = 91;
            //imgRig5 
            this.imgRig5 = new easy.Image(true);
            this.imgRig5.name = "imgRig5";
            this.groupAll.addChild(this.imgRig5);
            this.imgRig5.x = 280;
            this.imgRig5.y = 577;
            this.imgRig5.width = 318;
            this.imgRig5.height = 91;
            //imgRig6 
            this.imgRig6 = new easy.Image(true);
            this.imgRig6.name = "imgRig6";
            this.groupAll.addChild(this.imgRig6);
            this.imgRig6.x = 280;
            this.imgRig6.y = 679;
            this.imgRig6.width = 318;
            this.imgRig6.height = 91;
            //imgRig7 
            this.imgRig7 = new easy.Image(true);
            this.imgRig7.name = "imgRig7";
            this.groupAll.addChild(this.imgRig7);
            this.imgRig7.x = 279;
            this.imgRig7.y = 781;
            this.imgRig7.width = 319;
            this.imgRig7.height = 91;
            //groupType1 
            this.groupType1 = new easy.Group(true);
            this.groupType1.name = "groupType1";
            this.groupAll.addChild(this.groupType1);
            this.groupType1.showBg = false;
            this.groupType1.border = false;
            this.groupType1.x = 200;
            this.groupType1.y = 170;
            this.groupType1.height = 700;
            //img1_1 
            this.img1_1 = new easy.Image(true);
            this.img1_1.name = "img1_1";
            this.groupType1.addChild(this.img1_1);
            this.img1_1.x = 19;
            this.img1_1.y = 46;
            this.img1_1.width = 68;
            //img1_2 
            this.img1_2 = new easy.Image(true);
            this.img1_2.name = "img1_2";
            this.groupType1.addChild(this.img1_2);
            this.img1_2.x = 19;
            this.img1_2.y = 147;
            this.img1_2.width = 68;
            this.img1_2.height = 3;
            //img1_3 
            this.img1_3 = new easy.Image(true);
            this.img1_3.name = "img1_3";
            this.groupType1.addChild(this.img1_3);
            this.img1_3.x = 19;
            this.img1_3.y = 148;
            this.img1_3.width = 68;
            this.img1_3.height = 105;
            //img1_4 
            this.img1_4 = new easy.Image(true);
            this.img1_4.name = "img1_4";
            this.groupType1.addChild(this.img1_4);
            this.img1_4.x = 18;
            this.img1_4.y = 148;
            this.img1_4.width = 68;
            this.img1_4.height = 207;
            //img1_5 
            this.img1_5 = new easy.Image(true);
            this.img1_5.name = "img1_5";
            this.groupType1.addChild(this.img1_5);
            this.img1_5.x = 18;
            this.img1_5.y = 148;
            this.img1_5.width = 68;
            this.img1_5.height = 308;
            //img1_6 
            this.img1_6 = new easy.Image(true);
            this.img1_6.name = "img1_6";
            this.groupType1.addChild(this.img1_6);
            this.img1_6.x = 18;
            this.img1_6.y = 149;
            this.img1_6.width = 68;
            this.img1_6.height = 410;
            //img1_7 
            this.img1_7 = new easy.Image(true);
            this.img1_7.name = "img1_7";
            this.groupType1.addChild(this.img1_7);
            this.img1_7.x = 18;
            this.img1_7.y = 149;
            this.img1_7.width = 68;
            this.img1_7.height = 512;
            //groupType2 
            this.groupType2 = new easy.Group(true);
            this.groupType2.name = "groupType2";
            this.groupAll.addChild(this.groupType2);
            this.groupType2.showBg = false;
            this.groupType2.border = false;
            this.groupType2.x = 200;
            this.groupType2.y = 170;
            this.groupType2.height = 700;
            //img2_1 
            this.img2_1 = new easy.Image(true);
            this.img2_1.name = "img2_1";
            this.groupType2.addChild(this.img2_1);
            this.img2_1.x = 17;
            this.img2_1.y = 46;
            this.img2_1.width = 70;
            this.img2_1.height = 409;
            //img2_2 
            this.img2_2 = new easy.Image(true);
            this.img2_2.name = "img2_2";
            this.groupType2.addChild(this.img2_2);
            this.img2_2.x = 18;
            this.img2_2.y = 149;
            this.img2_2.width = 69;
            this.img2_2.height = 307;
            //img2_3 
            this.img2_3 = new easy.Image(true);
            this.img2_3.name = "img2_3";
            this.groupType2.addChild(this.img2_3);
            this.img2_3.x = 18;
            this.img2_3.y = 249;
            this.img2_3.width = 69;
            this.img2_3.height = 205;
            //img2_4 
            this.img2_4 = new easy.Image(true);
            this.img2_4.name = "img2_4";
            this.groupType2.addChild(this.img2_4);
            this.img2_4.x = 18;
            this.img2_4.y = 353;
            this.img2_4.width = 68;
            this.img2_4.height = 103;
            //img2_5 
            this.img2_5 = new easy.Image(true);
            this.img2_5.name = "img2_5";
            this.groupType2.addChild(this.img2_5);
            this.img2_5.x = 18;
            this.img2_5.y = 455;
            this.img2_5.width = 69;
            this.img2_5.height = 2;
            //img2_6 
            this.img2_6 = new easy.Image(true);
            this.img2_6.name = "img2_6";
            this.groupType2.addChild(this.img2_6);
            this.img2_6.x = 19;
            this.img2_6.y = 457;
            this.img2_6.width = 69;
            this.img2_6.height = 102;
            //img2_7 
            this.img2_7 = new easy.Image(true);
            this.img2_7.name = "img2_7";
            this.groupType2.addChild(this.img2_7);
            this.img2_7.x = 18;
            this.img2_7.y = 457;
            this.img2_7.width = 70;
            this.img2_7.height = 204;
            //btnAgain 
            this.btnAgain = new easy.Button(true);
            this.btnAgain.name = "btnAgain";
            this.groupAll.addChild(this.btnAgain);
            this.btnAgain.width = 133;
            this.btnAgain.height = 47;
            this.btnAgain.x = 467;
            this.btnAgain.y = 883;
            //btnPage 
            this.btnPage = new easy.Button(true);
            this.btnPage.name = "btnPage";
            this.groupAll.addChild(this.btnPage);
            this.btnPage.width = 133;
            this.btnPage.height = 47;
            this.btnPage.x = 27;
            this.btnPage.y = 883;
            //groupMask 
            this.groupMask = new easy.Group(true);
            this.groupMask.name = "groupMask";
            this.groupAll.addChild(this.groupMask);
            this.groupMask.showBg = false;
            this.groupMask.border = false;
            this.groupMask.width = 640;
            this.groupMask.height = 960;
            this.groupMask.horizontalEnabled = true;
            this.groupMask.verticalEnabled = true;
            this.groupMask.visible = false;
            //mask1 
            this.mask1 = new easy.Group(true);
            this.mask1.name = "mask1";
            this.groupMask.addChild(this.mask1);
            this.mask1.bgColor = 0x0;
            this.mask1.border = false;
            this.mask1.width = 640;
            this.mask1.height = 960;
            this.mask1.alpha = 0.5;
            //groupLabel 
            this.groupLabel = new easy.Group(true);
            this.groupLabel.name = "groupLabel";
            this.groupMask.addChild(this.groupLabel);
            this.groupLabel.bgColor = 0x999999;
            this.groupLabel.border = false;
            this.groupLabel.x = 120;
            this.groupLabel.y = 330;
            this.groupLabel.width = 400;
            this.groupLabel.height = 200;
            //label1 
            this.label1 = new easy.Label(true);
            this.label1.name = "label1";
            this.groupLabel.addChild(this.label1);
            this.label1.fontSize = 35;
            this.label1.hAlign = "center";
            this.label1.autoSize = false;
            this.label1.bold = true;
            this.label1.width = 400;
            this.label1.height = 33.8;
            this.label1.y = 41;
            this.label1.showBg = false;
            this.label1.border = false;
            //label2 
            this.label2 = new easy.Label(true);
            this.label2.name = "label2";
            this.groupLabel.addChild(this.label2);
            this.label2.fontSize = 30;
            this.label2.hAlign = "center";
            this.label2.autoSize = false;
            this.label2.width = 400;
            this.label2.height = 33.8;
            this.label2.y = 85;
            this.label2.showBg = false;
            this.label2.border = false;
            //label3 
            this.label3 = new easy.Label(true);
            this.label3.name = "label3";
            this.groupLabel.addChild(this.label3);
            this.label3.fontSize = 30;
            this.label3.hAlign = "center";
            this.label3.autoSize = false;
            this.label3.width = 400;
            this.label3.height = 33.8;
            this.label3.y = 129;
            this.label3.showBg = false;
            this.label3.border = false;
            //temp 
            this.temp = new modules.tempTemplate();
            this.temp.name = "temp";
            this.addChild(this.temp);
            if (this.temp.ui["resFiles"])
                this.resFiles = this.resFiles.concat(this.temp.ui.resFiles);
            if (this.temp.ui["resGroup"])
                this.resGroup = this.resGroup.concat(this.temp.ui.resGroup);
            this.temp.x = 540;
            this.temp.rightEnabled = true;
            this.temp.ui.rightEnabled = true;
        };
        /**
         * 获取初始化逻辑,加入场景时,主动调用一次
         * 子类覆写该方法,添加业务逻辑
         */
        index4.prototype.initData = function () {
            _super.prototype.initData.call(this);
        };
        /**
         * 进入的逻辑
         * 可以再次根据外部数据情况做一些逻辑处理
         */
        index4.prototype.enter = function () {
        };
        /**
         * 退出的逻辑
         * 做一些数据的销毁或者初始化,保证下次进入的时候,不会残留
         */
        index4.prototype.outer = function () {
        };
        /**
         * 刷新UI皮肤显示
         */
        index4.prototype.validateNow = function () {
            this.drawDelay = false;
            var jsonData = RES.getRes("index4_json");
            if (jsonData != null) {
                this.spriteSheet = new egret.SpriteSheet(RES.getRes("index4_img"));
                for (var key in jsonData.texture) {
                    this.spriteSheet.createTexture(key, jsonData.texture[key].x, jsonData.texture[key].y, jsonData.texture[key].w, jsonData.texture[key].h);
                }
            }
            this.group.drawDelay = false;
            this.imgas.texture = RES.getRes("4");
            this.imgas.drawDelay = false;
            this.groupAll.drawDelay = false;
            this.imgBg.texture = RES.getRes("page08-03");
            this.imgBg.drawDelay = false;
            if (this.spriteSheet)
                this.img1.texture = this.spriteSheet.getTexture("page3_01");
            this.img1.drawDelay = false;
            if (this.spriteSheet)
                this.img2.texture = this.spriteSheet.getTexture("page3_02");
            this.img2.drawDelay = false;
            if (this.spriteSheet)
                this.img3.texture = this.spriteSheet.getTexture("page3_03");
            this.img3.drawDelay = false;
            if (this.spriteSheet)
                this.imgWord1.texture = this.spriteSheet.getTexture("Page4-1");
            this.imgWord1.drawDelay = false;
            if (this.spriteSheet)
                this.imgWord2.texture = this.spriteSheet.getTexture("Page4-2");
            this.imgWord2.drawDelay = false;
            if (this.spriteSheet)
                this.imgLeft1.texture = this.spriteSheet.getTexture("Page4-3");
            this.imgLeft1.drawDelay = false;
            if (this.spriteSheet)
                this.imgLeft2.texture = this.spriteSheet.getTexture("Page4-4");
            this.imgLeft2.drawDelay = false;
            if (this.spriteSheet)
                this.imgRig1.texture = this.spriteSheet.getTexture("Page4-5");
            this.imgRig1.drawDelay = false;
            if (this.spriteSheet)
                this.imgRig2.texture = this.spriteSheet.getTexture("Page4-6");
            this.imgRig2.drawDelay = false;
            if (this.spriteSheet)
                this.imgRig3.texture = this.spriteSheet.getTexture("Page4-7");
            this.imgRig3.drawDelay = false;
            if (this.spriteSheet)
                this.imgRig4.texture = this.spriteSheet.getTexture("Page4-8");
            this.imgRig4.drawDelay = false;
            if (this.spriteSheet)
                this.imgRig5.texture = this.spriteSheet.getTexture("Page4-9");
            this.imgRig5.drawDelay = false;
            if (this.spriteSheet)
                this.imgRig6.texture = this.spriteSheet.getTexture("Page4-10");
            this.imgRig6.drawDelay = false;
            if (this.spriteSheet)
                this.imgRig7.texture = this.spriteSheet.getTexture("Page4-11");
            this.imgRig7.drawDelay = false;
            this.groupType1.drawDelay = false;
            if (this.spriteSheet)
                this.img1_1.texture = this.spriteSheet.getTexture("line1-1");
            this.img1_1.drawDelay = false;
            if (this.spriteSheet)
                this.img1_2.texture = this.spriteSheet.getTexture("line1-2");
            this.img1_2.drawDelay = false;
            if (this.spriteSheet)
                this.img1_3.texture = this.spriteSheet.getTexture("line1-3");
            this.img1_3.drawDelay = false;
            if (this.spriteSheet)
                this.img1_4.texture = this.spriteSheet.getTexture("line1-4");
            this.img1_4.drawDelay = false;
            if (this.spriteSheet)
                this.img1_5.texture = this.spriteSheet.getTexture("line1-5");
            this.img1_5.drawDelay = false;
            if (this.spriteSheet)
                this.img1_6.texture = this.spriteSheet.getTexture("line1-6");
            this.img1_6.drawDelay = false;
            if (this.spriteSheet)
                this.img1_7.texture = this.spriteSheet.getTexture("line1-7");
            this.img1_7.drawDelay = false;
            this.groupType2.drawDelay = false;
            if (this.spriteSheet)
                this.img2_1.texture = this.spriteSheet.getTexture("line2-1");
            this.img2_1.drawDelay = false;
            if (this.spriteSheet)
                this.img2_2.texture = this.spriteSheet.getTexture("line2-2");
            this.img2_2.drawDelay = false;
            if (this.spriteSheet)
                this.img2_3.texture = this.spriteSheet.getTexture("line2-3");
            this.img2_3.drawDelay = false;
            if (this.spriteSheet)
                this.img2_4.texture = this.spriteSheet.getTexture("line2-4");
            this.img2_4.drawDelay = false;
            if (this.spriteSheet)
                this.img2_5.texture = this.spriteSheet.getTexture("line2-5");
            this.img2_5.drawDelay = false;
            if (this.spriteSheet)
                this.img2_6.texture = this.spriteSheet.getTexture("line2-6");
            this.img2_6.drawDelay = false;
            if (this.spriteSheet)
                this.img2_7.texture = this.spriteSheet.getTexture("line2-7");
            this.img2_7.drawDelay = false;
            if (this.spriteSheet)
                this.btnAgain.texture = this.spriteSheet.getTexture("Page2-17");
            this.btnAgain.drawDelay = false;
            if (this.spriteSheet)
                this.btnPage.texture = this.spriteSheet.getTexture("Page2-16");
            this.btnPage.drawDelay = false;
            this.groupMask.drawDelay = false;
            this.mask1.drawDelay = false;
            this.groupLabel.drawDelay = false;
            this.label1.drawDelay = false;
            this.label2.drawDelay = false;
            this.label3.drawDelay = false;
            //模板temp
            this.temp.validateNow();
        };
        return index4;
    }(easy.Group));
    modules.index4 = index4;
    __reflect(index4.prototype, "modules.index4");
})(modules || (modules = {}));
