import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import Home from "./components/Home.vue";
import Contact from "./components/Contact.vue";
import Laravel from "./components/Laravel.vue";

Vue.config.productionTip = false;

Vue.use(VueRouter);

const routes = [
  { path: "/home", component: Home },
  { path: "/contact", component: Contact },
  { path: "/laravel", component: Laravel },
];

const router = new VueRouter({
  mode: "history",
  routes // short for `routes: routes`
});

new Vue({
  router,
  render: (h) => h(App)
}).$mount("#app");
