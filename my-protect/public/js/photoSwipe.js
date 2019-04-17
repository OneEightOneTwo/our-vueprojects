/**
 * Created by 2017 helang.love@qq.com on 2017/12/2.
 */

var photoSwipe={
    /*用户信息数组*/
    imgArr:[],
    /*元素位置*/
    site:{
        _x_start:0,
        _y_start:0,
        _x_move:0,
        _y_move:0,
        _x_end:0,
        _y_end:0,
        top_val:0,
        left_val:0
    },
    /*当前下标*/
    index:0,
    /*是否允许动画*/
    run:true,
    /*是否加载完成*/
    load:false,
    /*初始化*/
    init:function () {
        document.querySelector("#photo_box>div>div").innerHTML=this.imgHtml();
    },
    /*图片HTML*/
    imgHtml:function () {
        var str='<div id="ind-'+this.index+'">'
            +'<div class="div1">第'+(this.index+1)+'个</div>'
            +'<img src="../img/aa.jpg" style="width: 8rem;  height:11.305556rem"/>'
            +' <div style="float:left;padding-left:10px;font-size:14px">'
            +'<span style="color:#9090da">小美儿&nbsp;,</span>&nbsp;<span style="color:red">26</span>'
            +'<p style="margin-left: -30px;">3km</p>'
            +'</div>'
            +'<div class="btns" style="float:right">'
            +'<img style="width:134px;" src="../img/super-like.png">'
            +'</div>';
        return str;
    },
    /*移动动画*/
    animateMove:function (el,val) {
        if(!this.run){
            return;
        }
        this.run=false;

        /*CSS3动画方式*/
        el.css({"transform":"translate3d("+doc_width*val+"px,"+photoSwipe.top_val*2.2+"px,0px)","transition-duration":"0.3s"});
        var moveTime=setTimeout(function () {
            el.remove();
            var ind_el=$("#ind-"+(photoSwipe.index));
            photoSwipe.activeEl(ind_el);
            photoSwipe.index++;
            $("#photo_box>div>div").append(photoSwipe.imgHtml());
            photoSwipe.run=true;
        },300);
    },
    /*复位动画*/
    animateReset:function (el) {
        /*CSS3动画方式*/
        el.css({"transform":"translate3d(0px,0px,0px)","transition-duration":"0.3s"});
        var resetTime=setTimeout(function () {
            el.css("transition-duration","0s");
        },1000);
    },
    /*激活层*/
    activeEl:function (el) {
        el.css("z-index","2");
    },
    /*清除位置*/
    clearLocation:function () {
        this.left_val=0;
    }

};
photoSwipe.init();

var doc_width=$(document).width(),doc_height=$(document).height();

photoSwipe.activeEl($("#ind-0"));
photoSwipe.index++;
$("#photo_box>div>div").append(photoSwipe.imgHtml());

$("#photo_box").on("touchstart",function(e) {
    if(!photoSwipe.load || !photoSwipe.run){
        return;
    }

    var ev = e || window.event;
    photoSwipe._x_start=ev.touches[0].pageX;
    photoSwipe._y_start=ev.touches[0].pageY;
    var act_el=$("#ind-"+(photoSwipe.index-1).toString(10));
});
$("#photo_box").on("touchmove",function(e) {
    if(!photoSwipe.load || !photoSwipe.run){
        return;
    }
    var ev = e || window.event;
    photoSwipe._x_move=ev.touches[0].pageX;
    photoSwipe._y_move=ev.touches[0].pageY;

    var act_el=$("#ind-"+(photoSwipe.index-1).toString(10));
    photoSwipe.top_val=parseFloat(photoSwipe._y_move)-parseFloat(photoSwipe._y_start);
    photoSwipe.left_val=parseFloat(photoSwipe._x_move)-parseFloat(photoSwipe._x_start);

    act_el.css({"transform":"translate3d("+photoSwipe.left_val+"px,"+photoSwipe.top_val+"px,0px)","transition-duration":"0s"});
});
$("#photo_box").on("touchend",function(e) {
    if(!photoSwipe.load || !photoSwipe.run){
        return;
    }
    var ev = e || window.event;
    photoSwipe._x_end=ev.changedTouches[0].pageX;
    photoSwipe._y_end=ev.changedTouches[0].pageY;
    var act_el=$("#ind-"+(photoSwipe.index-1).toString(10));
    if(photoSwipe.left_val>0 && photoSwipe.left_val>doc_width/2-doc_width/4.5){
        photoSwipe.animateMove(act_el,1);
    }else if(photoSwipe.left_val<0 && photoSwipe.left_val<-doc_width/2+doc_width/4.5){
        photoSwipe.animateMove(act_el,-1);
    }else {
        photoSwipe.animateReset(act_el);
    }
});

$(function () {
    photoSwipe.load=true;
});