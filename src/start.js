

import  Vue from 'vue';
import VueRouter from 'vue-router';
import appVue from './app.vue';
import Router from './router/router.js';

Vue.use(VueRouter);

new Vue({

    el: "#main",
    template: "",
    mounted(){
    	var FontSize = window.innerWidth / (1080/100);
        var html = document.querySelector('html');
        html.style.fontSize = FontSize + 'px';
    },
    render: h => h(appVue),
    router: new VueRouter(Router)
})