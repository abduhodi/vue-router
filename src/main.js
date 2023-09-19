import "bootstrap/dist/css/bootstrap.min.css";

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import Icons from "@/assets/Icons/Icons.vue";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.component("icon", Icons);

app.mount("#app");
