<template>
  <div class="photoinfo">
      <h3>{{data.title}}</h3>
      <p class="subtitle">
          <span>发表时间：{{data.time}}</span>
          <span>点击：0次</span>
      </p>
      <hr>
      <!-- 图片内容区域 -->
      <div class="content">
          <vue-preview class="preview" :slides="slide1" @close="handleClose"></vue-preview>
      </div>
      <comment-box :id="this.id"></comment-box>
  </div>
</template>

<script>
import comment from '../subcomponents/comment.vue'

export default {
  data() {
      return {
            id:this.$route.params.id,
            datas:[
                {
                    id:0,
                    title:'我是图片',
                    time:this.getNowFormatDate(),
                },{
                    id:1,
                    title:'我是图片',
                    time:this.getNowFormatDate(),
                },{
                    id:2,
                    title:'我是图片',
                    time:this.getNowFormatDate(),
                },{
                    id:3,
                    title:'我是图片',
                    time:this.getNowFormatDate(),
                },{
                    id:4,
                    title:'我是图片',
                    time:this.getNowFormatDate(),
                },{
                    id:5,
                    title:'我是图片',
                    time:this.getNowFormatDate(),
                },
            ],
            data:{},
            slide1 : [
            {
                 src: '/src/images/0.jpg',
                 msrc:'/src/images/0.jpg',
                alt: 'picture1',
                title: 'Image Caption 1',
                w: 600,
                h: 400
          },{
                src: '/src/images/1.jpg',
                msrc:'/src/images/1.jpg',
                alt: 'picture1',
                title: 'Image Caption 1',
                w: 600,
                h: 400
          },{
                src: '/src/images/2.jpg',
                msrc:'/src/images/2.jpg',
                alt: 'picture1',
                title: 'Image Caption 1',
                w: 600,
                h: 400
          },{
                src: '/src/images/cbd.jpg',
                msrc:'/src/images/cbd.jpg',
                alt: 'picture1',
                title: 'Image Caption 1',
                w: 600,
                h: 400
           },{
                 src: '/src/images/muwu.jpg',
                msrc:'/src/images/muwu.jpg',
                alt: 'picture1',
                title: 'Image Caption 1',
                w: 600,
                h: 400
          },{
                src: '/src/images/shuijiao.jpg',
                msrc:'/src/images/shuijiao.jpg',
                alt: 'picture1',
                title: 'Image Caption 1',
                w: 600,
                h: 400
          }
        ],
      }
  },
  created(){
      this.getPhotoInfo(this.id);
  },
  methods: {
    getNowFormatDate() {//获取当前时间
        var date = new Date();
        var seperator1 = "-";
        var seperator2 = ":";
        var month = date.getMonth() + 1<10? "0"+(date.getMonth() + 1):date.getMonth() + 1;
        var strDate = date.getDate()<10? "0" + date.getDate():date.getDate();
        var currentdate = date.getFullYear() + seperator1  + month  + seperator1  + strDate
                + " "  + date.getHours()  + seperator2  + date.getMinutes()
                + seperator2 + date.getSeconds();
        return currentdate;
    },
    getPhotoInfo(id){
        this.data=this.datas[id];
        console.log(this.data);
    },
    handleClose () {
        console.log('close event')
      }

  },
  components: {
      'comment-box':comment
  }
}
</script>

<style lang='scss' scoped>
.photoinfo{
    .content{
        .preview{
            img{
                width: 60px;
                height: 40px;
            }
        }
    }
    h3{
        font-size: 14px;
        color: #007aff;
        text-align: center;
        padding: 10px 0;
    }
    .subtitle{
        display: flex;
        justify-content: space-between;
        font-size: 13px;
    }
}
</style>
