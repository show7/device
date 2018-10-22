import Vue from "vue"
import Router from "vue-router"
import store from "@/store"
Vue.use(Router)
window.store = store
const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/sign_in",
      name: "SignIn",
      component: () => import("@/pages/SignIn.vue")
    },
    {
      path: "/main",
      name: "Main",
      meta: { requiresAuth: true },
      component: () => import("@/pages/Main.vue"),
      redirect: { name: "Home" },
      children: [].concat(
        require("./Home"),
        require("./MarketActivity"),
        require("./BusinessOpportunityList"),
        require("./Staff")

      )
    },
    {
      path: "*",
      redirect: { name: "SignIn" }
    }
  ]
})
// router.beforeEach((to, from, next) => {
//   if (to.name == "SignIn") return next()
//   if (storage.get("state")) {
//     return next()
//   } else {
//     return next("/sign_in")
//   }
// })

export default router
