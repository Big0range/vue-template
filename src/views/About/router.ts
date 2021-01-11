import { RouteRecordRaw } from "vue-router";
const router: RouteRecordRaw = {
  path: "/about",
  name: "About",
  component: () => import("./About.vue")
};
export default router;
