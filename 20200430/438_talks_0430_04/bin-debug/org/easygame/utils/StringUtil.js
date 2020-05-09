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
    var StringUtil = (function () {
        function StringUtil() {
        }
        StringUtil.dump = function (array) {
            var s = "";
            var a = "";
            for (var i = 0; i < array.length; i++) {
                if (i % 16 == 0)
                    s += ("0000" + i.toString(16)).substring(-4, 4) + " ";
                if (i % 8 == 0)
                    s += " ";
                var v = array[i];
                s += ("0" + v.toString(16)).substring(-2, 2) + " ";
                //a += (v < 32 || v > 126)?".":string.fromCharCode(v);
                if (((i + 1) % 16) == 0 || i == (array.length - 1)) {
                    s += " |" + a + "|\n";
                    a = "";
                }
            }
            return s;
        };
        //是否有效
        StringUtil.isUsage = function (value) {
            if (value == undefined || value == null || ("" + value) == "" || ("" + value) == "undefined" || ("" + value).trim() == "") {
                return false;
            }
            return true;
        };
        //
        StringUtil.randomRange = function (start, end) {
            if (end === void 0) { end = 0; }
            return Math.floor(start + (Math.random() * (end - start)));
        };
        /**
         * 格式化字符串(金钱，如：100,000,000)
         * @param value
         * @param hasSign 是否带符号
         * @return "xx,xxx"
         *
         */
        StringUtil.changToMoney = function (value, hasSign) {
            if (hasSign === void 0) { hasSign = false; }
            var i = 0;
            var count = 0;
            var str = "";
            if (hasSign) {
                if (value.charCodeAt(0) >= 48 && value.charCodeAt(0) <= 57) {
                    value = "+" + value;
                }
            }
            for (i = value.length - 1; i >= 0; i--) {
                str = value.charAt(i) + str;
                if (value.charCodeAt(i) >= 48 && value.charCodeAt(i) <= 57) {
                    if (value.charCodeAt(i - 1) >= 48 && value.charCodeAt(i - 1) <= 57) {
                        count++;
                        if (count == 3) {
                            str = "," + str;
                            count = 0;
                        }
                    }
                }
                else {
                    count = 0;
                }
            }
            return str;
        };
        /**
         * 统计子串在字符串中得数目
         * @param subString 字串
         * @param source 源字符串
         * @return
         *
         */
        StringUtil.getMatchesCount = function (subString, source) {
            var count = 0;
            var lastIndex = source.lastIndexOf(subString);
            var currentIndex = source.indexOf(subString);
            if (currentIndex == lastIndex && lastIndex >= 0) {
                return 1;
            }
            else if (currentIndex != lastIndex && lastIndex >= 0) {
                ++count;
                while (currentIndex != lastIndex) {
                    currentIndex = source.indexOf(subString, currentIndex + subString.length - 1);
                    if (currentIndex != -1) {
                        ++count;
                    }
                }
            }
            return count;
        };
        /**
         * 当数字超过10000时，转化为“万”的描述
         * @param value 数据
         * @return 目标字符串
         *
         */
        StringUtil.changeIntToText = function (value) {
            if (value === void 0) { value = 0; }
            var str = "";
            if (value >= 10000) {
                str += Math.ceil(value / 10000).toFixed(0) + "万";
            }
            else if (value < 0) {
                str += "0";
            }
            else {
                str += value.toFixed(0);
            }
            return str;
        };
        /**
         * 将16进制颜色值转换为html类型(即html类型的)
         * 16进制类型的颜色值
         * @return 返回html类型的颜色值
         */
        StringUtil.convertColor2Html = function (color) {
            if (color === void 0) { color = 0; }
            var colorHtml = "#000000";
            var colorTemp = "";
            try {
                colorTemp = color.toString(16);
                while (colorTemp.length < 6) {
                    colorTemp = "0" + colorTemp;
                }
                colorHtml = "#" + colorTemp;
            }
            catch (err) {
            }
            return colorHtml;
            //            var result:Boolean = false;
            //            //支持十进制、十六进制
            //            if(value.indexOf("0x")==0 && ("0x" + ToString(parseInt(value).toString(16), value.length - 2, "0")) == value.toLowerCase()){
            //                result = true;
            //            }
            //            else if(ToString(parseInt(value).toString(), value.length, "0") == value){
            //                result = true;
            //            }else{
            //                result = false;
            //            }
            //            return result;
            //            
        };
        /**
         *对字符串中的特殊字符进行转义
         * @param value 包含特殊字符的串
         * @return 转义后的新字符串
         *
         */
        StringUtil.htmlESC = function (value) {
            if (!StringUtil.isUsage(value)) {
                return null;
            }
            else {
                var ampPattern = /&/g;
                var ltPattern = /</g;
                var gtPattern = />/g;
                value = value.replace(ampPattern, "&amp;"); //该条必须在第一行
                value = value.replace(ltPattern, "&lt;");
                value = value.replace(gtPattern, "&gt;");
                return value;
            }
        };
        /**
         * 把数字替换成数组
         * @param value 待替换成字符数组的数值
         * @return 数字字符数组
         */
        StringUtil.replaceNumberToArray = function (value) {
            var numVector = new Array();
            var str = value.toString();
            var len = str.length;
            for (var i = 0; i < len; i++) {
                numVector.push(str.charAt(i));
            }
            return numVector;
        };
        /**
         * 字符串替换
         * @param content
         * @param src
         * @param target
         * @return
         *
         */
        StringUtil.replace = function (content, src, target) {
            if (!StringUtil.isUsage(content))
                return "";
            while (content.indexOf(src) >= 0)
                content = content.replace(src, target);
            return content;
        };
        /**
         * 切割字符串
         * @param str 要切割的字符串
         * @param split 切割的符号
         * @returns {Array<any>}
         */
        StringUtil.spliteStrArr = function (str, split) {
            var result = [];
            if (StringUtil.isUsage(str)) {
                var sd = str.split(split);
                for (var i = 0; i < sd.length; i++) {
                    if (StringUtil.isUsage(sd[i])) {
                        result.push(sd[i]);
                    }
                }
            }
            return result;
        };
        /**
         * 把形如v1,v2的字符串,切割存储在array对象,并返回
         * @param str  k1,v1;k2,v2;k3,v3
         * @param kvSplit key和value的切割符号
         * @param split 大切割符号
         */
        StringUtil.parserStrToArray = function (str, kvSplit, split) {
            if (kvSplit === void 0) { kvSplit = ","; }
            if (split === void 0) { split = ";"; }
            var obj = [];
            if (!StringUtil.isUsage(str))
                return obj;
            //大切割
            var result1 = StringUtil.spliteStrArr(str, split);
            var keyvalue = null;
            for (var i = 0; i < result1.length; i++) {
                obj.push(StringUtil.spliteStrArr(result1[i], kvSplit));
            }
            return obj;
        };
        /**
         * 把形如key=value的字符串,切割存储在map对象,并返回
         * @param str  k1=v1;k2=v2;k3=v3
         * @param kvSplit key和value的切割符号
         * @param split 大切割符号
         */
        StringUtil.parserStrToObj = function (str, item, kvSplit, split) {
            if (item === void 0) { item = null; }
            if (kvSplit === void 0) { kvSplit = "@"; }
            if (split === void 0) { split = ";"; }
            var obj = {};
            if (item)
                obj = item;
            if (!StringUtil.isUsage(str))
                return obj;
            //大切割
            var result1 = StringUtil.spliteStrArr(str, split);
            var keyvalue = null;
            for (var i = 0; i < result1.length; i++) {
                keyvalue = StringUtil.spliteStrArr(result1[i], kvSplit);
                if (keyvalue.length == 2) {
                    var typeValue = typeof (obj[keyvalue[0]]);
                    if (typeValue == "number") {
                        obj[keyvalue[0]] = parseInt(keyvalue[1]);
                    }
                    else if (typeValue == "boolean") {
                        obj[keyvalue[0]] = keyvalue[1] == "true";
                    }
                    else {
                        if (obj[keyvalue[0]] instanceof Array) {
                            obj[keyvalue[0]] = easy.StringUtil.spliteStrArr(keyvalue[1], ",");
                        }
                        else {
                            obj[keyvalue[0]] = keyvalue[1];
                        }
                    }
                }
            }
            return obj;
        };
        /**
         * 解析一个对象成key=value的字符串组合
         * @param obj
         * @param kvSplit key和value的切割符号
         * @param split 大切割符号
         * @param return  k1=v1;k2=v2;k3=v3
         */
        StringUtil.parserObjToStr = function (obj, kvSplit, split) {
            if (kvSplit === void 0) { kvSplit = "@"; }
            if (split === void 0) { split = ";"; }
            var str = "";
            for (var key in obj) {
                //console.log(key + "=" + data[key]);
                if (key != "__class__" && key != "hashCode" && key != "__types__" && key != "__proto__") {
                    if (!(obj[key] instanceof Function)) {
                        str += key + kvSplit + obj[key] + split;
                    }
                }
            }
            return str;
        };
        StringUtil.isPhone = function (str) {
            //var regu ="/(^\([1-9]{3}\)[1-9]{3}(-\d{4})?$)" +
            //    "|(^\([1-9]{3}\)\s[1-9]{3}(-\d{4})?$)" +
            //    "|(^([1-9]{3}\s\/\s[1-9]{3}(-\d{4}))?$)" +
            //    "|(^([1-9]{3}-[1-9]{3}(-\d{4}))?$)" +
            //    "|(^([1-9]{3}\s[1-9]{3}(\s\d{4}))?$)" +
            //    "|(^\d{10}$)/";
            //var regu = "^((\(\d{3}\))|(\d{3}\-))?13[0-9]\d{8}|15[89]\d{8}";
            //var regu = "1[1-9][0-9]{9}";
            //var re = new RegExp(regu);
            //if (re.test( str )) {
            //    //alert(str+"true");
            //    return true;
            //}
            if (StringUtil.isUsage(str) && str.length == 11) {
                var num = parseInt(str);
                if (("" + num) == str) {
                    return true;
                }
            }
            return false;
        };
        /**
         * 格式化时间
         * @param timer
         * @param formate  ":"  00:00  "."  00:00
         * @returns {string}
         */
        StringUtil.formatTime = function (timer, formate) {
            if (formate === void 0) { formate = ":"; }
            var str = "";
            var minute = Math.floor(timer / 60);
            if (minute < 10) {
                str = "0" + minute;
            }
            else {
                str = "" + minute;
            }
            str += formate;
            var second = Math.floor(timer % 60);
            if (second < 10) {
                str += "0" + second;
            }
            else {
                str += "" + second;
            }
            return str;
        };
        /**
         * 将 Date 转化为指定格式的String
         * @param date
         * @param fmt "yyyy-M-d h:m:s.S" ==> 2006-7-2 8:9:4.18   "yyyy-MM-dd hh:mm:ss.S" ==> 2006-07-02 08:09:04.423
         * @returns {string}
         */
        StringUtil.dateFormat = function (date, fmt) {
            var o = {
                "M+": date.getMonth() + 1,
                "d+": date.getDate(),
                "h+": date.getHours(),
                "m+": date.getMinutes(),
                "s+": date.getSeconds(),
                "q+": Math.floor((date.getMonth() + 3) / 3),
                "S": date.getMilliseconds() //毫秒
            };
            if (/(y+)/.test(fmt))
                fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
            for (var k in o)
                if (new RegExp("(" + k + ")").test(fmt))
                    fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
            return fmt;
        };
        return StringUtil;
    }());
    easy.StringUtil = StringUtil;
    __reflect(StringUtil.prototype, "easy.StringUtil");
})(easy || (easy = {}));
