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
    var Sound = (function () {
        function Sound() {
        }
        /**
         * 播放声音
         * @param loops 0次循环,表示无限循环,同一个无限循环播放的声音不允许多次播放
         * @returns {string}
         */
        Sound.play = function (name, startTime, loops, completeFunc, thisObj) {
            if (startTime === void 0) { startTime = 0; }
            if (loops === void 0) { loops = 1; }
            if (completeFunc === void 0) { completeFunc = null; }
            if (thisObj === void 0) { thisObj = null; }
            //console.log("sound.play=" + name + ", valume.open=" + GlobalSetting.VOLUME_OPEN)
            if (easy.GlobalSetting.VOLUME_OPEN && easy.StringUtil.isUsage(name)) {
                if (loops == 0 && Sound._soundDict[name])
                    return Sound._soundDict[name];
                var sound = RES.getRes(name); //RES.getRes目前egret的声音是单例
                if (!sound && easy.ResManager.hasRes(name)) {
                    sound = easy.ResManager.getRes(name);
                }
                if (sound) {
                    var channel = sound.play(startTime, loops);
                    Sound._soundDict[name] = { channel: channel, loops: loops <= 0, num: loops, func: completeFunc, thisObj: thisObj };
                    channel.addEventListener(egret.Event.SOUND_COMPLETE, Sound.onSoundComplete, Sound);
                    if (completeFunc && thisObj) {
                        channel.addEventListener(egret.Event.SOUND_COMPLETE, completeFunc, thisObj);
                    }
                    return channel;
                }
            }
            return null;
        };
        /**
         * 设置声音
         * @param name
         * @param value
         */
        Sound.volume = function (name, value) {
            if (easy.StringUtil.isUsage(name) && Sound._soundDict[name]) {
                var channelConfig = Sound._soundDict[name];
                if (channelConfig.channel) {
                    channelConfig.channel.volume = value;
                }
            }
        };
        /**
         * 播放完毕
         * @param event
         */
        Sound.onSoundComplete = function (event) {
            //console.log("Sound onSoundComplete");
            var channel = event.currentTarget;
            var channelConfig = null;
            for (var key in Sound._soundDict) {
                channelConfig = Sound._soundDict[key];
                var myEvent = easy.MyEvent.getEvent(easy.EventType.SOUND_COMPLETE);
                myEvent.addItem("name", key);
                myEvent.send();
                if (channelConfig.channel == channel) {
                    if (!channelConfig.loops) {
                        channelConfig.num--;
                        if (channelConfig.num == 0 && channel.hasEventListener(egret.Event.SOUND_COMPLETE)) {
                            channel.removeEventListener(egret.Event.SOUND_COMPLETE, Sound.onSoundComplete, Sound);
                            delete Sound._soundDict[key];
                            if (channelConfig.func && channelConfig.thisObj) {
                                channel.removeEventListener(egret.Event.SOUND_COMPLETE, channelConfig.func, channelConfig.thisObj);
                            }
                            channelConfig.func = null;
                            channelConfig.thisObj = null;
                            channelConfig.channel = null;
                            delete Sound._soundDict[key];
                        }
                    }
                    break;
                }
            }
        };
        /**
         * 停止声音,对循环播放的声音有效
         * @param name
         */
        Sound.stop = function (name) {
            if (easy.StringUtil.isUsage(name) && Sound._soundDict[name]) {
                var channelConfig = Sound._soundDict[name];
                if (channelConfig.channel) {
                    if (channelConfig.channel.hasEventListener(egret.Event.SOUND_COMPLETE)) {
                        channelConfig.channel.removeEventListener(egret.Event.SOUND_COMPLETE, Sound.onSoundComplete, Sound);
                        if (channelConfig.func && channelConfig.thisObj) {
                            channelConfig.channel.removeEventListener(egret.Event.SOUND_COMPLETE, channelConfig.func, channelConfig.thisObj);
                        }
                    }
                    channelConfig.channel.stop();
                    channelConfig.func = null;
                    channelConfig.thisObj = null;
                    channelConfig.channel = null;
                    var myEvent = easy.MyEvent.getEvent(easy.EventType.SOUND_STOP);
                    myEvent.addItem("name", name);
                    myEvent.send();
                    delete Sound._soundDict[name];
                }
            }
        };
        Sound._soundDict = {}; //循环播放的文件
        return Sound;
    }());
    easy.Sound = Sound;
    __reflect(Sound.prototype, "easy.Sound");
})(easy || (easy = {}));
