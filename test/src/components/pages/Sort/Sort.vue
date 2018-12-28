<template>
    <div class='sort'>
        <Header></Header>
        <!-- <Banner></Banner> -->
        分类 sort
    </div>
</template>

<script>

import Header from './Header.vue'
// import Banner from './Banner.vue'

export default{
    name:'sort',
    components:{
        Header
    },
    data(){
        return {
            
        }
    }
}   

</script>

<style lang="less" scoped>
@import url('../../../styls/main.less');
    .sort{
        .margin(50,0,50,0);  // home整体上下移，给头部和底部留出位置
        .bg(#eee);
        .fs(26);
        text-align: center;
    }

</style>