<template>
    <div>
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="(index, item) in lunbotuList" :key="item">
                <img :src="index" alt="">
            </mt-swipe-item>
        </mt-swipe>     
        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/home/newslist">
                    <span class="mui-icon mui-icon-home"></span>
                    <div class="mui-media-body">新闻资讯</div>
                </router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="#">
                    <span class="mui-icon mui-icon-email"><span class="mui-badge">5</span></span>
                    <div class="mui-media-body">图片分享</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="#">
                    <span class="mui-icon mui-icon-chatbubble"></span>
                    <div class="mui-media-body">商品购买</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="#">
                    <span class="mui-icon mui-icon-location"></span>
                    <div class="mui-media-body">留言反馈</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="#">
                    <span class="mui-icon mui-icon-search"></span>
                    <div class="mui-media-body">视频专区</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="#">
                    <span class="mui-icon mui-icon-phone"></span>
                    <div class="mui-media-body">联系我们</div></router-link></li>
        </ul> 
    </div>
    
</template>

<script>
import { Toast } from "mint-ui";
    export default {
        data(){
            return {
                lunbotuList:[
                    "/src/images/0.jpg",
                    "/src/images/1.jpg",
                    "/src/images/2.jpg",
                ]
            }
        },
        created(){
            this.getlunbotu();
        },
        methods:{

            getlunbotu(){
                // this.$http.get("https://www.easy-mock.com/mock/5c32dbb0fd25436daf3c23b9/train/api/xwlineintensity").then((result)=>{
                //     if(result.body.success){

                //     }else{
                //         Toast(LunbotuLoadingfai)
                //     }
                // })
            }
        }
    }
</script>
<style lang="scss" scoped>
.mint-swipe{
    height:200px;
}
.mint-swipe-item{
    &:nth-child(1){
        background:red;
    }
    &:nth-child(2){
        background:blue;
    }
    &:nth-child(3){
        background:green;
    }
    img{
        width: 100%;
        height:200px;
    }
}
.mui-grid-view.mui-grid-9{
    background-color: #fff;
    
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell{
    border:none;
}
</style>

