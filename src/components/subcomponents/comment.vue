<template>
  <div class="cmt-container">
      <h3>发表评论</h3>
      <hr>
      <textarea placeholder="请输入要评论的内容（做吐槽最多120字）" v-model="msg" maxlength="120"></textarea>
      <mt-button type="primary" size="large"  @click="postComment">发表评论</mt-button>
      <div class="cmt-list">
          <div class="cmt-item" v-for="item in comments" :key="item.add">
              <div class="cmt-title">
                 {{item.name}}
              </div>
              <div class="cmt-body">
                 {{item.content === '' ? '用户没评论':item.content}}
              </div>
          </div>
      </div>
      <mt-button type="danger" size="large" plain @click="loadMore">加载更多</mt-button>

  </div>
</template>

<script>
import { Toast } from 'mint-ui';
export default {
  data() {
    return {
        pageIndex: 0,
        msg:'',
        comments:[
            {
                name:"第1楼 用户 : 匿名用户 发表时间：2012/12/2 12:12:12",
                content:"夜黑风高夜"
            },{
                name:"第2楼 用户 : 匿名用户 发表时间：2012/12/2 12:12:12",
                content:""
            },{
                name:"第3楼 用户 : 匿名用户 发表时间：2012/12/2 12:12:12",
                content:"夜黑风高夜"
            },{
                name:"第4楼 用户 : 匿名用户 发表时间：2012/12/2 12:12:12",
                content:"夜黑风高夜"
            },{
                name:"第5楼 用户 : 匿名用户 发表时间：2012/12/2 12:12:12",
                content:"夜黑风高夜"
            },
        ],
        con:[ {
                name:"第6楼 用户 : 匿名用户 发表时间：2012/12/2 12:12:12",
                content:"夜黑风高夜"
            },{
                name:"第7楼 用户 : 匿名用户 发表时间：2012/12/2 12:12:12",
                content:""
            },{
                name:"第8楼 用户 : 匿名用户 发表时间：2012/12/2 12:12:12",
                content:"夜黑风高夜"
            },{
                name:"第9楼 用户 : 匿名用户 发表时间：2012/12/2 12:12:12",
                content:"夜黑风高夜"
            },{
                name:"第10楼 用户 : 匿名用户 发表时间：2012/12/2 12:12:12",
                content:"夜黑风高夜"
            }]
    }
  },
  props:["id"],
  created(){
  },
  methods: {
    //   getComments(){
    //       this.$http.get("api/getcommtents/"+this.id+"?pageindex="+this.pageIndex)
    //       .the(result =>{
    //           if(result.body.status ===0 ){

    //           }else{
    //               Toast('获取评论失败')
    //           }
    //       })
    //   },
      loadMore(){
          this.pageIndex++;
          this.comments = this.comments.concat(this.con);
      },
      postComment(){
          //校验是否为空值
        console.log(this.id);
        if(this.msg.trim().length === 0){
            return Toast("评论不能为空");
        }else{
            var cmt = { 
                name : "第0楼 用户 : 匿名用户 发表时间：2012/12/2 12:12:12",
                content: this.msg.trim()
            };
            this.comments.unshift(cmt);
            this.msg = '';
        }
        // this.$http.post('api/postcomment/' + this.id,{
        //     content:this.msg.trim()
        // }).then(function(result){
        //     if(result.body.status){
        //         var cmt = { 
        //             name : "第0楼 用户 : 匿名用户 发表时间：2012/12/2 12:12:12",
        //             content: this.msg.trim()
        //          };
        //          this.components.unshift(cmt);
        //          this.msg = '';
        //     }
        // })
      }
  },
  components: {
  }
}
</script>

<style lang='scss' scoped>
.cmt-container{
    h3{
        font-size: 1
    }
    textarea{
        height: 85px;
        margin: 0;
        font-size: 14px;
    }

    .cmt-list{
        margin:5px 0 ;
        // overflow-y: atuo;
        .cmt-item{
            font-size: 13px;
            .cmt-title{
                height: 30px;
                line-height: 30px;
                background-color: #ccc;
            }
            .cmt-body{
                line-height: 35px;
                text-indent: 2em;
            }
        }
    }
}
</style>
