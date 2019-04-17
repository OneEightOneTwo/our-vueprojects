import Vue from 'vue'
import App from './App.vue'

import $ from 'jquery'
Vue.prototype.$ = $
// weui样式
import 'weui'
//
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
})