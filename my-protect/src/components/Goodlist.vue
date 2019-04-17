<template>
  <div id="Goodlist">
    <!-- 图片 -->
    <div class="banner">
      <img src="../assets/meinu.jpg" alt>
    </div>
    <!-- 内容 -->
    <div class="neyong">
      <h1 class="name">
        <strong>伊人芳笑</strong>
      </h1>
      <div class="span01">
        <span>
          <i class="iconfont icon-nvxing"></i>33
        </span>
        <span>天秤座</span>
      </div>
      <div class="span02">
        <span>佛山,5分钟前活跃</span>
        <span>
          <img src="../assets/hanbao.jpg" alt>
        </span>
      </div>
    </div>
    <!-- 我的签名 -->
    <div class="wodeqianming">
          <h2>个人签名</h2>
          <div class="span03">
              <span><img src="../assets/wodeqianmi.jpg" alt=""></span>
              <span>知识改变命运</span>
          </div>
    </div>
    <!-- 图标 -->
    <div class="tubiao">
      <span><img src="../assets/nope.png" alt=""></span>
      <span><img src="../assets/super-like.png" alt=""></span>
      <span><img src="../assets/like.png" alt=""></span>
    </div>
  </div>
</template>
<style scoped>
/* 图片 */
#Goodlist {
  @import 'iconfont/iconfont.css';

  width: 100%;
  height: 1.574074rem;
}
#Goodlist .banner {
  flex: 1;
  padding-bottom: 0.657407rem;
}
#Goodlist .banner img {
  width: 100%;
  height: 8.814815rem;
}
/* 内容 */
#Goodlist .neyong {
  padding-left: 0.388889rem;
  margin-bottom: .657407rem;
}
#Goodlist .neyong .name {
  font-size: 0.462963rem;
  line-height: 0.462963rem;
  height: 0.462963rem;
  margin-bottom: 0.222222rem;
}
#Goodlist .neyong .span01 {
  margin-bottom: 0.259259rem;
}
#Goodlist .neyong .span01 > span {
  font-size: 0.259259rem;
  line-height: 0.444444rem;
  height: 0.444444rem;
  color: #fff;
  padding: 0 0.157407rem;
  border-radius: 0.092593rem;
  width: 0.888889rem;
}
#Goodlist .neyong .span01 > span:nth-of-type(1) {
  margin-right: 0.111111rem;
  background: #f0cdf5;
}
#Goodlist .neyong .span01 > span:nth-of-type(1) i{
  display: inline-block;
  width: .203704rem;
  height: .277778rem;
  margin-right: .231481rem;
}
#Goodlist .neyong .span01 > span:nth-of-type(1) .icon-nvxing{
  font-size: .203704rem;
}
#Goodlist .neyong .span01 > span:nth-of-type(2) {
  background: #2a9e7b;
}
#Goodlist .neyong .span02 {
  font-size: 0.333333rem;
  color: #b7b7b7;
  padding-bottom: 0.555556rem;
  border-bottom: .018519rem #F0F0F0 solid;
}
#Goodlist .neyong > .span02 > span:nth-of-type(2) img {
  width: 0.12037rem;
  height: 0.462963rem; 
  margin-left: 5.805556rem;
}
/* 个人签名 */
#Goodlist .wodeqianming{
  padding-left: 0.388889rem;
}
#Goodlist .wodeqianming h2{
  color: #A5665F;
  margin-bottom: 1.055556rem;
}
#Goodlist .wodeqianming > .span03 {
  font-size: .398148rem;
  line-height: .518519rem;
  padding-bottom:.925926rem;
  border-bottom: .018519rem solid  #F0F0F0;
}
#Goodlist .wodeqianming .span03 span:nth-of-type(1){
  margin-right: 104px;
}
#Goodlist .wodeqianming .span03 span:nth-of-type(1) img{
  width: .509259rem;
  height: .518519rem;
}
/* 图标 */
#Goodlist .tubiao{
  position: fixed;
  bottom: .481481rem;
}
#Goodlist .tubiao >span:nth-child(1){
  margin-left: .527778rem;
}
#Goodlist .tubiao >span:nth-child(2){
  margin:0 1.962963rem
}
#Goodlist .tubiao >span:nth-child(3){
  margin-right: .527778rem;
}
#Goodlist .tubiao >span img{
  width: 1.601852rem;
  height: 1.601852rem;
}
</style>
