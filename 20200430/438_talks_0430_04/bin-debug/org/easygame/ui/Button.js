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
     * 按钮
     */
    var Button = (function (_super) {
        __extends(Button, _super);
        function Button(drawDelay) {
            if (drawDelay === void 0) { drawDelay = false; }
            var _this = _super.call(this, drawDelay) || this;
            _this._textureLabel = null; //文字图片
            _this._textureIcon = null; //图标
            _this._label = null; //文本
            _this._text = "";
            _this._texture = null; //外设的纹理
            _this._imgDisplay = null; //显示按钮up用的image
            _this._imgLabel = null; //显示文字图片的image
            _this._imgIcon = null; //显示图标用的image
            _this._initDisplayData = false; //是否初始化显示对象
            _this._selected = false; //选择时为ture
            _this._toggleGroup = null; //toggle分组名称
            _this.stateArray = [Button.STATE_UP]; //正常的按钮,只有三态,第四态是禁用态,其他的态可以自己加入
            _this._currentState = Button.STATE_UP; //当前态
            _this._textureDict = {}; //各材质的映射,在给予img之前,保存在这个映射中
            //private _scaleEnable:boolean = false;// 直接拉伸
            _this._verticalSplit = true; //bitmapdata采用竖直切割的方式
            //public _gapSplit:number = 0;//3态切割间隔
            //public _xOffsetSplit:number = 0;//切割x起始
            //public _yOffsetSplit:number = 0;//切割y起始
            //文字部分的设定
            _this._labelMarginLeft = 0;
            _this._labelMarginLeftEnable = false;
            _this._labelMarginTop = 0;
            _this._labelMarginTopEnable = false;
            //icon设定
            _this._iconMarginLeft = 0;
            _this._iconMarginLeftEnable = false;
            _this._iconMarginTop = 0;
            _this._iconMarginTopEnable = false;
            /**
             * 适合材质的尺寸
             */
            _this._autoSize = false;
            _this._labelColor = easy.Style.BUTTON_TEXT;
            _this._labelBold = false; //label加粗
            _this._labelItalic = false;
            _this._labelLineSpacing = 0; //行间距
            _this._labelMultiline = false; //多行显示
            _this._labelStroke = 0;
            _this._labelStrokeColor = 0x003350;
            //labe字体大小
            _this._fontSize = 12;
            //label字体
            _this._fontName = null;
            _this._scale9GridEnable = false;
            _this._scale9GridRect = null; //九宫拉伸的尺寸
            _this._fillMode = "scale"; //scale, repeat.
            //声音播放
            _this._soundName = "sound_button";
            //像素级检测
            _this._testPixelEnable = false;
            return _this;
        }
        Button.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.setSize(easy.Style.BUTTON_DEFAULT_WIDTH, easy.Style.BUTTON_DEFAULT_HEIGHT);
            this.touchEnabled = true; //事件接收
            this.touchChildren = false;
            //背景图多态显示
            this._imgDisplay = new egret.Bitmap();
            this.addChild(this._imgDisplay);
            this._imgDisplay.width = this.width;
            this._imgDisplay.height = this.height;
            this._imgDisplay.fillMode = egret.BitmapFillMode.SCALE;
            this._imgDisplay.touchEnabled = false;
            //文字显示
            this._label = new easy.Label(this.drawDelay);
            this._label.autoSize = true;
            this._label.clip = false;
            this._label.hAlign = egret.HorizontalAlign.CENTER;
            this._label.showBg = false;
            this.addChild(this._label);
            this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchEvent, this);
            this.addEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEvent, this);
            this.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.onTouchRleaseOutside, this);
            this.addEventListener(egret.TouchEvent.TOUCH_CANCEL, this.onTouchRleaseOutside, this);
        };
        Button.prototype.onTouchEvent = function (event) {
            if (!this.enabled) {
                event.stopImmediatePropagation();
                return;
            }
            if (easy.GlobalSetting.STATS_BTN) {
                //统计代码
                var stateutils = egret.getDefinitionByName("StatsUtil");
                if (stateutils)
                    stateutils["trackEvent"]("btn", "touch", this.name, 0);
            }
            //console.log("Button onTouchEvent=" + event.type);
            if (event.currentTarget == this) {
                //像素检测
                if (this._testPixelEnable) {
                    if (!this.testPixel32(event.localX, event.localY)) {
                        event.stopImmediatePropagation();
                        return;
                    }
                }
                if (easy.StringUtil.isUsage(this._toggleGroup)) {
                    if (event.type == egret.TouchEvent.TOUCH_BEGIN) {
                        this.selected = !this._selected;
                    }
                    this.onPlaySound();
                    // console.log("Button _toggleGroup=" + this._toggleGroup + ", _selected=" + this._selected);
                }
                else {
                    if (event.type == egret.TouchEvent.TOUCH_BEGIN) {
                        this._currentState = Button.STATE_DOWN;
                        this.onPlaySound();
                    }
                    else if (event.type == egret.TouchEvent.TOUCH_END) {
                        this._currentState = Button.STATE_UP;
                    }
                    else if (event.type == egret.TouchEvent.TOUCH_MOVE) {
                        this._currentState = Button.STATE_OVER;
                    }
                    if (this.statesLength == 1 && this._currentState == Button.STATE_DOWN) {
                        this.scaleX = 0.9;
                        this.scaleY = 0.9;
                        this.alpha = 0.8;
                    }
                    else {
                        this.scaleX = 1;
                        this.scaleY = 1;
                        this.alpha = 1;
                    }
                }
            }
            this.invalidate();
        };
        /**
         * 在外释放
         * @param event
         */
        Button.prototype.onTouchRleaseOutside = function (event) {
            if (!easy.StringUtil.isUsage(this._toggleGroup) || (easy.StringUtil.isUsage(this._toggleGroup) && !this._selected)) {
                this._currentState = Button.STATE_UP;
                this.invalidate();
                this.scaleX = 1;
                this.scaleY = 1;
                this.alpha = 1;
            }
        };
        Object.defineProperty(Button.prototype, "currentState", {
            get: function () {
                return this._currentState;
            },
            set: function (value) {
                if (this._currentState != value) {
                    this._currentState = value;
                    this.invalidate();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Button.prototype, "texture", {
            get: function () {
                return this._texture;
            },
            set: function (value) {
                if (this._texture != value) {
                    this._initDisplayData = false;
                    this._texture = value;
                    this.invalidate();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Button.prototype, "fillMode", {
            /**
             * Sets/gets the fillMode of the scale9Grid bitmap.(scale|repeat)
             */
            get: function () {
                return this._fillMode;
            },
            set: function (value) {
                if (this._fillMode != value) {
                    this._fillMode = value;
                    this.invalidate();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Button.prototype, "scale9GridEnable", {
            /**
             * 默认背景texture的九宫格拉伸设定
             * 只有showDefaultSkin并且设置了defaultSkinTexture,才有效
             * 默认绘制的背景是纯色的,所以不需要进行九宫拉伸设定
             */
            get: function () {
                return this._scale9GridEnable;
            },
            set: function (value) {
                if (this._scale9GridEnable != value) {
                    this._scale9GridEnable = value;
                    if (this._scale9GridEnable && this._scale9GridRect == null)
                        this._scale9GridRect = new egret.Rectangle();
                    this.invalidate();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Button.prototype, "scale9GridX", {
            get: function () {
                if (this._scale9GridRect)
                    return this._scale9GridRect.x;
                return 0;
            },
            /**
             * Sets the x of the bitmap's scale9Grid.
             */
            set: function (value) {
                if (this._scale9GridRect == null)
                    this._scale9GridRect = new egret.Rectangle();
                if (this._scale9GridRect.x != value) {
                    this._scale9GridRect.x = value;
                    this.invalidate();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Button.prototype, "scale9GridY", {
            get: function () {
                if (this._scale9GridRect)
                    return this._scale9GridRect.y;
                return 0;
            },
            /**
             * Sets the y of the bitmap's scale9Grid.
             */
            set: function (value) {
                if (this._scale9GridRect == null)
                    this._scale9GridRect = new egret.Rectangle();
                if (this._scale9GridRect.y != value) {
                    this._scale9GridRect.y = value;
                    this.invalidate();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Button.prototype, "scale9GridWidth", {
            get: function () {
                if (this._scale9GridRect)
                    return this._scale9GridRect.width;
                return 0;
            },
            /**
             * Sets the width of the bitmap's scale9Grid.
             */
            set: function (value) {
                if (this._scale9GridRect == null)
                    this._scale9GridRect = new egret.Rectangle();
                if (this._scale9GridRect.width != value) {
                    this._scale9GridRect.width = value;
                    this.invalidate();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Button.prototype, "scale9GridHeight", {
            get: function () {
                if (this._scale9GridRect)
                    return this._scale9GridRect.height;
                return 0;
            },
            /**
             * Sets the height of the bitmap's scale9Grid.
             */
            set: function (value) {
                if (this._scale9GridRect == null)
                    this._scale9GridRect = new egret.Rectangle();
                if (this._scale9GridRect.height != value) {
                    this._scale9GridRect.height = value;
                    this.invalidate();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Button.prototype, "scale9GridRect", {
            /**
             * 九宫设置的区域
             * @returns {egret.Rectangle}
             */
            get: function () {
                return this._scale9GridRect;
            },
            set: function (rect) {
                this._scale9GridRect = rect;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * 绘制
         */
        Button.prototype.draw = function () {
            //super.draw();
            //if (this._data)console.log("@@Button draw _text=" + this._text + ", selected=" + this.selected + ", data=" + this._data.id);
            //初始化显示对象和数据
            if (!this._initDisplayData) {
                if (!this._texture) {
                    if (Button.DEFAULT_TEXTURE == null) {
                        this.initDefaultTexture();
                    }
                    this._texture = Button.DEFAULT_TEXTURE;
                }
                this.splitTextureSource(); //切割成态数对应的材质
            }
            if (this._imgDisplay == null)
                return;
            //一态的时候，第二态用第一态的资源 但是alpha 为0.8 scale为0.9
            if (this.statesLength == 1 && this._currentState == Button.STATE_DOWN) {
                this._imgDisplay.texture = this._textureDict[Button.STATE_UP];
            }
            else {
                this._imgDisplay.texture = this._textureDict[this._currentState];
            }
            if (this.scale9GridEnable && this.scale9GridRect != null) {
                this._imgDisplay.scale9Grid = this.scale9GridRect;
            }
            else {
                this._imgDisplay.scale9Grid = null;
            }
            this._imgDisplay.fillMode = this._fillMode;
            this._imgDisplay.width = this.width;
            this._imgDisplay.height = this.height;
            this._imgDisplay.anchorOffsetX = this._imgDisplay.width / 2;
            this._imgDisplay.anchorOffsetY = this._imgDisplay.height / 2;
            this._imgDisplay.x = this._imgDisplay.width / 2;
            this._imgDisplay.y = this._imgDisplay.height / 2;
            //console.log("Button.draw 1111 this.width=" + this.width + ", this.height=" + this.height);
            if (this._textureLabel != null) {
                if (this._imgLabel == null) {
                    this._imgLabel = new egret.Bitmap();
                    this._imgLabel.touchEnabled = false;
                    this.addChild(this._imgLabel);
                }
                this._imgLabel.texture = this._textureLabel;
                if (this._labelMarginLeftEnable) {
                    this._imgLabel.x = this._labelMarginLeft;
                }
                else {
                    this._imgLabel.x = (this.width - this._imgLabel.width) / 2;
                }
                if (this._labelMarginTopEnable) {
                    this._imgLabel.y = this._labelMarginTop;
                }
                else {
                    this._imgLabel.y = (this.height - this._imgLabel.height) / 2;
                }
            }
            if (this._textureIcon != null) {
                if (this._imgIcon == null) {
                    this._imgIcon = new egret.Bitmap(null);
                    this._imgIcon.touchEnabled = false;
                    this.addChild(this._imgIcon);
                }
                this._imgIcon.texture = this._textureIcon;
                if (this._iconMarginLeftEnable) {
                    this._imgIcon.x = this._iconMarginLeft;
                }
                else {
                    this._imgIcon.x = (this.width - this._imgIcon.width) / 2;
                }
                if (this._iconMarginTopEnable) {
                    this._imgIcon.y = this._iconMarginTop;
                }
                else {
                    this._imgIcon.y = (this.height - this._imgIcon.height) / 2;
                }
            }
            if (this._label) {
                if (!this._label.parent)
                    this.addChild(this._label);
                this._label.text = this._text;
                this._label.fontSize = this._fontSize;
                this._label.fontName = this._fontName;
                this._label.bold = this._labelBold;
                this._label.italic = this._labelItalic;
                this._label.lineSpacing = this._labelLineSpacing;
                this._label.multiline = this._labelMultiline;
                this._label.stroke = this._labelStroke;
                this._label.strokeColor = this._labelStrokeColor;
                this._label.onInvalidate(null); //立即生效,这样下面的数据才准
                if (this._labelMarginLeftEnable) {
                    this._label.x = this._labelMarginLeft;
                }
                else {
                    this._label.x = (this.width - this._label.width) / 2;
                    //console.log("Button.draw 222 this.width=" +this.width + ", this._label.width=" + this._label.width);
                }
                if (this._labelMarginTopEnable) {
                    this._label.y = this._labelMarginTop;
                }
                else {
                    this._label.y = (this.height - this._label.height) / 2;
                }
            }
        };
        /**
         * 没有材质,绘制一个默认的材质背景
         */
        Button.prototype.initDefaultTexture = function () {
            if (Button.DEFAULT_TEXTURE == null) {
                var shape = new egret.Shape();
                shape.width = this.width;
                shape.height = this.height;
                shape.graphics.beginFill(easy.Style.BUTTON_FACE);
                shape.graphics.drawRect(0, 0, this.width, this.height);
                // shape.graphics.beginFill(0xfff666);
                // shape.graphics.drawRect(0, this.height , this.width, this.height);
                //shape.graphics.beginFill(0x33ff66);
                //shape.graphics.drawRect(0, this.height * 2, this.width, this.height);
                shape.graphics.endFill();
                //boder
                shape.graphics.lineStyle(1, 0x000000);
                shape.graphics.drawRect(0, 0, this.width - 1, this.height - 1);
                // shape.graphics.moveTo(1, this.height-1);
                // shape.graphics.lineTo(this.width-2, this.height-1);
                // shape.graphics.moveTo(1, this.height + 1);
                // shape.graphics.lineTo(this.width-2, this.height + 1);
                var renderTexture = new egret.RenderTexture();
                renderTexture.drawToTexture(shape);
                Button.DEFAULT_TEXTURE = renderTexture;
            }
        };
        /**
         * 切割Texture材质集
         * @param value
         */
        Button.prototype.splitTextureSource = function () {
            if (this._texture) {
                //console.log("splitTextureSource texture.w=" + this._texture._sourceWidth + ", h=" + this._texture._sourceHeight + ", name=" + this.name)
                this._initDisplayData = true;
                var splietWidth = 0;
                var splietHeight = 0;
                var textureWidth = this._texture.textureWidth;
                var textureHeight = this._texture.textureHeight;
                if (this.stateArray.length == 1) {
                    splietWidth = textureWidth;
                    splietHeight = textureHeight;
                    this._textureDict[this.stateArray[0]] = this._texture;
                }
                else {
                    var i = 0;
                    var xOffset = 0; //this._texture._bitmapX;
                    var yOffset = 0; //this._texture._bitmapY;
                    if (this._verticalSplit) {
                        splietWidth = textureWidth;
                        splietHeight = textureHeight / this.statesLength;
                    }
                    else {
                        splietWidth = textureWidth / this.statesLength;
                        splietHeight = textureHeight;
                    }
                    var spriteSheet = new egret.SpriteSheet(this._texture);
                    for (i = 0; i < this.stateArray.length; i++) {
                        if (this._verticalSplit) {
                            this._textureDict[this.stateArray[i]] = spriteSheet.createTexture(this.name + Math.round(Math.random() * 999999) + "_" + this.stateArray[i], xOffset, i * splietHeight + yOffset, splietWidth, splietHeight);
                        }
                        else {
                            this._textureDict[this.stateArray[i]] = spriteSheet.createTexture(this.name + Math.round(Math.random() * 999999) + "_" + this.stateArray[i], i * splietWidth + xOffset, yOffset, splietWidth, splietHeight);
                        }
                    }
                }
                if (this._autoSize) {
                    this.width = splietWidth;
                    this.height = splietHeight;
                }
            }
        };
        Object.defineProperty(Button.prototype, "upSkin", {
            get: function () {
                return this._textureDict[Button.STATE_UP];
            },
            /**
             * 设置按钮弹起态皮肤
             */
            set: function (value) {
                if (!this.isStateExist(Button.STATE_UP)) {
                    this.stateArray.push(Button.STATE_UP);
                }
                this._textureDict[Button.STATE_UP] = value;
                this.invalidate();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Button.prototype, "overSkin", {
            get: function () {
                return this._textureDict[Button.STATE_OVER];
            },
            /**
             * 设置按钮悬停态皮肤
             */
            set: function (value) {
                if (!this.isStateExist(Button.STATE_OVER)) {
                    this.stateArray.push(Button.STATE_OVER);
                }
                this._textureDict[Button.STATE_OVER] = value;
                this.invalidate();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Button.prototype, "downSkin", {
            get: function () {
                return this._textureDict[Button.STATE_DOWN];
            },
            /**
             * 设置按钮按下态皮肤
             */
            set: function (value) {
                if (!this.isStateExist(Button.STATE_DOWN)) {
                    this.stateArray.push(Button.STATE_DOWN);
                }
                this._textureDict[Button.STATE_DOWN] = value;
                this.invalidate();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Button.prototype, "disableSkin", {
            get: function () {
                return this._textureDict[Button.STATE_DISABLE];
            },
            /**
             * 设置按钮禁用态皮肤
             */
            set: function (value) {
                if (!this.isStateExist(Button.STATE_DISABLE)) {
                    this.stateArray.push(Button.STATE_DISABLE);
                }
                this._textureDict[Button.STATE_DISABLE] = value;
                this.invalidate();
            },
            enumerable: true,
            configurable: true
        });
        /**
         *
         * @param state
         * @return false,不存在;true,存在.
         *
         */
        Button.prototype.isStateExist = function (state) {
            if (this.stateArray.indexOf(state) != -1) {
                return true;
            }
            return false;
        };
        Object.defineProperty(Button.prototype, "label", {
            get: function () {
                return this._text;
            },
            /**
             * 设置按钮文本
             */
            set: function (value) {
                this._text = value;
                if (this._label) {
                    this._label.text = this._text;
                }
                this.invalidate();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Button.prototype, "selected", {
            get: function () {
                return this._selected;
            },
            set: function (value) {
                this._selected = value;
                this._currentState = (this._selected ? Button.STATE_DOWN : Button.STATE_UP);
                //if (this._data)console.log("button data=" + this._data.id + ", selected=" + this._selected);
                if (this._selected && easy.StringUtil.isUsage(this._toggleGroup)) {
                    var myevent = easy.MyEvent.getEvent(Button.TOGGLE_PREFIX + this._toggleGroup);
                    myevent.addItem("caller", this);
                    myevent.addItem("group", this._toggleGroup);
                    myevent.send();
                }
                this.invalidate();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Button.prototype, "statesLength", {
            get: function () {
                return this.stateArray.length;
            },
            /**
             * 设置按钮可用状态
             * <p>在预设基础下修改状态数组长度</p>
             * <p>[STATE_UP, STATE_OVER, STATE_DOWN, STATE_DISABLE, STATE_TOGGLE]</p>
             * @param value 长度值
             */
            set: function (value) {
                value = value < 0 ? 1 : value;
                //if (this.stateArray.length == value) return;
                //this.stateArray.length = 0;
                switch (value) {
                    case 1:
                        this.stateArray = [Button.STATE_UP]; //一态的时候，第二态用第一态的资源 但是alpha 为0.8 scale为0.9
                        break;
                    case 2:
                        this.stateArray = [Button.STATE_UP, Button.STATE_DOWN];
                        break;
                    case 3:
                        this.stateArray = [Button.STATE_UP, Button.STATE_OVER, Button.STATE_DOWN];
                        break;
                    case 4:
                        this.stateArray = [Button.STATE_UP, Button.STATE_OVER, Button.STATE_DOWN, Button.STATE_DISABLE];
                        break;
                }
                this._initDisplayData = false;
                this.invalidate();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Button.prototype, "imgLabel", {
            get: function () {
                return this._textureLabel;
            },
            /**
             * Sets the bitmapData of the bitmap.
             */
            set: function (value) {
                if (this._textureLabel != value) {
                    this._textureLabel = value;
                    this.invalidate();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Button.prototype, "imgIcon", {
            get: function () {
                return this._textureIcon;
            },
            /**
             * Sets the bitmapData of the imgIcon.
             */
            set: function (value) {
                if (this._textureIcon != value) {
                    this._textureIcon = value;
                    this.invalidate();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Button.prototype, "labelColor", {
            get: function () {
                return this._labelColor;
            },
            /**
             * 设置文字文本的颜色
             */
            set: function (value) {
                if (this._labelColor != value) {
                    this._labelColor = value;
                    if (this._label)
                        this._label.color = value;
                    this.invalidate();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Button.prototype, "fontName", {
            get: function () {
                return this._fontName;
            },
            /**
             * 设置文本字体
             * @param value
             *
             */
            set: function (value) {
                if (this._fontName != value) {
                    this._fontName = value;
                    this.invalidate();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Button.prototype, "fontSize", {
            get: function () {
                return this._fontSize;
            },
            /**
             * 设置文本字体大小
             * @param value
             *
             */
            set: function (value) {
                if (this._fontSize != value) {
                    this._fontSize = value;
                    this.invalidate();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Button.prototype, "labelMarginLeft", {
            get: function () {
                return this._labelMarginLeft;
            },
            /**
            * 是否设置label显示左边距(即label在button中的x坐标)
            */
            set: function (value) {
                if (this._labelMarginLeft != value) {
                    this._labelMarginLeft = value;
                    this.invalidate();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Button.prototype, "labelMarginLeftEnable", {
            get: function () {
                return this._labelMarginLeftEnable;
            },
            set: function (value) {
                if (this._labelMarginLeftEnable != value) {
                    this._labelMarginLeftEnable = value;
                    this.invalidate();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Button.prototype, "labelMarginTop", {
            get: function () {
                return this._labelMarginTop;
            },
            set: function (value) {
                if (this._labelMarginTop != value) {
                    this._labelMarginTop = value;
                    this.invalidate();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Button.prototype, "labelMarginTopEnable", {
            get: function () {
                return this._labelMarginTopEnable;
            },
            set: function (value) {
                if (this._labelMarginTopEnable != value) {
                    this._labelMarginTopEnable = value;
                    this.invalidate();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Button.prototype, "iconMarginLeft", {
            get: function () {
                return this._iconMarginLeft;
            },
            set: function (value) {
                if (this._iconMarginLeft != value) {
                    this._iconMarginLeft = value;
                    this.invalidate();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Button.prototype, "iconMarginLeftEnable", {
            get: function () {
                return this._iconMarginLeftEnable;
            },
            set: function (value) {
                if (this._iconMarginLeftEnable != value) {
                    this._iconMarginLeftEnable = value;
                    this.invalidate();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Button.prototype, "iconMarginTop", {
            get: function () {
                return this._iconMarginTop;
            },
            set: function (value) {
                if (this._iconMarginTop != value) {
                    this._iconMarginTop = value;
                    this.invalidate();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Button.prototype, "iconMarginTopEnable", {
            get: function () {
                return this._iconMarginTopEnable;
            },
            set: function (value) {
                if (this._iconMarginTopEnable != value) {
                    this._iconMarginTopEnable = value;
                    this.invalidate();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Button.prototype, "autoSize", {
            get: function () {
                return this._autoSize;
            },
            /**
             * 设置按钮是否按照材质的宽高设置
             * true:按照切割后的材质,设置按钮的宽和高
             * false:根据按钮本身的宽和高设置材质的宽高
             * @param value
             */
            set: function (value) {
                if (this._autoSize != value) {
                    this._autoSize = value;
                    this.invalidate();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Button.prototype, "toggleGroup", {
            get: function () {
                return this._toggleGroup;
            },
            set: function (value) {
                if (easy.StringUtil.isUsage(this._toggleGroup)) {
                    easy.EventManager.removeEventListener(Button.TOGGLE_PREFIX + this._toggleGroup, this.onEventToggle, this);
                }
                this._toggleGroup = value; //新的group
                if (easy.StringUtil.isUsage(this._toggleGroup)) {
                    easy.EventManager.addEventListener(Button.TOGGLE_PREFIX + this._toggleGroup, this.onEventToggle, this);
                }
            },
            enumerable: true,
            configurable: true
        });
        Button.prototype.onEventToggle = function (event) {
            if (easy.StringUtil.isUsage(this._toggleGroup) && event.getItem("group") == this._toggleGroup && event.getItem("caller") != this) {
                //console.log("0000 onEventToggle group=" + this._toggleGroup + ", data=" + this._data.id);
                this._selected = false;
                this._currentState = Button.STATE_UP;
                this.invalidate();
            }
        };
        Button.prototype.setSize = function (w, h) {
            _super.prototype.setSize.call(this, w, h);
            this.autoSize = false;
        };
        /**
         * 初始化声音对象,并播放声音
         */
        Button.prototype.onPlaySound = function () {
            if (easy.StringUtil.isUsage(this._soundName)) {
                easy.Sound.play(this._soundName);
            }
        };
        Object.defineProperty(Button.prototype, "sound", {
            get: function () {
                return this._soundName;
            },
            /**
             * 设置播放的声音名称
             * @param value
             */
            set: function (value) {
                this._soundName = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Button.prototype, "drawDelay", {
            set: function (delay) {
                this._setDrawDelay(delay);
                if (this._label)
                    this._label.drawDelay = delay;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Button.prototype, "labelBold", {
            get: function () {
                return this._labelBold;
            },
            /**
             * label 加粗
             * @param value
             */
            set: function (value) {
                if (this._labelBold != value) {
                    this._labelBold = value;
                    this.invalidate();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Button.prototype, "labelItalic", {
            get: function () {
                return this._labelItalic;
            },
            /**
             * label 斜体
             * @param value
             */
            set: function (value) {
                if (this._labelItalic != value) {
                    this._labelItalic = value;
                    this.invalidate();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Button.prototype, "labelLineSpacing", {
            get: function () {
                return this._labelLineSpacing;
            },
            /**
             * label 行间距
             * @param value
             */
            set: function (value) {
                if (this._labelLineSpacing != value) {
                    this._labelLineSpacing = value;
                    this.invalidate();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Button.prototype, "labelMultiline", {
            get: function () {
                return this._labelMultiline;
            },
            /**
             * label 多行显示
             * @param value
             */
            set: function (value) {
                if (this._labelMultiline != value) {
                    this._labelMultiline = value;
                    this.invalidate();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Button.prototype, "labelStroke", {
            get: function () {
                return this._labelStroke;
            },
            /**
             * label 描边厚度
             * @param value
             */
            set: function (value) {
                if (this._labelStroke != value) {
                    this._labelStroke = value;
                    this.invalidate();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Button.prototype, "labelStrokeColor", {
            get: function () {
                return this._labelStrokeColor;
            },
            /**
             * label 描边颜色
             * @param value
             */
            set: function (value) {
                if (this._labelStrokeColor != value) {
                    this._labelStrokeColor = value;
                    this.invalidate();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Button.prototype, "testPixelEnable", {
            get: function () {
                return this._testPixelEnable;
            },
            /**
             * 像素级检测
             * @param value
             */
            set: function (value) {
                this._testPixelEnable = value;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * 获取xy位置的像素值,xy是舞台值
         * @param x 舞台坐标
         * @param y 舞台坐标
         */
        Button.prototype.getPixel32 = function (x, y) {
            //底图
            var locolPoint = this.globalToLocal(x, y);
            var found;
            var datas = null;
            if (this._imgDisplay && this._imgDisplay.texture) {
                datas = this._imgDisplay.texture.getPixel32(locolPoint.x, locolPoint.y);
            }
            for (var i = 0; i < datas.length; i++) {
                if (datas[i] > 0) {
                    found = true;
                    return datas;
                }
            }
            //icon
            if (this._imgIcon && this._imgIcon.texture) {
                datas = this._imgIcon.texture.getPixel32(x, y);
            }
            for (var i = 0; i < datas.length; i++) {
                if (datas[i] > 0) {
                    found = true;
                    return datas;
                }
            }
            //label
            if (this._imgLabel && this._imgLabel.texture) {
                datas = this._imgLabel.texture.getPixel32(x, y);
            }
            for (var i = 0; i < datas.length; i++) {
                if (datas[i] > 0) {
                    found = true;
                    return datas;
                }
            }
            return [];
        };
        /**
         * 检测xy位置的像素值是否透明,xy是舞台值
         * @param x 舞台值
         * @param y 舞台值
         * @return true:有像素值, false:无像素值
         */
        Button.prototype.testPixel32 = function (x, y) {
            var datas = this.getPixel32(x, y);
            for (var i = 0; i < datas.length; i++) {
                if (datas[i] > 0) {
                    return true;
                }
            }
            return false;
        };
        Button.TOGGLE_PREFIX = "ui#button#toggle_"; //toggle事件的前缀,尽量避免受到其他事件名称的混淆
        Button.DEFAULT_TEXTURE = null; //默认材质
        Button.STATE_UP = "up";
        Button.STATE_OVER = "over";
        Button.STATE_DOWN = "down";
        Button.STATE_DISABLE = "disable";
        return Button;
    }(easy.BaseGroup));
    easy.Button = Button;
    __reflect(Button.prototype, "easy.Button");
})(easy || (easy = {}));
