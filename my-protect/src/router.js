import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)


//引入登陆
import Dlu from './Login/landing.vue'
//引入注册
import Zce from './Login/register.vue'

//进口页面
import entrance from './Login/entrance.vue'
//首页
import Home from './pages/Home.vue'
//消息
import News from './pages/News.vue'
//发现
import Xfaxians from './pages/Xfaxians.vue'
//个人信息
import Xgerenxinxis from './pages/Xgerenxinxis.vue'
// 详情页
import Goodlist from './components/Goodlist.vue'
//朋友圈
import Xfriends from './components/Xfriends.vue'
//手机通讯录
import  Txun from './components/Txun.vue'

import Tonxun from './components/Tonxun.vue'
//定义路由
const routes = [{
    path: '/Dlu',
    component: Dlu,
    name: 'Dlu'
},
{
    path: '/Zce',
    component: Zce,
    name: 'Zce'
},
{
    path: '/entrance',
    component: entrance,
    name: 'entrance'
},
{
    path: '/Tonxun',
    component: Tonxun,
    name: 'tonxun'
},
{
    path: '/Txun',
    component: Txun,
    name: 'txun'
},
{
    path: '/Xfriends',
    component: Xfriends,
    name: 'xfriends'
},
{
    path: '/Goodlist',
    component: Goodlist,
    name: 'goodlist'
},
{
    path: '/Xgerenxinxis',
    component: Xgerenxinxis,
    name: 'xgerenxinxis'
},
{
    path: '/Xfaxians',
    component: Xfaxians,
    name: 'xfaxians'
},
{
    path: '/News',
    component: News,
    name: 'news'
},
{
    path: '/Home',
    component: Home,
    name: 'Home',
    
},
{
    path: '/',
    redirect: '/entrance'
}
]
//实例化路由
const router = new VueRouter({
    routes // (缩写) 相当于 routes: routes
})

// 创建和挂载根实例。
export default router