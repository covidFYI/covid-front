import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/state",
    name: "State",
    component: () =>
      import("../views/State.vue")
  },
  {
    path: "/record/:state",
    name: "Record",
    component: () =>
      import("../views/Record.vue")
  },
  {
    path: "/contact",
    name: "Contact",
    component: () =>
      import("../views/Contact.vue")
  },
  {
    path: "/*",
    name: "NotFound",
    component: () =>
      import("../views/NotFound.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
