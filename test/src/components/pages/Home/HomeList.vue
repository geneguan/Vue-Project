<template>
    <div class='homelist'>
        <div class="til"><p>{{list.til}}</p></div>
        <ul>
            <li v-for='(item,index) in movielist' :key='index'>
                <img :src="item.cover.origin" alt="">
                <div class='contain'>
                    <div class='left'>
                        <p>{{item.name}}</p>
                    </div>
                    <div class='right'> 
                        {{item.grade}}
                    </div>
                </div>
            </li>
        </ul>
        <div class='bottom_title'>{{list.title}}</div>
    </div>
</template>

<script>

export default{
    name:'homelist',
    components:{},
    computed:{
      test(){

 
      }
    },
    props: ['list'],
    data(){
        return {
            movielist:[]
           
       }
    },
    methods:{
        
    },
    created(){
        // this.getData()
    }
}   

</script>
<style lang="less" scoped>
@import url('../../../styls/main.less');

.homelist{
    // .bg(#eee);
    border-bottom: 2px solid #333;
    ul{
        li{
            .w(341);
            .h(240);
            margin: 20px auto;
            .bg(#fff);
            border: 1px solid #eee;
            img{
                width: 100%;  // 图片自适应
            }
            .contain{
                display: flex;
                // background: red;
                .h(50);
                .w(341);
                .fs(14);
                justify-content: space-between;
                align-items:center;
                .padding(0,14,0,14);
                box-sizing:border-box; 
                .right{
                    color:red;
                }
            }
        }
    }
    .bottom_title{
        .w(150);
        .h(30);
        border-radius:15px;
        border: 1px solid #aaa;
        .fs(12);
        color:#666;
        margin: 16px auto;
        .lh(30);
        text-align:center;
    }
}
.til{
    .margin(10,0,0,0);
    p{
        text-align: center;
        margin: 0 auto;
        .w(120);
        .h(26);
        .bg(#bbb);
        border-radius: 8px;
        .fs(16);
        .lh(26);
        color: #333;
    }
}
</style>