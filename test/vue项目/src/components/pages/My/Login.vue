<template>
    <div class='login'>
        <div class="header">
            <div class="back" @click="goPage('/my')">
                <i class="fa fa-chevron-left" aria-hidden="true"></i>
            </div>
            <div class="logo" >
                <p>登录</p>
            </div>
            <div class="us">
                <i class="fa fa-user-circle" aria-hidden="true"></i>
            </div>
        </div>
        <div class="loginBox">
            <h2>用户登录</h2>
            <label for="username">邮箱账号：</label><input type="text" id="username" placeholder="邮箱号" /><br />
            <label for="password">登录密码：</label><input type="password" id="password" placeholder="密码" /><br />
            <div class="goReg">
                <span href="#" @click="goPage('/my/reg')">免费注册</span>
            </div>
            <input type="button" class="regBtn" value="立即登录" />

        </div>
    </div>
</template>

<script>

// import Banner from './Banner.vue'

export default{
    name:'login',
    components:{
        // Banner
    },
    data(){
        return {
            
        }
    },
    methods:{
        goPage(path){
            this.$router.push(path)
            // console.log('666')
        }
    }
}   

</script>

<style lang="less" scoped>
@import url('../../../styls/main.less');
    .login {
        .padding(30,37,0,38);
        .header{
            .w(375);
            .h(50);
            .bg(#333);
            z-index: 1000;
            position: fixed;
            top: 0px;
            left: 0px;
            
            border-bottom: 1px solid #999;
            .back,.logo,.us {
                .w(60);
                .h(50);
                .fa,p {
                    display: block;
                    .fs(20);
                    .lh(50);
                    text-align: center;
                    color: #fff;
                }
            }
            .back {
                float: left;
            }
            .logo {
                .w(100);
                float: left;
                .margin(0,0,0,80);
            }
            .us {
                float: right;
            }
        }
        .loginBox {
            .w(300);
            h2 {
                .w(200);
                .h(30);
                .fs(20);
                .lh(30);
                text-align: center;
                .margin(5,0,5,30);
            }
            label {
                .fs(18);
                .margin(0,10,0,10);
            }
            input {
                .h(30);
                border: 1px solid #aaa;
                .padding(0,5,0,5);
            }
            .regBtn {
                .margin(10,0,10,10);
                .w(260);
                .h(36);
                .fs(18);
                .lh(36);
                color: #fff;
                .bg(#0F86CB)
            }
            .goReg {
                .w(260);
                .h(30);
                .margin(20,0,0,0);
                span {
                    text-decoration: underline;
                    float: right;
                    .fs(16);
                    color: #0C95F7;
                }
            }
        }
    }

</style>