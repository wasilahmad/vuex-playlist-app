import Vue from 'vue'
import VueRouter from 'vue-router'
import Songs from '../views/Songs.vue'
import Favourite from '../views/Favourite.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Songs',
    component: Songs
  },
  {
    path: '/favourite',
    name: 'Favourite',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Favourite
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
