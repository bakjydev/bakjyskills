import {createRouter, createWebHistory} from "vue-router";

import Home from "@/views/Home.vue";
import MentionsLegales from "@/views/MentionsLegales";
import ReglementInterieur from "../views/ReglementInterieur";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      title: 'Accueil'
    }
  },
  {
    path: "/MentionsLegales",
    name: "MentionsLegales",
    component: MentionsLegales,
    meta: {
      title: 'Mentions Légales'
    }
  },
  {
    path: "/ReglementInterieur",
    name: "ReglementInterieur",
    component: ReglementInterieur,
    meta: {
      title: 'Reglement Interieur'
    }
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    // always scroll to top
    return { top: 0 }
  },
});

router.afterEach((to, from) => {
  console.log(from, to);
  document.title = to.meta.title;
})

export default router;