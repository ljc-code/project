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
     * @date  :2020-05-08 11:44:24
     * @EasyGame.org Tools
     */
    var index6 = (function (_super) {
        __extends(index6, _super);
        function index6() {
            var _this = _super.call(this, true) || this;
            _this.resSpriteSheet = "index6"; //合并材质资源名称
            _this.resTexture = ["6", "page08-03"]; //单材质资源名称
            _this.resGroup = ["courseware_index6"]; //配置文件的Group
            _this.resFiles = ["courseware/index6_loader_200508114424.json"]; //需要下载的资源group
            _this.spriteSheet = null; //ui对应的材质集,已经分割好,方便外部读取方便
            _this.group = null;
            _this.imgas = null;
            _this.groupAll = null;
            _this.imgBg = null;
            _this.imgGray = null;
            _this.img1 = null;
            _this.img2 = null;
            _this.img3 = null;
            _this.imgWord = null;
            _this.imgShow1 = null;
            _this.imgShow2 = null;
            _this.imgShow3 = null;
            _this.imgShow4 = null;
            _this.imgShow5 = null;
            _this.imgShow6 = null;
            _this.imgShow7 = null;
            _this.imgShow8 = null;
            _this.imgShow9 = null;
            _this.imgShow10 = null;
            _this.btnPage = null;
            _this.btnAgain = null;
            _this.temp = null;
            return _this;
        }
        /**
         * 初始化主场景的组件,加入场景时,主动调用一次
         * 子类覆写该方法,添加UI逻辑
         */
        index6.prototype.createChildren = function () {
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
            this.imgas.y = -113;
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
            this.imgGray.x = 29;
            this.imgGray.y = 114;
            this.imgGray.width = 586;
            this.imgGray.height = 626;
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
            this.img3.x = 9;
            this.img3.y = 51;
            this.img3.width = 33;
            this.img3.height = 20;
            //imgWord 
            this.imgWord = new easy.Image(true);
            this.imgWord.name = "imgWord";
            this.groupAll.addChild(this.imgWord);
            this.imgWord.x = 90;
            this.imgWord.y = 35;
            this.imgWord.width = 464;
            this.imgWord.height = 50;
            //imgShow1 
            this.imgShow1 = new easy.Image(true);
            this.imgShow1.name = "imgShow1";
            this.groupAll.addChild(this.imgShow1);
            this.imgShow1.x = 251;
            this.imgShow1.y = 135;
            this.imgShow1.width = 145;
            this.imgShow1.height = 165;
            //imgShow2 
            this.imgShow2 = new easy.Image(true);
            this.imgShow2.name = "imgShow2";
            this.groupAll.addChild(this.imgShow2);
            this.imgShow2.x = 408;
            this.imgShow2.y = 212;
            this.imgShow2.width = 183;
            this.imgShow2.height = 157;
            //imgShow3 
            this.imgShow3 = new easy.Image(true);
            this.imgShow3.name = "imgShow3";
            this.groupAll.addChild(this.imgShow3);
            this.imgShow3.x = 452;
            this.imgShow3.y = 373;
            this.imgShow3.width = 145;
            this.imgShow3.height = 174;
            //imgShow4 
            this.imgShow4 = new easy.Image(true);
            this.imgShow4.name = "imgShow4";
            this.groupAll.addChild(this.imgShow4);
            this.imgShow4.x = 403;
            this.imgShow4.y = 533;
            this.imgShow4.width = 184;
            this.imgShow4.height = 157;
            //imgShow5 
            this.imgShow5 = new easy.Image(true);
            this.imgShow5.name = "imgShow5";
            this.groupAll.addChild(this.imgShow5);
            this.imgShow5.x = 61;
            this.imgShow5.y = 535;
            this.imgShow5.width = 185;
            this.imgShow5.height = 156;
            //imgShow6 
            this.imgShow6 = new easy.Image(true);
            this.imgShow6.name = "imgShow6";
            this.groupAll.addChild(this.imgShow6);
            this.imgShow6.x = 45;
            this.imgShow6.y = 376;
            this.imgShow6.width = 145;
            this.imgShow6.height = 171;
            //imgShow7 
            this.imgShow7 = new easy.Image(true);
            this.imgShow7.name = "imgShow7";
            this.groupAll.addChild(this.imgShow7);
            this.imgShow7.x = 61;
            this.imgShow7.y = 213;
            this.imgShow7.width = 174;
            this.imgShow7.height = 159;
            //imgShow8 
            this.imgShow8 = new easy.Image(true);
            this.imgShow8.name = "imgShow8";
            this.groupAll.addChild(this.imgShow8);
            this.imgShow8.x = 197;
            this.imgShow8.y = 321;
            this.imgShow8.width = 251;
            this.imgShow8.height = 217;
            //imgShow9 
            this.imgShow9 = new easy.Image(true);
            this.imgShow9.name = "imgShow9";
            this.groupAll.addChild(this.imgShow9);
            this.imgShow9.x = 279;
            this.imgShow9.y = 636;
            this.imgShow9.width = 98;
            this.imgShow9.height = 79;
            //imgShow10 
            this.imgShow10 = new easy.Image(true);
            this.imgShow10.name = "imgShow10";
            this.groupAll.addChild(this.imgShow10);
            this.imgShow10.x = 29;
            this.imgShow10.y = 751;
            this.imgShow10.width = 586;
            this.imgShow10.height = 89;
            //btnPage 
            this.btnPage = new easy.Button(true);
            this.btnPage.name = "btnPage";
            this.groupAll.addChild(this.btnPage);
            this.btnPage.width = 133;
            this.btnPage.height = 47;
            this.btnPage.x = 37;
            this.btnPage.y = 883;
            //btnAgain 
            this.btnAgain = new easy.Button(true);
            this.btnAgain.name = "btnAgain";
            this.groupAll.addChild(this.btnAgain);
            this.btnAgain.width = 133;
            this.btnAgain.height = 47;
            this.btnAgain.x = 467;
            this.btnAgain.y = 883;
            //temp 
            this.temp = new modules.tempTemplate();
            this.temp.name = "temp";
            this.addChild(this.temp);
            if (this.temp.ui["resFiles"])
                this.resFiles = this.resFiles.concat(this.temp.ui.resFiles);
            if (this.temp.ui["resGroup"])
                this.resGroup = this.resGroup.concat(this.temp.ui.resGroup);
            this.temp.x = 540;
        };
        /**
         * 获取初始化逻辑,加入场景时,主动调用一次
         * 子类覆写该方法,添加业务逻辑
         */
        index6.prototype.initData = function () {
            _super.prototype.initData.call(this);
        };
        /**
         * 进入的逻辑
         * 可以再次根据外部数据情况做一些逻辑处理
         */
        index6.prototype.enter = function () {
        };
        /**
         * 退出的逻辑
         * 做一些数据的销毁或者初始化,保证下次进入的时候,不会残留
         */
        index6.prototype.outer = function () {
        };
        /**
         * 刷新UI皮肤显示
         */
        index6.prototype.validateNow = function () {
            this.drawDelay = false;
            var jsonData = RES.getRes("index6_json");
            if (jsonData != null) {
                this.spriteSheet = new egret.SpriteSheet(RES.getRes("index6_img"));
                for (var key in jsonData.texture) {
                    this.spriteSheet.createTexture(key, jsonData.texture[key].x, jsonData.texture[key].y, jsonData.texture[key].w, jsonData.texture[key].h);
                }
            }
            this.group.drawDelay = false;
            this.imgas.texture = RES.getRes("6");
            this.imgas.drawDelay = false;
            this.groupAll.drawDelay = false;
            this.imgBg.texture = RES.getRes("page08-03");
            this.imgBg.drawDelay = false;
            if (this.spriteSheet)
                this.imgGray.texture = this.spriteSheet.getTexture("Page06-2");
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
                this.imgWord.texture = this.spriteSheet.getTexture("Page06-1");
            this.imgWord.drawDelay = false;
            if (this.spriteSheet)
                this.imgShow1.texture = this.spriteSheet.getTexture("Page06-3");
            this.imgShow1.drawDelay = false;
            if (this.spriteSheet)
                this.imgShow2.texture = this.spriteSheet.getTexture("Page06-4");
            this.imgShow2.drawDelay = false;
            if (this.spriteSheet)
                this.imgShow3.texture = this.spriteSheet.getTexture("Page06-5");
            this.imgShow3.drawDelay = false;
            if (this.spriteSheet)
                this.imgShow4.texture = this.spriteSheet.getTexture("Page06-6");
            this.imgShow4.drawDelay = false;
            if (this.spriteSheet)
                this.imgShow5.texture = this.spriteSheet.getTexture("Page06-8");
            this.imgShow5.drawDelay = false;
            if (this.spriteSheet)
                this.imgShow6.texture = this.spriteSheet.getTexture("Page06-9");
            this.imgShow6.drawDelay = false;
            if (this.spriteSheet)
                this.imgShow7.texture = this.spriteSheet.getTexture("Page06-10");
            this.imgShow7.drawDelay = false;
            if (this.spriteSheet)
                this.imgShow8.texture = this.spriteSheet.getTexture("Page06-11");
            this.imgShow8.drawDelay = false;
            if (this.spriteSheet)
                this.imgShow9.texture = this.spriteSheet.getTexture("Page06-7");
            this.imgShow9.drawDelay = false;
            if (this.spriteSheet)
                this.imgShow10.texture = this.spriteSheet.getTexture("Page06-12");
            this.imgShow10.drawDelay = false;
            if (this.spriteSheet)
                this.btnPage.texture = this.spriteSheet.getTexture("Page2-16");
            this.btnPage.drawDelay = false;
            if (this.spriteSheet)
                this.btnAgain.texture = this.spriteSheet.getTexture("Page2-18");
            this.btnAgain.drawDelay = false;
            //模板temp
            this.temp.validateNow();
        };
        return index6;
    }(easy.Group));
    modules.index6 = index6;
    __reflect(index6.prototype, "modules.index6");
})(modules || (modules = {}));
