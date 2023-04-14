import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Home from '@/pages/Home'
import vuextest from '@/components/vuextest.vue'
import Detail from '@/pages/Detail'
export default new VueRouter({
    routes: [
        {
            path: '/',
            component: Home,
        },
        {
            path: '/test',
            component: vuextest,

        },
        {
            path: '/Detail',
            component: Detail,
            name:'Detail',
        },

    ]
})
