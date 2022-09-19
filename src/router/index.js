import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView/HomeView.vue";
import DemoVuetify from "../views/DemoVuetify.vue";
import ComponentButton from "../views/Components/ComponentButton.vue";
import ComponentBadge from "../views/Components/ComponentBadge.vue";
import ComponentCard from "../views/Components/ComponentCard.vue";
import BasicTable from "../views/Tables/BasicTable";
import DataTable from "../views/Tables/DataTable";
import Login from "../views/Pages/Login";
import Register from "../views/Pages/Register";
import ParentComponent from "../components/ParentComponent.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/demo",
    name: "demo",
    component: DemoVuetify,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/but",
    name: "but",
    component: ComponentButton,
    children: [{ path: "buttonhome", name: "buttonhome", component: HomeView }],
  },
  {
    path: "/component",
    component: ParentComponent,
    children: [
      {
        path: "button",
        name: "button",
        component: ComponentButton,
      },
      {
        path: "badge",
        name: "badge",
        component: ComponentBadge,
      },
      {
        path: "card",
        name: "card",
        component: ComponentCard,
      },
    ],
  },
  {
    path: "/table",
    component: ParentComponent,
    children: [
      {
        path: "basic",
        name: "basic",
        component: BasicTable,
      },
      {
        path: "data",
        name: "data",
        component: DataTable,
      },
    ],
  },
  {
    path: "/page",
    component: ParentComponent,
    children: [
      {
        path: "login",
        name: "login",
        component: Login,
      },
      {
        path: "register",
        name: "register",
        component: Register,
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
