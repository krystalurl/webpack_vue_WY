

import  Vue from 'vue';
import VueRouter from 'vue-router';
import appVue from './app.vue';
import Router from './router/router.js';


new Vue({

    el: "#main",
    template: "",
    render( str ){
        return str(appVue);
    },
 	
    router: new VueRouter(Router)
 	
})