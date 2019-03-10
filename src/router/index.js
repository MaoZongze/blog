import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
    {
        name: 'home',
        path: '/',
        component: ()=> import('@/pages/Home.vue')
    }
]

const router = new VueRouter({routes})

export default router

