import VueRouter from 'vue-router'

import HomeComponent from "./components/HomeComponent";
import LoginComponent from "./components/Authorisation/LoginComponent";
import RegisterComponent from "./components/Authorisation/RegisterComponent";
import ArticleComponent from "./components/ArticleComponent";
import CreateArticle from "./components/CreateArticle";

export default new VueRouter({
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeComponent
        },
        {
            path: '/login',
            name: 'login',
            component: LoginComponent
        },
        {
            path: '/register',
            name: 'register',
            component: RegisterComponent
        },
        {
            path: '/article',
            name: 'article',
            component: ArticleComponent
        },
        {
            path: '/create-article',
            name: 'create-article',
            component: CreateArticle
        },
    ],
    mode: 'history'
});
