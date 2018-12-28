<template>
    <transition
        enter-active-class='animated slideInUp'
        leave-active-class='animated slideOutDown'
    >
        <div class='footer' v-show="name">
            <div class="nav">
                <ul>
                    <router-link 
                    v-for="(item,index) in navlist" 
                    :key="index" 
                    active-class='active' 
                    @click="goPage(item.path)"
                    tag='li' :to='item.path'>
                    
                        <i :class="item.icon" aria-hidden="true"></i>
                        <span>{{item.name}}</span>

                    </router-link>
                </ul>
            </div>
        </div>
    </transition>
</template>

<script>

export default{
    name: 'Footer',
    components: {
        
    },
    data(){
        return {
            navlist: [
                    {name:'首 页',path:'/home',icon:'fa fa-home'},
                    {name:'分 类',path: '/sort',icon:'fa fa-th-large'},
                    {name:'逛 ',path: '/guang',icon:'fa fa-rocket'},
                    {name:'购物车',path: '/cart',icon:'fa fa-shopping-cart'},
                    {name:'我 的',path:'/my',icon:'fa fa-user'}
                ]
        }
    },
    computed:{  // 计算属性
        name(){
            return this.$store.state.name
        }
    },
    methods:{
        goPage(path){
            this.$emit('sliderhide')
            this.$router.push(path)
            // console.log(666)
        }
    }
}   

</script>
<style lang="less" scoped>
@import url('../../styls/main.less');

.footer{
    display: block;
    .h(50);
    .bg(#efefef);
    // z-index: 1000;
    position: fixed;
    bottom: 0px;
    left: 0px;
    right: 0px;
    border-top: 1px solid #bcbcbc;
    .nav {
        .h(48);
        ul {
            list-style: none;
            li {
                float: left;
                .w(75);
                .h(46);
                .fs(14);
                .lh(60);
                text-align: center;
                color: #666;
                .padding(4,0,0,0);
                opacity: 0.6;
                i,span {
                    display: block;
                    .w(75);
                    color: #666;
                }
                i {
                    .h(27);
                    .fs(27);
                }
                span {
                    .h(18);
                    .fs(12);
                    .lh(18);
                    color: #000;
                }
            }
            .active {
                opacity: 1;
            }
        }
    }
}

</style>