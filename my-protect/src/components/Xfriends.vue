<template>
  <div>
    <div class="header">
      <span>
        <img src="../assets/q11.png" alt>
      </span>
      <span class="title">朋友圈</span>
    </div>
    <div class="main">
      <img src="../assets/meinu.jpg" alt>
    </div>
    <div class="neirong">
      <div class="imgs">
        <img src="../assets/icon.png" alt>
      </div>
      <div class="lqw">
        <div class="nametime">
          <span class="name">探探小助手</span>
          <span class="time">1小时前</span>
        </div>  
        <div class="diary">
            大家都更新探探了吗？？ 
        ( 我这么皮不能被我老板知道啦?! )
        </div>
        <div class="imga">
            <img src="../assets/qq6.png" alt="">
        </div>
        <div class="konghezi"></div>
        <div class="anniu">
            <img src="../assets/s1.png" alt="">
            <img src="../assets/s2.png" alt="">
        </div>
        <div class="konghezi2"></div>
      </div>
    </div>
    <div class="dianzan">
      <ul>
        <li>
            <!--
             <img src="../assets/meinu.jpg" alt=""> -->
             <div> <img src="../assets/01.png"/></div>
             <div> <img src="../assets/meinu.jpg" alt="">
                  <img src="../assets/meinu1.jpg" alt="">
                  <img src="../assets/meinu2.jpg" alt="">
                  <img src="../assets/meinu3.jpg" alt="">
             </div>
             <div class="aaa" ><span style="position: absolute;
  right: 1.055556rem;
 ">2 万+ </span>
               <span><img src="../assets/q22.png" alt="" style="float:right; position: absolute;
  right: 0;top: .1667rem;"></span>
             </div>
        </li>
        <li>
          <div><img src="../assets/meinu1.jpg" alt=""></div>
          <div  style="color:#000;font-size:14px;font-weight:500; margin-right:40px"><span>烧烤奶茶电信卡时间内 </span></div>
          <div>刚刚更新啦</div>
        </li>
        <li>
           <div> <img src="../assets/meinu2.jpg" alt=""></div>
           <div style="color:#000;font-size:14px;font-weight:500; margin-right:40px"><span>烧烤奶茶电信卡时间内 </span></div>
           <div>1小时前</div>
        </li>
      </ul>
    </div>
    <div class="qiu">
      <img src="../assets/photo.png" alt="">
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.header {
  height: 1.555556rem;
  background: #c52f16;
}
.header img {
  width: 0.597222rem;
  height: 0.541667rem;
  margin-top: 0.388889rem;
  margin-left: 0.555556rem;
  margin-right: 0.875rem;
}
.header .title {
  font-size: 0.666667rem;
  color: #f7ffff;
  line-height: 1.555556rem;
}
.main {
  background-image: url("../assets/beijing.jpg");
  height: 5.555556rem;
}
.main img {
  width: 1.666667rem;
  height: 1.666667rem;
  border-radius: 50%;
  border: 0.055556rem solid #c52f16;
  margin-left: 1.116667rem;
  margin-top: 2.997778rem;
}
.neirong {
  margin-top: 0.5rem;
  height: 11.388889rem
}
.neirong .imgs {
  float: left;
  margin-left: 0.444444rem;
}

.neirong .imgs img {
  width: 1.222222rem;
  height: 1.111111rem;
}
.neirong .lqw{
    width: 6.944444rem;
    float:left;
     margin-left: 0.555556rem;
}

.neirong .nametime .name {
  font-size: 0.444444rem;
  font-weight: 500;
 
}
.neirong .nametime .time {
    margin-left: 3.127778rem;
}
.neirong .diary{
     font-size: 0.444444rem;
    color:#7f7f7f;
    margin-bottom: .361111rem;
}
.neirong .imga img{
    width:3.194444rem;
    height:6.5rem;
}
.neirong .konghezi{
    height: .583333rem;
}
.neirong .anniu img{
    width:2.638889rem;
    height:.847222rem ;
    margin-right: .222222rem;
}
.neirong .konghezi2{
    height: .861111rem;
}
.dianzan{
    height: 4.527778rem; background: #eeebe6;
}
.dianzan ul {
    height: 4.527778rem; 

}
.dianzan ul li{
  height: 1.444444rem;
  border-bottom: .013889rem solid #c5cfda;
  position: relative;
}
.dianzan li div{
  margin:.191667rem ;
  float: left;
  
}
.dianzan li img{
  margin-right: .347222rem;
 border-radius: 50%;
 width: .763889rem;
  height: .763889rem;
  float: left;
}
.dianzan li div img{
  /* float:left; */
  /* display: inline-block; */
}
.qiu{
  position: fixed;
  top:14.777778rem;
  right:20px;
  width: 1.513889rem;
  height: 1.555556rem; 
  border-radius: 50%;
  background: #d2462f;

}
.qiu img{
  width:.805556rem;
  height: .736111rem;
 position:absolute;
 top: 15px;
 left:14px;
}
</style>
