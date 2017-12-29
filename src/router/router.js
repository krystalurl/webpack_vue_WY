

import Vue from 'vue';
import Router from 'vue-router';
import musicHall from '../musicHall/musicHall.vue';


export default {

    routes: [
        {
            path: '/',
            redirect: '/musicHall', 
        },
        {
            name: 'musicHall',
            path: '/musicHall', 
            component: musicHall
        }
    ]
    
}


