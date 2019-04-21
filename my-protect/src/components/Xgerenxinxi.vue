<template>
  <div id="xinxi">
    <!-- 头部 -->
    <div class="header">
      <div class="lqw">
        <img src="../assets/lqw.png" alt>
      </div>
      <p class="p1">
        <span>西瓜小太郎</span>
        <img src="../assets/vip.jpg" alt>
      </p>
      <p class="p2">点击查看/编辑</p>
    </div>
    <!-- 主体 -->
    <div class="main">
      <!-- love -->
      <div class="love"  @click="showCont">
        <div class="like">
          <span class="span01">7</span>
          <span>
            <img src="../assets/01.png" alt>
          </span>
          <br>
          <span class="span02">人喜欢你</span>
        </div>
        <div class="like2">
          <span>谁喜欢我?</span>
          <div class="loveMe" v-if="!show">
            <div class="likeXiXi">
              <div>
                <img src="../assets/love.png" alt>
              </div>
              <h2>查看谁喜欢我</h2>
              <p>查看喜欢你的人,右滑直接配对</p>
            </div>
            <div class="baoyue">
              <div class="d01 baoyueActive">
                <p>
                  <span>1</span>
                  <span>个月</span>
                </p>
                <p>
                  <span>特惠&nbsp;&yen;&nbsp;</span>
                  <span>48</span>
                </p>
                <p>
                  <span>&nbsp;&yen;&nbsp;</span>
                  <span>48</span>
                  <span>/月</span>
                </p>
              </div>
              <div class="d01">
                <p>
                  <span>1</span>
                  <span>个月</span>
                </p>
                <p>
                  <span>特惠&nbsp;&yen;&nbsp;</span>
                  <span>48</span>
                </p>
                <p>
                  <span>&nbsp;&yen;&nbsp;</span>
                  <span>48</span>
                  <span>/月</span>
                </p>
              </div>
              <div class="d01">
                <p>
                  <span>1</span>
                  <span>个月</span>
                </p>
                <p>
                  <span>特惠&nbsp;&yen;&nbsp;</span>
                  <span>48</span>
                </p>
                <p>
                  <span>&nbsp;&yen;&nbsp;</span>
                  <span>48</span>
                  <span>/月</span>
                </p>
              </div>
              <!-- <div class="d01"></div>
              <div class="d01"></div>-->
            </div>
            <div class="loveniu">
              <span>确定</span><span>取消</span>
            </div>
          </div>
        </div>
      </div>
      <!-- 我的会员 -->
      <div class="vip active">
        <div class="div01">
          <img src="../assets/02.png" alt>
        </div>
        <div class="div02">
          <span class="fl">我的会员</span>
          <span class="fr">我的特权</span>
        </div>
        <div class="div03">
          <img src="../assets/xiangyou.png" alt>
        </div>
      </div>
      <!-- 设置 -->
      <div class="seji con">
        <div class="div01">
          <img src="../assets/02.png" alt>
        </div>
        <div class="div02">
          <span>设置</span>
          <br>
          <span>帐号 个人信息与通知</span>
        </div>
        <div class="div03">
          <img src="../assets/xiangyou.png" alt>
        </div>
      </div>
      <!-- 新手引导 -->
      <div class="vip con">
        <div class="div01">
          <img src="../assets/04.png" alt>
        </div>
        <div class="div02">
          <span class="fl">新手引导</span>
        </div>
        <div class="div03">
          <img src="../assets/xiangyou.png" alt>
        </div>
      </div>
      <!-- 分享 -->
      <div class="seji con">
        <div class="div01">
          <img src="../assets/05.png" alt>
        </div>
        <div class="div02">
          <span>分享</span>
          <br>
          <span>让你的朋友发现更多有趣的人</span>
        </div>
        <div class="div03">
          <img src="../assets/xiangyou.png" alt>
        </div>
      </div>
    </div>
    <div style="height:100px; background:#F8F7F7;"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: true
    };
  },
  methods: {
    showCont: function() {
      this.show = !this.show;
    }
  }
};
</script>
<style  scoped>
#xinxi {
  height: 100%;
  display: flex;
  flex-direction: column;
}
/* 头部 */
.header {
  width: 100%;
  height: 7.388889rem;
  background: #7c4026;
}
.header .lqw {
  text-align: center;
  padding: 1.333333rem 0 0.625rem;
}
.header .lqw img {
  width: 2.458333rem;
  height: 2.458333rem;
}
.header .p1 {
  display: flex;
  height: 0.486111rem;
  padding-left: 3.222222rem;
  align-items: center;
  margin-bottom: 0.375rem;
}
.header .p1 span {
  font-size: 0.486111rem;
  color: #fffdf5;
  margin-right: 14px;
}
.header .p1 img {
  width: 0.861111rem;
  height: 0.444444rem;
}
.header .p2 {
  text-align: center;
  font-size: 0.361111rem;
  color: #fffdf5;
}
/* 主体 */
.main {
  display: flex;
  height: 100%;
  flex-direction: column;
}
/* love */
.love {
  display: flex;
  width: 100%;
  height: 2.222222rem;
  padding-top: 0.611111rem;
  background: #ffffff;
  margin-bottom: 0.666667rem;
}
.love .like {
  flex: 1;
  margin-left: 0.458333rem;
}
.love .like span img {
  height: 0.472222rem;
  width: 0.555556rem;
}
.love .like .span01 {
  font-size: 0.472222rem;
  padding-right: 0.180556rem;
  color: #4f4f4f;
}
.love .like .span02 {
  font-size: 0.347222rem;
  color: #d0d0d0;
  padding-top: 0.375rem;
}
.love .like2 {
  flex: 1;
  margin-right: 0.458333rem;
  padding-top: 0.305556rem;

  position: relative;
}
.love > .like2 > span {
  font-size: 0.361111rem;
  line-height: 0.5rem;
  color: #c95440;
  float: right;
}
.love > .like2 .loveMe {
  height: 12.652778rem;
  width: 8.611111rem;
  position: absolute;
  left: -95%;
  top: -394%;
  border-radius: 0.277778rem;
  background: #ffffff;
  padding: 0 0.333333rem;
}
.love > .like2 .loveMe .likeXiXi {
  width: 100%;
  /* background: darkmagenta; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
}
.love > .like2 .loveMe .likeXiXi img {
  display: inline-block;
  height: 2.5rem;
  width: 2.5rem;
  margin: 1.277778rem 0 0.916667rem 0;
}
.love > .like2 .loveMe .likeXiXi h2 {
  font-size: 0.513889rem;
  margin-bottom: 0.458333rem;
  color: #000;
}
.love > .like2 .loveMe > .likeXiXi p {
  color: #808080;
  font-size: 0.361111rem;
  margin-bottom: 0.777778rem;
}
.love > .like2 .loveMe .baoyue {
  width: 100%;
}
.love > .like2 .loveMe .baoyue .d01 {
  width: 2.638889rem;
  height: 3.027778rem;
  background: #99968e;
  text-align: center;
  float: left;
}
.love > .like2 .loveMe .baoyue .d01 p:nth-of-type(1) {
  padding-top: 0.611111rem;
}
.love > .like2 .loveMe .loveniu span{
  display: inline-block;
  height: 30px;
  width: 100px;
  background: rgb(152, 152, 219);
  margin: 20px;
  text-align: center;
  line-height: 30px;
}
/* 公共类 */
.active {
  background: #fef8e8;
}
.con {
  background: #fff;
}

/* 我的会员 */
.vip {
  width: 100%;
  height: 2.222222rem;
  display: flex;
  border: 0.013889rem solid #f4f4f4;
}
.vip .div01 {
  width: 1.583333rem;
  /* background: #7c4026; */
  display: flex;
  justify-content: center;
  align-items: center;
}
.vip .div01 img {
  height: 0.666667rem;
  width: 0.666667rem;
}
.vip .div02 {
  width: 7.583333rem;
  /* background: chartreuse; */
}
.vip .div02 span:nth-of-type(1) {
  font-size: 0.416667rem;
  line-height: 2.222222rem;
  color: #373634;
}
.vip .div02 span:nth-of-type(2) {
  font-size: 0.361111rem;
  line-height: 2.222222rem;
  color: #99968e;
  float: right;
  padding-right: 20px;
}
.vip .div03 {
  width: 0.833333rem;
  /* background: darkgrey; */
  display: flex;
  align-items: center;
}
.vip .div03 img {
  height: 0.333333rem;
  width: 0.208333rem;
}
/* 分享 */
.seji {
  width: 100%;
  height: 2.222222rem;
  display: flex;
  border: 0.013889rem solid #f4f4f4;
}
.seji .div01 {
  width: 1.583333rem;
  /* background: #7c4026; */
  display: flex;
  justify-content: center;
  align-items: center;
}
.seji .div01 img {
  height: 0.666667rem;
  width: 0.666667rem;
}
.seji .div02 {
  width: 7.583333rem;
  padding-top: 0.555556rem;
  /* background: chartreuse; */
}
.seji .div02 span:nth-of-type(1) {
  font-size: 0.416667rem;
  color: #373634;
}
.seji .div02 span:nth-of-type(2) {
  color: #99968e;
  padding-right: 20px;
}
.seji .div03 {
  width: 0.833333rem;
  /* background: darkgrey; */
  display: flex;
  align-items: center;
}
.seji .div03 img {
  height: 0.333333rem;
  width: 0.208333rem;
}
</style>

