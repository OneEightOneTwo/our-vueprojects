<template>
  <div class="weui-tabbar">
    <a href="javascript:;" class="weui-tabbar__item" @click="toshow1">
      <span style="display: inline-block;position: relative;">
        <img src="../assets/ka.png" alt class="weui-tabbar__icon">
      </span>
    </a>
    <a href="javascript:;" class="weui-tabbar__item" @click="toshow2">
      <img src="../assets/xinxi.png" alt class="weui-tabbar__icon">
    </a>
    <a href="javascript:;" class="weui-tabbar__item" @click="toshow3">
      <span style="display: inline-block;position: relative;">
        <img src="../assets/zhinanzhen.png" alt class="weui-tabbar__icon">
      </span>
    </a>
    <a href="javascript:;" class="weui-tabbar__item weui-bar__item_on"  @click="toshow4">
      <img src="../assets/yonhu.png" alt class="weui-tabbar__icon">
    </a>
  </div>
</template>
<script>
export default {
  methods: {
    toshow1() {
      this.$router.push({ name: "Home" });
      this.$router.go(0);
    },
    toshow2() {
      this.$router.push({ name: "news" });
      
    },
    toshow3() {
      this.$router.push({ name: "xfaxians" });
    },
    toshow4(){
      this.$router.push({name:"xgerenxinxis"});
      // this.$router.go(0);
    }
  }
};
</script>
<style scoped>
.weui-tabbar {
  position: fixed;
  bottom: 0px;
  left: 0px;
  height: 60px;
}
.weui-tabbar__item {
  padding: 17px 0 0;
}
.hao {
  background-color: red;
}
</style>


