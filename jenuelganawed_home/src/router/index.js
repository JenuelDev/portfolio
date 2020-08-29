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
        component: () => import('./../views/Home/pages/overview/Overview.vue')
      },
      {
        path: 'portfolio',
        name: 'Portfolio',
        component: () => import('./../views/Home/pages/Portfolio/Portfolio.vue')
      },
      
    ]
  },
  {
    path: '/blog',
    name: 'Blog',
    component: () => import('./../views/blog/Blog.vue')
  },
  {
    path: '*',
    component: PageNotFound
  }
]

const router = new VueRouter({
  routes
});

// router.beforeResolve((to, from, next) => {
//   // If this isn't an initial page load.
//   if (to.name) {
//       // Start the route progress bar.
//       // NProgress.start()
//       console.log('to: ' + to + " from: "+from);
//   }
//   next()
// })

// router.afterEach((to, from) => {
//   // Complete the animation of the route progress bar.
//   // NProgress.done()
//   // console.log('Im done loading to: '+to + ' From: '+ from);
// })

export default router
