<template>
  <div class="login_bg">
    <div id="login">
      <img src="../assets/beijing.jpg" alt width="100%" height="100%">
    </div>
    <div id="logo">
      <img src="../assets/tantan.jpg" alt>
    </div>
    <form action style="margin-left: 36px;">
      <div class="userName">
        <label>用户名：</label>
        <input type="text" name="name" placeholder="请输入用户名" pattern="/^1([38]\d|5[0-35-9]|7[3678])\d{8}$/" required>
      </div>
      <div class="passWord">
        <label>密&nbsp;&nbsp;&nbsp;码：</label>
        <input
          type="password"
          name="password"
          placeholder="请输入密码"
          pattern="[0-9A-Za-z]{6,25}"
          required
        >
      </div>
      <div class="choose_box">
        <div>
          <input type="checkbox" checked="checked" name="checkbox">
          <label>记住密码</label>
        </div>
        <a href="javascript:;" @click="toregister">注册账号</a>
       
      </div>
      <button class="login_btn" type="submit">登&nbsp;&nbsp;录</button>
    </form>
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
</template>

<script>
export default {
  name: "app",
  methods: {
    toregister() {
      this.$router.push({ name: "Zce" });
    },
    toforget() {
      this.$router.push({ name: "forget" });
    }
  }
};
</script>
<style>
.login_btn{
  width: 84%;
    margin: 2% 8%;
    background: #21a9f5;
    color: #ffffff;
    border: 0;
    padding: 3.25% 0;
    font-size: 1em;
    font-family: "Microsoft YaHei";
}
</style>


