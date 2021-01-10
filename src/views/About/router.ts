import { RouteRecordRaw } from "vue-router";
const router: RouteRecordRaw = {
  path: "/",
  name: "About",
  component: () => import("./About.vue")
};
export default router;
