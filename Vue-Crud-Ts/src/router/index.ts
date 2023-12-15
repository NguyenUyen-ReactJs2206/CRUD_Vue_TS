import { createRouter, createWebHashHistory } from "vue-router";
import About from "../pages/About.vue";
import Home from "../pages/Home.vue";

const routes = [
  { path: "/", name: "home", component: Home },
  { path: "/about", name: "about", component: About },
];
const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHashHistory(),
  routes,
});

export default router;
