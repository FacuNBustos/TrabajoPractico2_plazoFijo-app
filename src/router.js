import { createRouter, createWebHistory } from "vue-router";
import HomeView from './views/HomeView.vue';
import React from './components/HomeView/Review/There is nothing here/That there is nothing!/Top secret/React.vue';

const routes = [
    { 
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/r',
        name: 'react',
        component: React
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;