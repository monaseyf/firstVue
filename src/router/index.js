import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
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
    path: '/event/:id',
    name: 'event-show',
    component:() => import ('../views/EventShow.vue'),
    props: true
  },
  {
    path: '/test',
    name: 'test',
    component:() => import ('../views/test.vue'),
    props: true
  },
  {
    path: '/Stock',
    name: 'Stock',
    component:() => import ('../components/Stocks/Stocks.vue'),
    props: true
  },
  {
    path: '/Portfolio',
    name: 'Portfolio',
    component:() => import ('../components/portfolio/Portfolio.vue'),
    props: true
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
