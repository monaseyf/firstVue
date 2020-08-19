import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
// import User from '../views/User.vue '

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/login',
    name:'login',
    component: () => import ('../views/Login.vue')
  },
  {
    path: '/user/:username',
    name:'user',
    component: () => import ('../views/User.vue'),
    props:true
  },
  {
    path: '/Signup',
    name:'Signup',
    component: () => import ('../views/Signup.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
