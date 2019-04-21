import Vue from 'vue'
var userData = [{ "letter": "A", "data": ["艾克", "阿菊", "安康杯"] },
{ "letter": "B", "data": ["彪歌", "表姐", "本科生", "白色", "爸"] },
{ "letter": "C", "data": ["城建税", "嚓", "吃撒", "擦擦", "吃鸡王"] },
{ "letter": "D", "data": ["大汉", "搭理", "东莞姐", "东来熊", "DjANgo", "DAXX"] },
{ "letter": "E", "data": ["恶灵退散"] },
{ "letter": "F", "data": ["副组长", "佛姐", "服务小姐", "富贵兄"] },
{ "letter": "G", "data": ["Gerter", "果果", "嘎嘎", "沟通值", "国华", "国企", "广西北部湾银行"] },
{ "letter": "H", "data": ["红姐姐", "海洋", "海空"] },
{ "letter": "J", "data": ["姬子", "骄傲女", "嘉兴银行"] },
{ "letter": "K", "data": ["昆仑师父", "昆山老板"] },
{ "letter": "L", "data": ["喇叭王", "兰州拉面", "老师", "拉阿布", "啦IAB"] },
{ "letter": "M", "data": ["绵阳", "民"] },
{ "letter": "N", "data": ["南", "内蒙", "宁波通", "宁", "宁分"] },
{ "letter": "P", "data": ["潘丽婷", "潘姐"] },
{ "letter": "Q", "data": ["全选喔Ian"] },
{ "letter": "R", "data": ["日照"] },
{ "letter": "S", "data": ["山东省农村信用社联合社", "上海银行"] },
{ "letter": "T", "data": ["台州银行", "太仓农村商业银行", "天津农村商业银行", "天津银行"] },
{ "letter": "W", "data": ["威海市商业银行", "潍坊银行", "温州银行", "武汉农村商业银行"] },
{ "letter": "X", "data": ["西安银行", "厦门国际银行", "厦门银行", "新韩银行", "邢台银行", "兴业银行"] },
{ "letter": "Y", "data": ["烟台银行", "营口银行", "邮政储蓄银行", "友利银行"] },
{ "letter": "Z", "data": ["枣庄银行", "张家港农村商业银行", "长安银行", "长沙银行", "招商银行"] }];

 new Vue({
    el: "#apps",
    data: {
        userData: userData
    }, methods: {

    }
});

Vue.component('my-list', {
    template: `<div class="content"  id="content">
                    <ul ref="listUser" @touchmove="bMove=true">
                        <li class="item" v-for="(index,item) in userData">
                            <p data-index="{{index}}">{{item.letter}}</p>
                            <ul>
                                <li  v-for="bankName in item.data">{{bankName}}</li>
                            </ul>
                        </li>
                    </ul><div class="list_index" id="listIndex" ref="listIndex">
                        <ul id="list_index">
                            <li @touchstart="setScroll(item)" :class="redColorIndex==index?'redColor':''" @touchend="showBigLetter(item)" data-index="{{index}}" v-for="(index,item) in userIndex">{{item }}</li>
                        </ul>
                    </div>
                    <div class="showLetter" id="showLetter" v-if="showLetter">
                          <div class="letter">{{letter}}</div>
                    </div>
                    </div>`,
    props: {
        'user-data': {
            type: Array

        }
    },
    data: function () {
        return {
            bMove: false,
            letter: '',
            showLetter: false,
            defalutLetter: "B",
            redColorIndex: 0
        }
    },
    mounted() {

    },
    computed: {
        userIndex: function () {
            return this.filterIndex(this.userData);
        }
    }, methods: {
        filterIndex: function (data) {
            var resultIndex = [];
            for (var i = 0; i < data.length; i++) {
                if (data[i].letter) {
                    resultIndex.push(data[i].letter);
                }
            }
            return resultIndex;
        }, setLisIndexPos: function () {
            var iH = document.getElementById('listIndex').offsetHeight;
            document.getElementById('listIndex').style.marginTop = - iH / 2 + "px";
        }, setScroll: function (letter) {
            var el = document.documentElement ? document.documentElement : document.body;
            var aP = document.getElementsByTagName('p');
            var aLi = document.getElementById('list_index').getElementsByTagName('li');
            for (var i = 0; i < aP.length; i++) {
                if (aP[i].innerText.toLocaleString() == letter.toLocaleString()) {
                    el.scrollTop = aP[i].offsetTop;
                    for (var j = 0; j < aLi.length; j++) {
                        if (aLi[j].getAttribute('data-index') == i) {
                            this.redColorIndex = i;
                        }
                    }
                }
            }
        }, showBigLetter: function (letter) {
            var that = this;
            that.showLetter = true;
            if (that.showLetter) {
                that.letter = letter;
                setTimeout(function () {
                    that.showLetter = false;
                }, 1000)
            }
        }, handleScroll: function () {         //监听滚动时，设置字母的样式
            var that = this;
            var aP = document.getElementsByTagName('p');
            var scroll = document.body.scrollTop || document.documentElement.scrollTop;
            for (var i = 1; i < aP.length; i++) {
                if (aP[i].offsetTop < scroll) {
                    this.redColorIndex = i;          //设置当前字母的样式
                    if (aP[i + 1].offsetTop - scroll < 0) {
                        that.showBigLetter(aP[i + 1].innerHTML);
                    }
                }
            }
        }

    }, ready: function () {
        this.setLisIndexPos();
        (function (doc, win) {
            var docEl = doc.documentElement,
                resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
                recalc = function () {
                    var clientWidth = docEl.clientWidth;
                    if (!clientWidth) return;
                    docEl.style.fontSize = 20 * (clientWidth / 320) + 'px';
                };
            if (!doc.addEventListener) return;
            win.addEventListener(resizeEvt, recalc, false);
            doc.addEventListener('DOMContentLoaded', recalc, false);
        })(document, window);
        window.addEventListener('scroll', this.handleScroll)
    }
});








