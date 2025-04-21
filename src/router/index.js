import { createRouter, createWebHistory } from "vue-router";
import Home from '@/pages/Home.vue'
import About from '@/pages/About.vue'
import Projects from '@/pages/Project.vue'
import Contact from "@/pages/Contact.vue";


const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/About',
        name: 'About',
        component: About
    },
    {
        path: '/Projects',
        name: 'Projects',
        component: Projects
    },
    {
        path: '/Contact',
        name: 'Contact',
        component: Contact
    },
    
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router