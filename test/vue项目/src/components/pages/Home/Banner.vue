<template>
    <div class='banner'>
        <div class="swiper-container">
            <div class="swiper-wrapper" >
                <div class="swiper-slide" v-for='(item,index) in bannerlist' :key='index'>
                    <img class="bannerImg" :src="item.imageUrl" alt="">
                </div>
                
            </div>
            <!-- 如果需要分页器 -->
            <div class="swiper-pagination"></div>
            
        </div>
    </div>
</template>

<script>

import Swiper from 'swiper'
import Vue from  'vue'

export default{
    name:'banner',
    components:{
        
    },
    data(){
        return {
            bannerlist: [
                {imageUrl:'https://img11.static.yhbimg.com/yhb-img01/2018/11/21/13/0197b867e9d708c890c98e4c7df23b2163.jpg?imageView2/2/w/640/h/240/q/60'},
                {imageUrl:'http://img11.static.yhbimg.com/yhb-img01/2018/11/14/17/0180d69547ef83d1439702adedc92a751f.jpg?imageView2/2/w/640/h/240/q/60'},
                {imageUrl:'http://img10.static.yhbimg.com/yhb-img01/2018/11/14/17/01ab5346eb1fd1e93e636ae33831ed9f2c.jpg?imageView2/2/w/640/h/240/q/60'},
                {imageUrl:'http://img10.static.yhbimg.com/yhb-img01/2018/11/14/17/01ebae8646366c7a16b780cd63504e4e80.jpg?imageView2/2/w/640/h/240/q/60'}
            ]
        }
    },
    methods:{
        getData(){
            Vue.nextTick(()=>{  // 轮播图滚动
                this.initSwiper()
             })
        },
        initSwiper(){
        // console.log(666)
           var mySwiper = new Swiper ('.swiper-container', {
                loop: true, // 循环模式选项
                autoplay: {  // 自动播放 
                    delay: 2000,
                    disableOnInteraction: false
                },
                pagination: {
                  el: '.swiper-pagination'
                }
              }) 
       }
   },
    created(){
        this.getData()
    }
}   

</script>

<style lang="less" scoped>
@import url('../../../../node_modules/swiper/dist/css/swiper.min.css');
@import url('../../../styls/main.less');
    .banner{
        .h(183);
        .bg(#eee);
        img {
            display: block;
            .h(183);
            width: 100%;
        }
    }

</style>