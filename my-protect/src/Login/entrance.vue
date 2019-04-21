<template>
  <div>
    <div class="login_bg">
      <div id="logo">
        <img src="../assets/tantan.jpg" alt>
      </div>
      <a class="entrancea" href="javascript:;" @click="tolanding">登&nbsp;&nbsp;录</a>
      <a
        class="entrancea"
        href="javascript:;"
        @click="toregister"
      >新&nbsp;&nbsp;手&nbsp;&nbsp;注&nbsp;&nbsp;册</a>
      <div class="other_login">
        <div class="other"></div>
        <span>其他方式登录</span>
        <div class="other"></div>
      </div>
      <div class="other_choose">
        <a href>
          <img src="../assets/qq.png" alt>
        </a>
        <a href>
          <img src="../assets/wx.png" alt>
        </a>
        <a href>
          <img src="../assets/wb.png" alt>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "app",
  methods: {
    tolanding() {
      this.$router.push({ name: "Dlu" });
    },
    toregister() {
      this.$router.push({ name: "Zce" });
    }
  }
};
</script>

<style scoped>
.entrancea {
  margin: 36px;
}
</style>