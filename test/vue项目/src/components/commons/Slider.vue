<template>
    <div class='slider'>
        <transition
            enter-active-class='animated slideInLeft'
            leave-active-class='animated slideOutLeft'
        >   
            <div class="sliderBox" v-show='show'>
                <ul>
                    <li 
                    v-for="(item,index) in navlist" 
                    :key="index" 
                    @click="goPage(item.path)">{{item.name}}<span>{{item.yw}}</span></li>
                </ul>
            </div>
        </transition>
        
        <transition
            enter-active-class='animated fadeIn'
            leave-active-class='animated fadeOut'
        >
            <div class='mask' v-show='show' @click='allHide'></div>
        </transition>
    </div>
</template>

<script>
export default{
    name:'Slider',
    props:['show'],
    data(){
        return {
            navlist:[
                {name:'男生',yw:'BOYS',path:'/boys'},
                {name:'女生',yw:'GIRLS',path:'/girls'},
                {name:'童装',yw:'KIDS',path:'/kids'},
                {name:'创意生活',yw:'LIFE STYLE',path:'/lifeStyle'},
                {name:'逛',yw:'TRENDFINDER',path:'/goodslist'}
            ],
            selInit:"电影"
        }
    },
    methods:{
        allHide(){
            this.$emit('sliderhide')
        },
         goPage(path){
            this.$emit('sliderhide')
            this.$router.push(path)
            // console.log('666')
        },
        hide(){
            //自定义事件给子元素使用
            // console.log("999")
            this.isShow=false
        }
    }
}   

</script>
<style lang="less" scoped>
@import url('../../styls/main.less');
.slider {
    .sliderBox {
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        .right(56);
        .bg(#FFF);
        z-index: 9999;
        border-right: 1px solid #efefef;
        ul {
            list-style: none;
            .bg(#eee);
            li {
                .h(48);
                .fs(24);
                .lh(48);
                .bg(#fff);
                .padding(0,0,0,30);
                border-bottom: 1px solid #cdcdcd;
                span {
                    .margin(0,0,0,10);
                    .fs(14);
                }
            }
            li:nth-child(4),li:nth-child(5) {
                border: none;
            }
            li:nth-child(5) {
                .margin(15,0,0,0);
                border-top: 1px solid #cdcdcd;
                background: url('../../../static/right.png') #fff no-repeat right center;
            }
        }
    }
    .mask {
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: rgba(0,0,0,.3);
        position: fixed;
    }
}

</style>