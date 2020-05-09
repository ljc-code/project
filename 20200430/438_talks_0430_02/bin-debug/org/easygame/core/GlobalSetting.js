var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
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
var easy;
(function (easy) {
    /**
     * 这里记录全局公用的一些数据和设置
     */
    var GlobalSetting = (function () {
        function GlobalSetting() {
        }
        /**
         * 初始化全局的数据
         */
        GlobalSetting.initData = function () {
            GlobalSetting.RUNTIME = egret.Capabilities.runtimeType;
            GlobalSetting.STAGE = egret.MainContext.instance.stage;
            //Debug.log = "计算正常帧时=" + HeartBeat._eplasedTime;
            //console.log("uuid=" + GlobalSetting.APP_DEVICE);
            easy.Debug.log = "---- GlobalSetting init ----";
            easy.Debug.log = "runtimeType=" + egret.Capabilities.runtimeType + ", deviceType=" + egret.MainContext.deviceType;
            easy.Debug.log = "RUNTIME=" + GlobalSetting.RUNTIME;
            console.log("runtimeType=" + egret.Capabilities.runtimeType + ", deviceType=" + egret.MainContext.deviceType);
            //尺寸初始化
            GlobalSetting.initInfoSize();
        };
        /**
         * 初始化舞台尺寸
         */
        GlobalSetting.initInfoSize = function () {
            console.log("stage resize w=" + GlobalSetting.STAGE.stageWidth + ", h=" + GlobalSetting.STAGE.stageHeight);
            GlobalSetting.STAGE_WIDTH = GlobalSetting.STAGE.stageWidth;
            GlobalSetting.STAGE_HEIGHT = GlobalSetting.STAGE.stageHeight;
            //var sizeInfo:egret.sys.StageDisplaySize = egret.sys.screenAdapter.calculateStageSize();
            GlobalSetting.DISPLAY_WIDTH = GlobalSetting.STAGE_WIDTH;
            GlobalSetting.DISPLAY_HEIGHT = GlobalSetting.STAGE_HEIGHT;
            if (GlobalSetting.DEV_MODEL) {
                easy.Debug.log = "---- GlobalSetting Info Size ----";
                easy.Debug.log = "STAGE_WIDTH=" + GlobalSetting.STAGE_WIDTH + ", STAGE_HEIGHT=" + GlobalSetting.STAGE_HEIGHT;
                //Debug.log = "DISPLAY_WIDTH=" + GlobalSetting.DISPLAY_WIDTH + ", DISPLAY_HEIGHT=" + GlobalSetting.DISPLAY_HEIGHT;
            }
        };
        /**
         * 是否native运行
         */
        GlobalSetting.isNative = function () {
            return GlobalSetting.RUNTIME == GlobalSetting.RUNTIME_NATIVE || GlobalSetting.RUNTIME == GlobalSetting.RUNTIME_WXGAME;
        };
        /**
         * 判断是不是微信
         * @returns {boolean}
         */
        GlobalSetting.prototype.isWeiXin = function () {
            var ua = navigator.userAgent.toString();
            var str = ua.match(/MicroMessenger/i);
            if (str == "MicroMessenger") {
                return true;
            }
            else {
                return false;
            }
            //var bet = 1;//iphone系列比较特殊，尺寸需要翻倍
            //switch (wid) {
            //    case 320://iphone4\5
            //        bet = 2;
            //        break;
            //    case 375://iphone 6
            //        bet = 2;
            //        break;
            //    case 414://iphone 6+
            //        bet = 3;
            //        break;
            //    default:
            //        bet = 1;
            //        break;
            //}
            //wid *= bet; hei *= bet;
        };
        /**
         * 在显示view的时候,按照设计的尺寸显示,不做view宽高的改变,采用egret自带的scale策略
         */
        GlobalSetting.DISPLAY_VIEW_EGRET = "egret";
        /**
         * 在显示view的时候会自动把view页面设置成当前最大显示宽高
         */
        GlobalSetting.DISPLAY_VIEW_EASYGAME = "easygame";
        /**
         * 显示模式设置
         * @type {string}
         */
        GlobalSetting.DISPLAY_MODEL = GlobalSetting.DISPLAY_VIEW_EGRET;
        /**
         * 开发模式开关
         * 打开开发模式,logger会记录打印信息到debug窗口
         * @type {boolean}
         */
        GlobalSetting.DEV_MODEL = true; //开发模式
        /**
         * 游戏系统的时间校对
         * 一般登录完成后,服务器会通知一个当前的服务器时间
         * 以此时间为基准,客户端可以随时校对自己的时间
         * @type {number}
         */
        GlobalSetting.SYSTEM_DATE = 0;
        /**
         * 声音总开关
         * @type {boolean}
         */
        GlobalSetting.VOLUME_OPEN = true; //音量开关
        /**
         * 帧频设置
         * @type {number}
         */
        GlobalSetting.FRAME_RATE = 60; //帧频
        /**
         * 舞台
         * @type {null}
         */
        GlobalSetting.STAGE = null; //舞台
        //public static IOS:Boolean = false;//是否ios设备
        /**
         * 舞台的宽
         * @type {number}
         */
        GlobalSetting.STAGE_WIDTH = 480; //实际舞台宽
        /**
         * 舞台的高
         * @type {number}
         */
        GlobalSetting.STAGE_HEIGHT = 800; //实际舞台高
        /**
         * 显示的宽
         * @type {number}
         */
        GlobalSetting.DISPLAY_WIDTH = 480;
        /**
         * 显示的高
         * @type {number}
         */
        GlobalSetting.DISPLAY_HEIGHT = 800;
        /**
         * 最小view的宽
         * @type {number}
         */
        GlobalSetting.VIEW_MINI_WIDTH = 300; //最小view宽
        /**
         * 最小view的高
         * @type {number}
         */
        GlobalSetting.VIEW_MINI_HEIGHT = 300; //最小view高
        /**
         * 最大加载数量
         * @type {number}
         */
        GlobalSetting.LOADING_THREAD_MAX = 5;
        /**
         * 检测空闲下载的间隔时间,单位:秒
         * @type {number}
         */
        GlobalSetting.CHECK_IDLE_LOADING = 15;
        /**
         * 开关
         * 进行报表统计
         * @type {null}
         */
        GlobalSetting.REPORT = false;
        /**
         * 开关
         * 对UI的可点击对象进行报表统计
         * @type {null}
         */
        GlobalSetting.REPORT_UI = false;
        //报表URL地址
        GlobalSetting.REPORT_URL = "";
        //产品名
        GlobalSetting.APP_NAME = "";
        //产品id
        GlobalSetting.APP_PRODUCT = "";
        /**
         * 设备信息, 报表使用
         */
        GlobalSetting.APP_DEVICE = "";
        GlobalSetting.APP_RATE = 0;
        GlobalSetting.APP_RATE_NAME = 0;
        /**
         * 渠道信息, 报表使用
         */
        GlobalSetting.APP_CHANNEL = "";
        /**
         * 版本信息, 报表使用
         */
        GlobalSetting.APP_VERSION = "";
        /**
         * 使用的渠道, 报表使用
         */
        GlobalSetting.APP_PROVIDE = 0;
        /**
         * app存取数据的方式
         */
        GlobalSetting.APP_STORAGE = "local"; //local:本地, net:网络, local_net:混合模式
        //存储方式的常量设定
        GlobalSetting.STORAGE_LOCAL = "local"; //本地存储方式
        GlobalSetting.STORAGE_NET = "net"; //网络存储方式
        GlobalSetting.STORAGE_LOCAL_NET = "local_net"; //本地和网络混合存储方式
        /**
         * runtime环境
         */
        GlobalSetting.RUNTIME = "web";
        GlobalSetting.RUNTIME_WEB = "web";
        GlobalSetting.RUNTIME_NATIVE = "native";
        GlobalSetting.RUNTIME_WXGAME = "wxgame";
        /**
         * 统计
         */
        GlobalSetting.STATS_VIEW = false; //VIEW 统计
        GlobalSetting.STATS_WIN = false; //WIN 统计
        GlobalSetting.STATS_BTN = false; //BTN 统计
        GlobalSetting.STATS_MC = false; //MC 统计
        GlobalSetting.STATS_LIST = false; //LIST 统计
        /**
         * CDN资源位置
         */
        GlobalSetting.CDN_RES = "resource/";
        GlobalSetting.CDN_RES2 = "resource2/";
        GlobalSetting.VERSION_RES = ""; //刷新资源的随机值
        return GlobalSetting;
    }());
    easy.GlobalSetting = GlobalSetting;
    __reflect(GlobalSetting.prototype, "easy.GlobalSetting");
})(easy || (easy = {}));
