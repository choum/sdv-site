import Vue from 'vue'
import VueRouter from "vue-router";
import HelloWorld from "./components/HelloWorld.vue"
Vue.use(VueRouter)


const router = new VueRouter({
  mode: 'history',
  routes: [
    {
    path: '/category/:category',
    component: HelloWorld,
    name: 'category'
    },
    {
    path: '/',
    component: HelloWorld,
    },
    {
    path: '/checkout',
    component: HelloWorld,
    name: 'checkout',
    },
]
})

export default router;
