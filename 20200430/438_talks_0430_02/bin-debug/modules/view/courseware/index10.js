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
     * @date  :2020-05-06 18:22:49
     * @EasyGame.org Tools
     */
    var index10 = (function (_super) {
        __extends(index10, _super);
        function index10() {
            var _this = _super.call(this, true) || this;
            _this.resSpriteSheet = "index10"; //合并材质资源名称
            _this.resTexture = ["10", "page08-03", "line1_1", "line1_2", "line1_3", "line1_4", "line1_5", "line1_6", "line1_7", "line1_8", "line2_1", "line2_2", "line2_3", "line2_4", "line2_5", "line2_6", "line2_7", "line2_8", "line3_1", "line3_2", "line3_3", "line3_4", "line3_5", "line3_6", "line3_7", "line3_8", "line4_1", "line4_2", "line4_3", "line4_4", "line4_5", "line4_6", "line4_7", "line4_8", "line5_1", "line5_2", "line5_3", "line5_4", "line5_5", "line5_6", "line5_7", "line5_8", "line6_1", "line6_2", "line6_3", "line6_4", "line6_5", "line6_6", "line6_7", "line6_8", "line7_1", "line7_2", "line7_3", "line7_4", "line7_5", "line7_6", "line7_7", "line7_8", "line8_1", "line8_2", "line8_3", "line8_4", "line8_5", "line8_6", "line8_7", "line8_8", "Page2-18"]; //单材质资源名称
            _this.resGroup = ["courseware_index10"]; //配置文件的Group
            _this.resFiles = ["courseware/index10_loader_200506182249.json"]; //需要下载的资源group
            _this.spriteSheet = null; //ui对应的材质集,已经分割好,方便外部读取方便
            _this.group = null;
            _this.imgas = null;
            _this.groupAll = null;
            _this.imgBg = null;
            _this.img1 = null;
            _this.img2 = null;
            _this.img3 = null;
            _this.imgWord1 = null;
            _this.imgLeft1 = null;
            _this.imgLeft2 = null;
            _this.imgLeft3 = null;
            _this.imgLeft4 = null;
            _this.imgLeft5 = null;
            _this.imgLeft6 = null;
            _this.imgLeft7 = null;
            _this.imgLeft8 = null;
            _this.imgRig1 = null;
            _this.imgRig2 = null;
            _this.imgRig3 = null;
            _this.imgRig4 = null;
            _this.imgRig5 = null;
            _this.imgRig6 = null;
            _this.imgRig7 = null;
            _this.imgRig8 = null;
            _this.groupType1 = null;
            _this.img1_1 = null;
            _this.img1_2 = null;
            _this.img1_3 = null;
            _this.img1_4 = null;
            _this.img1_5 = null;
            _this.img1_6 = null;
            _this.img1_7 = null;
            _this.img1_8 = null;
            _this.groupType2 = null;
            _this.img2_1 = null;
            _this.img2_2 = null;
            _this.img2_3 = null;
            _this.img2_4 = null;
            _this.img2_5 = null;
            _this.img2_6 = null;
            _this.img2_7 = null;
            _this.img2_8 = null;
            _this.groupType3 = null;
            _this.img3_1 = null;
            _this.img3_2 = null;
            _this.img3_3 = null;
            _this.img3_4 = null;
            _this.img3_5 = null;
            _this.img3_6 = null;
            _this.img3_7 = null;
            _this.img3_8 = null;
            _this.groupType4 = null;
            _this.img4_1 = null;
            _this.img4_2 = null;
            _this.img4_3 = null;
            _this.img4_4 = null;
            _this.img4_5 = null;
            _this.img4_6 = null;
            _this.img4_7 = null;
            _this.img4_8 = null;
            _this.groupType5 = null;
            _this.img5_1 = null;
            _this.img5_2 = null;
            _this.img5_3 = null;
            _this.img5_4 = null;
            _this.img5_5 = null;
            _this.img5_6 = null;
            _this.img5_7 = null;
            _this.img5_8 = null;
            _this.groupType6 = null;
            _this.img6_1 = null;
            _this.img6_2 = null;
            _this.img6_3 = null;
            _this.img6_4 = null;
            _this.img6_5 = null;
            _this.img6_6 = null;
            _this.img6_7 = null;
            _this.img6_8 = null;
            _this.groupType7 = null;
            _this.img7_1 = null;
            _this.img7_2 = null;
            _this.img7_3 = null;
            _this.img7_4 = null;
            _this.img7_5 = null;
            _this.img7_6 = null;
            _this.img7_7 = null;
            _this.img7_8 = null;
            _this.groupType8 = null;
            _this.img8_1 = null;
            _this.img8_2 = null;
            _this.img8_3 = null;
            _this.img8_4 = null;
            _this.img8_5 = null;
            _this.img8_6 = null;
            _this.img8_7 = null;
            _this.img8_8 = null;
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
        index10.prototype.createChildren = function () {
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
            this.imgas.y = -107;
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
            this.imgWord1.x = 106;
            this.imgWord1.y = 44;
            this.imgWord1.width = 437;
            this.imgWord1.height = 45;
            //imgLeft1 
            this.imgLeft1 = new easy.Image(true);
            this.imgLeft1.name = "imgLeft1";
            this.groupAll.addChild(this.imgLeft1);
            this.imgLeft1.x = 39;
            this.imgLeft1.y = 135;
            this.imgLeft1.width = 131;
            this.imgLeft1.height = 65;
            //imgLeft2 
            this.imgLeft2 = new easy.Image(true);
            this.imgLeft2.name = "imgLeft2";
            this.groupAll.addChild(this.imgLeft2);
            this.imgLeft2.x = 39;
            this.imgLeft2.y = 224;
            this.imgLeft2.width = 131;
            this.imgLeft2.height = 64;
            //imgLeft3 
            this.imgLeft3 = new easy.Image(true);
            this.imgLeft3.name = "imgLeft3";
            this.groupAll.addChild(this.imgLeft3);
            this.imgLeft3.x = 39;
            this.imgLeft3.y = 307;
            this.imgLeft3.width = 131;
            this.imgLeft3.height = 67;
            //imgLeft4 
            this.imgLeft4 = new easy.Image(true);
            this.imgLeft4.name = "imgLeft4";
            this.groupAll.addChild(this.imgLeft4);
            this.imgLeft4.x = 39;
            this.imgLeft4.y = 392;
            this.imgLeft4.width = 131;
            this.imgLeft4.height = 67;
            //imgLeft5 
            this.imgLeft5 = new easy.Image(true);
            this.imgLeft5.name = "imgLeft5";
            this.groupAll.addChild(this.imgLeft5);
            this.imgLeft5.x = 39;
            this.imgLeft5.y = 474;
            this.imgLeft5.width = 131;
            this.imgLeft5.height = 66;
            //imgLeft6 
            this.imgLeft6 = new easy.Image(true);
            this.imgLeft6.name = "imgLeft6";
            this.groupAll.addChild(this.imgLeft6);
            this.imgLeft6.x = 39;
            this.imgLeft6.y = 562;
            this.imgLeft6.width = 131;
            this.imgLeft6.height = 66;
            //imgLeft7 
            this.imgLeft7 = new easy.Image(true);
            this.imgLeft7.name = "imgLeft7";
            this.groupAll.addChild(this.imgLeft7);
            this.imgLeft7.x = 39;
            this.imgLeft7.y = 649;
            this.imgLeft7.width = 131;
            this.imgLeft7.height = 67;
            //imgLeft8 
            this.imgLeft8 = new easy.Image(true);
            this.imgLeft8.name = "imgLeft8";
            this.groupAll.addChild(this.imgLeft8);
            this.imgLeft8.x = 39;
            this.imgLeft8.y = 742;
            this.imgLeft8.width = 131;
            this.imgLeft8.height = 65;
            //imgRig1 
            this.imgRig1 = new easy.Image(true);
            this.imgRig1.name = "imgRig1";
            this.groupAll.addChild(this.imgRig1);
            this.imgRig1.x = 382;
            this.imgRig1.y = 110;
            this.imgRig1.width = 235;
            this.imgRig1.height = 74;
            //imgRig2 
            this.imgRig2 = new easy.Image(true);
            this.imgRig2.name = "imgRig2";
            this.groupAll.addChild(this.imgRig2);
            this.imgRig2.x = 382;
            this.imgRig2.y = 201;
            this.imgRig2.width = 235;
            this.imgRig2.height = 75;
            //imgRig3 
            this.imgRig3 = new easy.Image(true);
            this.imgRig3.name = "imgRig3";
            this.groupAll.addChild(this.imgRig3);
            this.imgRig3.x = 382;
            this.imgRig3.y = 289;
            this.imgRig3.width = 235;
            this.imgRig3.height = 76;
            //imgRig4 
            this.imgRig4 = new easy.Image(true);
            this.imgRig4.name = "imgRig4";
            this.groupAll.addChild(this.imgRig4);
            this.imgRig4.x = 382;
            this.imgRig4.y = 380;
            this.imgRig4.width = 235;
            this.imgRig4.height = 77;
            //imgRig5 
            this.imgRig5 = new easy.Image(true);
            this.imgRig5.name = "imgRig5";
            this.groupAll.addChild(this.imgRig5);
            this.imgRig5.x = 382;
            this.imgRig5.y = 476;
            this.imgRig5.width = 235;
            this.imgRig5.height = 77;
            //imgRig6 
            this.imgRig6 = new easy.Image(true);
            this.imgRig6.name = "imgRig6";
            this.groupAll.addChild(this.imgRig6);
            this.imgRig6.x = 383;
            this.imgRig6.y = 567;
            this.imgRig6.width = 235;
            this.imgRig6.height = 77;
            //imgRig7 
            this.imgRig7 = new easy.Image(true);
            this.imgRig7.name = "imgRig7";
            this.groupAll.addChild(this.imgRig7);
            this.imgRig7.x = 383;
            this.imgRig7.y = 664;
            this.imgRig7.width = 235;
            this.imgRig7.height = 75;
            //imgRig8 
            this.imgRig8 = new easy.Image(true);
            this.imgRig8.name = "imgRig8";
            this.groupAll.addChild(this.imgRig8);
            this.imgRig8.x = 383;
            this.imgRig8.y = 761;
            this.imgRig8.width = 235;
            this.imgRig8.height = 76;
            //groupType1 
            this.groupType1 = new easy.Group(true);
            this.groupType1.name = "groupType1";
            this.groupAll.addChild(this.groupType1);
            this.groupType1.showBg = false;
            this.groupType1.border = false;
            this.groupType1.x = 176;
            this.groupType1.y = 120;
            this.groupType1.width = 200;
            this.groupType1.height = 700;
            this.groupType1.visible = false;
            //img1_1 
            this.img1_1 = new easy.Image(true);
            this.img1_1.name = "img1_1";
            this.groupType1.addChild(this.img1_1);
            this.img1_1.x = -15;
            this.img1_1.y = 25;
            this.img1_1.width = 229;
            this.img1_1.height = 24;
            //img1_2 
            this.img1_2 = new easy.Image(true);
            this.img1_2.name = "img1_2";
            this.groupType1.addChild(this.img1_2);
            this.img1_2.x = -11;
            this.img1_2.y = 49;
            this.img1_2.width = 230;
            this.img1_2.height = 72;
            //img1_3 
            this.img1_3 = new easy.Image(true);
            this.img1_3.name = "img1_3";
            this.groupType1.addChild(this.img1_3);
            this.img1_3.x = -15;
            this.img1_3.y = 47;
            this.img1_3.width = 230;
            this.img1_3.height = 158;
            //img1_4 
            this.img1_4 = new easy.Image(true);
            this.img1_4.name = "img1_4";
            this.groupType1.addChild(this.img1_4);
            this.img1_4.x = -12;
            this.img1_4.y = 48;
            this.img1_4.width = 230;
            this.img1_4.height = 252;
            //img1_5 
            this.img1_5 = new easy.Image(true);
            this.img1_5.name = "img1_5";
            this.groupType1.addChild(this.img1_5);
            this.img1_5.x = -13;
            this.img1_5.y = 48;
            this.img1_5.width = 231;
            this.img1_5.height = 345;
            //img1_6 
            this.img1_6 = new easy.Image(true);
            this.img1_6.name = "img1_6";
            this.groupType1.addChild(this.img1_6);
            this.img1_6.x = -13;
            this.img1_6.y = 53;
            this.img1_6.width = 223;
            this.img1_6.height = 424;
            //img1_7 
            this.img1_7 = new easy.Image(true);
            this.img1_7.name = "img1_7";
            this.groupType1.addChild(this.img1_7);
            this.img1_7.x = -17;
            this.img1_7.y = 46;
            this.img1_7.width = 231;
            this.img1_7.height = 535;
            //img1_8 
            this.img1_8 = new easy.Image(true);
            this.img1_8.name = "img1_8";
            this.groupType1.addChild(this.img1_8);
            this.img1_8.x = -16;
            this.img1_8.y = 49;
            this.img1_8.width = 231;
            this.img1_8.height = 625;
            //groupType2 
            this.groupType2 = new easy.Group(true);
            this.groupType2.name = "groupType2";
            this.groupAll.addChild(this.groupType2);
            this.groupType2.showBg = false;
            this.groupType2.border = false;
            this.groupType2.x = 176;
            this.groupType2.y = 120;
            this.groupType2.width = 200;
            this.groupType2.height = 700;
            this.groupType2.visible = false;
            //img2_1 
            this.img2_1 = new easy.Image(true);
            this.img2_1.name = "img2_1";
            this.groupType2.addChild(this.img2_1);
            this.img2_1.x = -18;
            this.img2_1.y = 26;
            this.img2_1.width = 230;
            this.img2_1.height = 115;
            //img2_2 
            this.img2_2 = new easy.Image(true);
            this.img2_2.name = "img2_2";
            this.groupType2.addChild(this.img2_2);
            this.img2_2.x = -12;
            this.img2_2.y = 116;
            this.img2_2.width = 229;
            this.img2_2.height = 23;
            //img2_3 
            this.img2_3 = new easy.Image(true);
            this.img2_3.name = "img2_3";
            this.groupType2.addChild(this.img2_3);
            this.img2_3.x = -13;
            this.img2_3.y = 136;
            this.img2_3.width = 230;
            this.img2_3.height = 69;
            //img2_4 
            this.img2_4 = new easy.Image(true);
            this.img2_4.name = "img2_4";
            this.groupType2.addChild(this.img2_4);
            this.img2_4.x = -15;
            this.img2_4.y = 136;
            this.img2_4.width = 230;
            this.img2_4.height = 162;
            //img2_5 
            this.img2_5 = new easy.Image(true);
            this.img2_5.name = "img2_5";
            this.groupType2.addChild(this.img2_5);
            this.img2_5.x = -16;
            this.img2_5.y = 137;
            this.img2_5.width = 230;
            this.img2_5.height = 254;
            //img2_6 
            this.img2_6 = new easy.Image(true);
            this.img2_6.name = "img2_6";
            this.groupType2.addChild(this.img2_6);
            this.img2_6.x = -17;
            this.img2_6.y = 137;
            this.img2_6.width = 231;
            this.img2_6.height = 346;
            //img2_7 
            this.img2_7 = new easy.Image(true);
            this.img2_7.name = "img2_7";
            this.groupType2.addChild(this.img2_7);
            this.img2_7.x = -16;
            this.img2_7.y = 137;
            this.img2_7.width = 231;
            this.img2_7.height = 445;
            //img2_8 
            this.img2_8 = new easy.Image(true);
            this.img2_8.name = "img2_8";
            this.groupType2.addChild(this.img2_8);
            this.img2_8.x = -17;
            this.img2_8.y = 137;
            this.img2_8.width = 231;
            this.img2_8.height = 535;
            //groupType3 
            this.groupType3 = new easy.Group(true);
            this.groupType3.name = "groupType3";
            this.groupAll.addChild(this.groupType3);
            this.groupType3.showBg = false;
            this.groupType3.border = false;
            this.groupType3.x = 176;
            this.groupType3.y = 120;
            this.groupType3.width = 200;
            this.groupType3.height = 700;
            this.groupType3.visible = false;
            //img3_1 
            this.img3_1 = new easy.Image(true);
            this.img3_1.name = "img3_1";
            this.groupType3.addChild(this.img3_1);
            this.img3_1.x = -18;
            this.img3_1.y = 26;
            this.img3_1.width = 230;
            this.img3_1.height = 194;
            //img3_2 
            this.img3_2 = new easy.Image(true);
            this.img3_2.name = "img3_2";
            this.groupType3.addChild(this.img3_2);
            this.img3_2.x = -12;
            this.img3_2.y = 116;
            this.img3_2.width = 230;
            this.img3_2.height = 102;
            //img3_3 
            this.img3_3 = new easy.Image(true);
            this.img3_3.name = "img3_3";
            this.groupType3.addChild(this.img3_3);
            this.img3_3.x = -12;
            this.img3_3.y = 203;
            this.img3_3.width = 229;
            this.img3_3.height = 16;
            //img3_4 
            this.img3_4 = new easy.Image(true);
            this.img3_4.name = "img3_4";
            this.groupType3.addChild(this.img3_4);
            this.img3_4.x = -15;
            this.img3_4.y = 218;
            this.img3_4.width = 230;
            this.img3_4.height = 82;
            //img3_5 
            this.img3_5 = new easy.Image(true);
            this.img3_5.name = "img3_5";
            this.groupType3.addChild(this.img3_5);
            this.img3_5.x = -16;
            this.img3_5.y = 218;
            this.img3_5.width = 230;
            this.img3_5.height = 174;
            //img3_6 
            this.img3_6 = new easy.Image(true);
            this.img3_6.name = "img3_6";
            this.groupType3.addChild(this.img3_6);
            this.img3_6.x = -17;
            this.img3_6.y = 217;
            this.img3_6.width = 230;
            this.img3_6.height = 266;
            //img3_7 
            this.img3_7 = new easy.Image(true);
            this.img3_7.name = "img3_7";
            this.groupType3.addChild(this.img3_7);
            this.img3_7.x = -16;
            this.img3_7.y = 216;
            this.img3_7.width = 231;
            this.img3_7.height = 365;
            //img3_8 
            this.img3_8 = new easy.Image(true);
            this.img3_8.name = "img3_8";
            this.groupType3.addChild(this.img3_8);
            this.img3_8.x = -11;
            this.img3_8.y = 220;
            this.img3_8.width = 222;
            this.img3_8.height = 448;
            //groupType4 
            this.groupType4 = new easy.Group(true);
            this.groupType4.name = "groupType4";
            this.groupAll.addChild(this.groupType4);
            this.groupType4.showBg = false;
            this.groupType4.border = false;
            this.groupType4.x = 176;
            this.groupType4.y = 120;
            this.groupType4.width = 200;
            this.groupType4.height = 700;
            this.groupType4.visible = false;
            //img4_1 
            this.img4_1 = new easy.Image(true);
            this.img4_1.name = "img4_1";
            this.groupType4.addChild(this.img4_1);
            this.img4_1.x = -18;
            this.img4_1.y = 26;
            this.img4_1.width = 231;
            this.img4_1.height = 280;
            //img4_2 
            this.img4_2 = new easy.Image(true);
            this.img4_2.name = "img4_2";
            this.groupType4.addChild(this.img4_2);
            this.img4_2.x = -12;
            this.img4_2.y = 114;
            this.img4_2.width = 230;
            this.img4_2.height = 188;
            //img4_3 
            this.img4_3 = new easy.Image(true);
            this.img4_3.name = "img4_3";
            this.groupType4.addChild(this.img4_3);
            this.img4_3.x = -12;
            this.img4_3.y = 202;
            this.img4_3.width = 230;
            this.img4_3.height = 102;
            //img4_4 
            this.img4_4 = new easy.Image(true);
            this.img4_4.name = "img4_4";
            this.groupType4.addChild(this.img4_4);
            this.img4_4.x = -15;
            this.img4_4.y = 297;
            this.img4_4.width = 229;
            this.img4_4.height = 8;
            //img4_5 
            this.img4_5 = new easy.Image(true);
            this.img4_5.name = "img4_5";
            this.groupType4.addChild(this.img4_5);
            this.img4_5.x = -15;
            this.img4_5.y = 303;
            this.img4_5.width = 230;
            this.img4_5.height = 88;
            //img4_6 
            this.img4_6 = new easy.Image(true);
            this.img4_6.name = "img4_6";
            this.groupType4.addChild(this.img4_6);
            this.img4_6.x = -12;
            this.img4_6.y = 304;
            this.img4_6.width = 230;
            this.img4_6.height = 180;
            //img4_7 
            this.img4_7 = new easy.Image(true);
            this.img4_7.name = "img4_7";
            this.groupType4.addChild(this.img4_7);
            this.img4_7.x = -15;
            this.img4_7.y = 303;
            this.img4_7.width = 231;
            this.img4_7.height = 279;
            //img4_8 
            this.img4_8 = new easy.Image(true);
            this.img4_8.name = "img4_8";
            this.groupType4.addChild(this.img4_8);
            this.img4_8.x = -15;
            this.img4_8.y = 305;
            this.img4_8.width = 231;
            this.img4_8.height = 369;
            //groupType5 
            this.groupType5 = new easy.Group(true);
            this.groupType5.name = "groupType5";
            this.groupAll.addChild(this.groupType5);
            this.groupType5.showBg = false;
            this.groupType5.border = false;
            this.groupType5.x = 176;
            this.groupType5.y = 120;
            this.groupType5.width = 200;
            this.groupType5.height = 700;
            this.groupType5.visible = false;
            //img5_1 
            this.img5_1 = new easy.Image(true);
            this.img5_1.name = "img5_1";
            this.groupType5.addChild(this.img5_1);
            this.img5_1.x = -18;
            this.img5_1.y = 26;
            this.img5_1.width = 231;
            this.img5_1.height = 366;
            //img5_2 
            this.img5_2 = new easy.Image(true);
            this.img5_2.name = "img5_2";
            this.groupType5.addChild(this.img5_2);
            this.img5_2.x = -12;
            this.img5_2.y = 114;
            this.img5_2.width = 231;
            this.img5_2.height = 274;
            //img5_3 
            this.img5_3 = new easy.Image(true);
            this.img5_3.name = "img5_3";
            this.groupType5.addChild(this.img5_3);
            this.img5_3.x = -12;
            this.img5_3.y = 202;
            this.img5_3.width = 230;
            this.img5_3.height = 188;
            //img5_4 
            this.img5_4 = new easy.Image(true);
            this.img5_4.name = "img5_4";
            this.groupType5.addChild(this.img5_4);
            this.img5_4.x = -15;
            this.img5_4.y = 297;
            this.img5_4.width = 230;
            this.img5_4.height = 94;
            //img5_5 
            this.img5_5 = new easy.Image(true);
            this.img5_5.name = "img5_5";
            this.groupType5.addChild(this.img5_5);
            this.img5_5.x = -15;
            this.img5_5.y = 389;
            this.img5_5.width = 229;
            this.img5_5.height = 2;
            //img5_6 
            this.img5_6 = new easy.Image(true);
            this.img5_6.name = "img5_6";
            this.groupType5.addChild(this.img5_6);
            this.img5_6.x = -12;
            this.img5_6.y = 390;
            this.img5_6.width = 230;
            this.img5_6.height = 94;
            //img5_7 
            this.img5_7 = new easy.Image(true);
            this.img5_7.name = "img5_7";
            this.groupType5.addChild(this.img5_7);
            this.img5_7.x = -15;
            this.img5_7.y = 389;
            this.img5_7.width = 230;
            this.img5_7.height = 193;
            //img5_8 
            this.img5_8 = new easy.Image(true);
            this.img5_8.name = "img5_8";
            this.groupType5.addChild(this.img5_8);
            this.img5_8.x = -15;
            this.img5_8.y = 390;
            this.img5_8.width = 231;
            this.img5_8.height = 283;
            //groupType6 
            this.groupType6 = new easy.Group(true);
            this.groupType6.name = "groupType6";
            this.groupAll.addChild(this.groupType6);
            this.groupType6.showBg = false;
            this.groupType6.border = false;
            this.groupType6.x = 176;
            this.groupType6.y = 120;
            this.groupType6.width = 200;
            this.groupType6.height = 700;
            this.groupType6.visible = false;
            //img6_1 
            this.img6_1 = new easy.Image(true);
            this.img6_1.name = "img6_1";
            this.groupType6.addChild(this.img6_1);
            this.img6_1.x = -18;
            this.img6_1.y = 26;
            this.img6_1.width = 231;
            this.img6_1.height = 452;
            //img6_2 
            this.img6_2 = new easy.Image(true);
            this.img6_2.name = "img6_2";
            this.groupType6.addChild(this.img6_2);
            this.img6_2.x = -15;
            this.img6_2.y = 113;
            this.img6_2.width = 231;
            this.img6_2.height = 360;
            //img6_3 
            this.img6_3 = new easy.Image(true);
            this.img6_3.name = "img6_3";
            this.groupType6.addChild(this.img6_3);
            this.img6_3.x = -15;
            this.img6_3.y = 199;
            this.img6_3.width = 231;
            this.img6_3.height = 274;
            //img6_4 
            this.img6_4 = new easy.Image(true);
            this.img6_4.name = "img6_4";
            this.groupType6.addChild(this.img6_4);
            this.img6_4.x = -15;
            this.img6_4.y = 296;
            this.img6_4.width = 230;
            this.img6_4.height = 180;
            //img6_5 
            this.img6_5 = new easy.Image(true);
            this.img6_5.name = "img6_5";
            this.groupType6.addChild(this.img6_5);
            this.img6_5.x = -15;
            this.img6_5.y = 389;
            this.img6_5.width = 230;
            this.img6_5.height = 88;
            //img6_6 
            this.img6_6 = new easy.Image(true);
            this.img6_6.name = "img6_6";
            this.groupType6.addChild(this.img6_6);
            this.img6_6.x = -12;
            this.img6_6.y = 474;
            this.img6_6.width = 229;
            this.img6_6.height = 8;
            //img6_7 
            this.img6_7 = new easy.Image(true);
            this.img6_7.name = "img6_7";
            this.groupType6.addChild(this.img6_7);
            this.img6_7.x = -15;
            this.img6_7.y = 474;
            this.img6_7.width = 230;
            this.img6_7.height = 107;
            //img6_8 
            this.img6_8 = new easy.Image(true);
            this.img6_8.name = "img6_8";
            this.groupType6.addChild(this.img6_8);
            this.img6_8.x = -15;
            this.img6_8.y = 475;
            this.img6_8.width = 230;
            this.img6_8.height = 197;
            //groupType7 
            this.groupType7 = new easy.Group(true);
            this.groupType7.name = "groupType7";
            this.groupAll.addChild(this.groupType7);
            this.groupType7.showBg = false;
            this.groupType7.border = false;
            this.groupType7.x = 176;
            this.groupType7.y = 120;
            this.groupType7.width = 200;
            this.groupType7.height = 700;
            this.groupType7.visible = false;
            //img7_1 
            this.img7_1 = new easy.Image(true);
            this.img7_1.name = "img7_1";
            this.groupType7.addChild(this.img7_1);
            this.img7_1.x = -18;
            this.img7_1.y = 26;
            this.img7_1.width = 231;
            this.img7_1.height = 538;
            //img7_2 
            this.img7_2 = new easy.Image(true);
            this.img7_2.name = "img7_2";
            this.groupType7.addChild(this.img7_2);
            this.img7_2.x = -15;
            this.img7_2.y = 113;
            this.img7_2.width = 231;
            this.img7_2.height = 446;
            //img7_3 
            this.img7_3 = new easy.Image(true);
            this.img7_3.name = "img7_3";
            this.groupType7.addChild(this.img7_3);
            this.img7_3.x = -15;
            this.img7_3.y = 199;
            this.img7_3.width = 231;
            this.img7_3.height = 360;
            //img7_4 
            this.img7_4 = new easy.Image(true);
            this.img7_4.name = "img7_4";
            this.groupType7.addChild(this.img7_4);
            this.img7_4.x = -15;
            this.img7_4.y = 296;
            this.img7_4.width = 230;
            this.img7_4.height = 266;
            //img7_5 
            this.img7_5 = new easy.Image(true);
            this.img7_5.name = "img7_5";
            this.groupType7.addChild(this.img7_5);
            this.img7_5.x = -15;
            this.img7_5.y = 389;
            this.img7_5.width = 230;
            this.img7_5.height = 174;
            //img7_6 
            this.img7_6 = new easy.Image(true);
            this.img7_6.name = "img7_6";
            this.groupType7.addChild(this.img7_6);
            this.img7_6.x = -12;
            this.img7_6.y = 480;
            this.img7_6.width = 230;
            this.img7_6.height = 82;
            //img7_7 
            this.img7_7 = new easy.Image(true);
            this.img7_7.name = "img7_7";
            this.groupType7.addChild(this.img7_7);
            this.img7_7.x = -14;
            this.img7_7.y = 562;
            this.img7_7.width = 229;
            this.img7_7.height = 21;
            //img7_8 
            this.img7_8 = new easy.Image(true);
            this.img7_8.name = "img7_8";
            this.groupType7.addChild(this.img7_8);
            this.img7_8.x = -15;
            this.img7_8.y = 560;
            this.img7_8.width = 230;
            this.img7_8.height = 111;
            //groupType8 
            this.groupType8 = new easy.Group(true);
            this.groupType8.name = "groupType8";
            this.groupAll.addChild(this.groupType8);
            this.groupType8.showBg = false;
            this.groupType8.border = false;
            this.groupType8.x = 176;
            this.groupType8.y = 120;
            this.groupType8.width = 200;
            this.groupType8.height = 700;
            this.groupType8.visible = false;
            //img8_1 
            this.img8_1 = new easy.Image(true);
            this.img8_1.name = "img8_1";
            this.groupType8.addChild(this.img8_1);
            this.img8_1.x = -18;
            this.img8_1.y = 26;
            this.img8_1.width = 231;
            this.img8_1.height = 631;
            //img8_2 
            this.img8_2 = new easy.Image(true);
            this.img8_2.name = "img8_2";
            this.groupType8.addChild(this.img8_2);
            this.img8_2.x = -15;
            this.img8_2.y = 113;
            this.img8_2.width = 231;
            this.img8_2.height = 539;
            //img8_3 
            this.img8_3 = new easy.Image(true);
            this.img8_3.name = "img8_3";
            this.groupType8.addChild(this.img8_3);
            this.img8_3.x = -15;
            this.img8_3.y = 199;
            this.img8_3.width = 231;
            this.img8_3.height = 453;
            //img8_4 
            this.img8_4 = new easy.Image(true);
            this.img8_4.name = "img8_4";
            this.groupType8.addChild(this.img8_4);
            this.img8_4.x = -15;
            this.img8_4.y = 296;
            this.img8_4.width = 231;
            this.img8_4.height = 359;
            //img8_5 
            this.img8_5 = new easy.Image(true);
            this.img8_5.name = "img8_5";
            this.groupType8.addChild(this.img8_5);
            this.img8_5.x = -15;
            this.img8_5.y = 389;
            this.img8_5.width = 230;
            this.img8_5.height = 267;
            //img8_6 
            this.img8_6 = new easy.Image(true);
            this.img8_6.name = "img8_6";
            this.groupType8.addChild(this.img8_6);
            this.img8_6.x = -12;
            this.img8_6.y = 480;
            this.img8_6.width = 230;
            this.img8_6.height = 175;
            //img8_7 
            this.img8_7 = new easy.Image(true);
            this.img8_7.name = "img8_7";
            this.groupType8.addChild(this.img8_7);
            this.img8_7.x = -14;
            this.img8_7.y = 581;
            this.img8_7.width = 230;
            this.img8_7.height = 76;
            //img8_8 
            this.img8_8 = new easy.Image(true);
            this.img8_8.name = "img8_8";
            this.groupType8.addChild(this.img8_8);
            this.img8_8.x = -13;
            this.img8_8.y = 655;
            this.img8_8.width = 229;
            this.img8_8.height = 18;
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
        index10.prototype.initData = function () {
            _super.prototype.initData.call(this);
        };
        /**
         * 进入的逻辑
         * 可以再次根据外部数据情况做一些逻辑处理
         */
        index10.prototype.enter = function () {
        };
        /**
         * 退出的逻辑
         * 做一些数据的销毁或者初始化,保证下次进入的时候,不会残留
         */
        index10.prototype.outer = function () {
        };
        /**
         * 刷新UI皮肤显示
         */
        index10.prototype.validateNow = function () {
            this.drawDelay = false;
            var jsonData = RES.getRes("index10_json");
            if (jsonData != null) {
                this.spriteSheet = new egret.SpriteSheet(RES.getRes("index10_img"));
                for (var key in jsonData.texture) {
                    this.spriteSheet.createTexture(key, jsonData.texture[key].x, jsonData.texture[key].y, jsonData.texture[key].w, jsonData.texture[key].h);
                }
            }
            this.group.drawDelay = false;
            this.imgas.texture = RES.getRes("10");
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
                this.imgWord1.texture = this.spriteSheet.getTexture("Page10_1");
            this.imgWord1.drawDelay = false;
            if (this.spriteSheet)
                this.imgLeft1.texture = this.spriteSheet.getTexture("Page10_2");
            this.imgLeft1.drawDelay = false;
            if (this.spriteSheet)
                this.imgLeft2.texture = this.spriteSheet.getTexture("Page10_3");
            this.imgLeft2.drawDelay = false;
            if (this.spriteSheet)
                this.imgLeft3.texture = this.spriteSheet.getTexture("Page10_4");
            this.imgLeft3.drawDelay = false;
            if (this.spriteSheet)
                this.imgLeft4.texture = this.spriteSheet.getTexture("Page10_5");
            this.imgLeft4.drawDelay = false;
            if (this.spriteSheet)
                this.imgLeft5.texture = this.spriteSheet.getTexture("Page10_6");
            this.imgLeft5.drawDelay = false;
            if (this.spriteSheet)
                this.imgLeft6.texture = this.spriteSheet.getTexture("Page10_7");
            this.imgLeft6.drawDelay = false;
            if (this.spriteSheet)
                this.imgLeft7.texture = this.spriteSheet.getTexture("Page10_8");
            this.imgLeft7.drawDelay = false;
            if (this.spriteSheet)
                this.imgLeft8.texture = this.spriteSheet.getTexture("Page10_9");
            this.imgLeft8.drawDelay = false;
            if (this.spriteSheet)
                this.imgRig1.texture = this.spriteSheet.getTexture("Page10_10");
            this.imgRig1.drawDelay = false;
            if (this.spriteSheet)
                this.imgRig2.texture = this.spriteSheet.getTexture("Page10_11");
            this.imgRig2.drawDelay = false;
            if (this.spriteSheet)
                this.imgRig3.texture = this.spriteSheet.getTexture("Page10_12");
            this.imgRig3.drawDelay = false;
            if (this.spriteSheet)
                this.imgRig4.texture = this.spriteSheet.getTexture("Page10_13");
            this.imgRig4.drawDelay = false;
            if (this.spriteSheet)
                this.imgRig5.texture = this.spriteSheet.getTexture("Page10_14");
            this.imgRig5.drawDelay = false;
            if (this.spriteSheet)
                this.imgRig6.texture = this.spriteSheet.getTexture("Page10_15");
            this.imgRig6.drawDelay = false;
            if (this.spriteSheet)
                this.imgRig7.texture = this.spriteSheet.getTexture("Page10_16");
            this.imgRig7.drawDelay = false;
            if (this.spriteSheet)
                this.imgRig8.texture = this.spriteSheet.getTexture("Page10_17");
            this.imgRig8.drawDelay = false;
            this.groupType1.drawDelay = false;
            this.img1_1.texture = RES.getRes("line1_1");
            this.img1_1.drawDelay = false;
            this.img1_2.texture = RES.getRes("line1_2");
            this.img1_2.drawDelay = false;
            this.img1_3.texture = RES.getRes("line1_3");
            this.img1_3.drawDelay = false;
            this.img1_4.texture = RES.getRes("line1_4");
            this.img1_4.drawDelay = false;
            this.img1_5.texture = RES.getRes("line1_5");
            this.img1_5.drawDelay = false;
            this.img1_6.texture = RES.getRes("line1_6");
            this.img1_6.drawDelay = false;
            this.img1_7.texture = RES.getRes("line1_7");
            this.img1_7.drawDelay = false;
            this.img1_8.texture = RES.getRes("line1_8");
            this.img1_8.drawDelay = false;
            this.groupType2.drawDelay = false;
            this.img2_1.texture = RES.getRes("line2_1");
            this.img2_1.drawDelay = false;
            this.img2_2.texture = RES.getRes("line2_2");
            this.img2_2.drawDelay = false;
            this.img2_3.texture = RES.getRes("line2_3");
            this.img2_3.drawDelay = false;
            this.img2_4.texture = RES.getRes("line2_4");
            this.img2_4.drawDelay = false;
            this.img2_5.texture = RES.getRes("line2_5");
            this.img2_5.drawDelay = false;
            this.img2_6.texture = RES.getRes("line2_6");
            this.img2_6.drawDelay = false;
            this.img2_7.texture = RES.getRes("line2_7");
            this.img2_7.drawDelay = false;
            this.img2_8.texture = RES.getRes("line2_8");
            this.img2_8.drawDelay = false;
            this.groupType3.drawDelay = false;
            this.img3_1.texture = RES.getRes("line3_1");
            this.img3_1.drawDelay = false;
            this.img3_2.texture = RES.getRes("line3_2");
            this.img3_2.drawDelay = false;
            this.img3_3.texture = RES.getRes("line3_3");
            this.img3_3.drawDelay = false;
            this.img3_4.texture = RES.getRes("line3_4");
            this.img3_4.drawDelay = false;
            this.img3_5.texture = RES.getRes("line3_5");
            this.img3_5.drawDelay = false;
            this.img3_6.texture = RES.getRes("line3_6");
            this.img3_6.drawDelay = false;
            this.img3_7.texture = RES.getRes("line3_7");
            this.img3_7.drawDelay = false;
            this.img3_8.texture = RES.getRes("line3_8");
            this.img3_8.drawDelay = false;
            this.groupType4.drawDelay = false;
            this.img4_1.texture = RES.getRes("line4_1");
            this.img4_1.drawDelay = false;
            this.img4_2.texture = RES.getRes("line4_2");
            this.img4_2.drawDelay = false;
            this.img4_3.texture = RES.getRes("line4_3");
            this.img4_3.drawDelay = false;
            this.img4_4.texture = RES.getRes("line4_4");
            this.img4_4.drawDelay = false;
            this.img4_5.texture = RES.getRes("line4_5");
            this.img4_5.drawDelay = false;
            this.img4_6.texture = RES.getRes("line4_6");
            this.img4_6.drawDelay = false;
            this.img4_7.texture = RES.getRes("line4_7");
            this.img4_7.drawDelay = false;
            this.img4_8.texture = RES.getRes("line4_8");
            this.img4_8.drawDelay = false;
            this.groupType5.drawDelay = false;
            this.img5_1.texture = RES.getRes("line5_1");
            this.img5_1.drawDelay = false;
            this.img5_2.texture = RES.getRes("line5_2");
            this.img5_2.drawDelay = false;
            this.img5_3.texture = RES.getRes("line5_3");
            this.img5_3.drawDelay = false;
            this.img5_4.texture = RES.getRes("line5_4");
            this.img5_4.drawDelay = false;
            this.img5_5.texture = RES.getRes("line5_5");
            this.img5_5.drawDelay = false;
            this.img5_6.texture = RES.getRes("line5_6");
            this.img5_6.drawDelay = false;
            this.img5_7.texture = RES.getRes("line5_7");
            this.img5_7.drawDelay = false;
            this.img5_8.texture = RES.getRes("line5_8");
            this.img5_8.drawDelay = false;
            this.groupType6.drawDelay = false;
            this.img6_1.texture = RES.getRes("line6_1");
            this.img6_1.drawDelay = false;
            this.img6_2.texture = RES.getRes("line6_2");
            this.img6_2.drawDelay = false;
            this.img6_3.texture = RES.getRes("line6_3");
            this.img6_3.drawDelay = false;
            this.img6_4.texture = RES.getRes("line6_4");
            this.img6_4.drawDelay = false;
            this.img6_5.texture = RES.getRes("line6_5");
            this.img6_5.drawDelay = false;
            this.img6_6.texture = RES.getRes("line6_6");
            this.img6_6.drawDelay = false;
            this.img6_7.texture = RES.getRes("line6_7");
            this.img6_7.drawDelay = false;
            this.img6_8.texture = RES.getRes("line6_8");
            this.img6_8.drawDelay = false;
            this.groupType7.drawDelay = false;
            this.img7_1.texture = RES.getRes("line7_1");
            this.img7_1.drawDelay = false;
            this.img7_2.texture = RES.getRes("line7_2");
            this.img7_2.drawDelay = false;
            this.img7_3.texture = RES.getRes("line7_3");
            this.img7_3.drawDelay = false;
            this.img7_4.texture = RES.getRes("line7_4");
            this.img7_4.drawDelay = false;
            this.img7_5.texture = RES.getRes("line7_5");
            this.img7_5.drawDelay = false;
            this.img7_6.texture = RES.getRes("line7_6");
            this.img7_6.drawDelay = false;
            this.img7_7.texture = RES.getRes("line7_7");
            this.img7_7.drawDelay = false;
            this.img7_8.texture = RES.getRes("line7_8");
            this.img7_8.drawDelay = false;
            this.groupType8.drawDelay = false;
            this.img8_1.texture = RES.getRes("line8_1");
            this.img8_1.drawDelay = false;
            this.img8_2.texture = RES.getRes("line8_2");
            this.img8_2.drawDelay = false;
            this.img8_3.texture = RES.getRes("line8_3");
            this.img8_3.drawDelay = false;
            this.img8_4.texture = RES.getRes("line8_4");
            this.img8_4.drawDelay = false;
            this.img8_5.texture = RES.getRes("line8_5");
            this.img8_5.drawDelay = false;
            this.img8_6.texture = RES.getRes("line8_6");
            this.img8_6.drawDelay = false;
            this.img8_7.texture = RES.getRes("line8_7");
            this.img8_7.drawDelay = false;
            this.img8_8.texture = RES.getRes("line8_8");
            this.img8_8.drawDelay = false;
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
        return index10;
    }(easy.Group));
    modules.index10 = index10;
    __reflect(index10.prototype, "modules.index10");
})(modules || (modules = {}));
