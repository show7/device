const router = [
  {
    path: "/createdMarketAct",
    name: "created_marketAct",
    component: () => import("@/pages/Main/Important/MarketActivity/createdMarketAct.vue"),
    meta: {role_type: 1}
  },
  {
    path: "/marketActInfo",
    name: "market_act_info",
    component: () => import("@/pages/Main/Important/MarketActivity/marketActInfo.vue"),
    meta: {role_type: 1}
  },
  {
    path: "/marketActivity",
    name: "market_ctivity",
    component: () => import("@/pages/Main/Important/MarketActivity/marketActivity.vue"),
    meta: {role_type: 1}
  },
  {
    path: "/marketActResult",
    name: "market_act_result",
    component: () => import("@/pages/Main/Important/MarketActivity/marketActResult.vue"),
    meta: {role_type: 1}
  },
  {
    path: "/marketActivitys",
    name: "market_activitys",
    component: () => import("@/pages/Main/Important/MarketActivity/q.vue"),
    meta: {role_type: 1}
  }
]
// .filter(item => )

module.exports = router
