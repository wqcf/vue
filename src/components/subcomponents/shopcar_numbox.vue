<template>
  <div class="mui-numbox" data-numbox-min='1' style="height:25px">
        <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
        <input id="test" class="mui-input-numbox" type="number" value="1" @change="countChanged" ref="number"/>
        <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
    </div>
</template>

<script>
import mui from '../../lib/js/mui.min.js';
export default {
  data() {
    return {
      getcount : 1,
    }
  },
  props:[ 'max' ],
  mounted(){
    mui('.mui-numbox').numbox();
  },
  methods: {
    countChanged(){

    }

  },
  components: {

  }
}
</script>

<style lang='scss' scoped>

</style>
