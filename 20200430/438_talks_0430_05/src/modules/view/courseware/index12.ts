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
     * @date  :2020-05-08 17:39:48
     * @EasyGame.org Tools
     */ 
    export class index12  extends easy.Group{
        public resSpriteSheet:string = "index12";//合并材质资源名称
        public resTexture:Array<string> = ["11"];//单材质资源名称
        public resGroup:Array<string> = ["courseware_index12"];//配置文件的Group
        public resFiles:Array<string> = ["courseware/index12_loader_200508173948.json"];//需要下载的资源group
        public spriteSheet:egret.SpriteSheet = null;//ui对应的材质集,已经分割好,方便外部读取方便

        public group:easy.Group = null;
        public imgas:easy.Image = null;
        public groupAll:easy.Group = null;
        public imgBg:easy.Image = null;
        public img1:easy.Image = null;
        public img2:easy.Image = null;
        public imgTop:easy.Image = null;
        public imgMove1:easy.Image = null;
        public imgMove2:easy.Image = null;
        public imgBot:easy.Image = null;
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
            this.imgas.x = -51.5;
            this.imgas.y = 13;
            this.imgas.width = 743;
            this.imgas.height = 934;
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
            this.imgBg.x = -51;
            this.imgBg.y = 36;
            this.imgBg.width = 743;
            this.imgBg.height = 802;
            //img1 
            this.img1 = new easy.Image(true);
            this.img1.name = "img1";
            this.groupAll.addChild(this.img1);
            this.img1.y = 837;
            this.img1.width = 154;
            this.img1.height = 21;
            //img2 
            this.img2 = new easy.Image(true);
            this.img2.name = "img2";
            this.groupAll.addChild(this.img2);
            this.img2.x = 153;
            this.img2.y = 837;
            this.img2.width = 487;
            this.img2.height = 21;
            //imgTop 
            this.imgTop = new easy.Image(true);
            this.imgTop.name = "imgTop";
            this.groupAll.addChild(this.imgTop);
            this.imgTop.x = 271.5;
            this.imgTop.y = 23;
            this.imgTop.width = 97;
            this.imgTop.height = 117;
            //imgMove1 
            this.imgMove1 = new easy.Image(true);
            this.imgMove1.name = "imgMove1";
            this.groupAll.addChild(this.imgMove1);
            this.imgMove1.x = 106;
            this.imgMove1.y = 304;
            this.imgMove1.width = 424;
            this.imgMove1.height = 97;
            //imgMove2 
            this.imgMove2 = new easy.Image(true);
            this.imgMove2.name = "imgMove2";
            this.groupAll.addChild(this.imgMove2);
            this.imgMove2.x = -51;
            this.imgMove2.y = 426;
            this.imgMove2.width = 740;
            this.imgMove2.height = 170;
            //imgBot 
            this.imgBot = new easy.Image(true);
            this.imgBot.name = "imgBot";
            this.groupAll.addChild(this.imgBot);
            this.imgBot.x = 240;
            this.imgBot.y = 867;
            this.imgBot.width = 163;
            this.imgBot.height = 80;
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
            var jsonData:any = RES.getRes("index12_json");
            if (jsonData != null) {
                this.spriteSheet = new egret.SpriteSheet(RES.getRes("index12_img"));
                for (var key in jsonData.texture){
                    this.spriteSheet.createTexture(key, jsonData.texture[key].x, jsonData.texture[key].y, jsonData.texture[key].w, jsonData.texture[key].h);
                }
            }
            this.group.drawDelay = false;
            this.imgas.texture = RES.getRes("11");
            this.imgas.drawDelay = false;
            this.groupAll.drawDelay = false;
            if (this.spriteSheet) this.imgBg.texture = this.spriteSheet.getTexture("page10-01");
            this.imgBg.drawDelay = false;
            if (this.spriteSheet) this.img1.texture = this.spriteSheet.getTexture("page03-01");
            this.img1.drawDelay = false;
            if (this.spriteSheet) this.img2.texture = this.spriteSheet.getTexture("page3_02");
            this.img2.drawDelay = false;
            if (this.spriteSheet) this.imgTop.texture = this.spriteSheet.getTexture("page10-02");
            this.imgTop.drawDelay = false;
            if (this.spriteSheet) this.imgMove1.texture = this.spriteSheet.getTexture("page10-03");
            this.imgMove1.drawDelay = false;
            if (this.spriteSheet) this.imgMove2.texture = this.spriteSheet.getTexture("Page09-1");
            this.imgMove2.drawDelay = false;
            if (this.spriteSheet) this.imgBot.texture = this.spriteSheet.getTexture("page10-05");
            this.imgBot.drawDelay = false;
            if (this.spriteSheet) this.btnPage.texture = this.spriteSheet.getTexture("page10-06");
            this.btnPage.drawDelay = false;
            //模板temp
            this.temp.validateNow();

        }
    }
}