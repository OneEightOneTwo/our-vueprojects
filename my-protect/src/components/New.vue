<template>
  <div class="page panel js_show">
    <div class="page__hd" style="padding-left:20px;padding-bottom:15px;">
      <h1 class="page__title">新配对</h1>
      <p class="page__desc">
        <img src="../assets/masaike.jpg" alt="">
      </p>
      <p style="color:#cccc;font-size:16px; padding-left:10px">谁喜欢我</p>
    </div>
    <div class="page__bd">
      <div class="weui-panel weui-panel_access">
        <div class="weui-panel__hd">消息</div>
        <div class="weui-panel__bd">
          <a href="javascript:void(0);" class="weui-media-box weui-media-box_appmsg">
            <div class="weui-media-box__hd">
              <img
                class="weui-media-box__thumb"
                src="../assets/zhuli.png"
                alt
              >
            </div>
            <div class="weui-media-box__bd">
              <h4 class="weui-media-box__title">探探小助理</h4> 
              <p class="weui-media-box__desc">西瓜小太郎，你一共收到3个用户的来信...</p>
            </div>   
           
          </a>
          <a href="javascript:void(0);" class="weui-media-box weui-media-box_appmsg">
            <div class="weui-media-box__hd">
              <img
                class="weui-media-box__thumb"
                src="../assets/yonhu1.png"
                alt
              >
            </div>
            <div class="weui-media-box__bd">
              <h4 class="weui-media-box__title">美媚儿</h4>
              <p class="weui-media-box__desc">hi,大家好，很高兴见到你们！</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  
};
</script>
<style scoped>
.js_show{
  padding-top: 80px;

}
.page__title{
  color: #cd6468;
  font-size: .388889rem
}
.page__desc img{
  padding-top: 15px;
  width:2.402778rem;
  height: 2.291667rem;
}
.weui-panel__hd{
  color: #cd6468;
  font-size: .388889rem
}
</style>
