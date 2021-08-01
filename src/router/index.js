import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
  },
  {
    path: '/radio',
    name: 'radio',
    component: function (){
      return import(/* webpackChunkName: "about" */ '../views/radio.vue')
    }
    
  },
  {
    path: '/age',
    name: 'age',
    component: function (){
      return import(/* webpackChunkName: "about" */ '../views/age.vue')
    }
    
  }
  
]

const router = new VueRouter({
  routes
})

export default router
