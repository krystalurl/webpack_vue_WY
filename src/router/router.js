

import Vue from 'vue';
import Router from 'vue-router';
import musicHall from '../musicHall/musicHall.vue';


Vue.use(Router)

const router = [
    {
        name: 'hoem',
        path: '/home',
        component: musicHall
    }
]

export default new Router({
    router: router
})


