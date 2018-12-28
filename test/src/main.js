// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
//引入全局配置样式
import  './styls/reset.less'
//引入动画样式
import '../node_modules/animate.css/animate.css'

import router from './router/index.js'  // 引入路由
Vue.prototype.$test = router

import store from './store/index.js'

Vue.config.productionTip = false

// 引入axios  
import  Axios from 'axios'
Vue.prototype.$axios=Axios// axios 挂载到vue的实例上 这样他的拓展实例  组件也有$axios

//注册全局过滤器
Vue.filter('getDate', function (value) {
    
  return  new Date(value).getDate();
})
// 组建是vue实例的一个子类 所有 vue原型链上的属性 子类也会继承


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App},//注册组件
  template: '<App/>' // 用组件元素来替换根元素
})
