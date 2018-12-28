<template>
    <div class='guang'>
         <div class='header' >
            <div class="nav">
                <ul>
                    <li v-for='(item,index) in navlist'
                    :key="index" 
                    :class="selInit==item.path?'act':''"
                    @click="goPage(item.path)"
                    tag='li' :to='item.path' >
                        {{item.title}}
                    </li>
                </ul>
            </div>
        </div>
        <Showlist :path='selInit'></Showlist>
    </div>
</template>

<script>

import Showlist from './Showlist.vue'
// import Header from './Header.vue'

export default{
    name:'guang',
    components:{
        Showlist
    },
    data(){
        return {
         navlist:[
                    {title:"最新",path:'/guang/newest'},
                    {title:"搭配",path:'/guang/collocation'},
                    {title:"头条",path:'/guang/headlines'},
                    {title:"上新",path:'/guang/update'},
                    {title:"视频",path:'/guang/video'}
                ],
             selInit:'/guang/newest'             
    	}
    },
    methods:{
        goPage(path){
            // console.log(this.$store.state.name)
            this.$emit('sliderhide')
            this.$router.push(path)
             this.selInit=path
        },
        change(){
            this.$store.commit('setName','guan')
        },
        toggle(){
           
       }
    }
}
</script>

<style lang="less" scoped>
@import url('../../../styls/main.less');
    .guang {
        .margin(51,0,51,0);  // goodslist 整体上下移 50px，给头部和底部留出位置
        // .bg(#eee);
        .fs(16);
        .header {
            .w(375);
            .h(50);
            .bg(#fff);
            z-index: 1000;
            position: fixed;
            top: 0px;
            left: 0px;
            border-bottom: 1px solid #cdcdcd;
            .nav {
                .h(50);
                .w(375);
                ul {
                    list-style: none;
                    .h(50);
                    .w(375);

                    li {
                        .h(46);
                        .w(45);
                        float: left;
                        .margin(0,15,0,15);
                        .fs(16);
                        color: #666;
                        text-align: center;
                        .lh(46);
                    }
                    .act {
                        .fs(18);
                        color: #000;
                        border-bottom: 3px solid #f30;
                    }
                }
            }
        }
    }

</style>