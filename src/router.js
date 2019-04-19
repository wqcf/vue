import VueRouter from 'vue-router';
import Vue from 'vue';
import app from './App.vue';
import home from './components/tabbar/HomeContainer.vue';
import member from './components/tabbar/MemberContainer.vue';
import search from './components/tabbar/SearchContainer.vue';
import shopcar from './components/tabbar/ShopcarContainer.vue';
import news from './components/news/newsList.vue';
import info from './components/news/newsinfo.vue';
import photo from './components/photo/photolist.vue';
import photoinfo from './components/photo/photoinfo.vue';

Vue.use(VueRouter)

var router = new VueRouter({
    routes: [//配置路由规则
        { path:'/home', component:home },
        { path:'/member', component:member },
        { path:'/search', component:search },
        { path:'/shopcar', component:shopcar },
        { path:'/home/newslist', component:news },
        { path:'/home/info/:id', component:info },
        { path:'/home/photolist', component:photo },
        { path:'/home/photoinfo/:id', component:photoinfo },

        // { path:'/home/newslist/info', component:info },
    ],
    linkActiveClass: 'mui-active' //覆盖默认的路由高亮的类
})
export default router;