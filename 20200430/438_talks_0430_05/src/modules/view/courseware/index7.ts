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
     * @date  :2020-05-08 17:39:58
     * @EasyGame.org Tools
     */ 
    export class index7  extends easy.Group{
        public resSpriteSheet:string = "index7";//合并材质资源名称
        public resTexture:Array<string> = ["7","page08-03"];//单材质资源名称
        public resGroup:Array<string> = ["courseware_index7"];//配置文件的Group
        public resFiles:Array<string> = ["courseware/index7_loader_200508173958.json"];//需要下载的资源group
        public spriteSheet:egret.SpriteSheet = null;//ui对应的材质集,已经分割好,方便外部读取方便

        public group:easy.Group = null;
        public imgas:easy.Image = null;
        public groupAll:easy.Group = null;
        public imgBg:easy.Image = null;
        public imgGray:easy.Image = null;
        public img1:easy.Image = null;
        public img2:easy.Image = null;
        public img3:easy.Image = null;
        public imgWord:easy.Image = null;
        public imgShow1:easy.Image = null;
        public imgShow2:easy.Image = null;
        public imgShow3:easy.Image = null;
        public imgShow4:easy.Image = null;
        public imgShow5:easy.Image = null;
        public imgShow6:easy.Image = null;
        public imgShow7:easy.Image = null;
        public imgShow8:easy.Image = null;
        public btnAgain:easy.Button = null;
        public btnPage:easy.Button = null;
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
            this.imgGray.x = 30;
            this.imgGray.y = 122;
            this.imgGray.width = 586;
            this.imgGray.height = 616;
            this.imgGray.visible = false;
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
            this.img3.y = 53;
            this.img3.width = 33;
            this.img3.height = 20;
            //imgWord 
            this.imgWord = new easy.Image(true);
            this.imgWord.name = "imgWord";
            this.groupAll.addChild(this.imgWord);
            this.imgWord.x = 114;
            this.imgWord.y = 42;
            this.imgWord.width = 410;
            this.imgWord.height = 45;
            //imgShow1 
            this.imgShow1 = new easy.Image(true);
            this.imgShow1.name = "imgShow1";
            this.groupAll.addChild(this.imgShow1);
            this.imgShow1.x = 237;
            this.imgShow1.y = 112;
            this.imgShow1.width = 159;
            this.imgShow1.height = 157;
            //imgShow2 
            this.imgShow2 = new easy.Image(true);
            this.imgShow2.name = "imgShow2";
            this.groupAll.addChild(this.imgShow2);
            this.imgShow2.x = 20.5;
            this.imgShow2.y = 263;
            this.imgShow2.width = 215;
            this.imgShow2.height = 166;
            //imgShow3 
            this.imgShow3 = new easy.Image(true);
            this.imgShow3.name = "imgShow3";
            this.groupAll.addChild(this.imgShow3);
            this.imgShow3.x = 398.5;
            this.imgShow3.y = 263;
            this.imgShow3.width = 216;
            this.imgShow3.height = 166;
            //imgShow4 
            this.imgShow4 = new easy.Image(true);
            this.imgShow4.name = "imgShow4";
            this.groupAll.addChild(this.imgShow4);
            this.imgShow4.x = 21.5;
            this.imgShow4.y = 436;
            this.imgShow4.width = 215;
            this.imgShow4.height = 166;
            //imgShow5 
            this.imgShow5 = new easy.Image(true);
            this.imgShow5.name = "imgShow5";
            this.groupAll.addChild(this.imgShow5);
            this.imgShow5.x = 398.5;
            this.imgShow5.y = 435;
            this.imgShow5.width = 216;
            this.imgShow5.height = 166;
            //imgShow6 
            this.imgShow6 = new easy.Image(true);
            this.imgShow6.name = "imgShow6";
            this.groupAll.addChild(this.imgShow6);
            this.imgShow6.x = 254.5;
            this.imgShow6.y = 362;
            this.imgShow6.width = 130;
            this.imgShow6.height = 143;
            //imgShow7 
            this.imgShow7 = new easy.Image(true);
            this.imgShow7.name = "imgShow7";
            this.groupAll.addChild(this.imgShow7);
            this.imgShow7.x = 239.5;
            this.imgShow7.y = 597;
            this.imgShow7.width = 160;
            this.imgShow7.height = 156;
            //imgShow8 
            this.imgShow8 = new easy.Image(true);
            this.imgShow8.name = "imgShow8";
            this.groupAll.addChild(this.imgShow8);
            this.imgShow8.x = 24.5;
            this.imgShow8.y = 759;
            this.imgShow8.width = 586;
            this.imgShow8.height = 73;
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
            var jsonData:any = RES.getRes("index7_json");
            if (jsonData != null) {
                this.spriteSheet = new egret.SpriteSheet(RES.getRes("index7_img"));
                for (var key in jsonData.texture){
                    this.spriteSheet.createTexture(key, jsonData.texture[key].x, jsonData.texture[key].y, jsonData.texture[key].w, jsonData.texture[key].h);
                }
            }
            this.group.drawDelay = false;
            this.imgas.texture = RES.getRes("7");
            this.imgas.drawDelay = false;
            this.groupAll.drawDelay = false;
            this.imgBg.texture = RES.getRes("page08-03");
            this.imgBg.drawDelay = false;
            if (this.spriteSheet) this.imgGray.texture = this.spriteSheet.getTexture("Page5_02");
            this.imgGray.drawDelay = false;
            if (this.spriteSheet) this.img1.texture = this.spriteSheet.getTexture("page3_01");
            this.img1.drawDelay = false;
            if (this.spriteSheet) this.img2.texture = this.spriteSheet.getTexture("page3_02");
            this.img2.drawDelay = false;
            if (this.spriteSheet) this.img3.texture = this.spriteSheet.getTexture("page3_03");
            this.img3.drawDelay = false;
            if (this.spriteSheet) this.imgWord.texture = this.spriteSheet.getTexture("Page7_01");
            this.imgWord.drawDelay = false;
            if (this.spriteSheet) this.imgShow1.texture = this.spriteSheet.getTexture("Page7_02");
            this.imgShow1.drawDelay = false;
            if (this.spriteSheet) this.imgShow2.texture = this.spriteSheet.getTexture("Page7_03");
            this.imgShow2.drawDelay = false;
            if (this.spriteSheet) this.imgShow3.texture = this.spriteSheet.getTexture("Page7_04");
            this.imgShow3.drawDelay = false;
            if (this.spriteSheet) this.imgShow4.texture = this.spriteSheet.getTexture("Page7_05");
            this.imgShow4.drawDelay = false;
            if (this.spriteSheet) this.imgShow5.texture = this.spriteSheet.getTexture("Page7_06");
            this.imgShow5.drawDelay = false;
            if (this.spriteSheet) this.imgShow6.texture = this.spriteSheet.getTexture("Page7_07");
            this.imgShow6.drawDelay = false;
            if (this.spriteSheet) this.imgShow7.texture = this.spriteSheet.getTexture("Page7_08");
            this.imgShow7.drawDelay = false;
            if (this.spriteSheet) this.imgShow8.texture = this.spriteSheet.getTexture("Page7_09");
            this.imgShow8.drawDelay = false;
            if (this.spriteSheet) this.btnAgain.texture = this.spriteSheet.getTexture("Page2-18");
            this.btnAgain.drawDelay = false;
            if (this.spriteSheet) this.btnPage.texture = this.spriteSheet.getTexture("Page2-16");
            this.btnPage.drawDelay = false;
            //模板temp
            this.temp.validateNow();

        }
    }
}