import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Home  from '../components/pages/Home/Home.vue'
import Guang  from '../components/pages/Guang/Guang.vue'
import Showlist  from '../components/pages/Guang/Showlist.vue'
import Kids from '../components/pages/Kids/Kids.vue'
import Cart from '../components/pages/Cart/Cart.vue'
import Sort from '../components/pages/Sort/Sort.vue'
import My from '../components/pages/My/My.vue'
import Login from '../components/pages/My/Login.vue'
import Reg from '../components/pages/My/Reg.vue'
import UserInfo from '../components/pages/My/UserInfo.vue'

const routes = [
    { path: '/',redirect: '/home'}, // 重新定向 /home
    { path: '/home', component: Home,name:'home'},
    { path: '/guang', component: Guang,name:'guang',children:[
        { path: 'newest', component: Showlist, name: '最新' },
        { path: 'collocation', component: Showlist, name: '搭配' },
        { path: 'headlines', component: Showlist, name: '头条' },
        { path: 'update', component: Showlist, name: '上新' },
        { path: 'video', component: Showlist,name:'视频'}
    ]},
    { path: '/kids', component: Kids,name:'kids'},
    { path: '/cart', component: Cart,name:'cart'},
    { path: '/sort', component: Sort,name:'sort'},
    { path: '/my', component: My,name:'my',children:[
        { path: 'reg', component: Reg,name:'reg'},
        { path: 'login', component: Login,name:'login'},
        { path: 'userInfo', component: UserInfo,name:'userInfo'}
    ]}
    // { path: '/goodsDetail/:id', component: Detail,name:'goodsDetail' } // 动态路由传参
]

const router = new Router({
  routes
})
export default router