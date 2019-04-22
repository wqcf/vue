<template>
  <div>
      <div id="slider" class="mui-slider">
            <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
                <div class="mui-scroll">
                    <a :class="['mui-control-item', s.id == 0 ? 'mui-active':'']" v-for="s in scoroll" :key="s.id" @tap="getPhotoList(s.id)">
                        {{s.name}}
                    </a>
                </div>
            </div>
        </div>
        <ul class="photo-list">
            <router-link v-for="item in list" :key="item.id" :to="'/home/photoinfo/'+item.id" tag="li">
                <img v-lazy="item.url">
                <div class="info">
                    <h1 class="info-title">
                        {{item.title}}
                    </h1>
                    <div class="info-body">
                        {{item.content}}
                    </div>
                </div>
            </router-link>
        </ul>
  </div>
</template>

<script>
import mui from '../../lib/js/mui.min.js';

export default {
  data() {
    return {
        scoroll:[
            {
                id:0,
                name:"全部"
            },{
                id:1,
                name:"家居生活"
            },{
                id:2,
                name:"摄影设计"
            },{
                id:3,
                name:"明星美女"
            },{
                id:4,
                name:"空间设计"
            },{
                id:5,
                name:"摄影学习"
            }
        ],
        lists: [
            {
                id:0,
                url:'/src/images/0.jpg',
                title:'我是图片1',
                content:"我是图片1我是图片1我是图片1我是图片1我是图片我是图片图片1我是图片1我是图片我是图片1我片1我是图片我是图片1我是图片1我是图片1我是图片1我是图片1我是图"
            },{
                id:1,
                url:'/src/images/1.jpg',
                title:'我是图片1我是图片',
                content:"我是图片1我是图片1我是图片1我是图片1我是图片我是图片1我是图片1我是图片1我是图片1我是图片1我是图"
            },{
                id:2,
                url:'/src/images/2.jpg',
                title:'我是图片2',
                content:"我是图片1我是图片1我是图片1我是图片1我是图片我是图片1我是图片1我是图片1我是图片1我是图片1我是图"
            },{
                id:3,
                url:'/src/images/cbd.jpg',
                title:'我是图片cbd',
                content:"我是图片1我是图片1我是图片1我是图片1我是图片我是图片1我是图片1我是图片1我是图片1我是图片1我是图"
            },{
                id:4,
                url:'/src/images/muwu.jpg',
                title:'我是图片muwu',
                content:"我是图片1我是图片1我是图片1我是图片1我是图片我是图片1我是图片1我是图片1我是图片1我是图片1我是图"
            },{
                id:5,
                url:'/src/images/shuijiao.jpg',
                title:'我是图片shuijiao',
                content:"我是图片1我是图片1我是图片1我是图片1我是图片我是图片1我是图片1我是图片1我是图片1我是图片1我是图"
            }
        ],
        list:[]
    }
  },
  created(){
      this.getPhotoList(0);
  },
  mounted(){
    mui('.mui-scroll-wrapper').scroll({
        deceleration: 0.0005
    })
  },
  methods: {
      getPhotoList(cateId){
        //   thid.$http.get('api/getimages/' + cateId) .then(result =>{
        //       if(result.body.status === 0){
        //           this.list = result.body.message;
        //       }
        //   })
        this.list = [];
        this.list=this.list.concat(this.lists[cateId]);
      }
  },
  components: {
  },
}
</script>

<style lang='scss' scoped>
.mui-slider{
    touch-action: pan-y;
}
.photo-list{
    padding: 10px;
    margin: 0;
    padding-bottom:0;
    li{
        position: relative;
        list-style: none;
        background-color: #ccc;
        text-align: center;
        margin-bottom: 10px;
        box-shadow: 0 0 6px #999;
        
        img{
            width: 100%;
            vertical-align: middle;
        }
        img[lazy="loading"] {
            width: 40px;
            height: 300px;
            margin: auto;
        }
        .info{
            position: absolute;
            bottom: 0;
            color: #fff;
            text-align: left;
            background-color: rgba(0,0,0,0.4);
            width: 100%;
            max-height: 84px;
            verflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            .info-title{
                font-size: 14px;
            }
            .info-body{
                font-size: 13px;
            }
        }
    }
}

</style>
