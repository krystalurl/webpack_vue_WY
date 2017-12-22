import  Vue from 'vue';
import appVue from './Vuecomponent/app.vue';


new Vue({

    el: "#main",
    template: "",
    render( str ){
        return str(appVue);
    }
 
})