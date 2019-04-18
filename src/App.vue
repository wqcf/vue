<template>
  <div class="app-container" >
    <!-- 顶部Header区域 -->
    <mt-header fixed title="小七程序员-VUE"></mt-header>
    <!-- 中间路由router-view -->
		<transition>
			<router-view></router-view>
		</transition>
    <!-- 顶部Header区域 -->
    <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item" to="/member">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item" to="/shopcar">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">0</span></span>  
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item" to="/serach">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  methods: {

  },
  components: {

  }
}
</script>

<style <style lang="scss" scoped>
.app-container{
		padding-top: 40px;
		overflow-x: hidden;
		.mui-bar{
			-webkit-box-shadow:unset;
			box-shadow:0 0 1px rgba(0, 0, 0, .4);
		}
}

.v-enter{
	opacity:0;
	transform: translatex(100%);
}
.v-leave-to{
	opacity:0;
	transform: translatex(-100%);
	position: absolute;
}
.v-enter-active,
.v-leave-active {
	transition: all 0.5s ease;
}


</style>
