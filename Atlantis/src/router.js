import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Login from "./views/Login.vue"
import SignUp from "./views/SignUp.vue"
import Ranking from "./views/Ranking.vue"
import CreateEvent from "./views/CreateEvent.vue"
import InfoEvents from "./views/InfoEvents.vue"
import Stats from "./views/Stats.vue"
import UserPage from "./views/UserPage.vue"
import BackOffice from "./views/BackOffice.vue"
import MyEvents from "./views/MyEvents.vue"
import AreaDocente from "./views/AreaDocente.vue"
import Notifications from "./views/Notifications.vue"

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
      path: "/stats",
      name: "stats",
      component: Stats
    },
    {
      path: "/createEvent",
      name: "createEvent",
      component: CreateEvent
    },
    {
      path: "/infoEvents/:_id",
      name: "infoEvents",
      component: InfoEvents
    },
    {
      path: "/userPage/:_id",
      name: "userPage",
      component: UserPage,

    },
    {
      path: "/backOffice",
      name: "backOffice",
      component: BackOffice
    },
    {
      path: "/myEvents/:_id",
      name: "myEvents-user",
      component: MyEvents
    },
    {
      path: "/areaDocente/:_id",
      name: "areaDocente-user",
      component: AreaDocente
    },
    {
      path: "/notificações/:_id",
      name: "notificacoes-user",
      component: Notifications
    }
  ]
});
