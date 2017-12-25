import  Vue from 'vue';
import appVue from './app.vue';


new Vue({

    el: "#main",
    template: "",
    render( str ){
        return str(appVue);
    }
 	
 	
 	
})