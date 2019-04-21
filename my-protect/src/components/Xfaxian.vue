<template>
  <div id="faxian">
    <div style="height:.694444rem;"></div>
    <div class="main">
      <p class="p1">
        <span>
          <img class="img1" src="../assets/06.png" alt>
        </span>
        <span>朋友圈</span>
        <span>
          <img class="img2" src="../assets/xiangyou.png" alt>
        </span>
      </p>
      <p class="p2">
        <span>
          <img class="img1" src="../assets/07.png" alt>
        </span>
        <span>匿名暗恋表白</span>
        <span>
          <img class="img2" src="../assets/xiangyou.png" alt>
        </span>
      </p>
    </div>
  </div>
</template>
<style scoped>

#faxian {
  height: 100%;
  display: flex;
  flex-direction: column;
  background: #f8f7f7;
}
#faxian h1 {
  /* font-size: 38px; */
  font-size: 0.527778rem;
  background: #ca441c;
  /* width: 720px; */
  width: 10rem;
  /* height: 124px; */
  height: 1.722222rem;
  color: #fff;
  flex: 1;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
#faxian .main {
  background: #f8f7f7;
  padding-top: 0.666667rem;
}
#faxian .main p {
  /* height: 0.666667rem; */
  /* padding:56px 0; */
  padding: 0.777778rem 0;
  background: #fff;
  display: flex;
  position: relative;
}
#faxian .main .p1 {
  margin: 0.666667rem 0;
}
#faxian .main .p2 {
   margin: 0.666667rem 0;
margin-bottom: 100%;

}
#faxian .main p span {
  display: inline-block;
  /* line-height: 48px; */
  line-height: 0.666667rem;
  /* font-size: 30px; */
  font-size: 0.416667rem;
  height: 0.666667rem;
  text-align: center;
}
#faxian .main span:nth-of-type(3) {
  position: absolute;
  right: 0.652778rem;
}
#faxian .main p span:nth-child(1) {
  /* padding-left: 32px; */
  padding-left: 0.444444rem;
  margin-right: 0.513889rem;
}
#faxian .main p span .img1 {
  display: inline-block;
  /* width: 48px; */
  width: 0.666667rem;
  /* height: 48px; */
  height: 0.666667rem;
}
#faxian .main p span .img2 {
  display: inline-block;
  width: 0.208333rem;
  height: 0.333333rem;
}
</style>

