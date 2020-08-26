import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home/Home.vue'
import PageNotFound from './../components/PageNotFound/PageNotFound.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    component: Home,
    children: [
      {
        path: '',
        name: 'overview',
        component: () => import('./../views/pages/overview/Overview.vue')
      },
      {
        path: 'portfolio',
        name: 'Portfolio',
        component: () => import('./../views/pages/Portfolio/Portfolio.vue')
      },
      {
        path: 'blog',
        name: 'Blog',
        component: () => import('./../views/pages/blog/Blog.vue')
      }
    ]
  },
  {
    path: '*',
    component: PageNotFound
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
