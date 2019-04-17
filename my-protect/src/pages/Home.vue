<template>
  <div>
    <router-view></router-view>
    <Xheader/>
    <!-- <New/> -->
    <Xmain/>
    <Xfooter/>
  </div>
</template>

<script>
import Xheader from "../components/Xheader.vue";

// import New from "../components/New.vue";

import Xmain from "../components/Xmain.vue";

import Xfooter from "../components/Xfooter.vue";


export default {

  components: {
    Xheader,
    // New,
    Xmain,
    Xfooter
  }
};
</script>


