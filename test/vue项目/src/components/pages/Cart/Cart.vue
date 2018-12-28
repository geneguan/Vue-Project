<template>
    <div class='cart'>
        <Header></Header>
        <!-- <Banner></Banner> -->
        <i class="fa fa-shopping-cart" aria-hidden="true"></i>
        <p>您的购物车暂无商品 ~</p>
    </div>
</template>

<script>

import Header from './Header.vue'
// import Banner from './Banner.vue'

export default{
    name:'cart',
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
    .cart{
        .margin(50,0,50,0);  // home整体上下移，给头部和底部留出位置
        .bg(#eee);
        .fs(26);
        text-align: center;
        .fa {
            display: block;
            .fs(100);
            color: #666;
        }
        p {
            .h(36);
            .fs(20);
            .lh(36);
            text-align: center;
        }
    }

</style>