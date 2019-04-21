<template>
  <header>
    <div class="leftIcon">
    
    </div>
    <div class="title">消息</div>
    <div class="rightIcon">
     
    </div>
  </header>
</template>
<script>
// import state from "../observable.js";
export default {
  

};
</script>
<style scoped>
/* css是局部样式 */
header {
  z-index: 10000;
  width: 100%;
  height: 50px;
  line-height: 50px;
  font-size: 16px;
  text-align: center;
  color: white;
  background-color: red;
  /* 弹性盒布局 */
  display: flex;
  position: fixed;
  top: 0px;
  left: 0px;
}
header .leftIcon {
  flex: 1;
  /* display: flex; */
  align-items: center;
}
header .leftIcon img {
  width: 23px;
  height: 23px;
  vertical-align: middle;
}
header .title {
  flex: 3;
}
header .rightIcon {
  flex: 1;
  /* display: flex; */
  align-items: center;
}
header .rightIcon img {
  width: 55px;
  height: 30px;
  vertical-align: middle;
}
</style>

