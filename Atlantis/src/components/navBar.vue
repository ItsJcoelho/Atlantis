<template>
    
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="#">ATLANTIS</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
            <li class="nav-item">
                <router-link :to="{ name: 'home' }" :class="{ 'nav-link': true }">Home</router-link>
            </li>
            <li class="nav-item" v-if="userLogged == 0">
                <router-link :to="{ name: 'login' }" :class="{ 'nav-link': true }">Login</router-link>
            </li>
            <li class="nav-item" v-if="userLogged == 0">
                <router-link :to="{ name: 'signup' }" :class="{ 'nav-link': true }">Sign Up</router-link>
            </li>
            <li class="nav-item" v-if="userLogged != 0">
                <a class="nav-link" v-on:click="logOut()" >Log Out</a>
            </li>
            <li class="nav-item">
                <router-link :to="{ name: 'ranking' }" :class="{ 'nav-link': true }">Ranking</router-link>
            </li>
            <li class="nav-item" v-if="userType == 'docente'">
                <router-link :to="{ name: 'createEvent' }" :class="{ 'nav-link': true }">Criar Evento</router-link>
            </li>
            <li class="nav-item">
                <router-link :to="{ name: 'stats' }" :class="{ 'nav-link': true }">Estatística</router-link>
            </li>
            <li class="nav-item" v-if="userLogged != 0">
                <router-link :to="{ name: 'userPage', params: { id: userLogged } }" :class="{ 'nav-link': true }">Página Utilizador</router-link>
            </li>
            <li class="nav-item" v-if="userType == 'admin'">
                <router-link :to="{ name: 'backOffice' }" :class="{ 'nav-link': true }">BackOffice</router-link>
            </li>
            </ul>
        </div>
        </nav>
    
</template>
<script>
export default {
    data: function() {
    return {
        userLogged: 0,
        userType: ""
    };
  },
  created() {
    this.userLogged = this.$store.getters.getUserId
    this.userType = this.$store.getters.GetUserType
  },
  methods: {
    logOut() {
      this.userLogged = 0
      this.userType = ""
      this.$store.dispatch("log_out")
      this.$router.push({name: "login"})
    }
  },
}
</script>