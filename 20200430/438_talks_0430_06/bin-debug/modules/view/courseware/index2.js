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
     * @date  :2020-05-09 13:59:35
     * @EasyGame.org Tools
     */
    var index2 = (function (_super) {
        __extends(index2, _super);
        function index2() {
            var _this = _super.call(this, true) || this;
            _this.resSpriteSheet = "index2"; //合并材质资源名称
            _this.resTexture = ["2", "page08-03", "Page2-18"]; //单材质资源名称
            _this.resGroup = ["courseware_index2"]; //配置文件的Group
            _this.resFiles = ["courseware/index2_loader_200509135935.json"]; //需要下载的资源group
            _this.spriteSheet = null; //ui对应的材质集,已经分割好,方便外部读取方便
            _this.group = null;
            _this.imgas = null;
            _this.groupAll = null;
            _this.imgBg = null;
            _this.imgGray = null;
            _this.img1 = null;
            _this.img2 = null;
            _this.img3 = null;
            _this.imgWord1 = null;
            _this.imgWord2 = null;
            _this.imgShow1 = null;
            _this.imgShow2 = null;
            _this.imgShow3 = null;
            _this.imgShow4 = null;
            _this.imgShow5 = null;
            _this.imgShow6 = null;
            _this.imgShow7 = null;
            _this.imgShow8 = null;
            _this.imgPorinter = null;
            _this.groupClick = null;
            _this.imgClick = null;
            _this.btnDele = null;
            _this.btnAgain = null;
            _this.btnPage = null;
            _this.temp = null;
            return _this;
        }
        /**
         * 初始化主场景的组件,加入场景时,主动调用一次
         * 子类覆写该方法,添加UI逻辑
         */
        index2.prototype.createChildren = function () {
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
            this.imgBg.x = -230;
            this.imgBg.y = -114;
            this.imgBg.width = 1100;
            this.imgBg.height = 1188;
            //imgGray 
            this.imgGray = new easy.Image(true);
            this.imgGray.name = "imgGray";
            this.groupAll.addChild(this.imgGray);
            this.imgGray.x = 11;
            this.imgGray.y = 81;
            this.imgGray.width = 623;
            this.imgGray.height = 800;
            //img1 
            this.img1 = new easy.Image(true);
            this.img1.name = "img1";
            this.groupAll.addChild(this.img1);
            this.img1.x = -1;
            this.img1.width = 155;
            this.img1.height = 21;
            //img2 
            this.img2 = new easy.Image(true);
            this.img2.name = "img2";
            this.groupAll.addChild(this.img2);
            this.img2.x = 152;
            this.img2.width = 487;
            this.img2.height = 21;
            //img3 
            this.img3 = new easy.Image(true);
            this.img3.name = "img3";
            this.groupAll.addChild(this.img3);
            this.img3.x = 7;
            this.img3.y = 56;
            this.img3.width = 33;
            this.img3.height = 20;
            //imgWord1 
            this.imgWord1 = new easy.Image(true);
            this.imgWord1.name = "imgWord1";
            this.groupAll.addChild(this.imgWord1);
            this.imgWord1.x = 124;
            this.imgWord1.y = 36;
            this.imgWord1.width = 408;
            this.imgWord1.height = 50;
            //imgWord2 
            this.imgWord2 = new easy.Image(true);
            this.imgWord2.name = "imgWord2";
            this.groupAll.addChild(this.imgWord2);
            this.imgWord2.x = 135;
            this.imgWord2.y = 128;
            this.imgWord2.width = 368;
            this.imgWord2.height = 67;
            //imgShow1 
            this.imgShow1 = new easy.Image(true);
            this.imgShow1.name = "imgShow1";
            this.groupAll.addChild(this.imgShow1);
            this.imgShow1.x = 145;
            this.imgShow1.y = 218;
            this.imgShow1.width = 334;
            this.imgShow1.height = 55;
            //imgShow2 
            this.imgShow2 = new easy.Image(true);
            this.imgShow2.name = "imgShow2";
            this.groupAll.addChild(this.imgShow2);
            this.imgShow2.x = 145;
            this.imgShow2.y = 298;
            this.imgShow2.width = 334;
            this.imgShow2.height = 55;
            //imgShow3 
            this.imgShow3 = new easy.Image(true);
            this.imgShow3.name = "imgShow3";
            this.groupAll.addChild(this.imgShow3);
            this.imgShow3.x = 145;
            this.imgShow3.y = 378;
            this.imgShow3.width = 334;
            this.imgShow3.height = 55;
            //imgShow4 
            this.imgShow4 = new easy.Image(true);
            this.imgShow4.name = "imgShow4";
            this.groupAll.addChild(this.imgShow4);
            this.imgShow4.x = 145;
            this.imgShow4.y = 458;
            this.imgShow4.width = 334;
            this.imgShow4.height = 55;
            //imgShow5 
            this.imgShow5 = new easy.Image(true);
            this.imgShow5.name = "imgShow5";
            this.groupAll.addChild(this.imgShow5);
            this.imgShow5.x = 145;
            this.imgShow5.y = 538;
            this.imgShow5.width = 334;
            this.imgShow5.height = 55;
            //imgShow6 
            this.imgShow6 = new easy.Image(true);
            this.imgShow6.name = "imgShow6";
            this.groupAll.addChild(this.imgShow6);
            this.imgShow6.x = 145;
            this.imgShow6.y = 618;
            this.imgShow6.width = 334;
            this.imgShow6.height = 55;
            //imgShow7 
            this.imgShow7 = new easy.Image(true);
            this.imgShow7.name = "imgShow7";
            this.groupAll.addChild(this.imgShow7);
            this.imgShow7.x = 145;
            this.imgShow7.y = 698;
            this.imgShow7.width = 334;
            this.imgShow7.height = 55;
            //imgShow8 
            this.imgShow8 = new easy.Image(true);
            this.imgShow8.name = "imgShow8";
            this.groupAll.addChild(this.imgShow8);
            this.imgShow8.x = 145;
            this.imgShow8.y = 778;
            this.imgShow8.width = 334;
            this.imgShow8.height = 55;
            //imgPorinter 
            this.imgPorinter = new easy.Image(true);
            this.imgPorinter.name = "imgPorinter";
            this.groupAll.addChild(this.imgPorinter);
            this.imgPorinter.x = 469;
            this.imgPorinter.y = 309;
            this.imgPorinter.width = 25;
            this.imgPorinter.height = 40;
            //groupClick 
            this.groupClick = new easy.Group(true);
            this.groupClick.name = "groupClick";
            this.groupAll.addChild(this.groupClick);
            this.groupClick.showBg = false;
            this.groupClick.border = false;
            this.groupClick.x = 92;
            this.groupClick.y = 264;
            this.groupClick.width = 454;
            this.groupClick.height = 428;
            this.groupClick.visible = false;
            //imgClick 
            this.imgClick = new easy.Image(true);
            this.imgClick.name = "imgClick";
            this.groupClick.addChild(this.imgClick);
            this.imgClick.width = 454;
            this.imgClick.height = 428;
            //btnDele 
            this.btnDele = new easy.Button(true);
            this.btnDele.name = "btnDele";
            this.groupClick.addChild(this.btnDele);
            this.btnDele.width = 71;
            this.btnDele.height = 73;
            this.btnDele.x = 383;
            this.btnDele.y = 6;
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
        index2.prototype.initData = function () {
            _super.prototype.initData.call(this);
        };
        /**
         * 进入的逻辑
         * 可以再次根据外部数据情况做一些逻辑处理
         */
        index2.prototype.enter = function () {
        };
        /**
         * 退出的逻辑
         * 做一些数据的销毁或者初始化,保证下次进入的时候,不会残留
         */
        index2.prototype.outer = function () {
        };
        /**
         * 刷新UI皮肤显示
         */
        index2.prototype.validateNow = function () {
            this.drawDelay = false;
            var jsonData = RES.getRes("index2_json");
            if (jsonData != null) {
                this.spriteSheet = new egret.SpriteSheet(RES.getRes("index2_img"));
                for (var key in jsonData.texture) {
                    this.spriteSheet.createTexture(key, jsonData.texture[key].x, jsonData.texture[key].y, jsonData.texture[key].w, jsonData.texture[key].h);
                }
            }
            this.group.drawDelay = false;
            this.imgas.texture = RES.getRes("2");
            this.imgas.drawDelay = false;
            this.groupAll.drawDelay = false;
            this.imgBg.texture = RES.getRes("page08-03");
            this.imgBg.drawDelay = false;
            if (this.spriteSheet)
                this.imgGray.texture = this.spriteSheet.getTexture("Page2_3");
            this.imgGray.drawDelay = false;
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
                this.imgWord1.texture = this.spriteSheet.getTexture("Page2_1");
            this.imgWord1.drawDelay = false;
            if (this.spriteSheet)
                this.imgWord2.texture = this.spriteSheet.getTexture("Page2_2");
            this.imgWord2.drawDelay = false;
            if (this.spriteSheet)
                this.imgShow1.texture = this.spriteSheet.getTexture("Page2_4");
            this.imgShow1.drawDelay = false;
            if (this.spriteSheet)
                this.imgShow2.texture = this.spriteSheet.getTexture("Page2_5");
            this.imgShow2.drawDelay = false;
            if (this.spriteSheet)
                this.imgShow3.texture = this.spriteSheet.getTexture("Page2_6");
            this.imgShow3.drawDelay = false;
            if (this.spriteSheet)
                this.imgShow4.texture = this.spriteSheet.getTexture("Page2_7");
            this.imgShow4.drawDelay = false;
            if (this.spriteSheet)
                this.imgShow5.texture = this.spriteSheet.getTexture("Page2_8");
            this.imgShow5.drawDelay = false;
            if (this.spriteSheet)
                this.imgShow6.texture = this.spriteSheet.getTexture("Page2_9");
            this.imgShow6.drawDelay = false;
            if (this.spriteSheet)
                this.imgShow7.texture = this.spriteSheet.getTexture("Page2_10");
            this.imgShow7.drawDelay = false;
            if (this.spriteSheet)
                this.imgShow8.texture = this.spriteSheet.getTexture("Page2_11");
            this.imgShow8.drawDelay = false;
            if (this.spriteSheet)
                this.imgPorinter.texture = this.spriteSheet.getTexture("Page2_13");
            this.imgPorinter.drawDelay = false;
            this.groupClick.drawDelay = false;
            if (this.spriteSheet)
                this.imgClick.texture = this.spriteSheet.getTexture("pAge2-1");
            this.imgClick.drawDelay = false;
            if (this.spriteSheet)
                this.btnDele.texture = this.spriteSheet.getTexture("Page2_12");
            this.btnDele.drawDelay = false;
            this.btnAgain.texture = RES.getRes("Page2-18");
            this.btnAgain.drawDelay = false;
            if (this.spriteSheet)
                this.btnPage.texture = this.spriteSheet.getTexture("Page2-16");
            this.btnPage.drawDelay = false;
            //模板temp
            this.temp.validateNow();
        };
        return index2;
    }(easy.Group));
    modules.index2 = index2;
    __reflect(index2.prototype, "modules.index2");
})(modules || (modules = {}));
