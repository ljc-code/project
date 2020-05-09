﻿/**
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
     * @date  :2020-05-07 17:02:32
     * @EasyGame.org Tools
     */ 
    export class index4  extends easy.Group{
        public resSpriteSheet:string = "index4";//合并材质资源名称
        public resTexture:Array<string> = ["3","page08-03"];//单材质资源名称
        public resGroup:Array<string> = ["courseware_index4"];//配置文件的Group
        public resFiles:Array<string> = ["courseware/index4_loader_200507170232.json"];//需要下载的资源group
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
        public imgLeft1:easy.Image = null;
        public imgLeft2:easy.Image = null;
        public imgLeft3:easy.Image = null;
        public imgLeft4:easy.Image = null;
        public imgLeft5:easy.Image = null;
        public imgLeft6:easy.Image = null;
        public imgLeft7:easy.Image = null;
        public imgLeft8:easy.Image = null;
        public imgKuang1:easy.Image = null;
        public imgKuang2:easy.Image = null;
        public imgKuang3:easy.Image = null;
        public imgKuang4:easy.Image = null;
        public imgKuang5:easy.Image = null;
        public imgKuang6:easy.Image = null;
        public imgKuang7:easy.Image = null;
        public imgKuang8:easy.Image = null;
        public btnAgain:easy.Button = null;
        public btnPage:easy.Button = null;
        public groupMask:easy.Group = null;
        public mask1:easy.Group = null;
        public groupLabel:easy.Group = null;
        public label1:easy.Label = null;
        public label2:easy.Label = null;
        public label3:easy.Label = null;
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
            this.imgas.x = -230;
            this.imgas.y = -111;
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
            this.img3.y = 56;
            this.img3.width = 33;
            this.img3.height = 20;
            //imgWord1 
            this.imgWord1 = new easy.Image(true);
            this.imgWord1.name = "imgWord1";
            this.groupAll.addChild(this.imgWord1);
            this.imgWord1.x = 44;
            this.imgWord1.y = 46;
            this.imgWord1.width = 586;
            this.imgWord1.height = 41;
            //imgWord2 
            this.imgWord2 = new easy.Image(true);
            this.imgWord2.name = "imgWord2";
            this.groupAll.addChild(this.imgWord2);
            this.imgWord2.x = 34;
            this.imgWord2.y = 133;
            this.imgWord2.width = 317;
            this.imgWord2.height = 27;
            //imgLeft1 
            this.imgLeft1 = new easy.Image(true);
            this.imgLeft1.name = "imgLeft1";
            this.groupAll.addChild(this.imgLeft1);
            this.imgLeft1.x = 39;
            this.imgLeft1.y = 211;
            this.imgLeft1.width = 345;
            this.imgLeft1.height = 26;
            //imgLeft2 
            this.imgLeft2 = new easy.Image(true);
            this.imgLeft2.name = "imgLeft2";
            this.groupAll.addChild(this.imgLeft2);
            this.imgLeft2.x = 39;
            this.imgLeft2.y = 277;
            this.imgLeft2.width = 330;
            this.imgLeft2.height = 28;
            //imgLeft3 
            this.imgLeft3 = new easy.Image(true);
            this.imgLeft3.name = "imgLeft3";
            this.groupAll.addChild(this.imgLeft3);
            this.imgLeft3.x = 39;
            this.imgLeft3.y = 341;
            this.imgLeft3.width = 317;
            this.imgLeft3.height = 27;
            //imgLeft4 
            this.imgLeft4 = new easy.Image(true);
            this.imgLeft4.name = "imgLeft4";
            this.groupAll.addChild(this.imgLeft4);
            this.imgLeft4.x = 39;
            this.imgLeft4.y = 405;
            this.imgLeft4.width = 288;
            this.imgLeft4.height = 27;
            //imgLeft5 
            this.imgLeft5 = new easy.Image(true);
            this.imgLeft5.name = "imgLeft5";
            this.groupAll.addChild(this.imgLeft5);
            this.imgLeft5.x = 39;
            this.imgLeft5.y = 470;
            this.imgLeft5.width = 204;
            this.imgLeft5.height = 27;
            //imgLeft6 
            this.imgLeft6 = new easy.Image(true);
            this.imgLeft6.name = "imgLeft6";
            this.groupAll.addChild(this.imgLeft6);
            this.imgLeft6.x = 41;
            this.imgLeft6.y = 535;
            this.imgLeft6.width = 400;
            this.imgLeft6.height = 27;
            //imgLeft7 
            this.imgLeft7 = new easy.Image(true);
            this.imgLeft7.name = "imgLeft7";
            this.groupAll.addChild(this.imgLeft7);
            this.imgLeft7.x = 40;
            this.imgLeft7.y = 598;
            this.imgLeft7.width = 345;
            this.imgLeft7.height = 64;
            //imgLeft8 
            this.imgLeft8 = new easy.Image(true);
            this.imgLeft8.name = "imgLeft8";
            this.groupAll.addChild(this.imgLeft8);
            this.imgLeft8.x = 41;
            this.imgLeft8.y = 700;
            this.imgLeft8.width = 288;
            this.imgLeft8.height = 27;
            //imgKuang1 
            this.imgKuang1 = new easy.Image(true);
            this.imgKuang1.name = "imgKuang1";
            this.groupAll.addChild(this.imgKuang1);
            this.imgKuang1.scale9GridEnable = true;
            this.imgKuang1.scale9GridX = 10;
            this.imgKuang1.scale9GridY = 10;
            this.imgKuang1.scale9GridWidth = 14;
            this.imgKuang1.scale9GridHeight = 16;
            this.imgKuang1.x = 34;
            this.imgKuang1.y = 205;
            this.imgKuang1.width = 500;
            this.imgKuang1.height = 40;
            //imgKuang2 
            this.imgKuang2 = new easy.Image(true);
            this.imgKuang2.name = "imgKuang2";
            this.groupAll.addChild(this.imgKuang2);
            this.imgKuang2.scale9GridEnable = true;
            this.imgKuang2.scale9GridX = 10;
            this.imgKuang2.scale9GridY = 10;
            this.imgKuang2.scale9GridWidth = 14;
            this.imgKuang2.scale9GridHeight = 16;
            this.imgKuang2.x = 34;
            this.imgKuang2.y = 271;
            this.imgKuang2.width = 500;
            this.imgKuang2.height = 40;
            //imgKuang3 
            this.imgKuang3 = new easy.Image(true);
            this.imgKuang3.name = "imgKuang3";
            this.groupAll.addChild(this.imgKuang3);
            this.imgKuang3.scale9GridEnable = true;
            this.imgKuang3.scale9GridX = 10;
            this.imgKuang3.scale9GridY = 10;
            this.imgKuang3.scale9GridWidth = 14;
            this.imgKuang3.scale9GridHeight = 16;
            this.imgKuang3.x = 34;
            this.imgKuang3.y = 336;
            this.imgKuang3.width = 500;
            this.imgKuang3.height = 40;
            //imgKuang4 
            this.imgKuang4 = new easy.Image(true);
            this.imgKuang4.name = "imgKuang4";
            this.groupAll.addChild(this.imgKuang4);
            this.imgKuang4.scale9GridEnable = true;
            this.imgKuang4.scale9GridX = 10;
            this.imgKuang4.scale9GridY = 10;
            this.imgKuang4.scale9GridWidth = 14;
            this.imgKuang4.scale9GridHeight = 16;
            this.imgKuang4.x = 34;
            this.imgKuang4.y = 399;
            this.imgKuang4.width = 500;
            this.imgKuang4.height = 40;
            //imgKuang5 
            this.imgKuang5 = new easy.Image(true);
            this.imgKuang5.name = "imgKuang5";
            this.groupAll.addChild(this.imgKuang5);
            this.imgKuang5.scale9GridEnable = true;
            this.imgKuang5.scale9GridX = 10;
            this.imgKuang5.scale9GridY = 10;
            this.imgKuang5.scale9GridWidth = 14;
            this.imgKuang5.scale9GridHeight = 16;
            this.imgKuang5.x = 34;
            this.imgKuang5.y = 464;
            this.imgKuang5.width = 500;
            this.imgKuang5.height = 40;
            //imgKuang6 
            this.imgKuang6 = new easy.Image(true);
            this.imgKuang6.name = "imgKuang6";
            this.groupAll.addChild(this.imgKuang6);
            this.imgKuang6.scale9GridEnable = true;
            this.imgKuang6.scale9GridX = 10;
            this.imgKuang6.scale9GridY = 10;
            this.imgKuang6.scale9GridWidth = 14;
            this.imgKuang6.scale9GridHeight = 16;
            this.imgKuang6.x = 34;
            this.imgKuang6.y = 529;
            this.imgKuang6.width = 500;
            this.imgKuang6.height = 40;
            //imgKuang7 
            this.imgKuang7 = new easy.Image(true);
            this.imgKuang7.name = "imgKuang7";
            this.groupAll.addChild(this.imgKuang7);
            this.imgKuang7.scale9GridEnable = true;
            this.imgKuang7.scale9GridX = 10;
            this.imgKuang7.scale9GridY = 10;
            this.imgKuang7.scale9GridWidth = 14;
            this.imgKuang7.scale9GridHeight = 16;
            this.imgKuang7.x = 34;
            this.imgKuang7.y = 592;
            this.imgKuang7.width = 500;
            this.imgKuang7.height = 80;
            //imgKuang8 
            this.imgKuang8 = new easy.Image(true);
            this.imgKuang8.name = "imgKuang8";
            this.groupAll.addChild(this.imgKuang8);
            this.imgKuang8.scale9GridEnable = true;
            this.imgKuang8.scale9GridX = 10;
            this.imgKuang8.scale9GridY = 10;
            this.imgKuang8.scale9GridWidth = 14;
            this.imgKuang8.scale9GridHeight = 16;
            this.imgKuang8.x = 34;
            this.imgKuang8.y = 695;
            this.imgKuang8.width = 500;
            this.imgKuang8.height = 40;
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
            this.btnPage.x = 37;
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
            var jsonData:any = RES.getRes("index4_json");
            if (jsonData != null) {
                this.spriteSheet = new egret.SpriteSheet(RES.getRes("index4_img"));
                for (var key in jsonData.texture){
                    this.spriteSheet.createTexture(key, jsonData.texture[key].x, jsonData.texture[key].y, jsonData.texture[key].w, jsonData.texture[key].h);
                }
            }
            this.group.drawDelay = false;
            this.imgas.texture = RES.getRes("3");
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
            if (this.spriteSheet) this.imgWord1.texture = this.spriteSheet.getTexture("page04_1");
            this.imgWord1.drawDelay = false;
            if (this.spriteSheet) this.imgWord2.texture = this.spriteSheet.getTexture("Page9_2");
            this.imgWord2.drawDelay = false;
            if (this.spriteSheet) this.imgLeft1.texture = this.spriteSheet.getTexture("page04_4");
            this.imgLeft1.drawDelay = false;
            if (this.spriteSheet) this.imgLeft2.texture = this.spriteSheet.getTexture("page04_5");
            this.imgLeft2.drawDelay = false;
            if (this.spriteSheet) this.imgLeft3.texture = this.spriteSheet.getTexture("page04_6");
            this.imgLeft3.drawDelay = false;
            if (this.spriteSheet) this.imgLeft4.texture = this.spriteSheet.getTexture("page04_7");
            this.imgLeft4.drawDelay = false;
            if (this.spriteSheet) this.imgLeft5.texture = this.spriteSheet.getTexture("page04_8");
            this.imgLeft5.drawDelay = false;
            if (this.spriteSheet) this.imgLeft6.texture = this.spriteSheet.getTexture("page04_9");
            this.imgLeft6.drawDelay = false;
            if (this.spriteSheet) this.imgLeft7.texture = this.spriteSheet.getTexture("page04_10");
            this.imgLeft7.drawDelay = false;
            if (this.spriteSheet) this.imgLeft8.texture = this.spriteSheet.getTexture("page04_11");
            this.imgLeft8.drawDelay = false;
            if (this.spriteSheet) this.imgKuang1.texture = this.spriteSheet.getTexture("kuang");
            this.imgKuang1.drawDelay = false;
            if (this.spriteSheet) this.imgKuang2.texture = this.spriteSheet.getTexture("kuang");
            this.imgKuang2.drawDelay = false;
            if (this.spriteSheet) this.imgKuang3.texture = this.spriteSheet.getTexture("kuang");
            this.imgKuang3.drawDelay = false;
            if (this.spriteSheet) this.imgKuang4.texture = this.spriteSheet.getTexture("kuang");
            this.imgKuang4.drawDelay = false;
            if (this.spriteSheet) this.imgKuang5.texture = this.spriteSheet.getTexture("kuang");
            this.imgKuang5.drawDelay = false;
            if (this.spriteSheet) this.imgKuang6.texture = this.spriteSheet.getTexture("kuang");
            this.imgKuang6.drawDelay = false;
            if (this.spriteSheet) this.imgKuang7.texture = this.spriteSheet.getTexture("kuang");
            this.imgKuang7.drawDelay = false;
            if (this.spriteSheet) this.imgKuang8.texture = this.spriteSheet.getTexture("kuang");
            this.imgKuang8.drawDelay = false;
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
            //模板temp
            this.temp.validateNow();

        }
    }
}