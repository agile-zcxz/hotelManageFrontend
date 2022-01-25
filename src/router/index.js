import {createRouter, createWebHistory} from 'vue-router'
import Login from '../views/Login.vue'
import Layout from "../Layout/Layout";

const routes = [
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/',
        name: "Layout",
        component: Layout
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
