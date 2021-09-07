import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  { name: "AboutIA", path: "/about-ia", component: () => import("@/views/AboutIA") },
  { name: "AboutUs", path: "/about-us", component: () => import("@/views/AboutUs") },
  { path: "/:pathMatch(.*)*", component: () => import("@/views/PageNotFound") },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
