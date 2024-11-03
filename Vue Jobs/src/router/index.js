import { createRouter, createWebHistory } from "vue-router";
import Home from '../Views/Home.vue';
import Jobs from "../Views/Jobspage.vue";
import Jobspage from "../Views/Jobspage.vue";
import notfound from "../Views/notfound.vue";
import jobview from  "../Views/jobview.vue";
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes:[
    {
        path:'/',
        name:'home',
        component: Home
    },
    {
        path:'/jobs',
        name:'jobs',
        component: Jobspage
    },
    {
        path:'/jobs/:id',
        name:'job',
        component: jobview
    },
    {
        path:'/:catchAll(.*)',
        name:'not-found',
        component: notfound
    }
]
});

export default router;