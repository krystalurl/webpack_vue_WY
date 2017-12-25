import  Vue from 'vue';
import appVue from './app.vue';


new Vue({

    el: "#main",
    template: "",
    mounted(){
    	var FontSize = window.innerWidth / (1080/100);
        var html = document.querySelector('html');
        html.style.fontSize = FontSize + 'px';
    },
    render( str ){
        return str(appVue);
    },
 	
 	
 	
})