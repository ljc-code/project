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
     * @date  :2020-05-09 15:25:20
     * @EasyGame.org Tools
     */
    var index7 = (function (_super) {
        __extends(index7, _super);
        function index7() {
            var _this = _super.call(this, true) || this;
            _this.resSpriteSheet = "index7"; //合并材质资源名称
            _this.resTexture = ["7", "page08-03", "Page2-18"]; //单材质资源名称
            _this.resGroup = ["courseware_index7"]; //配置文件的Group
            _this.resFiles = ["courseware/index7_loader_200509152520.json"]; //需要下载的资源group
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
            _this.imgWord3 = null;
            _this.imgWord4 = null;
            _this.imgWord5 = null;
            _this.groupMove1 = null;
            _this.imgMove1 = null;
            _this.imgActive1 = null;
            _this.imgActive2 = null;
            _this.imgActive3 = null;
            _this.groupMove2 = null;
            _this.imgMove2 = null;
            _this.imgActive4 = null;
            _this.imgActive5 = null;
            _this.imgActive6 = null;
            _this.groupMove3 = null;
            _this.imgMove3 = null;
            _this.imgActive7 = null;
            _this.imgActive8 = null;
            _this.imgActive9 = null;
            _this.groupMove4 = null;
            _this.imgMove4 = null;
            _this.imgActive10 = null;
            _this.imgActive11 = null;
            _this.imgActive12 = null;
            _this.groupMove5 = null;
            _this.imgMove5 = null;
            _this.imgActive13 = null;
            _this.imgActive14 = null;
            _this.imgActive15 = null;
            _this.groupMove6 = null;
            _this.imgMove6 = null;
            _this.imgActive16 = null;
            _this.imgActive17 = null;
            _this.imgActive18 = null;
            _this.groupMove7 = null;
            _this.imgMove7 = null;
            _this.imgActive19 = null;
            _this.imgActive20 = null;
            _this.imgActive21 = null;
            _this.groupMove8 = null;
            _this.imgMove8 = null;
            _this.imgActive22 = null;
            _this.imgActive23 = null;
            _this.imgActive24 = null;
            _this.groupLook = null;
            _this.imgArrows = null;
            _this.btnSubmit = null;
            _this.groupClick = null;
            _this.imgClick = null;
            _this.btnDele = null;
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
        index7.prototype.createChildren = function () {
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
            this.imgGray.x = 13;
            this.imgGray.y = 152;
            this.imgGray.width = 616;
            this.imgGray.height = 658;
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
            this.img3.x = 10;
            this.img3.y = 92;
            this.img3.width = 33;
            this.img3.height = 20;
            //imgWord1 
            this.imgWord1 = new easy.Image(true);
            this.imgWord1.name = "imgWord1";
            this.groupAll.addChild(this.imgWord1);
            this.imgWord1.x = 69;
            this.imgWord1.y = 42;
            this.imgWord1.width = 502;
            this.imgWord1.height = 45;
            //imgWord2 
            this.imgWord2 = new easy.Image(true);
            this.imgWord2.name = "imgWord2";
            this.groupAll.addChild(this.imgWord2);
            this.imgWord2.x = 28;
            this.imgWord2.y = 121;
            this.imgWord2.width = 373;
            this.imgWord2.height = 27;
            //imgWord3 
            this.imgWord3 = new easy.Image(true);
            this.imgWord3.name = "imgWord3";
            this.groupAll.addChild(this.imgWord3);
            this.imgWord3.x = 246;
            this.imgWord3.y = 157;
            this.imgWord3.width = 154;
            this.imgWord3.height = 92;
            //imgWord4 
            this.imgWord4 = new easy.Image(true);
            this.imgWord4.name = "imgWord4";
            this.groupAll.addChild(this.imgWord4);
            this.imgWord4.x = 417;
            this.imgWord4.y = 156;
            this.imgWord4.height = 93;
            //imgWord5 
            this.imgWord5 = new easy.Image(true);
            this.imgWord5.name = "imgWord5";
            this.groupAll.addChild(this.imgWord5);
            this.imgWord5.x = 527;
            this.imgWord5.y = 156;
            this.imgWord5.height = 93;
            //groupMove1 
            this.groupMove1 = new easy.Group(true);
            this.groupMove1.name = "groupMove1";
            this.groupAll.addChild(this.groupMove1);
            this.groupMove1.showBg = false;
            this.groupMove1.border = false;
            this.groupMove1.x = 17;
            this.groupMove1.y = 261;
            //imgMove1 
            this.imgMove1 = new easy.Image(true);
            this.imgMove1.name = "imgMove1";
            this.groupMove1.addChild(this.imgMove1);
            this.imgMove1.width = 227;
            this.imgMove1.height = 45;
            //imgActive1 
            this.imgActive1 = new easy.Image(true);
            this.imgActive1.name = "imgActive1";
            this.groupMove1.addChild(this.imgActive1);
            this.imgActive1.x = 287;
            this.imgActive1.y = 4;
            this.imgActive1.width = 39;
            this.imgActive1.height = 39;
            //imgActive2 
            this.imgActive2 = new easy.Image(true);
            this.imgActive2.name = "imgActive2";
            this.groupMove1.addChild(this.imgActive2);
            this.imgActive2.x = 431;
            this.imgActive2.y = 5;
            this.imgActive2.width = 39;
            this.imgActive2.height = 39;
            //imgActive3 
            this.imgActive3 = new easy.Image(true);
            this.imgActive3.name = "imgActive3";
            this.groupMove1.addChild(this.imgActive3);
            this.imgActive3.x = 541;
            this.imgActive3.y = 5;
            this.imgActive3.width = 39;
            this.imgActive3.height = 39;
            //groupMove2 
            this.groupMove2 = new easy.Group(true);
            this.groupMove2.name = "groupMove2";
            this.groupAll.addChild(this.groupMove2);
            this.groupMove2.showBg = false;
            this.groupMove2.border = false;
            this.groupMove2.x = 17;
            this.groupMove2.y = 326;
            //imgMove2 
            this.imgMove2 = new easy.Image(true);
            this.imgMove2.name = "imgMove2";
            this.groupMove2.addChild(this.imgMove2);
            this.imgMove2.width = 227;
            this.imgMove2.height = 45;
            //imgActive4 
            this.imgActive4 = new easy.Image(true);
            this.imgActive4.name = "imgActive4";
            this.groupMove2.addChild(this.imgActive4);
            this.imgActive4.x = 287;
            this.imgActive4.y = 4;
            this.imgActive4.width = 39;
            this.imgActive4.height = 39;
            //imgActive5 
            this.imgActive5 = new easy.Image(true);
            this.imgActive5.name = "imgActive5";
            this.groupMove2.addChild(this.imgActive5);
            this.imgActive5.x = 431;
            this.imgActive5.y = 5;
            this.imgActive5.width = 39;
            this.imgActive5.height = 39;
            //imgActive6 
            this.imgActive6 = new easy.Image(true);
            this.imgActive6.name = "imgActive6";
            this.groupMove2.addChild(this.imgActive6);
            this.imgActive6.x = 541;
            this.imgActive6.y = 5;
            this.imgActive6.width = 39;
            this.imgActive6.height = 39;
            //groupMove3 
            this.groupMove3 = new easy.Group(true);
            this.groupMove3.name = "groupMove3";
            this.groupAll.addChild(this.groupMove3);
            this.groupMove3.showBg = false;
            this.groupMove3.border = false;
            this.groupMove3.x = 17;
            this.groupMove3.y = 385;
            //imgMove3 
            this.imgMove3 = new easy.Image(true);
            this.imgMove3.name = "imgMove3";
            this.groupMove3.addChild(this.imgMove3);
            this.imgMove3.width = 227;
            this.imgMove3.height = 69;
            //imgActive7 
            this.imgActive7 = new easy.Image(true);
            this.imgActive7.name = "imgActive7";
            this.groupMove3.addChild(this.imgActive7);
            this.imgActive7.x = 287;
            this.imgActive7.y = 14;
            this.imgActive7.width = 39;
            this.imgActive7.height = 39;
            //imgActive8 
            this.imgActive8 = new easy.Image(true);
            this.imgActive8.name = "imgActive8";
            this.groupMove3.addChild(this.imgActive8);
            this.imgActive8.x = 431;
            this.imgActive8.y = 15;
            this.imgActive8.width = 39;
            this.imgActive8.height = 39;
            //imgActive9 
            this.imgActive9 = new easy.Image(true);
            this.imgActive9.name = "imgActive9";
            this.groupMove3.addChild(this.imgActive9);
            this.imgActive9.x = 541;
            this.imgActive9.y = 15;
            this.imgActive9.width = 39;
            this.imgActive9.height = 39;
            //groupMove4 
            this.groupMove4 = new easy.Group(true);
            this.groupMove4.name = "groupMove4";
            this.groupAll.addChild(this.groupMove4);
            this.groupMove4.showBg = false;
            this.groupMove4.border = false;
            this.groupMove4.x = 17;
            this.groupMove4.y = 466;
            //imgMove4 
            this.imgMove4 = new easy.Image(true);
            this.imgMove4.name = "imgMove4";
            this.groupMove4.addChild(this.imgMove4);
            this.imgMove4.width = 227;
            this.imgMove4.height = 45;
            //imgActive10 
            this.imgActive10 = new easy.Image(true);
            this.imgActive10.name = "imgActive10";
            this.groupMove4.addChild(this.imgActive10);
            this.imgActive10.x = 287;
            this.imgActive10.y = 4;
            this.imgActive10.width = 39;
            this.imgActive10.height = 39;
            //imgActive11 
            this.imgActive11 = new easy.Image(true);
            this.imgActive11.name = "imgActive11";
            this.groupMove4.addChild(this.imgActive11);
            this.imgActive11.x = 431;
            this.imgActive11.y = 5;
            this.imgActive11.width = 39;
            this.imgActive11.height = 39;
            //imgActive12 
            this.imgActive12 = new easy.Image(true);
            this.imgActive12.name = "imgActive12";
            this.groupMove4.addChild(this.imgActive12);
            this.imgActive12.x = 541;
            this.imgActive12.y = 5;
            this.imgActive12.width = 39;
            this.imgActive12.height = 39;
            //groupMove5 
            this.groupMove5 = new easy.Group(true);
            this.groupMove5.name = "groupMove5";
            this.groupAll.addChild(this.groupMove5);
            this.groupMove5.showBg = false;
            this.groupMove5.border = false;
            this.groupMove5.x = 17;
            this.groupMove5.y = 528;
            //imgMove5 
            this.imgMove5 = new easy.Image(true);
            this.imgMove5.name = "imgMove5";
            this.groupMove5.addChild(this.imgMove5);
            this.imgMove5.width = 227;
            this.imgMove5.height = 45;
            //imgActive13 
            this.imgActive13 = new easy.Image(true);
            this.imgActive13.name = "imgActive13";
            this.groupMove5.addChild(this.imgActive13);
            this.imgActive13.x = 287;
            this.imgActive13.y = 4;
            this.imgActive13.width = 39;
            this.imgActive13.height = 39;
            //imgActive14 
            this.imgActive14 = new easy.Image(true);
            this.imgActive14.name = "imgActive14";
            this.groupMove5.addChild(this.imgActive14);
            this.imgActive14.x = 431;
            this.imgActive14.y = 5;
            this.imgActive14.width = 39;
            this.imgActive14.height = 39;
            //imgActive15 
            this.imgActive15 = new easy.Image(true);
            this.imgActive15.name = "imgActive15";
            this.groupMove5.addChild(this.imgActive15);
            this.imgActive15.x = 541;
            this.imgActive15.y = 5;
            this.imgActive15.width = 39;
            this.imgActive15.height = 39;
            //groupMove6 
            this.groupMove6 = new easy.Group(true);
            this.groupMove6.name = "groupMove6";
            this.groupAll.addChild(this.groupMove6);
            this.groupMove6.showBg = false;
            this.groupMove6.border = false;
            this.groupMove6.x = 17;
            this.groupMove6.y = 591;
            //imgMove6 
            this.imgMove6 = new easy.Image(true);
            this.imgMove6.name = "imgMove6";
            this.groupMove6.addChild(this.imgMove6);
            this.imgMove6.width = 227;
            this.imgMove6.height = 45;
            //imgActive16 
            this.imgActive16 = new easy.Image(true);
            this.imgActive16.name = "imgActive16";
            this.groupMove6.addChild(this.imgActive16);
            this.imgActive16.x = 287;
            this.imgActive16.y = 4;
            this.imgActive16.width = 39;
            this.imgActive16.height = 39;
            //imgActive17 
            this.imgActive17 = new easy.Image(true);
            this.imgActive17.name = "imgActive17";
            this.groupMove6.addChild(this.imgActive17);
            this.imgActive17.x = 431;
            this.imgActive17.y = 5;
            this.imgActive17.width = 39;
            this.imgActive17.height = 39;
            //imgActive18 
            this.imgActive18 = new easy.Image(true);
            this.imgActive18.name = "imgActive18";
            this.groupMove6.addChild(this.imgActive18);
            this.imgActive18.x = 541;
            this.imgActive18.y = 5;
            this.imgActive18.width = 39;
            this.imgActive18.height = 39;
            //groupMove7 
            this.groupMove7 = new easy.Group(true);
            this.groupMove7.name = "groupMove7";
            this.groupAll.addChild(this.groupMove7);
            this.groupMove7.showBg = false;
            this.groupMove7.border = false;
            this.groupMove7.x = 17;
            this.groupMove7.y = 661;
            //imgMove7 
            this.imgMove7 = new easy.Image(true);
            this.imgMove7.name = "imgMove7";
            this.groupMove7.addChild(this.imgMove7);
            this.imgMove7.width = 227;
            this.imgMove7.height = 71;
            //imgActive19 
            this.imgActive19 = new easy.Image(true);
            this.imgActive19.name = "imgActive19";
            this.groupMove7.addChild(this.imgActive19);
            this.imgActive19.x = 287;
            this.imgActive19.y = 15;
            this.imgActive19.width = 39;
            this.imgActive19.height = 39;
            //imgActive20 
            this.imgActive20 = new easy.Image(true);
            this.imgActive20.name = "imgActive20";
            this.groupMove7.addChild(this.imgActive20);
            this.imgActive20.x = 431;
            this.imgActive20.y = 15;
            this.imgActive20.width = 39;
            this.imgActive20.height = 39;
            //imgActive21 
            this.imgActive21 = new easy.Image(true);
            this.imgActive21.name = "imgActive21";
            this.groupMove7.addChild(this.imgActive21);
            this.imgActive21.x = 541;
            this.imgActive21.y = 15;
            this.imgActive21.width = 39;
            this.imgActive21.height = 39;
            //groupMove8 
            this.groupMove8 = new easy.Group(true);
            this.groupMove8.name = "groupMove8";
            this.groupAll.addChild(this.groupMove8);
            this.groupMove8.showBg = false;
            this.groupMove8.border = false;
            this.groupMove8.x = 17;
            this.groupMove8.y = 746;
            //imgMove8 
            this.imgMove8 = new easy.Image(true);
            this.imgMove8.name = "imgMove8";
            this.groupMove8.addChild(this.imgMove8);
            this.imgMove8.width = 227;
            this.imgMove8.height = 45;
            //imgActive22 
            this.imgActive22 = new easy.Image(true);
            this.imgActive22.name = "imgActive22";
            this.groupMove8.addChild(this.imgActive22);
            this.imgActive22.x = 287;
            this.imgActive22.y = 4;
            this.imgActive22.width = 39;
            this.imgActive22.height = 39;
            //imgActive23 
            this.imgActive23 = new easy.Image(true);
            this.imgActive23.name = "imgActive23";
            this.groupMove8.addChild(this.imgActive23);
            this.imgActive23.x = 431;
            this.imgActive23.y = 5;
            this.imgActive23.width = 39;
            this.imgActive23.height = 39;
            //imgActive24 
            this.imgActive24 = new easy.Image(true);
            this.imgActive24.name = "imgActive24";
            this.groupMove8.addChild(this.imgActive24);
            this.imgActive24.x = 541;
            this.imgActive24.y = 5;
            this.imgActive24.width = 39;
            this.imgActive24.height = 39;
            //groupLook 
            this.groupLook = new easy.Group(true);
            this.groupLook.name = "groupLook";
            this.groupAll.addChild(this.groupLook);
            this.groupLook.showBg = false;
            this.groupLook.border = false;
            this.groupLook.x = 231;
            this.groupLook.y = 790;
            //imgArrows 
            this.imgArrows = new easy.Image(true);
            this.imgArrows.name = "imgArrows";
            this.groupLook.addChild(this.imgArrows);
            this.imgArrows.y = 36;
            this.imgArrows.width = 59;
            this.imgArrows.height = 46;
            //btnSubmit 
            this.btnSubmit = new easy.Button(true);
            this.btnSubmit.name = "btnSubmit";
            this.groupLook.addChild(this.btnSubmit);
            this.btnSubmit.width = 109;
            this.btnSubmit.height = 55;
            this.btnSubmit.x = 72;
            this.btnSubmit.y = 31;
            //groupClick 
            this.groupClick = new easy.Group(true);
            this.groupClick.name = "groupClick";
            this.groupAll.addChild(this.groupClick);
            this.groupClick.showBg = false;
            this.groupClick.border = false;
            this.groupClick.x = 129;
            this.groupClick.y = 316;
            this.groupClick.width = 382;
            this.groupClick.height = 330;
            this.groupClick.visible = false;
            //imgClick 
            this.imgClick = new easy.Image(true);
            this.imgClick.name = "imgClick";
            this.groupClick.addChild(this.imgClick);
            this.imgClick.width = 382;
            this.imgClick.height = 330;
            //btnDele 
            this.btnDele = new easy.Button(true);
            this.btnDele.name = "btnDele";
            this.groupClick.addChild(this.btnDele);
            this.btnDele.width = 44;
            this.btnDele.height = 44;
            this.btnDele.x = 320;
            this.btnDele.y = 20;
            //btnAgain 
            this.btnAgain = new easy.Button(true);
            this.btnAgain.name = "btnAgain";
            this.groupAll.addChild(this.btnAgain);
            this.btnAgain.width = 133;
            this.btnAgain.height = 47;
            this.btnAgain.x = 487;
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
        index7.prototype.initData = function () {
            _super.prototype.initData.call(this);
        };
        /**
         * 进入的逻辑
         * 可以再次根据外部数据情况做一些逻辑处理
         */
        index7.prototype.enter = function () {
        };
        /**
         * 退出的逻辑
         * 做一些数据的销毁或者初始化,保证下次进入的时候,不会残留
         */
        index7.prototype.outer = function () {
        };
        /**
         * 刷新UI皮肤显示
         */
        index7.prototype.validateNow = function () {
            this.drawDelay = false;
            var jsonData = RES.getRes("index7_json");
            if (jsonData != null) {
                this.spriteSheet = new egret.SpriteSheet(RES.getRes("index7_img"));
                for (var key in jsonData.texture) {
                    this.spriteSheet.createTexture(key, jsonData.texture[key].x, jsonData.texture[key].y, jsonData.texture[key].w, jsonData.texture[key].h);
                }
            }
            this.group.drawDelay = false;
            this.imgas.texture = RES.getRes("7");
            this.imgas.drawDelay = false;
            this.groupAll.drawDelay = false;
            this.imgBg.texture = RES.getRes("page08-03");
            this.imgBg.drawDelay = false;
            if (this.spriteSheet)
                this.imgGray.texture = this.spriteSheet.getTexture("pAge7-19");
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
                this.imgWord1.texture = this.spriteSheet.getTexture("pAge7-1");
            this.imgWord1.drawDelay = false;
            if (this.spriteSheet)
                this.imgWord2.texture = this.spriteSheet.getTexture("pAge7-2");
            this.imgWord2.drawDelay = false;
            if (this.spriteSheet)
                this.imgWord3.texture = this.spriteSheet.getTexture("pAge7-3");
            this.imgWord3.drawDelay = false;
            if (this.spriteSheet)
                this.imgWord4.texture = this.spriteSheet.getTexture("pAge7-4");
            this.imgWord4.drawDelay = false;
            if (this.spriteSheet)
                this.imgWord5.texture = this.spriteSheet.getTexture("pAge7-5");
            this.imgWord5.drawDelay = false;
            this.groupMove1.drawDelay = false;
            if (this.spriteSheet)
                this.imgMove1.texture = this.spriteSheet.getTexture("pAge7-6");
            this.imgMove1.drawDelay = false;
            if (this.spriteSheet)
                this.imgActive1.texture = this.spriteSheet.getTexture("pAge7-14");
            this.imgActive1.drawDelay = false;
            if (this.spriteSheet)
                this.imgActive2.texture = this.spriteSheet.getTexture("pAge7-14");
            this.imgActive2.drawDelay = false;
            if (this.spriteSheet)
                this.imgActive3.texture = this.spriteSheet.getTexture("pAge7-14");
            this.imgActive3.drawDelay = false;
            this.groupMove2.drawDelay = false;
            if (this.spriteSheet)
                this.imgMove2.texture = this.spriteSheet.getTexture("pAge7-7");
            this.imgMove2.drawDelay = false;
            if (this.spriteSheet)
                this.imgActive4.texture = this.spriteSheet.getTexture("pAge7-14");
            this.imgActive4.drawDelay = false;
            if (this.spriteSheet)
                this.imgActive5.texture = this.spriteSheet.getTexture("pAge7-14");
            this.imgActive5.drawDelay = false;
            if (this.spriteSheet)
                this.imgActive6.texture = this.spriteSheet.getTexture("pAge7-14");
            this.imgActive6.drawDelay = false;
            this.groupMove3.drawDelay = false;
            if (this.spriteSheet)
                this.imgMove3.texture = this.spriteSheet.getTexture("pAge7-8");
            this.imgMove3.drawDelay = false;
            if (this.spriteSheet)
                this.imgActive7.texture = this.spriteSheet.getTexture("pAge7-14");
            this.imgActive7.drawDelay = false;
            if (this.spriteSheet)
                this.imgActive8.texture = this.spriteSheet.getTexture("pAge7-14");
            this.imgActive8.drawDelay = false;
            if (this.spriteSheet)
                this.imgActive9.texture = this.spriteSheet.getTexture("pAge7-14");
            this.imgActive9.drawDelay = false;
            this.groupMove4.drawDelay = false;
            if (this.spriteSheet)
                this.imgMove4.texture = this.spriteSheet.getTexture("pAge7-9");
            this.imgMove4.drawDelay = false;
            if (this.spriteSheet)
                this.imgActive10.texture = this.spriteSheet.getTexture("pAge7-14");
            this.imgActive10.drawDelay = false;
            if (this.spriteSheet)
                this.imgActive11.texture = this.spriteSheet.getTexture("pAge7-14");
            this.imgActive11.drawDelay = false;
            if (this.spriteSheet)
                this.imgActive12.texture = this.spriteSheet.getTexture("pAge7-14");
            this.imgActive12.drawDelay = false;
            this.groupMove5.drawDelay = false;
            if (this.spriteSheet)
                this.imgMove5.texture = this.spriteSheet.getTexture("pAge7-10");
            this.imgMove5.drawDelay = false;
            if (this.spriteSheet)
                this.imgActive13.texture = this.spriteSheet.getTexture("pAge7-14");
            this.imgActive13.drawDelay = false;
            if (this.spriteSheet)
                this.imgActive14.texture = this.spriteSheet.getTexture("pAge7-14");
            this.imgActive14.drawDelay = false;
            if (this.spriteSheet)
                this.imgActive15.texture = this.spriteSheet.getTexture("pAge7-14");
            this.imgActive15.drawDelay = false;
            this.groupMove6.drawDelay = false;
            if (this.spriteSheet)
                this.imgMove6.texture = this.spriteSheet.getTexture("pAge7-11");
            this.imgMove6.drawDelay = false;
            if (this.spriteSheet)
                this.imgActive16.texture = this.spriteSheet.getTexture("pAge7-14");
            this.imgActive16.drawDelay = false;
            if (this.spriteSheet)
                this.imgActive17.texture = this.spriteSheet.getTexture("pAge7-14");
            this.imgActive17.drawDelay = false;
            if (this.spriteSheet)
                this.imgActive18.texture = this.spriteSheet.getTexture("pAge7-14");
            this.imgActive18.drawDelay = false;
            this.groupMove7.drawDelay = false;
            if (this.spriteSheet)
                this.imgMove7.texture = this.spriteSheet.getTexture("pAge7-12");
            this.imgMove7.drawDelay = false;
            if (this.spriteSheet)
                this.imgActive19.texture = this.spriteSheet.getTexture("pAge7-14");
            this.imgActive19.drawDelay = false;
            if (this.spriteSheet)
                this.imgActive20.texture = this.spriteSheet.getTexture("pAge7-14");
            this.imgActive20.drawDelay = false;
            if (this.spriteSheet)
                this.imgActive21.texture = this.spriteSheet.getTexture("pAge7-14");
            this.imgActive21.drawDelay = false;
            this.groupMove8.drawDelay = false;
            if (this.spriteSheet)
                this.imgMove8.texture = this.spriteSheet.getTexture("pAge7-13");
            this.imgMove8.drawDelay = false;
            if (this.spriteSheet)
                this.imgActive22.texture = this.spriteSheet.getTexture("pAge7-14");
            this.imgActive22.drawDelay = false;
            if (this.spriteSheet)
                this.imgActive23.texture = this.spriteSheet.getTexture("pAge7-14");
            this.imgActive23.drawDelay = false;
            if (this.spriteSheet)
                this.imgActive24.texture = this.spriteSheet.getTexture("pAge7-14");
            this.imgActive24.drawDelay = false;
            this.groupLook.drawDelay = false;
            if (this.spriteSheet)
                this.imgArrows.texture = this.spriteSheet.getTexture("pAge7-16");
            this.imgArrows.drawDelay = false;
            if (this.spriteSheet)
                this.btnSubmit.texture = this.spriteSheet.getTexture("pAge7-17");
            this.btnSubmit.drawDelay = false;
            this.groupClick.drawDelay = false;
            if (this.spriteSheet)
                this.imgClick.texture = this.spriteSheet.getTexture("pAge7-18");
            this.imgClick.drawDelay = false;
            if (this.spriteSheet)
                this.btnDele.texture = this.spriteSheet.getTexture("Page08-14");
            this.btnDele.drawDelay = false;
            this.btnAgain.texture = RES.getRes("Page2-18");
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
        return index7;
    }(easy.Group));
    modules.index7 = index7;
    __reflect(index7.prototype, "modules.index7");
})(modules || (modules = {}));
