import Vue from 'vue'
import VueRouter from 'vue-router'
import Page1 from "../views/Page1"
import Page2 from "../views/Page2"
import Page3 from "../views/Page3"

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Page1
        
    },
    {
        path: '/page2',
        name: 'Page2',
        component: Page2,
        
        meta:{
            layout: "s-layout"
        }
    },
    {
        path: '/page3',
        name: 'Page3',
        component: Page3,
        meta:{
            layout: "e-layout"
        }
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router