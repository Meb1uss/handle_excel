import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/aligned",
      component: () => import("@/views/AlignedWord/index.vue"),
      name: "Aligned",
    },
    {
      path: "/entity",
      component: () => import("@/views/EntityWord/index.vue"),
      name: "Entity",
    },
    {
      path: "/",
      redirect: "/entity",
    },
  ],
});

export default router;
