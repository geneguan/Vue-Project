<template>
    <div class='userInfo'>
        <div class="user">
            <i class="fa fa-user-circle-o" aria-hidden="true"></i>
            <p>User</p>
        </div>
        登录成功后，显示的个人信息
    </div>
</template>

<script>


export default{
    name:'userInfo',
    components:{
        
    },
    data(){
        return {
            
        }
    },
    methods:{
        goPage(path){
            this.$emit('sliderhide')
            this.$router.push(path)
            // console.log('666')
        }
    }
}   

</script>

<style lang="less" scoped>
@import url('../../../styls/main.less');
    .userInfo {
        .margin(51,0,0,0);  // home整体上下移，给头部和底部留出位置
        .fs(26);
        text-align: center;
        .user {
            .w(375);
            .h(160);
            text-align: center;
            i {
                .fs(72);
                .lh(100);
                color: #efefef;
            }
            p {
                .h(60);
                .fs(30);
                .lh(36);
                color: #fff;
            }
            .bg(#999);
        }
    }

</style>