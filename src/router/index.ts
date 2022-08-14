import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import EntryView from "../views/EntryView.vue";
import WardrobeView from "../views/WardrobeView.vue";
import PageNotFoundView from "../views/PageNotFoundView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/entry",
      name: "entry",
      component: EntryView,
    },
    {
      path: "/wardrobe",
      name: "wardrobe",
      component: WardrobeView,
    },
    {
      path: "/:pathMatch(.*)*",
      component: PageNotFoundView,
    },
  ],
});

export default router;
