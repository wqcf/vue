<template>
  <div>
    <mt-swipe :auto="4000">
        <mt-swipe-item v-for="(index, item) in lunbotuList" :key="item">
            <img :src="index" alt="" :class="{full:isfull}">
        </mt-swipe-item>
    </mt-swipe> 
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  props:["lunbotuList","isfull"],
  methods: {

  },
  components: {

  }
}
</script>

<style lang='scss' scoped>
.mint-swipe{
    height:200px;
}
.mint-swipe-item{
  text-align: center;
    img{
        width: 100%;
        height:200px;
    }
    .full{
      width:200px;
    }
}
</style>
