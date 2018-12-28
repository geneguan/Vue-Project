<template>
    <div class='navbox'>
        <ul class="nav">
            <li v-for="(item,index) in navlist" :key='index' @click="goPage()"
                    >
                <img :src="item.imgUrl" alt="" />
                <a href="#">{{item.title}}</a>
            </li>
        </ul>
        
    </div>
</template>

<script>



export default{
    name:'navbox',
    components:{
        
    },
    data(){
        return {
            navlist:[
                {imgUrl:'http://img10.static.yhbimg.com/yhb-img01/2017/02/03/09/010a6210ab22aea2ab304727a02a0b86c1.png?imageView2/2/w/98/h/98/q/60',title:'新品到著'},
                {imgUrl:'http://img11.static.yhbimg.com/yhb-img01/2017/02/03/09/01c07611bfd87c167b614e76fd4e648d1a.png?imageView2/2/w/98/h/98/q/60',title:'品牌一览'},
                {imgUrl:'http://img10.static.yhbimg.com/yhb-img01/2017/02/03/09/0136b1097e58f1da29b8aa5e11014530d6.png?imageView2/2/w/98/h/98/q/60',title:'玩具娱乐'},
                {imgUrl:'http://img10.static.yhbimg.com/yhb-img01/2017/02/03/09/01a59222ccd78f99235ceb010e473c40e5.png?imageView2/2/w/98/h/98/q/60',title:'全部分类'},
                {imgUrl:'http://img11.static.yhbimg.com/yhb-img01/2017/02/03/09/017a3e5b1c186344dafa450ca016316be0.png?imageView2/2/w/98/h/98/q/60',title:'中小儿童'},
                {imgUrl:'http://img10.static.yhbimg.com/yhb-img01/2017/03/01/12/0185ee3b9ba7a02d99a9e82834448ba677.png?imageView2/2/w/98/h/98/q/60',title:'领劵中心'},
                {imgUrl:'http://img11.static.yhbimg.com/yhb-img01/2017/02/03/09/0137b842d791e17b2f432ec6566afe109f.png?imageView2/2/w/98/h/98/q/60',title:'扮酷必备'},
                {imgUrl:'http://img10.static.yhbimg.com/yhb-img01/2017/02/03/09/01d3b9f604a085e0c9c9c16a76bc1f882f.png?imageView2/2/w/98/h/98/q/60',title:'折扣专区'}
            ]
        }
    },
    methods:{
        goPage(){
            this.$emit('sliderhide')
            this.$router.push('/guang')
            // console.log(666)
        }
    }
}   

</script>

<style lang="less" scoped>
@import url('../../../styls/main.less');
    .navbox {
        .w(375);
        .h(170);
        .bg(#fff);
        .nav {
            .w(375);
            .h(150);
            .padding(20,0,0,0);
            list-style: none;
            li {
                .w(93);
                .h(70);
                .bg(#fff);
                .margin(0,0,5,0); 
                float: left;
                display: flex;
                flex-direction: column;
                align-items: center;
                img {
                    .w(40);
                    .h(40); 
                }
                a {
                    text-decoration: none;
                    display: block;
                    .w(93);
                    .h(20);
                    .fs(12);
                    .lh(20);
                    color: #000;
                    text-align: center;
                    .margin(3,0,0,0);
                }
            }
        }
        h2 {
            .w(373);
            .h(44);
            .fs(15);
            color: #666;
            .lh(44);
            text-align: center;
            border: 1px solid #ddd;
            .bg(#eee);
        }
    }
</style>