<template>
    <transition
        enter-active-class='animated slideInLeft'
        leave-active-class='animated slideOutLeft'
    >
        <div class='header' :id="!nameHeader" >
            <div class="menu" @click='slideShow'>
                <i class="fa fa-list" aria-hidden="true"></i>
            </div>
            <div class="logo"  @click="goPage('/home')">
                <img src="../../../static/logo.png" height="38" width="127" alt="" />
            </div>
            <div class="search">
                <i class="fa fa-search" aria-hidden="true"></i>
            </div>

            <Slider :show='isShow' @sliderhide='hide'></Slider>
        </div>
    </transition>
</template> 

<script>

import Slider from './Slider.vue'

export default{
    name: 'Header',
    components: {
        Slider
    },
    data(){
        return {
            isShow: false
        }
    },
    methods:{
        slideShow(){
            console.log(this)
            this.isShow=!this.isShow
            this.$store.commit('setName',!this.isShow)
            this.$emit('sliderhide')

        },
        hide(){
            //自定义事件给子元素使用
            // console.log("999")
            this.isShow=false
            this.$store.commit('setName',!this.isShow)
        },
        goPage(path){
            // console.log(this.$store.state.name)
            this.$emit('sliderhide')
            this.$router.push(path)
            
        },
        change(){
            this.$store.commit('setName','guan')
        }
    },
    computed:{
        nameHeader(){
            return this.$store.state.name
        }
    }
}	

</script>
<style lang="less" scoped>
@import url('../../styls/main.less');

    .header{
        .w(375);
        .h(50);
        .bg(#7ad9f9);
        z-index: 1000;
        position: fixed;
        top: 0px;
        left: 0px;
        
        border-bottom: 1px solid #00CCFF;
        .menu,.logo,.search {
            .w(60);
            .h(50);
            .fa {
                display: block;
                .fs(20);
                .lh(50);
                text-align: center;
                color: #fff;
            }
        }
        .menu {
            float: left;
        }
        .logo {
            float: left;
            .margin(0,0,0,60);
            img {
                .margin(6,0,0,0);
            }
        }
        .search {
            float: right;
        }
    }
    #true {
        .left(315);
    }

</style>