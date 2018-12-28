<template>
    <div class='showlist'>
        {{path}}
        <Banner></Banner>
        <ul v-infinite-scroll="loadMore"
            infinite-scroll-disabled="loading"
            infinite-scroll-distance="10" >
            <li v-for='(item,index) in guanglist' :key='index'>
                <img v-lazy="item.image_url" alt="" width="74" height="74">
                <div class='contain'>
                    <div class='top'>
                        <p>{{item.title}}</p>
                    </div>
                    <div class='bottom'> 
                        <p>{{item.RMB_price}}</p>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import Vue from 'vue'
import Banner from './Banner.vue'
import { Toast } from 'mint-ui';
import { InfiniteScroll } from 'mint-ui';
import { Lazyload } from 'mint-ui';
Vue.use(Lazyload);
Vue.use(InfiniteScroll);
export default{
    name:'showlist',
    components:{
        Banner
    },
    props: ['path'],
    data(){
        return {
            guanglist:[
                // {
                //     imgUrl: '../../../../static/list1.png',name: 'EOS',decs: '商用分布式应用的区块链操作系统'
                // }
            ],
            pageNum: 1
        }
    },
    methods: {
        getData(){
            this.$axios.get('../../../../static/data/goodslist.json')
            .then((response) => {
                // console.log(response);
                // console.log(response.data.slice((pageNum-1)*num,pageNum*num));
                this.guanglist = response.data   
                // .slice(10,20)
                // console.log(this.guanglist);
        // console.log(this.pageNum)

            })
            .catch(function (error) {
                console.log(error);
            })
        },
        loadMore() {
            // this.loading = true;
            // let num = 10
            // setTimeout(() => {
            //     // this.getData(this.pageNum,num)
            //     this.loading = false
            //     this.pageNum++ 
            // }, 2500);
        }
    },
    created(){
        this.getData();
        console.log(this.pageNum)
    }
}   

</script>

<style lang="less" scoped>
@import url('../../../styls/main.less');
    .showlist {
        .margin(51,0,51,0);  // goodslist 整体上下移 51px，给头部和底部留出位置
        // .bg(#eee);
        .fs(16);
        ul{
            list-style: none;
            .padding(10,0,10,0);
            li{
                .padding(15,20,15,20);
                .w(300);
                .h(80);
                .bg(#fff);
                border: 1px solid #ddd;
                .margin(15,16,15,16);
                .contain{
                    .margin(0,0,0,15);
                    display: inline-block;
                    float: left;
                    .h(80);
                    .w(200);
                    .fs(14);
                    .top {
                        .h(36);
                        .fs(18);
                        .lh(36);
                        color: #333;
                        white-space: nowrap;
                        overflow: hidden;
                        text-overflow: ellipse;
                    }
                    .bottom {
                        .h(32);
                        .fs(14);
                        .lh(32);
                        color: red;
                        font-weight: 900;
                    }
                }
                img {
                    border: 1px solid #999;
                    display: inline-block;
                    float: left;
                    .w(74);
                    .h(74);
                }
                image[lazy=loading] {
                    .w(35);
                    .h(74);
                    margin: auto;
                }
            }
        }
    }

</style>