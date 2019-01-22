<template>
  <div id="app">
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
      <li class="nav-item">
        <router-link :to="{ name: 'createEvent' }" :class="{ 'nav-link': true }">Criar Evento</router-link>
      </li>
      <li class="nav-item">
        <router-link :to="{ name: 'stats' }" :class="{ 'nav-link': true }">Estatística</router-link>
      </li>
      <li class="nav-item">
        <router-link :to="{ name: 'userPage', params: { id: userLogged } }" :class="{ 'nav-link': true }">Página Utilizador</router-link>
      </li>
      <li class="nav-item">
        <router-link :to="{ name: 'backOffice' }" :class="{ 'nav-link': true }">BackOffice</router-link>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
    </ul>
  </div>
</nav>
    <br/>
    <transition name="router-anim" enter-active-class="animated zoomIn">
      <router-view/>
    </transition>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
        userLogged: 0,
    };
  },
  created() {
    this.userLogged = this.$store.getters.getUserId
  },
  methods: {
    logOut() {
      localStorage.setItem('userLogged', 0)
      this.userLogged = 0
      this.$router.push({name: "login"})
    }
  },
}
</script>
<style>
@import "https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.css";

#app {
  font-family: "Franklin Gothic", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  
}
#nav {
  padding: 30px;
  background-color:#024059;
}

#nav a {
  font-weight: bold;
  color: #024059;
}

#nav a.router-link-exact-active {
  color: #6099A6;
}
body{
  background-color:#EBF2F1;
}
h1{
  color: #025E73;
}
.card{
  text-align: center;
}
label{
  color: #025E73;
  font-size: 20px;
}
canvas {
    padding-left: 0;
    padding-right: 0;
    margin-left: auto;
    margin-right: auto;
    display: block;
    width: 800px;
}
.charts {
  background: #e6f2ff;
}
li {
  list-style-type: none;
}


</style>


