<template>
    <div class='kids'>
        <Header></Header>
        <!-- <Banner></Banner> -->
        童装  KIDS
    </div>
</template>

<script>

import Header from './Header.vue'
// import Banner from './Banner.vue'

export default{
    name:'kids',
    components:{
        Header// Banner
    },
    data(){
        return {
            
        }
    }
}   

</script>

<style lang="less" scoped>
@import url('../../../styls/main.less');
    .kids{
        .margin(50,0,50,0);  // home整体上下移，给头部和底部留出位置
        .bg(#eee);
        .fs(26);
        text-align: center;
    }

</style>