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
     * @date  :2020-05-06 13:18:44
     * @EasyGame.org Tools
     */
    var index5 = (function (_super) {
        __extends(index5, _super);
        function index5() {
            var _this = _super.call(this, true) || this;
            _this.resSpriteSheet = "index5"; //合并材质资源名称
            _this.resTexture = ["5", "Page2-18", "PageClick1", "PageClick2", "PageClick3", "PageClick4", "PageClick5"]; //单材质资源名称
            _this.resGroup = ["courseware_index5"]; //配置文件的Group
            _this.resFiles = ["courseware/index5_loader_200506131844.json"]; //需要下载的资源group
            _this.spriteSheet = null; //ui对应的材质集,已经分割好,方便外部读取方便
            _this.group = null;
            _this.imgas = null;
            _this.groupAll = null;
            _this.img1 = null;
            _this.imgWord1 = null;
            _this.imgWord2 = null;
            _this.img2 = null;
            _this.img3 = null;
            _this.imgScale = null;
            _this.imgMove1 = null;
            _this.imgMove2 = null;
            _this.imgMove3 = null;
            _this.imgMove4 = null;
            _this.imgMove5 = null;
            _this.btnAgain = null;
            _this.btnPage = null;
            _this.imgKua = null;
            _this.imgPorinter1 = null;
            _this.imgPorinter2 = null;
            _this.imgPorinter3 = null;
            _this.imgPorinter4 = null;
            _this.imgPorinter5 = null;
            _this.groupClick = null;
            _this.imgClick = null;
            _this.btnDele = null;
            _this.temp = null;
            return _this;
        }
        /**
         * 初始化主场景的组件,加入场景时,主动调用一次
         * 子类覆写该方法,添加UI逻辑
         */
        index5.prototype.createChildren = function () {
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
            this.imgas.y = 26.5;
            this.imgas.width = 600;
            this.imgas.height = 907;
            this.imgas.visible = false;
            //groupAll 
            this.groupAll = new easy.Group(true);
            this.groupAll.name = "groupAll";
            this.addChild(this.groupAll);
            this.groupAll.showBg = false;
            this.groupAll.border = false;
            this.groupAll.width = 640;
            this.groupAll.height = 960;
            this.groupAll.verticalEnabled = true;
            //img1 
            this.img1 = new easy.Image(true);
            this.img1.name = "img1";
            this.groupAll.addChild(this.img1);
            this.img1.y = 26;
            this.img1.width = 102;
            this.img1.height = 51;
            //imgWord1 
            this.imgWord1 = new easy.Image(true);
            this.imgWord1.name = "imgWord1";
            this.groupAll.addChild(this.imgWord1);
            this.imgWord1.x = 113;
            this.imgWord1.y = 27;
            this.imgWord1.width = 361;
            this.imgWord1.height = 51;
            //imgWord2 
            this.imgWord2 = new easy.Image(true);
            this.imgWord2.name = "imgWord2";
            this.groupAll.addChild(this.imgWord2);
            this.imgWord2.x = 469;
            this.imgWord2.y = 113;
            this.imgWord2.width = 127;
            this.imgWord2.height = 27;
            //img2 
            this.img2 = new easy.Image(true);
            this.img2.name = "img2";
            this.groupAll.addChild(this.img2);
            this.img2.y = 165;
            this.img2.width = 21;
            this.img2.height = 155;
            //img3 
            this.img3 = new easy.Image(true);
            this.img3.name = "img3";
            this.groupAll.addChild(this.img3);
            this.img3.y = 320;
            this.img3.width = 21;
            this.img3.height = 487;
            //imgScale 
            this.imgScale = new easy.Image(true);
            this.imgScale.name = "imgScale";
            this.groupAll.addChild(this.imgScale);
            this.imgScale.x = 112;
            this.imgScale.y = 167;
            this.imgScale.width = 487;
            this.imgScale.height = 248;
            //imgMove1 
            this.imgMove1 = new easy.Image(true);
            this.imgMove1.name = "imgMove1";
            this.groupAll.addChild(this.imgMove1);
            this.imgMove1.x = 137;
            this.imgMove1.y = 455;
            this.imgMove1.width = 253;
            this.imgMove1.height = 28;
            //imgMove2 
            this.imgMove2 = new easy.Image(true);
            this.imgMove2.name = "imgMove2";
            this.groupAll.addChild(this.imgMove2);
            this.imgMove2.x = 135;
            this.imgMove2.y = 532;
            this.imgMove2.width = 255;
            this.imgMove2.height = 28;
            //imgMove3 
            this.imgMove3 = new easy.Image(true);
            this.imgMove3.name = "imgMove3";
            this.groupAll.addChild(this.imgMove3);
            this.imgMove3.x = 136;
            this.imgMove3.y = 610;
            this.imgMove3.width = 254;
            this.imgMove3.height = 27;
            //imgMove4 
            this.imgMove4 = new easy.Image(true);
            this.imgMove4.name = "imgMove4";
            this.groupAll.addChild(this.imgMove4);
            this.imgMove4.x = 136;
            this.imgMove4.y = 688;
            this.imgMove4.width = 255;
            this.imgMove4.height = 27;
            //imgMove5 
            this.imgMove5 = new easy.Image(true);
            this.imgMove5.name = "imgMove5";
            this.groupAll.addChild(this.imgMove5);
            this.imgMove5.x = 135;
            this.imgMove5.y = 766;
            this.imgMove5.width = 255;
            this.imgMove5.height = 27;
            //btnAgain 
            this.btnAgain = new easy.Button(true);
            this.btnAgain.name = "btnAgain";
            this.groupAll.addChild(this.btnAgain);
            this.btnAgain.width = 133;
            this.btnAgain.height = 47;
            this.btnAgain.x = 467;
            this.btnAgain.y = 887;
            //btnPage 
            this.btnPage = new easy.Button(true);
            this.btnPage.name = "btnPage";
            this.groupAll.addChild(this.btnPage);
            this.btnPage.width = 133;
            this.btnPage.height = 47;
            this.btnPage.x = 27;
            this.btnPage.y = 887;
            //imgKua 
            this.imgKua = new easy.Image(true);
            this.imgKua.name = "imgKua";
            this.groupAll.addChild(this.imgKua);
            this.imgKua.x = 111.5;
            this.imgKua.y = 425;
            this.imgKua.width = 489;
            this.imgKua.height = 408;
            //imgPorinter1 
            this.imgPorinter1 = new easy.Image(true);
            this.imgPorinter1.name = "imgPorinter1";
            this.groupAll.addChild(this.imgPorinter1);
            this.imgPorinter1.x = 407;
            this.imgPorinter1.y = 456;
            this.imgPorinter1.width = 23;
            this.imgPorinter1.height = 36;
            //imgPorinter2 
            this.imgPorinter2 = new easy.Image(true);
            this.imgPorinter2.name = "imgPorinter2";
            this.groupAll.addChild(this.imgPorinter2);
            this.imgPorinter2.x = 407;
            this.imgPorinter2.y = 535;
            this.imgPorinter2.width = 23;
            this.imgPorinter2.height = 36;
            //imgPorinter3 
            this.imgPorinter3 = new easy.Image(true);
            this.imgPorinter3.name = "imgPorinter3";
            this.groupAll.addChild(this.imgPorinter3);
            this.imgPorinter3.x = 407;
            this.imgPorinter3.y = 610;
            this.imgPorinter3.width = 23;
            this.imgPorinter3.height = 36;
            //imgPorinter4 
            this.imgPorinter4 = new easy.Image(true);
            this.imgPorinter4.name = "imgPorinter4";
            this.groupAll.addChild(this.imgPorinter4);
            this.imgPorinter4.x = 407;
            this.imgPorinter4.y = 687;
            this.imgPorinter4.width = 23;
            this.imgPorinter4.height = 36;
            //imgPorinter5 
            this.imgPorinter5 = new easy.Image(true);
            this.imgPorinter5.name = "imgPorinter5";
            this.groupAll.addChild(this.imgPorinter5);
            this.imgPorinter5.x = 407;
            this.imgPorinter5.y = 765;
            this.imgPorinter5.width = 23;
            this.imgPorinter5.height = 36;
            //groupClick 
            this.groupClick = new easy.Group(true);
            this.groupClick.name = "groupClick";
            this.groupAll.addChild(this.groupClick);
            this.groupClick.showBg = false;
            this.groupClick.border = false;
            this.groupClick.x = 134;
            this.groupClick.y = 253;
            this.groupClick.width = 412;
            this.groupClick.height = 480;
            this.groupClick.visible = false;
            //imgClick 
            this.imgClick = new easy.Image(true);
            this.imgClick.name = "imgClick";
            this.groupClick.addChild(this.imgClick);
            this.imgClick.width = 412;
            this.imgClick.height = 480;
            //btnDele 
            this.btnDele = new easy.Button(true);
            this.btnDele.name = "btnDele";
            this.groupClick.addChild(this.btnDele);
            this.btnDele.width = 33;
            this.btnDele.height = 25;
            this.btnDele.x = 345;
            this.btnDele.y = 26;
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
        index5.prototype.initData = function () {
            _super.prototype.initData.call(this);
        };
        /**
         * 进入的逻辑
         * 可以再次根据外部数据情况做一些逻辑处理
         */
        index5.prototype.enter = function () {
        };
        /**
         * 退出的逻辑
         * 做一些数据的销毁或者初始化,保证下次进入的时候,不会残留
         */
        index5.prototype.outer = function () {
        };
        /**
         * 刷新UI皮肤显示
         */
        index5.prototype.validateNow = function () {
            this.drawDelay = false;
            var jsonData = RES.getRes("index5_json");
            if (jsonData != null) {
                this.spriteSheet = new egret.SpriteSheet(RES.getRes("index5_img"));
                for (var key in jsonData.texture) {
                    this.spriteSheet.createTexture(key, jsonData.texture[key].x, jsonData.texture[key].y, jsonData.texture[key].w, jsonData.texture[key].h);
                }
            }
            this.group.drawDelay = false;
            this.imgas.texture = RES.getRes("5");
            this.imgas.drawDelay = false;
            this.groupAll.drawDelay = false;
            if (this.spriteSheet)
                this.img1.texture = this.spriteSheet.getTexture("page02-01");
            this.img1.drawDelay = false;
            if (this.spriteSheet)
                this.imgWord1.texture = this.spriteSheet.getTexture("Page5-1");
            this.imgWord1.drawDelay = false;
            if (this.spriteSheet)
                this.imgWord2.texture = this.spriteSheet.getTexture("Page5-2");
            this.imgWord2.drawDelay = false;
            if (this.spriteSheet)
                this.img2.texture = this.spriteSheet.getTexture("page2_09");
            this.img2.drawDelay = false;
            if (this.spriteSheet)
                this.img3.texture = this.spriteSheet.getTexture("page2_10");
            this.img3.drawDelay = false;
            if (this.spriteSheet)
                this.imgScale.texture = this.spriteSheet.getTexture("Page5-3");
            this.imgScale.drawDelay = false;
            if (this.spriteSheet)
                this.imgMove1.texture = this.spriteSheet.getTexture("Page5-5");
            this.imgMove1.drawDelay = false;
            if (this.spriteSheet)
                this.imgMove2.texture = this.spriteSheet.getTexture("Page5-6");
            this.imgMove2.drawDelay = false;
            if (this.spriteSheet)
                this.imgMove3.texture = this.spriteSheet.getTexture("Page5-7");
            this.imgMove3.drawDelay = false;
            if (this.spriteSheet)
                this.imgMove4.texture = this.spriteSheet.getTexture("Page5-8");
            this.imgMove4.drawDelay = false;
            if (this.spriteSheet)
                this.imgMove5.texture = this.spriteSheet.getTexture("Page5-9");
            this.imgMove5.drawDelay = false;
            this.btnAgain.texture = RES.getRes("Page2-18");
            this.btnAgain.drawDelay = false;
            if (this.spriteSheet)
                this.btnPage.texture = this.spriteSheet.getTexture("Page2-16");
            this.btnPage.drawDelay = false;
            if (this.spriteSheet)
                this.imgKua.texture = this.spriteSheet.getTexture("Page5-4");
            this.imgKua.drawDelay = false;
            if (this.spriteSheet)
                this.imgPorinter1.texture = this.spriteSheet.getTexture("Page5-10");
            this.imgPorinter1.drawDelay = false;
            if (this.spriteSheet)
                this.imgPorinter2.texture = this.spriteSheet.getTexture("Page5-10");
            this.imgPorinter2.drawDelay = false;
            if (this.spriteSheet)
                this.imgPorinter3.texture = this.spriteSheet.getTexture("Page5-10");
            this.imgPorinter3.drawDelay = false;
            if (this.spriteSheet)
                this.imgPorinter4.texture = this.spriteSheet.getTexture("Page5-10");
            this.imgPorinter4.drawDelay = false;
            if (this.spriteSheet)
                this.imgPorinter5.texture = this.spriteSheet.getTexture("Page5-10");
            this.imgPorinter5.drawDelay = false;
            this.groupClick.drawDelay = false;
            this.imgClick.texture = RES.getRes("PageClick1");
            this.imgClick.drawDelay = false;
            if (this.spriteSheet)
                this.btnDele.texture = this.spriteSheet.getTexture("Page5-16");
            this.btnDele.drawDelay = false;
            //模板temp
            this.temp.validateNow();
        };
        return index5;
    }(easy.Group));
    modules.index5 = index5;
    __reflect(index5.prototype, "modules.index5");
})(modules || (modules = {}));
