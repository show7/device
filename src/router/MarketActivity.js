module.exports = [
  {
    path: "/createdMarketAct",
    name: "created_marketAct",
    component: () => import("@/pages/Main/Important/createdMarketAct.vue"),
    meta: {role_type: 1}
  },
  {
    path: "/marketActInfo",
    name: "market_act_info",
    component: () => import("@/pages/Main/Important/marketActInfo.vue"),
    meta: {role_type: 1}
  },
  {
    path: "/marketActivity",
    name: "market_ctivity",
    component: () => import("@/pages/Main/Important/marketActivity.vue"),
    meta: {role_type: 1}
  },
  {
    path: "/marketActResult",
    name: "market_act_result",
    component: () => import("@/pages/Main/Important/marketActResult.vue"),
    meta: {role_type: 1}
  },
  {
    path: "/marketActResult",
    name: "market_act_result",
    component: () => import("@/pages/Main/Ordinary/marketActResult.vue"),
    meta: {role_type: 3}
  },
  {
    path: "/marketActResult",
    name: "market_act_result",
    component: () => import("@/pages/Main/Ordinary/marketActResult.vue"),
    meta: {role_type: 3}
  },
  {
    path: "/marketActResult",
    name: "market_act_result",
    component: () => import("@/pages/Main/Ordinary/marketActResult.vue"),
    meta: {role_type: 3}
  },
  {
    path: "/marketActResult",
    name: "market_act_result",
    component: () => import("@/pages/Main/Ordinary/marketActResult.vue"),
    meta: {role_type: 3}
  }
]
