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
     * @date  :2020-05-08 11:44:20
     * @EasyGame.org Tools
     */ 
    export class index1  extends easy.Group{
        public resSpriteSheet:string = "index1";//合并材质资源名称
        public resTexture:Array<string> = ["1","Page1-3","Page1-2"];//单材质资源名称
        public resGroup:Array<string> = ["courseware_index1"];//配置文件的Group
        public resFiles:Array<string> = ["courseware/index1_loader_200508114420.json"];//需要下载的资源group
        public spriteSheet:egret.SpriteSheet = null;//ui对应的材质集,已经分割好,方便外部读取方便

        public group:easy.Group = null;
        public imgas:easy.Image = null;
        public groupAll:easy.Group = null;
        public imgBg1:easy.Image = null;
        public imgWord:easy.Image = null;
        public imgBg3:easy.Image = null;
        public imgBg2:easy.Image = null;
        public imgPeople:easy.Image = null;
        public imgBot:easy.Image = null;
        public imgSlide:easy.Image = null;
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
            this.bgColor = 0xffffff;
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
            this.imgas.x = -51;
            this.imgas.y = -88;
            this.imgas.width = 742;
            this.imgas.height = 1136;
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
            //imgBg1 
            this.imgBg1 = new easy.Image(true);
            this.imgBg1.name = "imgBg1";
            this.groupAll.addChild(this.imgBg1);
            this.imgBg1.x = -51;
            this.imgBg1.y = -88;
            this.imgBg1.width = 742;
            this.imgBg1.height = 1136;
            this.imgBg1.horizontalEnabled = true;
            this.imgBg1.verticalEnabled = true;
            //imgWord 
            this.imgWord = new easy.Image(true);
            this.imgWord.name = "imgWord";
            this.groupAll.addChild(this.imgWord);
            this.imgWord.x = 34;
            this.imgWord.y = 76;
            this.imgWord.width = 566;
            this.imgWord.height = 135;
            //imgBg3 
            this.imgBg3 = new easy.Image(true);
            this.imgBg3.name = "imgBg3";
            this.groupAll.addChild(this.imgBg3);
            this.imgBg3.x = 2;
            this.imgBg3.y = 317;
            this.imgBg3.width = 640;
            this.imgBg3.height = 644;
            //imgBg2 
            this.imgBg2 = new easy.Image(true);
            this.imgBg2.name = "imgBg2";
            this.groupAll.addChild(this.imgBg2);
            this.imgBg2.x = 1;
            this.imgBg2.y = 229;
            this.imgBg2.width = 640;
            this.imgBg2.height = 730;
            //imgPeople 
            this.imgPeople = new easy.Image(true);
            this.imgPeople.name = "imgPeople";
            this.groupAll.addChild(this.imgPeople);
            this.imgPeople.x = 88;
            this.imgPeople.y = 443;
            this.imgPeople.width = 502;
            this.imgPeople.height = 398;
            //imgBot 
            this.imgBot = new easy.Image(true);
            this.imgBot.name = "imgBot";
            this.groupAll.addChild(this.imgBot);
            this.imgBot.x = 279.5;
            this.imgBot.y = 852;
            this.imgBot.width = 90;
            this.imgBot.height = 107;
            //imgSlide 
            this.imgSlide = new easy.Image(true);
            this.imgSlide.name = "imgSlide";
            this.groupAll.addChild(this.imgSlide);
            this.imgSlide.x = 300;
            this.imgSlide.y = 912;
            this.imgSlide.width = 48;
            this.imgSlide.height = 48;
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
            var jsonData:any = RES.getRes("index1_json");
            if (jsonData != null) {
                this.spriteSheet = new egret.SpriteSheet(RES.getRes("index1_img"));
                for (var key in jsonData.texture){
                    this.spriteSheet.createTexture(key, jsonData.texture[key].x, jsonData.texture[key].y, jsonData.texture[key].w, jsonData.texture[key].h);
                }
            }
            this.group.drawDelay = false;
            this.imgas.texture = RES.getRes("1");
            this.imgas.drawDelay = false;
            this.groupAll.drawDelay = false;
            if (this.spriteSheet) this.imgBg1.texture = this.spriteSheet.getTexture("Page1-5");
            this.imgBg1.drawDelay = false;
            if (this.spriteSheet) this.imgWord.texture = this.spriteSheet.getTexture("Page01-1");
            this.imgWord.drawDelay = false;
            this.imgBg3.texture = RES.getRes("Page1-3");
            this.imgBg3.drawDelay = false;
            if (this.spriteSheet) this.imgBg2.texture = this.spriteSheet.getTexture("Page1-6");
            this.imgBg2.drawDelay = false;
            this.imgPeople.texture = RES.getRes("Page1-2");
            this.imgPeople.drawDelay = false;
            if (this.spriteSheet) this.imgBot.texture = this.spriteSheet.getTexture("Page1-4");
            this.imgBot.drawDelay = false;
            if (this.spriteSheet) this.imgSlide.texture = this.spriteSheet.getTexture("slide");
            this.imgSlide.drawDelay = false;
            //模板temp
            this.temp.validateNow();

        }
    }
}