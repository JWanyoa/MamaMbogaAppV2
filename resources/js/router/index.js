import {createWebHistory, createRouter } from "vue-router";

import Home from '../components/Home.vue';
import Login from '../components/Login.vue';
import Register from '../components/Register.vue';
import Dashboard from '../components/Dashboard.vue';

const routes = [
    {
    name: 'Home',
    path: '/',
    component: Home
    },
    {
    name: 'Register',
    path: '/register',
    component: Register
    },
    {
    name: 'login',
    path: '/login',
    component: Login
    },
    {
    name: 'Dashboard',
    path: '/dashboard',
    component: Dashboard
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;