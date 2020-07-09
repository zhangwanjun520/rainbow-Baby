import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const routerPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error=> error)
}
const routes = [
  {
    path: '/home',
    name: 'home',
    component: () => import('../pages/home.vue')
  },
  {
    path: '/aboutUs',
    name: 'about',
    component: () => import('../pages/aboutUs.vue')
  },
  {
    path: '/booking',
    name: 'booking',
    component: () => import('../pages/booking.vue')
  },
  {
    path: '/explore',
    name: 'explore',
    component: () => import('../pages/explore.vue')
  },
  {
    path: '/joinUs',
    name: 'joinUs',
    component: () => import('../pages/joinUs.vue')
  },
  {
    path: '/lessonIntroduce',
    name: 'lessonIntroduce',
    component: () => import('../pages/lessonIntroduce.vue')
  },
  {
    path: '/newCenter',
    name: 'newCenter',
    component: () => import('../pages/newCenter.vue')
  },
  {
    path: '/newCenter',
    name: 'newCenter',
    component: () => import('../pages/newCenter.vue')
  },
  {
    path: '/provicy',
    name: 'provicyPolicy',
    component: () => import('../pages/provicyPolicy.vue')
  },
  {
    path: '/:id',
    name: 'newsDetail',
    component: () => import(/*webpackChunkName:'position'*/'../pages/newsDetail'),

  },
  {
    // 兜底路由，匹配不到的路由跳转到首页
    path: '*',
    redirect: '/home',
}



]

const router = new VueRouter({
  routes
})
// router.beforeEach((to, from, next) => {
// // console.log(router)

//   if (to.matched.some(r => r.meta.requireAuth)) {  // 判断该路由是否需要登录权限
//     // if (store.state.token && store.state.userInfo) {  // 通过vuex state获取当前的token是否存在
//     //   next();
//     // }
//     if (localStorage.getItem('homepageToken')&& localStorage.getItem('homepageToken') != null  && localStorage.getItem('homeUserInfo') && localStorage.getItem('homeUserInfo') ) {  // 通过vuex state获取当前的token是否存在
//       next();
//     }
//     else {
//       next({
//         path: '/login',
//         query: {redirect: to.fullPath}  // 将跳转的路由path作为参数，登录成功后跳转到该路由
//       })
//     }
//   }
//   else {
//     next();
//   }
// });
export default router
