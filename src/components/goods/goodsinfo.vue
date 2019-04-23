<template>
  <div class="goodsinfo">
    <transition 
    @before-enter = "beforeEnter"
    @enter="enter"
    @after-enter="afterEnter">
        <div class="ball" v-show="ballFlag" ref="ball"></div>
    </transition>
    <div class="mui-card">
       <swiper-box :lunbotuList="lunbotuList" :isfull="false"></swiper-box>
    </div>

    <div class="mui-card">
        <div class="mui-card-header">商品的名称标题</div>
        <div class="mui-card-content">
            <div class="mui-card-content-inner">
                <p class="price">
                    市场价：<del>￥2399</del>&nbsp;&nbsp;销售价：<span class="now_price">
                        ￥2199
                    </span>
                </p>
                <p style="margin:10px 0 ;">购买数量：<numbox-box @getcount="getSelectedCount" :max="60"></numbox-box></p>
                <p>
                    <mt-button type="primary" size="small">立即购买</mt-button>
                    <mt-button type="danger" size="small" @click="addToShopCar">加入购物车</mt-button>
                    
                </p>
            </div>
        </div>
    </div>

    <div class="mui-card">
        <div class="mui-card-header">商品参数</div>
        <div class="mui-card-content">
            <div class="mui-card-content-inner">
                <p>商品货号：SD2932214404</p>
                <p>库存情况：60件</p>
                <p>上架时间：2015-04-20 01：19：20</p>
            </div>
        </div>
        <div class="mui-card-footer">
            <mt-button type="primary" size="large" plain @click="goDesc(id)">图片介绍</mt-button>
            <mt-button type="danger" size="large" plain @click="goComment(id)">商品评论</mt-button>
        </div>
    </div>
  </div>
</template>

<script>
import swiper from "../subcomponents/swiper.vue";
import numbox from "../subcomponents/goodsinfo_numbox.vue";
export default {
  data() {
    return {
        lunbotuList:[
            "/src/images/0.jpg",
            "/src/images/1.jpg",
            "/src/images/2.jpg",
        ],
        id:this.$route.params.id,
        ballFlag: false ,//控制小球的隐藏显示
        selectedCount: 1,
    }
  },
  methods: {
      goDesc(id){
          //图文介绍界面
          this.$router.push({name: "goodsdesc",params:{id}})
      },
      goComment(id){
          //点击跳转到评论界面
          this.$router.push({name: "goodscomment",params:{id}})
      },
      addToShopCar(){
          this.ballFlag = true;
      },
      beforeEnter(el){
          el.style. transform="translate(0,0)";
      },
      enter(el,done){
          el.offsetWidth;
          //获取小球在页面中的位置
          const ballPosition = this.$refs.ball.getBoundingClientRect(); 
          const badgePosition = document.getElementById('badge').getBoundingClientRect(); 

          const xDist = badgePosition.left - ballPosition.left;
          const yDist = badgePosition.top - ballPosition.top;

          el.style.transform = `translate(` + xDist + `px, ` + yDist + `px)`;
          el.style.transition = 'all 0.5s cubic-bezier(.46,-0.36,.92,.73)';
          done()
      },
      afterEnter(el){
          this.ballFlag = !this.ballFlag;
          var goodsinfo = { id : this.id , count: this.selectedCount, price: 2199, selected: true}

          this.$store.commit('addToCar',goodsinfo)
      },
      getSelectedCount(count){
          this.selectedCount = count;
      }

  },
  components: {
      'swiper-box': swiper,
      'numbox-box': numbox
  }
}
</script>

<style lang='scss' scoped>
.goodsinfo{
    .ball{
        width: 15px;
        height: 15px;
        border-radius: 50%;
        background-color: red;
        position: absolute;
        z-index: 99;
        top: 360px;
        left: 148px; 
    }
    p{
        margin:0;
    }
    .now_price{
        color:red;
        font-size: 14px;
    }
    .mui-card-footer{
        display: block;
        button{
            margin: 10px 0;
        }
    }
}

</style>
