import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/css/reset.css";
const app = createApp(App);
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const win: any = window; //
if (process.env.NODE_ENV === "development") {
  if ("__VUE_DEVTOOLS_GLOBAL_HOOK__" in win) {
    // 这里__VUE_DEVTOOLS_GLOBAL_HOOK__.Vue赋值一个createApp实例
    win.__VUE_DEVTOOLS_GLOBAL_HOOK__.Vue = app;
  }
}

app
  .use(store)
  .use(router)
  .mount("#app");
