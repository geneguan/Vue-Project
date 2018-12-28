<template>
    <div class='hotlist'>
        <div class="listBox">
            <h2>热门分类</h2>
            <ul class="hotType">
                <li  v-for="(item,index) in hotlist1" :key='index'>
                    <img :src="item.imageUrl" alt="" />
                </li>
            </ul>
            <ul class="hotType">
                <li  v-for="(item,index) in hotlist1" :key='index'>
                    <img :src="item.imageUrl" alt="" />
                </li>
            </ul>
            <ul class="hotType">
                <li  v-for="(item,index) in hotlist1" :key='index'>
                    <img :src="item.imageUrl" alt="" />
                </li>
            </ul>
            <h2>热门品牌</h2>
            <ul class="hotBrand">
                <li  v-for="(item,index) in hotlist2" :key='index'>
                    <img :src="item.imageUrl" alt="" />
                </li>
            </ul>
        </div>
        <div>
            <img src="http://img10.static.yhbimg.com/yhb-img01/2017/11/16/14/01f28721040918d34d66531cb1c4b88efe.jpg?imageView2/3/w/640/h/200/q/60" alt="" width="100%" height="118px" />
        </div>
        <h2>人气单品排行</h2>
        <div>
            <img src="http://img10.static.yhbimg.com/yhb-img01/2017/07/17/15/011dd0506f51b4bc88a527aaccef0795e0.jpg?imageView2/2/w/640/h/200/q/90" alt="" width="100%" height="118px" />
        </div>
        <div class="adBox">
            <div class="content">
                <ul class="ad">
                    <li  v-for="(item,index) in adlist" :key='index'>
                        <img :src="item.image_url" alt="" width="93" height="120" />
                        <p>{{item.RMB_price}}</p>
                    </li>
                </ul>
            </div>
        </div>

        <div class="imgs">
            <img src="http://img10.static.yhbimg.com/yhb-img01/2017/08/16/17/01d9e2c0e69c1b13eaf979f3940dca42ee.jpg?imageView2/3/w/640/h/200/q/60" alt="" />
        </div>
        <div class="imgs">
            <img src="http://img11.static.yhbimg.com/yhb-img01/2017/08/16/17/018e9f4b45c625e6348512065f327f144f.jpg?imageView2/3/w/640/h/200/q/60" alt="" />
        </div>
        <div class="imgs">
            <img src="http://img10.static.yhbimg.com/yhb-img01/2017/08/16/17/01280cb5522f4eb015ab9a72dc6a899882.jpg?imageView2/3/w/640/h/200/q/60" alt="" />
        </div>
        <div class="maybe">
            <p>
                <i class="fa fa-arrow-circle-o-up" aria-hidden="true"></i>
                <span>你可能喜欢</span>
            </p>
        </div>
        <div class="homelist">
            
        </div>
        <div class="toTop" @click="backTop('返回顶部')">
            <i class="fa fa-chevron-up" aria-hidden="true" />
            &nbsp;返回顶部&nbsp;
            <i class="fa fa-chevron-up" aria-hidden="true" />
        </div>
        <div class="bottomTitle">
            CopyRight©2007-2018 南京新与力文化传播有限公司
        </div>
    </div>
</template>

<script>
export default{
    name:'hotlist',
    components:{
        
    },
    data(){
        return {
            hotlist1:[
                {
                    imageUrl:'http://img11.static.yhbimg.com/yhb-img01/2018/11/21/10/012476abcd29f44dd82ea856a0b450f640.jpg?imageView2/2/w/140/h/140/q/60'
                },
                {
                    imageUrl:'http://img11.static.yhbimg.com/yhb-img01/2018/11/21/10/0190a2683b3887a4b7304bee7a220b0afb.jpg?imageView2/2/w/140/h/140/q/60'
                },
                {
                    imageUrl:'http://img10.static.yhbimg.com/yhb-img01/2018/11/21/11/01113e26e0eb33932e3bbb674351acd990.jpg?imageView2/2/w/140/h/140/q/60'
                },
                {
                    imageUrl:'http://img10.static.yhbimg.com/yhb-img01/2018/11/21/10/011224299ab8f9f993f58b82c169ab57a9.jpg?imageView2/2/w/140/h/140/q/60'
                }
            ],
            hotlist2:[
                {
                    imageUrl:'http://img11.static.yhbimg.com/yhb-img01/2018/11/14/11/01119d7c25758f5ee68984f6c967d3848c.jpg?imageView2/2/w/158/h/174/q/60'
                },
                {
                    imageUrl:'http://img10.static.yhbimg.com/yhb-img01/2018/11/21/11/01296191999b629f311e975c5d6471efa2.jpg?imageView2/2/w/158/h/174/q/60'
                },
                {
                    imageUrl:'http://img11.static.yhbimg.com/yhb-img01/2018/11/14/11/01119d7c25758f5ee68984f6c967d3848c.jpg?imageView2/2/w/158/h/174/q/60'
                },
                {
                    imageUrl:'http://img10.static.yhbimg.com/yhb-img01/2018/11/21/11/01296191999b629f311e975c5d6471efa2.jpg?imageView2/2/w/158/h/174/q/60'
                },
                {
                    imageUrl:'http://img11.static.yhbimg.com/yhb-img01/2018/11/14/11/01119d7c25758f5ee68984f6c967d3848c.jpg?imageView2/2/w/158/h/174/q/60'
                },
                {
                    imageUrl:'http://img10.static.yhbimg.com/yhb-img01/2018/11/21/11/01296191999b629f311e975c5d6471efa2.jpg?imageView2/2/w/158/h/174/q/60'
                },
                {
                    imageUrl:'http://img10.static.yhbimg.com/yhb-img01/2017/11/22/13/01029e508c50a40b0314db1f9de02769d0.jpg?imageView2/2/w/320/h/172/q/60'
                }
            ],
            adlist: []
        }
    },
    methods:{
        backTop(item) {
            console.log(item)
            window.scrollTo(0,0);
        },
        getData(){
            this.$axios.get('../../../../../static/data/goodslist.json')
            .then((response) => {
                // console.log(response);
                // console.log(response.data);
                this.adlist = response.data
                // console.log(this.adlist);
            })
            .catch(function (error) {
                console.log(error);
            })
        }
    },
    created(){
        this.getData();
    }
}   

</script>

<style lang="less" scoped>
@import url('../../../styls/main.less');
.hotlist{
    // .bg(#ccc);
    h2 {
        .w(373);
        .h(44);
        .fs(16);
        color: #666;
        .lh(44);
        text-align: center;
        border: 1px solid #ddd;
        .bg(#eee);
    }
    .listBox {
        .w(375);
        .h(600);
        // .bg(#ddd);
        .hotType{
            list-style: none;
            display: flex;
            li{
                .w(90.75);
                .h(98);
                border: 1px solid #999;
                .margin(0,0.5,0,0.5);
                img{
                    .w(92.75);
                    .h(100);
                }
            }
        }
        .hotBrand{
            list-style: none;
            .h(185.5);
            border-bottom: 1px solid #999;
            li{
                float: left;
                .w(90);
                .h(90);
                border: 1px solid #999;
                .margin(0,0.5,0,0.5);
                img{
                    .w(92.75);
                    .h(92.75);
                }
            }
            li:nth-child(7){
                float: left;
                .w(185.5);
                .h(92.75);
                .margin(0,0.5,0,0.5);
                img{
                    .w(185.5);
                    .h(92.75);
                }
            }
        }
    }
    .adBox {
        .padding(5,0,5,0);
        .w(375);
        .h(180);
        .bg(#dedede);
        overflow: hidden;
        .content {
            width: 100%;
            overflow-x: scroll;
            overflow-y: hidden;
            .ad {
                list-style: none;
                display: flex;
                float: left;  
                min-width: 100%;
                li {
                    width: 93px;
                    height: 170px;
                    // .bg(#ccc);
                    .margin(0,5,0,0);
                    img {
                        display: block;
                        margin: 0;
                    }
                    p {
                        width: 93px;
                        height: 50px;
                        margin: 0px;
                        background: #fff;
                        text-align: center;
                        font-size: 14px;
                        line-height: 50px;
                        border-top: 1px solid #efefef;
                        color: #f30;
                        font-weight: 900;
                    }
                }
            }
        }
    }
    .imgs {
        img {
            width: 100%;
            .h(118);
        }
        .margin(0,0,10,0);
    }
    .maybe {
        .h(30);
        .w(375);
        .bg(#efefef);
        .padding(15,0,15,0);
        border-top: 1px solid #ccc;
        border-bottom: 1px solid #ccc;
        p {
            .w(100);
            .h(22);
            margin: 0 auto;
            .padding(4,10,4,10);
            i,span {
                text-align: center;
                .fs(16);
                color: #999;
            }
        }
        
    }
    .homelist {
        .h(200);
        .w(375);
        // .bg(#eee);
    }
    .toTop {
        margin: 0;
        width: 100%;
        height: 50px;
        line-height: 50px;
        text-align: center;
        font-size: 14px;
        color: #333;
        background: #eee;
    }
    .bottomTitle {
        width: 100%;
        height: 50px;
        font-size: 14px;
        text-align: center;
        line-height: 50px;
        color: #666;
        background: #dedede;
    }
}
</style>




        