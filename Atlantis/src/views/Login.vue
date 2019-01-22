<template>
  <div class="login">
    <!-- NAVBAR -->
    <navBar/>
    <h1>Login Page</h1>
    <div class="container">
        <br>
        <div class="row justify-content-center">
            <div class="col-4">
                <label for="inputEmail">Email address</label>
                <input type="email" class="form-control" id="inputEmail" aria-describedby="emailHelp" placeholder="Enter email" v-model="email">
            </div>
        </div>
        <br>
        <div class="row justify-content-center">
            <div class="col-4">
                <label for="inputPassword">Password</label>
                <input type="password" class="form-control" id="inputPassword" placeholder="Password" v-model="pass">
            </div>
        </div>
        <br>
        <button type="button" class="btn btn-dark btn-lg" v-on:click="login()">Entrar</button>
    </div>
  </div>
</template>
<script>
import navBar from "@/components/navBar.vue";
export default {
  data: function() {
    return {
        email: "",
        pass: "",
    };
  },
  components: {
      navBar
  },
  methods: {
      login() {
          let userObject = {
              email: this.email,
              pass: this.pass,
          }
          let loginConfirm = this.$store.getters.login(userObject)
          
          if(loginConfirm.idUser != 0){
              alert("Bem-vindo")
              this.$router.push({name: "home"})
          }
          else{
              alert("error")
          }
      }
  }
};
</script>