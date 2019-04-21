<template>
  <div>
    <router-view></router-view>
    <Xheader/>

    <Xmain/>
    <Xfooter/>
  </div>
</template>

<script>
// <!-- 修改了main图片的尺寸，自适合移动的尺寸 author:lqw-->
//完成了首页点击图片进入详情页 author:lqw
import Xheader from "../components/Xheader.vue";


import Xmain from "../components/Xmain.vue";

import Xfooter from "../components/Xfooter.vue";


export default {

  components: {
    Xheader,
  
    Xmain,
    Xfooter
  }
};
</script>


