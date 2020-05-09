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
var Main = (function (_super) {
    __extends(Main, _super);
    function Main() {
        var _this = _super.call(this) || this;
        //RES资源全部下载完成
        _this.loadResAllComplete = false;
        //easy game的配置文件时候下载完成
        _this._isEasyGameOk = false; //游戏配置下载完毕
        _this._isSoundOk = false; //声音准备完毕    
        _this._isProjectUIOk = false; //公用UI下载完毕
        _this._isCreateScene = false; //是否已创建场景
        _this._isLoadingViewOk = false; //view的loading是否准备好了
        _this._progressCalculate = null;
        _this._isViewEnter = false; //第一个加载的view是否已经准备完成
        _this.loadResAllComplete = false;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
        return _this;
    }
    Main.prototype.onAddToStage = function (event) {
        //初始化全局数据,以便Heatbeat可以使用
        easy.GlobalSetting.initData();
        //初始化Resource资源加载库
        easy.ResManager.loadConfig(easy.GlobalSetting.CDN_RES + "loading_main.json", ["loading_main"], this.onResLoadingMianComplete, this);
        //下载loading view的内容
        easy.ResManager.loadConfig(easy.GlobalSetting.CDN_RES + "loading_view.json", ["loading_view"], this.onResLoadingViewComplete, this);
        easy.EventManager.addEventListener(easy.EventType.VIEW_ENTER, this.onHiddenloadingMain, this);
    };
    /**
     * loading view配置文件的加载完成
     * @param event
     */
    Main.prototype.onResLoadingViewComplete = function (event) {
        this._isLoadingViewOk = true;
    };
    /**
     * loading main配置文件的加载完成
     * @param event
     */
    Main.prototype.onResLoadingMianComplete = function (event) {
        //console.log("@Main onLoadingMianResourceLoadComplete=" + event.groupName);
        if (RES.isGroupLoaded("loading_main")) {
            //设置加载进度界面
            this.loadingMain = new modules.loadingProgressMainBar(); //loading main
            this.stage.addChild(this.loadingMain);
            this.loadingMain.width = easy.GlobalSetting.DISPLAY_WIDTH;
            this.loadingMain.height = easy.GlobalSetting.DISPLAY_HEIGHT;
            this.loadingMain.enter();
            //启动进度条计数
            this._progressCalculate = new easy.ProgressCalculate(10);
            easy.HeartBeat.addListener(this, this.onHbProgress, 2);
            //初始化Resource资源加载库
            easy.ResManager.loadConfig(easy.GlobalSetting.CDN_RES + "resource.json", ["group_easygame_config"], this.onResLoadGameConfigComplete, this);
            //提前加载Json数据,创建场景的时候,可能就需要用到数据了
            //modules.DataManager.loadJsonFile();
            //加载公用资源,如果设置有公用资源请打开此项
            //easy.ResManager.loadResFile("modules");
            //easy.EventManager.addEventListener(easy.EventType.PROJECT_RES_DOWNLOADED, this.onProjectResDownloaded, this);
            this._isProjectUIOk = true;
        }
    };
    /**
     * 控制进度条
     * @type {number}
     */
    Main.prototype.onHbProgress = function () {
        var progress = this._progressCalculate.progress();
        //console.log("progress=" + progress);
        this._progressCalculate._progressSpeedUp = (this.loadResAllComplete && this._isProjectUIOk && this._isViewEnter);
        this.loadingMain.setProgress(progress, 100);
        if (this.loadResAllComplete && !this._isCreateScene && this._isLoadingViewOk)
            this.createScene();
        if (progress == 100) {
            easy.HeartBeat.removeListener(this, this.onHbProgress);
            this.removeLoadingUI();
        }
    };
    /**
     * 将loading页面移除，开始创建场景
     */
    Main.prototype.removeLoadingUI = function () {
        if (this.loadingMain) {
            this.loadingMain.outer();
        }
    };
    /**
     * 公用资源加载完成的通知
     * @param myEvent
     */
    Main.prototype.onProjectResDownloaded = function (myEvent) {
        easy.EventManager.removeEventListener(easy.EventType.PROJECT_RES_DOWNLOADED, this.onProjectResDownloaded, this);
        this._isProjectUIOk = true;
        this.checkAllResourceLoaded();
    };
    /**
     * preload资源组加载完成
     */
    Main.prototype.onResLoadGameConfigComplete = function (event) {
        //console.log("@Main onResourceLoadComplete=" + event.groupName);
        if (RES.isGroupLoaded("group_easygame_config")) {
            this._isEasyGameOk = true;
            //下载全部完成
            //设置帧频
            easy.GlobalSetting.FRAME_RATE = 60;
            //EasyGame初始化
            easy.EasyGame.init();
            //设置界面切换的loading,view的loading和Win的loading可以设置成不一样的类
            easy.ViewManager.defaultLoadingClass = easy.DefaultLoadingView; //loading view
            easy.PopupManager.defaultLoadingClass = easy.DefaultLoadingView; //loading view
        }
        this.checkAllResourceLoaded();
    };
    /**
     * 声音加载完成
     */
    Main.prototype.onResLoadSoundComplete = function (event) {
        //console.log("@Main onResourceLoadComplete=" + event.groupName);
        if (RES.isGroupLoaded("sound")) {
            this._isSoundOk = true;
            //声音加载完毕,播放背景音文件
            easy.Sound.play("sound_bg", 0, 0);
        }
    };
    /**
     * 检测是否所有需要的资源全部加载完成
     * 下载全部完成的情况下设置loadAllComplete标志,等待loading的全部反应
     */
    Main.prototype.checkAllResourceLoaded = function () {
        if (this._isEasyGameOk && this._isProjectUIOk) {
            //创建场景
            if (easy.GlobalSetting.APP_STORAGE == easy.GlobalSetting.STORAGE_NET || easy.GlobalSetting.APP_STORAGE == easy.GlobalSetting.STORAGE_LOCAL_NET) {
                this.loadDataFromNet();
            }
            else {
                this.loadResAllComplete = true;
            }
        }
    };
    /**
     * 隐藏加载进度条
     */
    Main.prototype.onHiddenloadingMain = function (myEvent) {
        this._isViewEnter = true;
        easy.EventManager.removeEventListener(easy.EventType.VIEW_ENTER, this.onHiddenloadingMain, this);
        //声音加载
        easy.ResManager.addGroupCompleteListener("sound", this.onResLoadSoundComplete, this);
    };
    /**
     * 需要从网络初始化信息
     */
    Main.prototype.loadDataFromNet = function () {
        //TODO 这里填写需要网络加载的信息,完成后,请调用loadDataFromNetComplete()方法,加载主场景
        //this.loadDataFromNetComplete();
    };
    /**
     * 从网络加载初始化信息完成
     */
    Main.prototype.loadDataFromNetComplete = function () {
        //TODO 网络信息的初始化,请在这里填写
        this.loadResAllComplete = true;
    };
    /**
     * 创建场景
     */
    Main.prototype.createScene = function () {
        if (this._isCreateScene)
            return; //防止多次创建
        this._isCreateScene = true;
        //console.log("main.createScene")
        //TODO 切换到第一个主场景
        easy.ViewManager.show(modules.index1View, null, false);
        //TODO 提前预设空闲下载,加快后续的模块载入速度
        easy.ResManager.addIdleDownload(modules.index1View);
        easy.ResManager.addIdleDownload(modules.index2View);
        easy.ResManager.addIdleDownload(modules.index3View);
        easy.ResManager.addIdleDownload(modules.index4View);
        easy.ResManager.addIdleDownload(modules.index5View);
        easy.ResManager.addIdleDownload(modules.index6View);
        easy.ResManager.addIdleDownload(modules.index7View);
        easy.ResManager.addIdleDownload(modules.index8View);
        easy.ResManager.addIdleDownload(modules.index9View);
        easy.ResManager.addIdleDownload(modules.index10View);
        easy.ResManager.addIdleDownload(modules.index11View);
        easy.ResManager.addIdleDownload(modules.index12View);
        //TODO 动画的预加载方式
        //easy.AnimateManager.getAnimateData("need_to_download_name");
    };
    return Main;
}(egret.DisplayObjectContainer));
__reflect(Main.prototype, "Main");
