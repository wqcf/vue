<template>
  <div>
    <comment-box :id="this.id"></comment-box>
  </div>
</template>

<script>
import comment from "../subcomponents/comment.vue";

export default {
  data() {
    return {
      id: this.$route.params.id,
      newsinfo:{}
    }
  },
  methods: {

  },
  components: {
   'comment-box': comment
  }
}
</script>

<style lang='scss' scoped>

</style>
