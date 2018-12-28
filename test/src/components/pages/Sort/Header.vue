<template>
        <div class='header' >
            <div class="back" >
                <i class="fa fa-chevron-left" aria-hidden="true"></i>
            </div>
            <div class="logo" >
                <p>商品分类</p>
            </div>
            <div class="us">
                
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
        .bg(#f80);
        z-index: 1000;
        position: fixed;
        top: 0px;
        left: 0px;
        
        border-bottom: 1px solid #bbb;
        .back,.logo,.us {
            .w(60);
            .h(50);
            .fa,p {
                display: block;
                .fs(20);
                .lh(50);
                text-align: center;
                color: #fff;
            }
        }
        .back {
            float: left;
        }
        .logo {
            .w(100);
            float: left;
            .margin(0,0,0,80);
        }
        .us {
            float: right;
        }
    }

</style>