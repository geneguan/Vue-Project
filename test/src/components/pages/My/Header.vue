<template>
        <div class='header' >
            <div class="back" @click="goPage('/my')">
                <i class="fa fa-chevron-left" aria-hidden="true"></i>
            </div>
            <div class="logo" >
                <p>个人中心</p>
            </div>
            <div class="us">
                <i class="fa fa-user-circle" aria-hidden="true"></i>
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
        .bg(#333);
        z-index: 1000;
        position: fixed;
        top: 0px;
        left: 0px;
        
        border-bottom: 1px solid #999;
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