<template>
  <div>
    <router-view></router-view>
    <Xheader/>
    <New/>
    <Xfooter/>
  </div>
</template>

<script>
import Xheader from "../components/Xheader.vue";

import New from "../components/New.vue";

import Xfooter from "../components/Xfooter.vue";


export default {

  components: {
    Xheader,
    New,
    Xfooter
  }
};
</script>
<style>
</style>

