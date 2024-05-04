import Vue from 'vue'
import Router from 'vue-router'
// import Login from '../pages/login/template.vue'
// import Create from '../pages/create/template.vue'
// import Edit from '../pages/edit/template.vue'
// import Register from '../pages/register/template.vue'
// import Index from '../pages/index/template.vue'
// import My from '../pages/my/template.vue'
// import User from '../pages/user/template.vue'
// import Detail from '../pages/detail/template.vue'

Vue.use(Router)

import store from '../store'
window.store = store



// const router = new Router({
//   routes: [
//     {
//       path: '/',
//       component: Index
//     },
//     {
//       path: '/login',
//       component: Login
//     },
//     {
//       path: '/register',
//       component: Register
//     },
//     {
//       path: '/detail/:blogId',
//       component: Detail
//     },
//     {
//       path: '/edit/:blogId',
//       component: Edit,
//       meta: { requiresAuth: true }
//     },
//     {
//       path: '/create',
//       component: Create,
//       meta: { requiresAuth: true }
//     },
//     {
//       path: '/user/:userId',
//       component: User
//     },
//     {
//       path: '/my',
//       component: My,
//       meta: { requiresAuth: true }
//     }
//   ]
// })


const router = new Router({
  routes: [
    {
      path: '/',
      component: () => import('../pages/Index/template.vue')
    },
    {
      path: '/login',
      component: () => import('../pages/Login/template.vue')
    },
    {
      path: '/detail/:blogId',
      component: () => import('../pages/Detail/template.vue')
    },
    {
      path: '/edit/:blogId',
      component: () => import('../pages/Edit/template.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/create',
      component: () => import('../pages/Create/template.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/user/:userId',
      component: () => import('../pages/User/template.vue')
    },
    {
      path: '/my',
      component: () => import('../pages/My/template.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/register',
      component: () => import('../pages/Register/template.vue')
    }
  ]
})





router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    store.dispatch('checkLogin').then(isLogin=>{
      if (!isLogin) {
        next({
          path: '/login',
          query: { redirect: to.fullPath }
        })
      } else {
        next()
      }    
    })
  } else {
    next() 
  }
})

export default router