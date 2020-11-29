import Vue from 'vue'
import VueRouter from 'vue-router'
import MainContent from './components/pages/MainContent.vue'
import Blogform from './components/pages/Blogform.vue'
import BlogList from "./components/pages/BlogList"

Vue.use(VueRouter)

const routes = [
    {
        path:'/',
        name:'/MainContent',
        component:MainContent,
    },
    {
        path:'/blog-form',
        name:'/Blogfrom',
        component:Blogform,  
    },
    {
        path:'/blog-list',
        name:'/blogList',
        component:BlogList,
    }

];
export const router = new VueRouter({
    mode: "history",
    routes
})