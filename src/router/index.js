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
  {
    path: '/',
    name: 'event-list',
    component:  () => import ('../components/EventList.vue')
  },
  {
    path: '/event/:id',
    name: 'event-show',
    component:() => import ('../views/EventShow.vue'),
    props: true
  },
  {
    path: '/Dashboard',
    name: 'Dashboard',
    component:() => import ('../components/safarayaneh/Dashboard.vue'),
    props: true
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
