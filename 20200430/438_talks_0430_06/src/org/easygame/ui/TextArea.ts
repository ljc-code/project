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
module easy {

	import TextFieldInputType = egret.TextFieldInputType;
    export class TextArea extends Group{
		private _text:string = "";//文本内容
        private _initFlow:Array<egret.ITextElement> = null;
        private _htmlTextParser:egret.HtmlTextParser = null;
        public _textField:egret.TextField = null;
        
        private _fontSize:number = Style.fontSize;//字体大小
        private _color:number = Style.LABEL_TEXT;//字体颜色
        private _fontName:string = Style.fontName;//字体名称
        private _hAlign:string = egret.HorizontalAlign.LEFT;
        private _vAlign:string = egret.VerticalAlign.MIDDLE;
        private _bold:boolean = false;
        private _italic:boolean = false;
		private _lineSpacing:number = 0;//行间距
        private _stroke:number = 0;
		private _strokeColor:number = 0x003350;
		private _html:boolean = false;
		private _editable:boolean = false;//可编辑状态
        private _maxChars:number = 0;//输入最大字符
        private _restrict:string = null;//限制输入
        private _inputType:string = null;//键盘输入类型

        public static FOLLOW_NONE:string = "none";
		public static FOLLOW_TOP:string = "top";
		public static FOLLOW_BOTTOM:string = "bottom";
		private _followForce:boolean = false;//当追加数据时,不论当前视图位置,直接追踪
		private _follow:string = TextArea.FOLLOW_NONE;//当追加数据时,自动追踪,none,top,bottom

        private isAddScollListener:boolean = false;

		public _link:Function = null;
        public constructor(drawDelay:boolean = false) {
            super(drawDelay);
        }
        public initData():void {
            super.initData();
        }
        /**
         * 初始化主场景的组件,加入场景时,主动调用一次
         * 子类覆写该方法,添加UI逻辑
         */  
        public createChildren():void {
			super.createChildren();
			this.setSize(Style.SLIDER_WIDTH, Style.SLIDER_WIDTH);
            this._textField = new egret.TextField();
			this._textField.multiline = true;
			this._textField.addEventListener(egret.Event.CHANGE, this.onChangeHdl, this);
			this.addChild(this._textField);
			this.invalidate();
            this.touchChildren = false;
		}

        /**
         * 文本滚动设置
         */
		private onSetScrollText(scroll:boolean):void {
            if (scroll && !this.isAddScollListener) {
                this.isAddScollListener = true;
                this.touchNonePixel = true;
                this.touchEnabled = true;
                //滚动监听
                this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this);
                this.addEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEnd, this);
                this.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.onTouchMove, this);
                this.addEventListener(egret.TouchEvent.TOUCH_CANCEL, this.onTouchCancel, this);
                this.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.onTouchCancel, this);
                //console.log("onSetScrollText true");
            } else if (!scroll && this.isAddScollListener){
                this.isAddScollListener = false;
                this.touchNonePixel = false;
                this.touchEnabled = false;
                //滚动监听
                this.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this);
                this.removeEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEnd, this);
                this.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.onTouchMove, this);
                this.removeEventListener(egret.TouchEvent.TOUCH_CANCEL, this.onTouchCancel, this);
                this.removeEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.onTouchCancel, this);
                //console.log("onSetScrollText false");
            }
        }

		/**
		 * 鼠标按下
		 * @param event
		 */
		private _isTouchBegin:boolean = false;
		private _touchPoint:egret.Point = null;
		public onTouchBegin(event:egret.TouchEvent):void{
		    console.log("onTouchBegin numline=" + this._textField.numLines + ", scollv=" + this._textField.scrollV);
            this._isTouchBegin = true;
            if (this._touchPoint == null) this._touchPoint = new egret.Point();
            this._touchPoint.x = event.stageX;
            this._touchPoint.y = event.stageY;
		}
		public onTouchEnd(event:egret.TouchEvent):void{
            this._isTouchBegin = false;
		}
		public onTouchMove(event:egret.TouchEvent):void{
		    if (this._isTouchBegin) {
                if (Math.abs(event.stageY - this._touchPoint.y) >= 3) {
                    if (event.stageY - this._touchPoint.y > 0) {
                        //console.log("down")
                        if (this._textField.scrollV > 1){
                            this._textField.scrollV = this._textField.scrollV-1;
                        }
                    } else {
                        //console.log("up")
                        if (this._textField.scrollV < this._textField.numLines-1){
                            this._textField.scrollV = this._textField.scrollV+1;
                        }
                    }
                }
                this._touchPoint.x = event.stageX;
                this._touchPoint.y = event.stageY;
            }
		}
		public onTouchCancel(event:egret.TouchEvent):void{
            this._isTouchBegin = false;
		}
		/**
		 * Called when the text in the text field is manually changed.
		 */
		public onChangeHdl(event:Event):void{
			this._text = this._textField.text;

		}
		
        /**
         * 文本内容
         */ 
        public get text():string {
            return this._text;
        }

        /**
         * 设置文本内容
         * @param value
         */
        public set text(value:string) {
			if(this._text != value){
	            this._text = value;
                if (this._html){
                    if(this._text == null) {
                        this._text = "";
                        this._initFlow = [];
                    } else {
                        if (this._htmlTextParser == null) this._htmlTextParser = new egret.HtmlTextParser();
                        this._initFlow = this._htmlTextParser.parser(this._text);
                    }
                } else {
                    if(this._text == null) {
                        this._text = "";
                    }
                }
				this.invalidate();
			}
        }

        /**
         * 追加文本内容
         * @param value
         */
        public append(value:string){
        	var oldLines:number = this._textField.numLines;
        	var oldscrollV:number = this._textField.scrollV;
        	if (this._html){
                if (this._htmlTextParser == null) this._htmlTextParser = new egret.HtmlTextParser();
                var textFlows:Array<egret.ITextElement> = this._htmlTextParser.parser(value);
                if (this._follow == TextArea.FOLLOW_TOP){
                    textFlows.reverse();
                    for (var i:number = 0; i < textFlows.length; i ++) {
                        this._textField.textFlow.unshift(textFlows[i])
                    }
                    this._textField.textFlow = this._textField.textFlow;
                    this.draw();
                } else  {
                    for (var i:number = 0; i < textFlows.length; i ++) {
                        this._textField.appendElement(textFlows[i]);
                    }
                    //console.log("textHeight=" + this._textField.textHeight + ", height=" + this.height);
                    if (this._textField.textHeight > this.height) {
                        this.onSetScrollText(true);
                    } else {
                        this.onSetScrollText(false);
                    }
                }
            } else {
                if (this._follow == TextArea.FOLLOW_TOP){
                    this._text = value + this._text;
                    this.draw();
                } else {
                    // this._text += value;
                    this._textField.appendText(value);
                    //console.log("textHeight=" + this._textField.textHeight + ", height=" + this.height);
                    if (this._textField.textHeight > this.height) {
                        this.onSetScrollText(true);
                    } else {
                        this.onSetScrollText(false);
                    }
                }
            }

			if (this._follow != TextArea.FOLLOW_NONE) {//需要触底
                if (this._follow == TextArea.FOLLOW_TOP) {
                    if (oldLines == 1 || this._followForce) {
                        this.scrollTo(1);
                    }
                } else {
                    if (oldLines == oldscrollV || this._followForce){//强制触底
                        this.scrollTo(this._textField.numLines);
                    }
                }
			}
		}

		/**
		 * 滚动到指定行位置
		 * @param value
		 */
		public scrollTo(value:number){
            if (this._textField)this._textField.scrollV = value;
		}

        /**
         * 文本内容显示对象
         */ 
        public getTextField():egret.TextField {
            return this._textField;
        }
		///////////////////////////////////
		// public methods
		///////////////////////////////////
		/**
		 * Draws the visual ui of the component.
		 */
		public draw():void{
			super.draw();
			if (this._textField == null) return;
			//console.log("@@label draw text=" + this._text);
            if (this._fontName != null){
				this._textField.fontFamily = this.fontName;
			}
			if (this._color >= 0) this._textField.textColor = this._color;
			if (this._fontSize > 0) this._textField.size = this._fontSize;
			this._textField.bold = this._bold;
			this._textField.italic = this._italic;
			if (this._html){
			    if (this._initFlow) this._textField.textFlow = this._initFlow;
			    this._initFlow = null;
            } else {
                this._textField.text = this._text;
            }

            if (this._editable){
			    this._textField.type = egret.TextFieldType.INPUT;
            } else {
                this._textField.type = egret.TextFieldType.DYNAMIC;
            }
            this._textField.maxChars = this._maxChars;
            if (easy.StringUtil.isUsage(this._restrict))this._textField.restrict = this._restrict;
            if (easy.StringUtil.isUsage(this._inputType))this._textField.inputType = this._inputType;


			this._textField.lineSpacing = this._lineSpacing;
            this._textField.stroke = this._stroke;
            this._textField.strokeColor = this._strokeColor;
			this._textField.width = this.width;
			this._textField.height = this.height;

			if (this._vAlign == egret.VerticalAlign.MIDDLE){
				this._textField.y = (this.height - this._textField.height)/2;
			} else if (this._vAlign == egret.VerticalAlign.BOTTOM){
				this._textField.y = this.height - this._textField.height;
			} else {
				this._textField.y = 0;
			}
            this._textField.textAlign = this._hAlign;
            this._textField.verticalAlign = this._vAlign;
            //console.log("textHeight=" + this._textField.textHeight + ", height=" + this.height);
            if (this._textField.textHeight > this.height) {
                this.onSetScrollText(true);
            } else {
                this.onSetScrollText(false);
            }
        }

		/**
		 * 设置文本是否斜体
		 * @param value
		 *
		 */
		public set italic(value:boolean){
			if(this._italic != value){
				this._italic = value;
				this.invalidate();
			}
		}
		public get italic():boolean{
			return this._italic;
		}
		/**
		 * 设置文本是否粗体
		 * @param value
		 *
		 */
		public set bold(value:boolean){
			if(this._bold != value){
				this._bold = value;
				this.invalidate();
			}
		}
		public get bold():boolean{
			return this._bold;
		}
		/**
		 * 设置文本字体 
		 * @param value
		 * 
		 */		
		public set fontName(value:string){
			if(this._fontName != value){
                this._fontName = value;
				this.invalidate();				
			}
		}
		public get fontName():string{
			return this._fontName;
		}
		/**
		 * 设置文本字体大小 
		 * @param value
		 * 
		 */		
		public set fontSize(value:any){
			if(this._fontSize != value){
                this._fontSize = value;
				this.invalidate();				
			}
		}
		public get fontSize():any{
			return this._fontSize;
		}
		/**
		 * 设置文本颜色 
		 * @param value
		 * 
		 */		
		public set color(value:any){
			if(this._color != value){
                this._color = value;
				this.invalidate();				
			}
		}
		public get color():any{
			return this._color;
		}
		/**
		 * 设置多行间距，外部设置一般为正数
		 */		
		public get lineSpacing():number{
			return this._lineSpacing;
		}
		
		public set lineSpacing(value:number){
			if(this._lineSpacing != value){
				this._lineSpacing = value;
				this.invalidate();
			}
		}
		/**
		 * 文字描边
		 */
		public get stroke():number{
			return this._stroke;
		}

		public set stroke(value:number){
			if(this._stroke != value){
				this._stroke = value;
				this.invalidate();
			}
		}
		/**
		 * 文字描边颜色
		 */
		public get strokeColor():number{
			return this._strokeColor;
		}

		public set strokeColor(value:number){
			if(this._strokeColor != value){
				this._strokeColor = value;
				this.invalidate();
			}
		}
		/**
		 * 水平对齐设置
		 * 默认egret.HorizontalAlign.LEFT;
		 */
		public get hAlign():string{
			return this._hAlign;
		}

		public set hAlign(value:string){
			if(this._hAlign != value){
				this._hAlign = value;
				this.invalidate();
			}
		}
		/**
		 * 竖直对齐设置
		 * 默认egret.VerticalAlign.MIDDLE;
		 */
		public get vAlign():string{
			return this._vAlign;
		}

		public set vAlign(value:string){
			if(this._vAlign != value){
				this._vAlign = value;
				this.invalidate();
			}
		}
		/**
		 * 当follow打开的时候,可以无视视图位置,append数据之后直接滚动到底部
		 * @param value
		 */
		public set followForce(value:boolean) {
			this._followForce = value;
		}
		public get followForce():boolean {
			return this._followForce;
		}

		/**
		 * append数据的时候,保持底部触底
		 * @param value
		 */
		public set follow(value:string) {
			this._follow = value;
		}
		public get follow():string {
			return this._follow;
		}

		/**
		 * html的文本
		 * @param value
		 */
		public set html(value:boolean) {
			if(this._html != value){
				this._html = value;
				if (this._html){
                    this.touchChildren = true;
                } else {
                    this.touchChildren = false;
                }
				this.invalidate();
			}
		}
		public get html():boolean {
			return this._html;
		}

        /**
         * 是否可编辑
         * @param value
         */
		public set editable(value:boolean) {
			if (this._editable != value) {
                this._editable = value;
                this.invalidate();
            }
		}
		public get editable():boolean {
			return this._editable;
		}

        /**
         * 最大输入字符
         * @param value
         */
		public set maxChars(value:number) {
			if (this._maxChars != value) {
                this._maxChars = value;
                this.invalidate();
            }
		}
		public get maxChars():number {
			return this._maxChars;
		}

        /**
         * 正则表达式,限制输入
         * @param value
         */
		public set restrict(value:string) {
			if (this._restrict != value) {
                this._restrict = value;
                this.invalidate();
            }
		}
		public get restrict():string {
			return this._restrict;
		}

        /**
         * 键盘类型
         * @param value
         */
		public set inputType(value:string) {
			if (this._inputType != value) {
                this._inputType = value;
                this.invalidate();
            }
		}
		public get inputType():string {
			return this._inputType;
		}
    }
}