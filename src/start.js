

import  Vue from 'vue';
import VueRouter from 'vue-router';
import appVue from './app.vue';
import Router from './router/router.js';

Vue.use(VueRouter);

new Vue({

    el: "#main",
    
    render: h => h(appVue),
 	
    router: new VueRouter(Router)
 	
})