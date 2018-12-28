<template>
  <div id="app">
    <!-- <Header></Header> -->
    <!-- <Home></Home> -->
    <!-- <keep-alive> -->
      <router-view></router-view>
    <!-- </keep-alive> -->
    <Footer></Footer>
  </div>
</template>

<script>

import Header from './components/commons/Header.vue'
import Home from './components/pages/Home/Home.vue'
import Guang from './components/pages/Guang/Guang.vue'
import Kids from './components/pages/Kids/Kids.vue'
import Footer from './components/commons/Footer.vue'

export default {
  name: 'App',
  data(){
    return {
        name: 'App'
    }
  },
  components: {
      Home,Kids,Guang,Footer
  }
}
</script>

<style lang='less' scoped>
@import url('./styls/main.less');
#app {
  // position: fixed;
  // left: 315px;
}
   
</style>
