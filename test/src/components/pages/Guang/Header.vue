<template>
        <div class='header' >
            <div class="nav">
                <ul>
                    <li v-for='(item,index) in navlist'
                    :class="selInit==item.path?'act':''"
                    @click='toggle(item.path)'
                    >{{item.title}}</li>
                </ul>
            </div>
        </div>
    </transition>
</template> 

<script>

export default{
    name: 'Header',
    components: {
       
    },
    data(){
       return {
         navlist:[
                    {title:"最新",path:'/newest'},
                    {title:"搭配",path:'/collocation'},
                    {title:"头条",path:'/headlines'},
                    {title:"上新",path:'/update'},
                    {title:"视频",path:'/video'}
                ],
    		 selInit:'/newest'
    	}
    },
    methods:{
        goPage(path){
            // console.log(this.$store.state.name)
            this.$emit('sliderhide')
            this.$router.push(path)
            
        },
        change(){
            this.$store.commit('setName','guan')
        },
        toggle(val){
            this.selInit=val
      }
    },
    computed:{
    }    
}	

</script>
<style lang="less" scoped>
@import url('../../../styls/main.less');

    .header{
        .w(375);
        .h(50);
        .bg(#efefef);
        z-index: 1000;
        position: fixed;
        top: 0px;
        left: 0px;
        border-bottom: 1px solid #00FFFF;
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
                    color: #000;
                    border-bottom: 3px solid #f30;
                }
            }
        }
    }

</style>