import Vue from 'vue'
import App from './App.vue'

import $ from 'jquery'
Vue.prototype.$ = $
// weui样式
import 'weui'
//引入MINtUI的插件 轮播图
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import 'mint-ui/lib/index.js'
Vue.use(MintUI)
import { Swipe, SwipeItem } from 'mint-ui';

Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);


import axios from 'axios'; //引入axios
Vue.prototype.$ajax=axios; //挂载到vue原型


//全局引入rem
import './rem'
//引入路由
import router from './router.js'
//让vue继承
Vue.prototype.$ = $;

Vue.config.productionTip = false

new Vue({
  el: "#app",
  router,
  render: h => h(App),
}).$mount("#app")
