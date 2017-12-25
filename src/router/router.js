

import Vue from 'vue';
import Router from 'vue-router';
import musicHall from '../musicHall/musicHall.vue';


export default {

    routes: [
        {
            name: 'musicHall',
            path: '/musicHall', 
            component: musicHall
        }
    ]
    
}


