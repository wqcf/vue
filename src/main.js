// 1.导入jquery
import './css/index.scss';
import * as $ from 'jquery';
import Vue from 'vue';
import app from './App.vue';
import router from './router.js';
import './lib/css/icons-extra.css';
// import 'bootstrap/dist/css/bootstrap.css'
//导入mui的样式
import './lib/css/mui.css';
// import { Header, Swipe, SwipeItem, Button, Lazyload} from 'mint-ui';
// Vue.component(Header.name,Header)
// Vue.component(Swipe.name, Swipe);
// Vue.component(SwipeItem.name, SwipeItem);
// Vue.component(Button.name, Button);
// Vue.use(Lazyload)
import MintUI from 'mint-ui';
Vue.use(MintUI)
import 'mint-ui/lib/style.css'
import VueResorece from 'vue-resource';
Vue.use(VueResorece)
//设置路由请求的根路径
Vue.http.options.root = 'http://vue.studyit.io';
//全局设置post 
Vue.http.options.emulateJSON = true;

var vm = new Vue({
    el: '#app',
    data: {
    },
    render: c => c(app),
    router
})