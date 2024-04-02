import { route } from 'quasar/wrappers'
import { createRouter, createMemoryHistory, createWebHistory, createWebHashHistory } from 'vue-router'
import routes from './routes'

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */

export default route(function (/* { store, ssrContext } */) {
  const createHistory = process.env.SERVER
    ? createMemoryHistory
    : (process.env.VUE_ROUTER_MODE === 'history' ? createWebHistory : createWebHashHistory)

  const Router = createRouter({
    scrollBehavior: () => ({ left: 0, top: 0 }),
    routes,

    // Leave this as is and make changes in quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    history: createHistory(process.env.VUE_ROUTER_BASE)
  })
  Router.beforeEach((to, from, next) => {
    const roleId = localStorage.getItem("roleId");
    if (to.meta.requiredUser) {
      if (localStorage.getItem("roleId")) {
        next();
      } else {
        next("/login");
      }
    } else if (to.meta.requiredAdmin) {
      if (localStorage.getItem("roleId")) {
        next();
      } else {
        next("/login");
      }
    // } else if (to.meta.requireCustomer) {
    //   if (localStorage.getItem("roleId")) {
    //     next();
    //   } else {
    //     next("/login");
    //   }
    // } else if (to.meta.requireKaunter) {
    //   if (localStorage.getItem("roleId")) {
    //     next();
    //   } else {
    //     next("/login");
    //   }
    // } else if (to.meta.requireKewangan) {
    //   if (localStorage.getItem("roleId")) {
    //     next();
    //   } else {
    //     next("/login");
    //   }
    // } else if (to.meta.requireAtasan) {
    //   if (localStorage.getItem("roleId")) {
    //     next();
    //   } else {
    //     next("/login");
    //   }
    } else {
      if (
        !!localStorage.getItem("roleId") &&
        (to.path === "/login" || to.path === "/login")
      ) {
        next("/logout");
        return;
      } else if (to.path == "/") {
        next("/login");
        return;
      }
      // alert('sini')
      next();
      return;
    }
  });

  return Router
})
