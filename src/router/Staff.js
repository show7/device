const router = [
  {
    path: "/queryStaff",
    name: "query_staff",
    component: () => import("@/pages/Main/staff/queryStaff.vue"),
    meta: {role_type: 1}
  },
  {
    path: "/staffInfo",
    name: "staff_info",
    component: () => import("@/pages/Main/staff/staffInfo.vue"),
    meta: {role_type: 1}
  },
  {
    path: "/createdStaff",
    name: "created_staff",
    component: () => import("@/pages/Main/staff/createdStaff.vue"),
    meta: {role_type: 1}
  }

]
// .filter(item => )

module.exports = router
