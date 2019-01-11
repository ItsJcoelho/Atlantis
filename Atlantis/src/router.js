import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Login from "./views/Login.vue"
import SignUp from "./views/SignUp.vue"
import Ranking from "./views/Ranking.vue"
import CreateEvent from "./views/CreateEvent.vue"

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/signup",
      name: "signup",
      component: SignUp
    },
    {
      path: "/ranking",
      name: "ranking",
      component: Ranking
    },
    {
      path: "/createEvent",
      name: "createEvent",
      component: CreateEvent
    }
  ]
});
