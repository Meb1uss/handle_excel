import { createApp } from "vue";

import App from "@/App.vue";
// 引入 router
import router from "@/router/index";

import "@/style/reset.scss";

const app = createApp(App);
app.use(router);
app.mount("#app");
