module.exports = [
  {
    path: "/index",
    name: "Home",
    component: () => import("@/pages/Main/Home.vue"),
    meta: { module: "Home" }
  }
]
