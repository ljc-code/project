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
     * <p>index7的逻辑类</p>
     * @date  :2020-05-09 13:59:42
     * @EasyGame.org Tools
     */ 
    export class index7View  extends easy.View{
        public constructor() {
            super();
        }
        /**
         * 初始化主场景的组件,加入场景时,主动调用一次
         * 子类覆写该方法,添加UI逻辑
         */  
        public createChildren():void {
            super.createChildren();
            this.ui = new index7();
        }
        /**
         * 获取ui对象
         * @returns
         */
        public get ui():index7{
            return <index7>this._ui;
        }

        /**
         * 设置ui对象
         * @param
         */
        public set ui(myui:index7){
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
            //this.ui.imgGray.texture;
            //this.ui.img1.texture;
            //this.ui.img2.texture;
            //this.ui.img3.texture;
            //this.ui.imgWord1.texture;
            //this.ui.imgWord2.texture;
            //this.ui.imgWord3.texture;
            //this.ui.imgWord4.texture;
            //this.ui.imgWord5.texture;
            //this.ui.imgMove1.texture;
            //this.ui.imgActive1.texture;
            //this.ui.imgActive2.texture;
            //this.ui.imgActive3.texture;
            //this.ui.imgMove2.texture;
            //this.ui.imgActive4.texture;
            //this.ui.imgActive5.texture;
            //this.ui.imgActive6.texture;
            //this.ui.imgMove3.texture;
            //this.ui.imgActive7.texture;
            //this.ui.imgActive8.texture;
            //this.ui.imgActive9.texture;
            //this.ui.imgMove4.texture;
            //this.ui.imgActive10.texture;
            //this.ui.imgActive11.texture;
            //this.ui.imgActive12.texture;
            //this.ui.imgMove5.texture;
            //this.ui.imgActive13.texture;
            //this.ui.imgActive14.texture;
            //this.ui.imgActive15.texture;
            //this.ui.imgMove6.texture;
            //this.ui.imgActive16.texture;
            //this.ui.imgActive17.texture;
            //this.ui.imgActive18.texture;
            //this.ui.imgMove7.texture;
            //this.ui.imgActive19.texture;
            //this.ui.imgActive20.texture;
            //this.ui.imgActive21.texture;
            //this.ui.imgMove8.texture;
            //this.ui.imgActive22.texture;
            //this.ui.imgActive23.texture;
            //this.ui.imgActive24.texture;
            //this.ui.imgArrows.texture;
            //this.ui.btnSubmit.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchBtnSubmit, this);
            //this.ui.imgClick.texture;
            //this.ui.btnDele.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchBtnDele, this);
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
            easy.TweenEffect.setAnchorXY(this.ui.btnSubmit);
            easy.TweenEffect.setAnchorXY(this.ui.btnDele);
            this.ui.btnAgain.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onTouchBtnAgain,this)
            this.ui.btnPage.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onTouchBtnPage,this)
            this.ui.btnSubmit.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onTouchBtnSubmit,this)
            this.ui.btnDele.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onTouchBtnDele,this)
            this.ui.groupMask.visible = false;
            this.ui.groupMask.touchEnabled = true;
            this.ui.groupMask.addEventListener(egret.TouchEvent.TOUCH_TAP,this.deleteMakk,this);
            for(var i:number=1;i<25;i++){
                this.ui["imgActive"+i].touchEnabled = true;
                this.ui["imgActive"+i].data = i;
                this.ui["imgActive"+i].addEventListener(egret.TouchEvent.TOUCH_TAP,this.onTouchBtnActive,this)
            }
        }

        //click button btnAgain response funciton
        private deleteMakk():void{
            this.ui.groupMask.visible = false;
            console.log(this.yesorNo)
            if(this.yesorNo==3){
                console.log("跳转页面")
                easy.ViewManager.show(modules.index8View, null, false);
            }
        }
        private answerArr = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
        private yesorNo = 0;
        //click button btnAgain response funciton
        private onTouchBtnAgain(event:egret.TouchEvent):void {
            //TODO 此处填写 btnAgain按钮点击逻辑
            this.ui.groupClick.visible = false;
            this.yesorNo++;
            var activeStr = this.activeArr.toString();
            var answerStr = this.answerArr.toString();
            if(activeStr != answerStr){
                console.log("错误")
                if(this.yesorNo!=3){
                    this.ui.label1.text = "回答错误";
                    this.ui.label2.text = "请再试一次";
                    this.ui.label3.text = "";
                }else{
                    this.ui.label1.text = "您已答错3次";
                    this.ui.label2.text = "正确答案是";
                    this.ui.label3.text = "全选";
                }
                this.ui.groupMask.visible = true;
            }else{
                console.log("正确");
                easy.ViewManager.show(modules.index8View, null, false);
            }

        }
        //click button btnPage response funciton
        private onTouchBtnPage(event:egret.TouchEvent):void {
            //TODO 此处填写 btnPage按钮点击逻辑
            easy.ViewManager.show(modules.index6View, null, false);
        }
        private onTouchBtnSubmit(event:egret.TouchEvent):void {
            //TODO 此处填写 btnPage按钮点击逻辑
            this.ui.groupClick.visible = true;
            this.ui.btnAgain.visible = true;
        }
        private onTouchBtnDele(event:egret.TouchEvent):void {
            //TODO 此处填写 btnPage按钮点击逻辑
            this.ui.groupClick.visible = false;
        }
        private activeArr = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
        private onTouchBtnActive(e:egret.TouchEvent):void {
            //TODO 此处填写 btnPage按钮点击逻辑
            var index = e.currentTarget.data;
            console.log(index)
            if(this.activeArr[index-1]){
                this.activeArr[index-1] = 0;
                this.ui["imgActive"+index].texture=this.ui.spriteSheet.getTexture("pAge7-14")
            }else{
                this.activeArr[index-1] = 1;
                this.ui["imgActive"+index].texture=this.ui.spriteSheet.getTexture("pAge7-15")
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
            this.activeArr = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

            this.ui.imgBg.alpha = 0;
            this.ui.img1.x = -500;
            this.ui.img2.x = 1000;
            this.ui.img3.alpha = 0;
            this.ui.imgGray.alpha = 0;
            for(var i:number=1;i<6;i++){
                this.ui["imgWord"+i].alpha = 0;
            }
            for(var i:number=1;i<9;i++){
                this.ui["groupMove"+i].alpha = 0;
                this.ui["groupMove"+i].x = 100;
            }
            for(var i:number=1;i<25;i++){
                this.ui["imgActive"+i].texture=this.ui.spriteSheet.getTexture("pAge7-14")
            }
            this.ui.groupClick.visible = false;
            this.ui.btnAgain.visible = false;
            //this.ui.groupLook.visible = false;
            this.ui.groupLook.alpha = 0;
            this.ui.btnAgain.alpha = 0;
            this.ui.btnPage.alpha = 0;

            egret.Tween.get(this.ui.imgBg).to({alpha:1},500);
            egret.Tween.get(this.ui.img1).wait(500).to({x:0},500);
            egret.Tween.get(this.ui.img2).wait(500).to({x:153},500);
            egret.Tween.get(this.ui.img3).wait(1000).to({alpha:1},500);
            for(var i:number=1;i<6;i++){
                egret.Tween.get(this.ui["imgWord"+i]).wait(1500+(i-1)*300).to({alpha:1},500);
            }
            for(var i:number=1;i<9;i++){
                egret.Tween.get(this.ui["groupMove"+i]).wait(3500+(i-1)*300).to({alpha:1,x:17},500);
            }

            egret.Tween.get(this.ui.groupLook).wait(6000).to({alpha:1},500);
            egret.Tween.get(this.ui.btnPage).wait(6500).to({alpha:1},500);
            egret.Tween.get(this.ui.btnAgain).wait(7000).to({alpha:1},500);
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