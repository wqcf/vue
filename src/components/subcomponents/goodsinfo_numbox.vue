<template>
  <div class="mui-numbox" data-numbox-min='1' :data-numbox-max="max">
        <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
        <input id="test" class="mui-input-numbox" type="number" value="1" @change="countChanged" ref="number"/>
        <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
    </div>
</template>

<script>
export default {
  data() {
    return {
      getcount : 1,
    }
  },
  props:[ 'max' ],
  methods: {
    countChanged(){
      //每当文本框的数据
      this.first=2;
      this.$emit('getcount',parseInt(this.$refs.number.value))
    }

  },
  components: {

  }
}
</script>

<style lang='scss' scoped>

</style>
