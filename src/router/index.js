import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue"),
  },
  {
    path: "/antonio",
    name: "Antonio",
    component: () => import("../views/Antonio.vue"),
  },
  {
    path: "/nicolasdegarrigues",
    name: "NicolasDG",
    component: () => import("../views/NicolasDG.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
