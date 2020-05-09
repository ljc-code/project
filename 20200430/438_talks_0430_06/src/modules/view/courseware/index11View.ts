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
     * <p>index11的逻辑类</p>
     * @date  :2020-05-09 13:59:33
     * @EasyGame.org Tools
     */ 
    export class index11View  extends easy.View{
        public constructor() {
            super();
        }
        /**
         * 初始化主场景的组件,加入场景时,主动调用一次
         * 子类覆写该方法,添加UI逻辑
         */  
        public createChildren():void {
            super.createChildren();
            this.ui = new index11();
        }
        /**
         * 获取ui对象
         * @returns
         */
        public get ui():index11{
            return <index11>this._ui;
        }

        /**
         * 设置ui对象
         * @param
         */
        public set ui(myui:index11){
            this.setUI(myui);
        }
        /**
         * 初始化一些必要的逻辑数据
         * 这个方法是在第一次加入stage的时候,做调用
         */
        public initData():void {
            super.initData();
            //TODO 添加协议弱响应的方法,一般是用来驱动刷新当前的ui
            //参数说明:第一个参数是协议的id号
            //        第二个参数是本类public的方法,方法唯一的参数就是对应的协议实例,如下方法全名为onPktLoginResult(pkt:MyProtocalCmd)
            //this.addHandlePacket(ID_PACKET, "onPktLoginResult")


            //TODO 添加事件的弱响应的方法,一般是用来驱动刷新当前的ui
            //注意:必须调用MessageControler.addEvent()注册事件名称,否者不会转发到这里
            //参数说明:第一个参数是事件名称
            //        第二个参数是本类public的方法,方法唯一的参数就是MyEvent实例,如下方法全名为onMyEventLoginResult(event:easy.MyEvent)
            //this.addHandleEvent("LOGIN_RESULT", "onMyEventLoginResult");

            //TODO UI层声明的组件,可能会用到,请自行启用
            //this.ui.imgas.texture;
            //this.ui.imgBg.texture;
            //this.ui.img1.texture;
            //this.ui.img2.texture;
            //this.ui.img3.texture;
            //this.ui.imgWord1.texture;
            //this.ui.imgWord2.texture;
            //this.ui.imgLeft1.texture;
            //this.ui.imgLeft2.texture;
            //this.ui.imgLef3.texture;
            //this.ui.imgRig1.texture;
            //this.ui.imgRig2.texture;
            //this.ui.imgRig3.texture;
            //this.ui.imgRig4.texture;
            //this.ui.imgRig5.texture;
            //this.ui.imgRig6.texture;
            //this.ui.img1_1.texture;
            //this.ui.img1_2.texture;
            //this.ui.img1_3.texture;
            //this.ui.img1_4.texture;
            //this.ui.img1_5.texture;
            //this.ui.img1_6.texture;
            //this.ui.img2_1.texture;
            //this.ui.img2_2.texture;
            //this.ui.img2_3.texture;
            //this.ui.img2_4.texture;
            //this.ui.img2_5.texture;
            //this.ui.img2_6.texture;
            //this.ui.img3_1.texture;
            //this.ui.img3_2.texture;
            //this.ui.img3_3.texture;
            //this.ui.img3_4.texture;
            //this.ui.img3_5.texture;
            //this.ui.img3_6.texture;
            //this.ui.btnAgain.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchBtnAgain, this);
            //this.ui.btnPage.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchBtnPage, this);


            //TODO View逻辑可在此继续添加
            this.ui.group.width = easy.GlobalSetting.DISPLAY_WIDTH;
            this.ui.group.height = easy.GlobalSetting.DISPLAY_HEIGHT;
            this.ui.mask1.x = -(easy.GlobalSetting.DISPLAY_WIDTH - 640)/2;
            this.ui.mask1.y = -(easy.GlobalSetting.DISPLAY_HEIGHT-960)/2;
            this.ui.mask1.width = easy.GlobalSetting.DISPLAY_WIDTH;
            this.ui.mask1.height = easy.GlobalSetting.DISPLAY_HEIGHT;
            easy.TweenEffect.setAnchorXY(this.ui.btnAgain);
            easy.TweenEffect.setAnchorXY(this.ui.btnPage);
            this.ui.btnAgain.addEventListener(egret.TouchEvent.TOUCH_TAP,this.skipPage,this)
            this.ui.btnPage.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onTouchBtnPage,this)

            for(var i:number=1;i<4;i++){
                this.ui["imgLeft"+i].addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.clickType,this);
            }
            for(var i:number=1;i<7;i++){
                this.ui["imgRig"+i].addEventListener(egret.TouchEvent.TOUCH_END,this.clickRight,this);
            }


            this.ui.groupMask.addEventListener(egret.TouchEvent.TOUCH_TAP,this.deleteMakk,this);
        }

        //click button btnPage response funciton
        private onTouchBtnPage(event:egret.TouchEvent):void {
            //TODO 此处填写 btnPage按钮点击逻辑
            easy.ViewManager.show(modules.index10View, null, false);
        }

        private answerIndex:number;
        private quesIndex:number=0;
        private clickArr1 = [false,false,false,false,false,false];//不能同时被多个问题选中
        private clickArr2 = [false,false,false,false,false,false];//不能同时被多个问题选中
        private clickArr3 = [false,false,false,false,false,false];//不能同时被多个问题选中
        private activeArr1 = [];
        private activeArr2 = [];
        private activeArr3 = [];
        private clickType(e:egret.TouchEvent):void{
            this.quesIndex = e.currentTarget.data;
            console.log(this.quesIndex)
        }
        private clickRight(e:egret.TouchEvent):void{
            this.answerIndex = e.currentTarget.data;
            this.ui.groupType1.visible=true;
            this.ui.groupType2.visible=true;
            this.ui.groupType3.visible=true;
            if(this.quesIndex!=0){
                if(this["clickArr"+this.quesIndex][this.answerIndex-1]){
                    this["clickArr"+this.quesIndex][this.answerIndex-1]=false;
                }else{
                    for(var i:number=1;i<4;i++){
                        this["clickArr"+i][this.answerIndex-1]=false;
                    }
                    this["clickArr"+this.quesIndex][this.answerIndex-1]=true;
                }
            }
            for(var i:number=1;i<4;i++){
                for(var j:number=1;j<7;j++){
                    if(this["clickArr"+i][j-1]){
                        this.ui["img"+i+"_"+j].alpha=1;
                    }else{
                        this.ui["img"+i+"_"+j].alpha=0;
                    }
                }
            }
            this.quesIndex = 0;
        }
        private ansArr1 = [1,3];
        private ansArr2 = [4,5];
        private ansArr3 = [2,6];
        private yesorNo = 0;
        private skipPage():void{
            this.yesorNo++;
            console.log(this.yesorNo)
            this.activeArr1 = [];
            this.activeArr2 = [];
            this.activeArr3 = [];
            for(var j:number=0;j<6;j++){
                if(this.clickArr1[j] == true){
                    this.activeArr1.push(j+1)
                }
                if(this.clickArr2[j] == true){
                    this.activeArr2.push(j+1)
                }
                if(this.clickArr3[j] == true){
                    this.activeArr3.push(j+1)
                }
            }
            if(this.activeArr1.toString() != this.ansArr1.toString() || this.activeArr2.toString() != this.ansArr2.toString() || this.activeArr3.toString() != this.ansArr3.toString()){
                console.log("错误")
                if(this.yesorNo == 1 || this.yesorNo == 2){
                    this.ui.label1.text = "";
                    this.ui.label2.text = "回答错误";
                    this.ui.label3.text = "请再试一次";
                    this.ui.label4.text = "";

                    this.ui.groupMask.visible = true;
                    this.clickArr1 = [false,false,false,false,false,false];
                    this.clickArr2 = [false,false,false,false,false,false];
                    this.clickArr3 = [false,false,false,false,false,false];
                    for(var i:number=1;i<7;i++){
                        this.ui["img1_"+i].alpha = 0;
                        this.ui["img2_"+i].alpha = 0;
                        this.ui["img3_"+i].alpha = 0;
                    }
                }else if(this.yesorNo == 3){
                    this.ui.groupMask.visible = true;
                    this.ui.label1.text = "正确答案是";
                    this.ui.label2.text = "表层察看：1,3";
                    this.ui.label3.text = "效果察看：4,5";
                    this.ui.label4.text = "战略察看：2,6";
                }else{
                    easy.ViewManager.show(modules.index12View, null, false);
                }
            }else{
                console.log("正确");
                easy.ViewManager.show(modules.index12View, null, false);
            }
        }
        private deleteMakk():void{
            this.ui.groupMask.visible = false;
            if(this.yesorNo==3){
                console.log("显示正确图")
                this.ui.groupType1.visible=true;
                this.ui.groupType2.visible=true;
                this.ui.groupType3.visible=true;
                for(var i:number=1;i<7;i++){
                    this.ui["img1_"+i].alpha = 0;
                    this.ui["img2_"+i].alpha = 0;
                    this.ui["img3_"+i].alpha = 0;
                }
                this.ui.img1_1.alpha = 1;
                this.ui.img1_3.alpha = 1;
                this.ui.img2_4.alpha = 1;
                this.ui.img2_5.alpha = 1;
                this.ui.img3_2.alpha = 1;
                this.ui.img3_6.alpha = 1;
                this.ui.btnAgain.texture=easy.ResManager.getTexture("Page2-18");
                for(var i:number=1;i<4;i++){
                    this.ui["imgLeft"+i].touchEnabled = false;
                }
                for(var i:number=1;i<7;i++){
                    this.ui["imgRig"+i].touchEnabled = false;
                }
            }
        }


        /**
         * 进入的逻辑
         * 可以再次根据外部数据情况做一些逻辑处理
         */
        public enter():void {
            super.enter();
            //TODO 在这里写,进入时,初始数据的操作

            this.yesorNo = 0;
            this.clickArr1 = [false,false,false,false,false,false];
            this.clickArr2 = [false,false,false,false,false,false];
            this.clickArr3 = [false,false,false,false,false,false];
            this.activeArr1 = [];
            this.activeArr2 = [];
            this.activeArr3 = [];

            this.ui.imgBg.alpha = 0;
            this.ui.img1.x = -500;
            this.ui.img2.x = 1000;
            this.ui.imgWord1.alpha = 0;
            this.ui.imgWord2.alpha = 0;
            for(var i:number=1;i<4;i++){
                this.ui["imgLeft"+i].touchEnabled = true;
                this.ui["imgLeft"+i].data = i;
                this.ui["imgLeft"+i].alpha = 0;
            }
            for(var i:number=1;i<7;i++){
                this.ui["imgRig"+i].touchEnabled = true;
                this.ui["imgRig"+i].data = i;
                this.ui["imgRig"+i].alpha = 0;
                this.ui["img1_"+i].alpha = 0;
                this.ui["img2_"+i].alpha = 0;
                this.ui["img3_"+i].alpha = 0;
            }
            this.ui.groupMask.touchEnabled = true;
            this.ui.groupMask.visible = false;
            this.ui.btnAgain.alpha = 0;
            this.ui.btnPage.alpha = 0;

            egret.Tween.get(this.ui.img1).to({x:0},500);
            egret.Tween.get(this.ui.img2).to({x:153},500);
            egret.Tween.get(this.ui.imgWord1).wait(500).to({alpha:1},500);
            egret.Tween.get(this.ui.imgWord2).wait(1000).to({alpha:1},500);
            egret.Tween.get(this.ui.imgBg).wait(1500).to({alpha:1},500);
            egret.Tween.get(this.ui.imgLeft1).wait(2000).to({alpha:1},300);
            egret.Tween.get(this.ui.imgLeft2).wait(2300).to({alpha:1},300);
            egret.Tween.get(this.ui.imgLeft3).wait(2600).to({alpha:1},300);
            for(var i:number=1;i<7;i++){
                egret.Tween.get(this.ui["imgRig"+i]).wait(3000+(i-1)*300).to({alpha:1},300);
            }
            egret.Tween.get(this.ui.btnPage).wait(5100).to({alpha:1},500);
            egret.Tween.get(this.ui.btnAgain).wait(5600).to({alpha:1},500);
        }
        
        /**
         * enter的过渡效果
         */
        public enterTransition():void {
            super.enterTransition();
            //TODO 可以覆盖这里,写自己想要的enter效果
        }

        /**
         * 退出的逻辑
         * 做一些数据的销毁或者初始化,保证下次进入的时候,不会残留
         */
        public outer():void {
            super.outer();
            //TODO 在这里写,退出时,清理数据的操作
        }
        
        /**
         * outer的过渡效果
         */
        public outerTransition():void {
            super.outerTransition();
            //TODO 可以覆盖这里,写自己想要的out效果
        }
        
        /**
         * 通过ResManager.getTexture(url)触发下载的url资源,会通知到当前显示的view中的onMyEventResDownloaded方法
         * 参数myevent携带两个数据
         *    url:完成加载的url
         *    data:完成加载的数据内容
         * 可以通过ResManager.getTexture(url),再次取到data数据
         * @param event
         */
        //public onMyEventResDownloaded(myevent:easy.MyEvent):void {
             //TODO 当前view动态加载的资源,请在这里添加刷新逻辑
        //}

        /**
         * View自身的材质,首次下载完成会调用加载一次,刷新UI皮肤显示
         * 使用了框架的UI机制,单ui的资源下载完成会调用改方法刷新
         * 若view中有逻辑使用到ui的素材,应该在这里做素材的赋值
         */
        public validateNow():void{
            super.validateNow();
            //TODO 初始特殊的素材资源,需要调用可以写在这里
            //if (this.ui && this.ui.spriteSheet) {
            //
            //}
        }
    }
}