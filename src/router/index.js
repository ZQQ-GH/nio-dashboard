import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Home from '@/pages/Home'


export default new VueRouter({
    routes: [
        {
            path: '/',
            component: Home,
            meta: {
                title: 'Home',
              }
        },

    ]
})
