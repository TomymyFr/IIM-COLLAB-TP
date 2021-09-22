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
    path: "/hugo",
    name: "Hugo",
    component: () => import("../views/Hugo.vue"),
  },
  {
    path: "/louna",
    name: "Louna",
    component: () => import("../views/Louna.vue"),
  },
  {
    path: "/malo",
    name: "Malo",
    component: () => import("../views/Malo.vue"),
  },
  {
    path: "/louis",
    name: "Louis",
    component: () => import("../views/Louis.vue"),
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
    path: "/tomb",
    name: "Tomb",
    component: () => import("../views/Tomb.vue"),
  },
  {
    path: "/nico",
    name: "Nico",
    component: () => import("../views/Nico.vue"),
  },
  {
    path: "/warsame",
    name: "Warsame",
    component: () => import("../views/Warsame.vue"),
  },
  {
    path: "/toml",
    name: "TomL",
    component: () => import("../views/Toml.vue"),
  },
  {
    path: "/claire",
    name: "Claire",
    component: () => import("../views/Claire.vue"),
  },
  {
    path: "/mathilde",
    name: "Mathilde",
    component: () => import("../views/Mathilde.vue"),
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
  {
    path: "/florent",
    name: "Florent",
    component: () => import("../views/Florent.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
