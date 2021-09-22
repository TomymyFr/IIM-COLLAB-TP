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
    path: "/axel",
    name: "Axel",
    component: () => import("../views/Axel.vue"),

  },

  {
    path: "/margaux",
    name: "Margaux",
    component: () => import("../views/Margaux.vue"),
  },
  {
    path: "/sachaL",
    name: "SachaL",
    component: () => import("../views/SachaL.vue"),
  },
  {
    path: "/ayoub",
    name: "Ayoub",
    component: () => import("../views/Ayoub.vue"),
  },
  {
    path: "/julien",
    name: "Julien",
    component: () => import("../views/Julien.vue"),
  },
  {
    path: "/nicolasdegarrigues",
    name: "NicolasDG",
    component: () => import("../views/NicolasDG.vue"),
  },
  {
    path: "/sachag",
    name: "SachaG",
    component: () => import("../views/SachaG.vue"),
  },
  {
    path: "/ahmed",
    name: "ahmed",
    component: () => import("../views/Ahmed.vue"),

  },
  {
    path: "/lucasC",
    name: "LucasC",
    component: () => import("../views/LucasC.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
