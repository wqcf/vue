<template>
  <div>
      <ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media" v-for="d in data" :key="d.id">
					<router-link :to="'/home/info/' + d.id" >
						<img class="mui-media-object mui-pull-left" src="../../images/shuijiao.jpg">
						<div class="mui-media-body">
                            <h1>{{d.title}}</h1>
							<p class='mui-ellipsis'>
                                <span>{{d.content}}</span>
                                <span>点击 : 0次</span>
                            </p>
						</div>
					</router-link>
				</li>
				<!-- <li class="mui-table-view-cell mui-media">
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
				</li>-->
			</ul> 
  </div>
</template>

<script>
export default {
  data() {
    return {
        data:[
        {
            id:13,
            title: "幸福",
            content:"发表事件:2012-12-12 12:12:12",
        },{
            id:15,
            title: "幸福",
            content:"发表事件:2012-12-12 12:12:12",
        },{
            id:16,
            title: "幸福",
            content:"发表事件:2012-12-12 12:12:12",
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