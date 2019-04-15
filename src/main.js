// 1.导入jquery
import './css/index.scss';
import * as $ from 'jquery';
import Vue from 'vue';
import app from './App.vue';
import router from './router.js';
// import 'bootstrap/dist/css/bootstrap.css'
//导入mui的样式
import './lib/css/mui.css';
import { Header} from 'mint-ui';
Vue.component(Header.name,Header)
var vm = new Vue({
    el: '#app',
    data: {
    },
    render: c => c(app),
    router
})