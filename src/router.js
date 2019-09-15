import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('@/components/Report/Create.vue')
        },
        {
            path: '/all',
            name: 'all_report',
            component: () => import('@/components/Report/All.vue')
        }
    ]
})