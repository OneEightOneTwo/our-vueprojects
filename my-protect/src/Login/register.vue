<template>
  <div>
    <div class="register">
      <div class="regTop">
        <span>用户注册</span>
        <a class="back" href="javascript:;" @click="tolanding">&lt;&nbsp;返回</a>
      </div>
      <div class="content">
        <div class="point">
          <span>注册成功后，手机号也可为登录账号。</span>
        </div>
        <form action>
          <div class="message" style="height:220px">
            <input type="tel" placeholder="输入手机号" pattern="[0-9]{11}" required>
            <input type="password" placeholder="请输入6-25位密码" pattern="[0-9A-Za-z]{6,25}" required>
            <input type="password" placeholder="请再次输入密码" pattern="[0-9A-Za-z]{6,25}" required>
            <input type="text" placeholder="输入验证码" pattern="[0-9]{6}" required >
            <!-- <select name="job">
              <option value="choose">选择职位</option>
              <option value="boss">老板</option>
              <option value="staff">员工</option>
            </select>-->
            <div class="icons">
              <b>
                <img src="../assets/zc-1.jpg" alt>
              </b>
              <b>
                <img src="../assets/zc-2.jpg" alt>
              </b>
              <b>
                <img src="../assets/zc-3.jpg" alt>
              </b>
              <b>
                <img src="../assets/zc-3.jpg" alt>
              </b>
            </div>
            <a class="code" href required style="margin-top: 5px;top:67%">获取验证码</a>
          </div>
          <div class="hao">
            <div class="agree">
              <input type="checkbox">
              <span>&nbsp;同意&nbsp;</span>
              <a href>《注册协议》</a>
            </div>
            <button class="submit" type="submit">注册</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
.back{
  top:41%;
}
form{
      background-color: #fff;
}
.hao{
  background-color: #fff
}
</style>


<script>
export default {
  name: "app",
  methods: {
    tolanding() {
      this.$router.push({ name: "Dlu" });
    }
  }
};
</script>

<style scoped>
.message {
  height: 250px;
}
</style>
