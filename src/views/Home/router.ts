import { RouteRecordRaw } from "vue-router";
const router: RouteRecordRaw = {
  path: "/",
  name: "Home",
  component: () => import("./Home.vue")
};
export default router;
