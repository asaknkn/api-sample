import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import MiniApps from '../views/MiniApps.vue';
import WebPayment from '../views/WebPayment.vue';
Vue.use(VueRouter);
export var routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/webpayment',
        name: 'WebPayment',
        component: WebPayment
        // component: () => import(/* webpackChunkName: "about" */ '../views/WebPayment.vue')
    },
    {
        path: '/about',
        name: 'About',
        component: MiniApps
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        // component: () => import(/* webpackChunkName: "about" */ '../views/MiniApps.vue')
    }
];
var router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: routes
});
export default router;
//# sourceMappingURL=index.js.map