<template>
  <div>
    <div class="theader">
      <div class="leftIcon" @click="fanhui">
        <img src="../assets/q11.png" alt>
      </div>
      <div class="title">匿名暗恋表白</div>
      <div class="rightIcon">
        <img src="../assets/sousuo.png" alt>
      </div>
    </div>
    <div class="tup">
      <img src="../assets/biaobai.png" alt>
    </div>
    <div class="Ttitle">
      <span>已选择的暗恋（2）</span>
    </div>
    <div id="apps">
      <my-list :user-data="userData"></my-list>
    </div>
  </div>
</template>
<script>


export default {
  methods:{
    fanhui:function(){
      this.$router.go(-1);
    }
  }
};

</script>
<style scoped>
.theader {
  z-index: 10000;
  width: 100%;
  height: 1.583333rem;
  line-height: 1.583333rem;
  font-size: 0.583333rem;
  text-align: center;
  color: white;
  background-color: #c53017;
  /* 弹性盒布局 */
  display: flex;
  position: fixed;
  top: 0px;
  left: 0px;
}
.theader .leftIcon {
  flex: 1;
  /* display: flex; */
  align-items: center;
}
.theader .leftIcon img {
  width: 23px;
  height: 23px;
  vertical-align: middle;
  margin-left: -40px;
}
.theader .title {
  margin-left: -100px;
  flex: 3;
}
.theader .rightIcon {
  flex: 1;
  /* display: flex; */
  align-items: center;
}
.theader .rightIcon img {
  width: 23px;
  height: 23px;
  vertical-align: middle;
}
.tup {
  margin-top: 1.583333rem;
  height: 9.222222rem;
  border-bottom: 1px solid #ccc;
}
.tup img {
  width: 100%;
  height: 9.222222rem;
}
.Ttitle {
  padding: 0.444444rem;
  color: #d54f3b;
  font-size: 0.361111rem;
}


</style>

