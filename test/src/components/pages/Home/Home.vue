<template>
        <div class='home'> <!--:id="!nameHome" > -->
            <Header></Header>
            <Banner></Banner>
            <Navbox></Navbox>
            <Hotlist></Hotlist>
        </div>
</template>

<script>

import Header from './Header.vue'
import Banner from './Banner.vue'
import Navbox from './Navbox.vue'
import Hotlist from './Hotlist.vue'

export default{
	name:'home',
    components:{
        Header,Banner,Navbox,Hotlist
    },
    data(){
    	return {
            
    	}
    },
    computed:{
        nameHome(){
            return this.$store.state.name
        }
    }
}	

</script>

<style lang="less" scoped>
@import url('../../../styls/main.less');
    .home {
        .margin(50,0,51,0);  // home 整体上下移 50px，给头部和底部留出位置
        // .bg(#eee);
        .fs(16);
        left: 0;
        img {
            width: 100%;
        }
    }

    #true {
        position: absolute;
        .left(315);
    }

</style>