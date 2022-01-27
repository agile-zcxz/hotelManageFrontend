import {createRouter, createWebHistory} from 'vue-router'
import Login from '../views/Login.vue'
import Layout from "../Layout/Layout";
import HotelList from '../views/HotelList.vue'
import OrderList from "../views/OrderList";
import RoomList from "../views/RoomList";
import UserList from "../views/UserList";

const routes = [
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/',
        name: "Layout",
        component: Layout,
        redirect: '/hotelList',
        children: [
            {
                path: '/hotelList',
                name: 'HotelDetail',
                component: HotelList
            },
            {
                path: '/orderList',
                name: "OrderList",
                component: OrderList
            },
            {
                path: '/roomList',
                name: 'RoomList',
                component: RoomList
            },
            {
                path: '/userList',
                name: 'UserList',
                component: UserList
            }
        ]
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
