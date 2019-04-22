<template>
  <div class="goods-list">
      <router-link class="goods-item" v-for="l in list" :key="l.id" :to="'/home/goodsinfo/'+l.id">
          <img :src="l.src" alt="" >
          <h1 class="title">AAAA级景区</h1>
          <div class="info">
              <p class="price">
                  <span class="now">￥899</span>
                  <span class="old">￥2399</span>
              </p>
              <p class="sell">
                  <span>热卖中</span>
                  <span>剩余</span>
              </p>
          </div>
      </router-link>

  </div>
</template>

<script>
export default {
  data() {
    return {
        list : [
            {
                src:'/src/images/0.jpg',
                id: 0
            },{
                src:'/src/images/1.jpg',
                id: 1
            },{
                src:'/src/images/2.jpg',
                id: 2
            },
        ]
    }
  },
  methods: {

  },
  components: {

  }
}
</script>

<style lang='scss' scoped>
.goods-list{
    display: flex;
    flex-wrap: wrap;
    padding: 7px;
    justify-content: space-between;
    .goods-item{
        margin: 3px 0;
        width: 49%;
        border: 1px solid #ccc;
        box-shadow: 0 0 8px #ccc;
        padding: 2px;
        display: flex;
        flex-direction:  column;
        justify-content: space-between;
        min-height: 193px;
        img{
            width: 100%;
        }
        .title{
            font-size: 14px;
        }
        .info{
            background: #eee;
            p{
                margin: 0;
                padding: 5px; 
            }
            .price{
                .now{
                    color: red;
                    font-weight: bold;
                    font-size: 16px;
                }
                .old{
                    text-decoration: line-through;
                    font-size: 12px;
                    margin-left: 10px;
                }
            }
            .sell{
                display: flex;
                justify-content: space-between;
                font-size: 13px;
            }
        }
    }

}
</style>
