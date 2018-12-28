<template>
    <div class='my'>
        <Header></Header>
        <div class="btns" v-show='isShow'>
            <button class="goLogin" @click="goPage('/my/login')">登 录</button>
            <button class="goReg" @click="goPage('/my/reg')">注 册</button>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>

import Header from './Header.vue'
// import Banner from './Banner.vue'

export default{
    name:'my',
    components:{
        Header
    },
    data(){
        return {
            isShow: true
        }
    },
    methods: {
        goPage(path){
            this.isShow = !this.isShow
            this.$router.push(path)
            console.log('666')
            
        }
    },
    created(){
        // let isLogin = true
        // if(isLogin) {
        //     this.$router.replace('/my/userInfo')
        //     this.isShow = !this.isShow
        // }else{
        //     this.$router.replace('/my/login')
        //     this.isShow = !this.isShow
        // }
    }
}   

</script>

<style lang="less" scoped>
@import url('../../../styls/main.less');
    .my{
        .margin(50,0,50,0);  // home整体上下移，给头部和底部留出位置
        .btns {
            background: url('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543592762770&di=0003199a1d269c7f7529a7a1edca810d&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F0%2F579aee2d816a6.jpg') center no-repeat;
            .h(60);
            .padding(30,50,30,50);
            text-align: center;
            button {
                .w(72);
                .h(32);
                .fs(18);
                .lh(32);
                border: 1px solid #666;
                border-radius: 5px;
                text-align: center;
                .margin(0,10,0,10);

            }
            .goReg {
                    .bg(#4169E1);
                    color: #efefef;
                }
            .goLogin {
                .bg(#58bc58);
                    color: #fff;
            }
        }
    }

</style>