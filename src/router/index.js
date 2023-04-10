import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Home from '@/pages/Home'
import vuextest from '@/components/vuextest.vue'

export default new VueRouter({
    routes: [
        {
            path: '/',
            component: Home,
            meta: {
                title: 'Home',
              }
        },
        {
            path: '/test',
            component: vuextest,
            meta: {
                title: 'vuextest',
              }
        },

    ]
})
