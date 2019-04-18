<template>
  <div>
      <ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media">
					<router-link to="/home/newslist/info">
						<img class="mui-media-object mui-pull-left" src="../../images/shuijiao.jpg">
						<div class="mui-media-body">
                            <h1>幸福</h1>
							<router-link to="/home/newslist/info" class='mui-ellipsis'>
                                <span>发表事件:2012-12-12 12:12:12</span>
                                <span>点击 : 0次</span>
                            </router-link>
						</div>
					</router-link>
				</li>
				<li class="mui-table-view-cell mui-media">
					<a href="javascript:;">
						<img class="mui-media-object mui-pull-left" src="../../images/muwu.jpg">
						<div class="mui-media-body">
                            <h1>幸福</h1>
							<router-link to="" class='mui-ellipsis'>
                                <span>发表事件:2012-12-12 12:12:12</span>
                                <span>点击 : 0次</span>
                            </router-link>
						</div>
					</a>
				</li>
				<li class="mui-table-view-cell mui-media">
					<a href="javascript:;">
						<img class="mui-media-object mui-pull-left" src="../../images/cbd.jpg">
						<div class="mui-media-body">
                            <h1>CBD</h1>
							<router-link to="" class='mui-ellipsis'>
                                <span>发表事件:2012-12-12 12:12:12</span>
                                <span>点击 : 0次</span>
                            </router-link>
						</div>
					</a>
				</li>
			</ul>
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

<style lang='scss' scoped>
.mui-table-view{
    h1{
        font-size: 14px;
    }
    .mui-ellipsis{
        display: flex;
        justify-content: space-between;
        font-size: 12px;
        color:#226aff;
    }
}
</style>