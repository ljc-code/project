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
module modules{

    /**
     * <p></p>
     * @date  :2020-05-08 14:04:33
     * @EasyGame.org Tools
     */ 
    export class index8  extends easy.Group{
        public resSpriteSheet:string = "index8";//合并材质资源名称
        public resTexture:Array<string> = ["8","page08-03"];//单材质资源名称
        public resGroup:Array<string> = ["courseware_index8"];//配置文件的Group
        public resFiles:Array<string> = ["courseware/index8_loader_200508140433.json"];//需要下载的资源group
        public spriteSheet:egret.SpriteSheet = null;//ui对应的材质集,已经分割好,方便外部读取方便

        public group:easy.Group = null;
        public imgas:easy.Image = null;
        public groupAll:easy.Group = null;
        public imgBg:easy.Image = null;
        public imgGray:easy.Image = null;
        public img1:easy.Image = null;
        public img2:easy.Image = null;
        public img3:easy.Image = null;
        public imgWord1:easy.Image = null;
        public imgWord2:easy.Image = null;
        public imgWord3:easy.Image = null;
        public imgLeft1:easy.Image = null;
        public imgLeft2:easy.Image = null;
        public imgLeft3:easy.Image = null;
        public imgLeft4:easy.Image = null;
        public imgLeft5:easy.Image = null;
        public imgA1:easy.Image = null;
        public imgA2:easy.Image = null;
        public imgB1:easy.Image = null;
        public imgB2:easy.Image = null;
        public imgC1:easy.Image = null;
        public imgC2:easy.Image = null;
        public imgD1:easy.Image = null;
        public imgD2:easy.Image = null;
        public imgE1:easy.Image = null;
        public imgE2:easy.Image = null;
        public groupLook:easy.Group = null;
        public imgArrows:easy.Image = null;
        public btnLook:easy.Button = null;
        public btnAgain:easy.Button = null;
        public btnPage:easy.Button = null;
        public groupMask:easy.Group = null;
        public mask1:easy.Group = null;
        public groupLabel:easy.Group = null;
        public label1:easy.Label = null;
        public label2:easy.Label = null;
        public label3:easy.Label = null;
        public groupClick:easy.Group = null;
        public imgClick:easy.Image = null;
        public btnDele:easy.Button = null;
        public temp:tempTemplate = null;

        public constructor() {
            super(true);
        }
        /**
         * 初始化主场景的组件,加入场景时,主动调用一次
         * 子类覆写该方法,添加UI逻辑
         */  
        public createChildren():void {
            super.createChildren();
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
            this.imgas.x = -233;
            this.imgas.y = -112;
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
            this.imgGray.x = 30.75;
            this.imgGray.y = 177.85;
            this.imgGray.width = 578;
            this.imgGray.height = 609;
            this.imgGray.visible = false;
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
            this.img3.x = 7;
            this.img3.y = 49;
            this.img3.width = 33;
            this.img3.height = 20;
            //imgWord1 
            this.imgWord1 = new easy.Image(true);
            this.imgWord1.name = "imgWord1";
            this.groupAll.addChild(this.imgWord1);
            this.imgWord1.x = 115;
            this.imgWord1.y = 37;
            this.imgWord1.width = 402;
            this.imgWord1.height = 50;
            //imgWord2 
            this.imgWord2 = new easy.Image(true);
            this.imgWord2.name = "imgWord2";
            this.groupAll.addChild(this.imgWord2);
            this.imgWord2.x = 27;
            this.imgWord2.y = 108;
            this.imgWord2.width = 422;
            this.imgWord2.height = 28;
            //imgWord3 
            this.imgWord3 = new easy.Image(true);
            this.imgWord3.name = "imgWord3";
            this.groupAll.addChild(this.imgWord3);
            this.imgWord3.x = 482;
            this.imgWord3.y = 108;
            this.imgWord3.width = 124;
            this.imgWord3.height = 45;
            //imgLeft1 
            this.imgLeft1 = new easy.Image(true);
            this.imgLeft1.name = "imgLeft1";
            this.groupAll.addChild(this.imgLeft1);
            this.imgLeft1.x = 26;
            this.imgLeft1.y = 191;
            this.imgLeft1.width = 427;
            this.imgLeft1.height = 25;
            //imgLeft2 
            this.imgLeft2 = new easy.Image(true);
            this.imgLeft2.name = "imgLeft2";
            this.groupAll.addChild(this.imgLeft2);
            this.imgLeft2.x = 27;
            this.imgLeft2.y = 261;
            this.imgLeft2.width = 415;
            this.imgLeft2.height = 87;
            //imgLeft3 
            this.imgLeft3 = new easy.Image(true);
            this.imgLeft3.name = "imgLeft3";
            this.groupAll.addChild(this.imgLeft3);
            this.imgLeft3.x = 26;
            this.imgLeft3.y = 385;
            this.imgLeft3.width = 424;
            this.imgLeft3.height = 88;
            //imgLeft4 
            this.imgLeft4 = new easy.Image(true);
            this.imgLeft4.name = "imgLeft4";
            this.groupAll.addChild(this.imgLeft4);
            this.imgLeft4.x = 27;
            this.imgLeft4.y = 516;
            this.imgLeft4.width = 414;
            this.imgLeft4.height = 87;
            //imgLeft5 
            this.imgLeft5 = new easy.Image(true);
            this.imgLeft5.name = "imgLeft5";
            this.groupAll.addChild(this.imgLeft5);
            this.imgLeft5.x = 27;
            this.imgLeft5.y = 639;
            this.imgLeft5.width = 415;
            this.imgLeft5.height = 119;
            //imgA1 
            this.imgA1 = new easy.Image(true);
            this.imgA1.name = "imgA1";
            this.groupAll.addChild(this.imgA1);
            this.imgA1.x = 487;
            this.imgA1.y = 188;
            this.imgA1.width = 32;
            this.imgA1.height = 31;
            //imgA2 
            this.imgA2 = new easy.Image(true);
            this.imgA2.name = "imgA2";
            this.groupAll.addChild(this.imgA2);
            this.imgA2.x = 577;
            this.imgA2.y = 188;
            this.imgA2.width = 32;
            this.imgA2.height = 31;
            //imgB1 
            this.imgB1 = new easy.Image(true);
            this.imgB1.name = "imgB1";
            this.groupAll.addChild(this.imgB1);
            this.imgB1.x = 487;
            this.imgB1.y = 258;
            this.imgB1.width = 32;
            this.imgB1.height = 31;
            //imgB2 
            this.imgB2 = new easy.Image(true);
            this.imgB2.name = "imgB2";
            this.groupAll.addChild(this.imgB2);
            this.imgB2.x = 577;
            this.imgB2.y = 258;
            this.imgB2.width = 32;
            this.imgB2.height = 31;
            //imgC1 
            this.imgC1 = new easy.Image(true);
            this.imgC1.name = "imgC1";
            this.groupAll.addChild(this.imgC1);
            this.imgC1.x = 487;
            this.imgC1.y = 383;
            this.imgC1.width = 32;
            this.imgC1.height = 31;
            //imgC2 
            this.imgC2 = new easy.Image(true);
            this.imgC2.name = "imgC2";
            this.groupAll.addChild(this.imgC2);
            this.imgC2.x = 577;
            this.imgC2.y = 383;
            this.imgC2.width = 32;
            this.imgC2.height = 31;
            //imgD1 
            this.imgD1 = new easy.Image(true);
            this.imgD1.name = "imgD1";
            this.groupAll.addChild(this.imgD1);
            this.imgD1.x = 487;
            this.imgD1.y = 514;
            this.imgD1.width = 32;
            this.imgD1.height = 31;
            //imgD2 
            this.imgD2 = new easy.Image(true);
            this.imgD2.name = "imgD2";
            this.groupAll.addChild(this.imgD2);
            this.imgD2.x = 577;
            this.imgD2.y = 514;
            this.imgD2.width = 32;
            this.imgD2.height = 31;
            //imgE1 
            this.imgE1 = new easy.Image(true);
            this.imgE1.name = "imgE1";
            this.groupAll.addChild(this.imgE1);
            this.imgE1.x = 487;
            this.imgE1.y = 638;
            this.imgE1.width = 32;
            this.imgE1.height = 31;
            //imgE2 
            this.imgE2 = new easy.Image(true);
            this.imgE2.name = "imgE2";
            this.groupAll.addChild(this.imgE2);
            this.imgE2.x = 577;
            this.imgE2.y = 638;
            this.imgE2.width = 32;
            this.imgE2.height = 31;
            //groupLook 
            this.groupLook = new easy.Group(true);
            this.groupLook.name = "groupLook";
            this.groupAll.addChild(this.groupLook);
            this.groupLook.showBg = false;
            this.groupLook.border = false;
            this.groupLook.x = 151;
            this.groupLook.y = 786;
            //imgArrows 
            this.imgArrows = new easy.Image(true);
            this.imgArrows.name = "imgArrows";
            this.groupLook.addChild(this.imgArrows);
            this.imgArrows.width = 80;
            this.imgArrows.height = 62;
            //btnLook 
            this.btnLook = new easy.Button(true);
            this.btnLook.name = "btnLook";
            this.groupLook.addChild(this.btnLook);
            this.btnLook.width = 240;
            this.btnLook.height = 78;
            this.btnLook.x = 90;
            this.btnLook.y = -8;
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
            //groupClick 
            this.groupClick = new easy.Group(true);
            this.groupClick.name = "groupClick";
            this.groupAll.addChild(this.groupClick);
            this.groupClick.showBg = false;
            this.groupClick.border = false;
            this.groupClick.x = 35;
            this.groupClick.y = 121;
            this.groupClick.width = 570;
            this.groupClick.height = 718;
            //imgClick 
            this.imgClick = new easy.Image(true);
            this.imgClick.name = "imgClick";
            this.groupClick.addChild(this.imgClick);
            this.imgClick.width = 570;
            this.imgClick.height = 718;
            //btnDele 
            this.btnDele = new easy.Button(true);
            this.btnDele.name = "btnDele";
            this.groupClick.addChild(this.btnDele);
            this.btnDele.width = 44;
            this.btnDele.height = 44;
            this.btnDele.x = 500;
            this.btnDele.y = 20;
            //temp 
            this.temp = new modules.tempTemplate();
            this.temp.name = "temp";
            this.addChild(this.temp);
            if (this.temp.ui["resFiles"]) this.resFiles = this.resFiles.concat(this.temp.ui.resFiles);
            if (this.temp.ui["resGroup"]) this.resGroup = this.resGroup.concat(this.temp.ui.resGroup);
            this.temp.x = 540;
            this.temp.rightEnabled = true;
            this.temp.ui.rightEnabled = true;

        }
        /**
         * 获取初始化逻辑,加入场景时,主动调用一次
         * 子类覆写该方法,添加业务逻辑
         */
         public initData():void {
           super.initData();
        }
        /**
         * 进入的逻辑
         * 可以再次根据外部数据情况做一些逻辑处理
         */
        public enter():void {

        }

        /**
         * 退出的逻辑
         * 做一些数据的销毁或者初始化,保证下次进入的时候,不会残留
         */
        public outer():void {

        }
        /**
         * 刷新UI皮肤显示
         */
        public validateNow():void{
            this.drawDelay = false;
            var jsonData:any = RES.getRes("index8_json");
            if (jsonData != null) {
                this.spriteSheet = new egret.SpriteSheet(RES.getRes("index8_img"));
                for (var key in jsonData.texture){
                    this.spriteSheet.createTexture(key, jsonData.texture[key].x, jsonData.texture[key].y, jsonData.texture[key].w, jsonData.texture[key].h);
                }
            }
            this.group.drawDelay = false;
            this.imgas.texture = RES.getRes("8");
            this.imgas.drawDelay = false;
            this.groupAll.drawDelay = false;
            this.imgBg.texture = RES.getRes("page08-03");
            this.imgBg.drawDelay = false;
            if (this.spriteSheet) this.imgGray.texture = this.spriteSheet.getTexture("page04_3");
            this.imgGray.drawDelay = false;
            if (this.spriteSheet) this.img1.texture = this.spriteSheet.getTexture("page3_01");
            this.img1.drawDelay = false;
            if (this.spriteSheet) this.img2.texture = this.spriteSheet.getTexture("page3_02");
            this.img2.drawDelay = false;
            if (this.spriteSheet) this.img3.texture = this.spriteSheet.getTexture("page3_03");
            this.img3.drawDelay = false;
            if (this.spriteSheet) this.imgWord1.texture = this.spriteSheet.getTexture("Page08-1");
            this.imgWord1.drawDelay = false;
            if (this.spriteSheet) this.imgWord2.texture = this.spriteSheet.getTexture("Page08-2");
            this.imgWord2.drawDelay = false;
            if (this.spriteSheet) this.imgWord3.texture = this.spriteSheet.getTexture("Page08-3");
            this.imgWord3.drawDelay = false;
            if (this.spriteSheet) this.imgLeft1.texture = this.spriteSheet.getTexture("Page08-4");
            this.imgLeft1.drawDelay = false;
            if (this.spriteSheet) this.imgLeft2.texture = this.spriteSheet.getTexture("Page08-5");
            this.imgLeft2.drawDelay = false;
            if (this.spriteSheet) this.imgLeft3.texture = this.spriteSheet.getTexture("Page08-6");
            this.imgLeft3.drawDelay = false;
            if (this.spriteSheet) this.imgLeft4.texture = this.spriteSheet.getTexture("Page08-7");
            this.imgLeft4.drawDelay = false;
            if (this.spriteSheet) this.imgLeft5.texture = this.spriteSheet.getTexture("Page08-8");
            this.imgLeft5.drawDelay = false;
            if (this.spriteSheet) this.imgA1.texture = this.spriteSheet.getTexture("Page08-9");
            this.imgA1.drawDelay = false;
            if (this.spriteSheet) this.imgA2.texture = this.spriteSheet.getTexture("Page08-9");
            this.imgA2.drawDelay = false;
            if (this.spriteSheet) this.imgB1.texture = this.spriteSheet.getTexture("Page08-9");
            this.imgB1.drawDelay = false;
            if (this.spriteSheet) this.imgB2.texture = this.spriteSheet.getTexture("Page08-9");
            this.imgB2.drawDelay = false;
            if (this.spriteSheet) this.imgC1.texture = this.spriteSheet.getTexture("Page08-9");
            this.imgC1.drawDelay = false;
            if (this.spriteSheet) this.imgC2.texture = this.spriteSheet.getTexture("Page08-9");
            this.imgC2.drawDelay = false;
            if (this.spriteSheet) this.imgD1.texture = this.spriteSheet.getTexture("Page08-9");
            this.imgD1.drawDelay = false;
            if (this.spriteSheet) this.imgD2.texture = this.spriteSheet.getTexture("Page08-9");
            this.imgD2.drawDelay = false;
            if (this.spriteSheet) this.imgE1.texture = this.spriteSheet.getTexture("Page08-9");
            this.imgE1.drawDelay = false;
            if (this.spriteSheet) this.imgE2.texture = this.spriteSheet.getTexture("Page08-9");
            this.imgE2.drawDelay = false;
            this.groupLook.drawDelay = false;
            if (this.spriteSheet) this.imgArrows.texture = this.spriteSheet.getTexture("Page08-11");
            this.imgArrows.drawDelay = false;
            if (this.spriteSheet) this.btnLook.texture = this.spriteSheet.getTexture("Page08-12");
            this.btnLook.drawDelay = false;
            if (this.spriteSheet) this.btnAgain.texture = this.spriteSheet.getTexture("Page2-17");
            this.btnAgain.drawDelay = false;
            if (this.spriteSheet) this.btnPage.texture = this.spriteSheet.getTexture("Page2-16");
            this.btnPage.drawDelay = false;
            this.groupMask.drawDelay = false;
            this.mask1.drawDelay = false;
            this.groupLabel.drawDelay = false;
            this.label1.drawDelay = false;
            this.label2.drawDelay = false;
            this.label3.drawDelay = false;
            this.groupClick.drawDelay = false;
            if (this.spriteSheet) this.imgClick.texture = this.spriteSheet.getTexture("Page08-13");
            this.imgClick.drawDelay = false;
            if (this.spriteSheet) this.btnDele.texture = this.spriteSheet.getTexture("Page08-14");
            this.btnDele.drawDelay = false;
            //模板temp
            this.temp.validateNow();

        }
    }
}