<template>
  <div>
    <div class="goods-list">
      <div class="mui-card">
        <div class="mui-card-content">
          <div class="mui-card-content-inner">
            <mt-switch></mt-switch>
            <img src="/src/images/0.jpg" alt="">
            <div class="info">
              <h1> 小米（Mi）小米note 16G 双网通版</h1>
              <p>
                <span class="price">￥2199</span>
                <numbox></numbox>
                <a href="#">删除</a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="mui-card">
        <div class="mui-card-content">
          <div class="mui-card-content-inner">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import numbox from '../subcomponents/shopcar_numbox.vue';
export default {
  data() {
    return {

    }
  },
  methods: {

  },
  components: {
    'numbox':numbox
  }
}
</script>

<style <style lang="scss" scoped>
.goods-list{
  
  .mui-card-content-inner{
    display: flex;
    align-items: center;
    img{
        width:60px;
        height:60px;
      }
      h1{
        font-size: 13px;
      }
      .info{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .price{
          color:red;
          font-weight: bold;
        }
        p{
          margin:0;
        }
      }
  }
  
}
</style>

