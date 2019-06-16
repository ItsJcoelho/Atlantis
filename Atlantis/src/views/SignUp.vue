<template>
  <div class="signUp">
    <!-- NAVBAR -->
    <navBar/>
    <br>
    <div class="imagem">
            <br>
            <img src="data:image/png;base64,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" class="inside" alt="...">
            <br>
            <br>
    </div>
    <br>
    <h1>Sign Up</h1>
        <div class="row justify-content-center">
            <div class="col-4">
                <label for="inputEmail">Nome</label>
                <input type="email" class="form-control" id="inputNom" aria-describedby="emailHelp" placeholder="Insira Nome" v-model="name">
            </div>
        </div>
        <div class="row justify-content-center">
            <div class="col-4">
                <label for="inputEmail">Email address</label>
                <input type="email" class="form-control" id="inputEmail" aria-describedby="emailHelp" placeholder="Insira o email" v-model="email">
            </div>
        </div>
        <div class="row justify-content-center">
            <div class="col-4">
                <label for="inputPassword">Password</label>
                <input type="password" class="form-control" id="inputPasswordSignUp" placeholder="Password" v-model="pass">
            </div>
        </div>
        <div class="row justify-content-center">
            <div class="col-4">
                <label for="inputPassword">Confirmar Password</label>
                <input type="password" class="form-control" id="inputPasswordConfirm" placeholder="Confirmar Password" v-model="confirmPass">
            </div>
        </div>
        <div class="row justify-content-center">
            <div class="col-4">
                <label for="exampleFormControlSelect1">Cursos</label>
                    <select class="form-control" id="exampleFormControlSelect1" v-model="selectedCourse">
                      <option v-for="(course, index) in courses" :key="index">{{course.name}}</option>
                    </select>
            </div>
        </div>
        <br>
        <button type="button" class="btn btn-dark btn-lg" v-on:click="signUp()">Inscrever</button>
  </div>
</template>
<script>
import navBar from "@/components/navBar.vue";
import api from "@/api/api.js"
import swal from "sweetalert"
export default {
  data: function() {
    return {
        name: "",
        email: "",
        pass: "",
        courses: [],
        selectedCourse: "",
        confirmPass: "",
        id: 0,
        challenges: []

    };
  },
  components: {
      navBar
  },
  async created() {
    var self = this;
    await api.get("https://atlantisbyesmad.herokuapp.com/course").then(function (response) {
        console.log(response.data)
        self.courses = response.data
    })
    // console.log(this.courses)
    this.id = this.$store.getters.getLastIdOfUsers
    await api.get("https://atlantisbyesmad.herokuapp.com/challenges").then(function (response) {
        //console.log(response.data)
        self.challenges = response.data
    })
  },
  methods: {
      //Função para registo
      async signUp() {
          let msg = ""
          let signUpInfo = ""
          let user = {
              //id: this.id,
              name: this.name,
              email: this.email,
              password: this.pass,
              confirmPass: this.confirmPass,
              course: this.selectedCourse,
              xp: 0,
              challenges: this.challenges,
              type: "normal",
              numberInscripton: 0
          }
          let users = []
          await api.get("https://atlantisbyesmad.herokuapp.com/users").then(function (response) {
            users = response.data
            console.log(users)
          })
          for (let i = 0; i < users.length; i++) {
                console.log("1")
                if(users[i].email == user.email){
                    msg += "error"
                }
          }
          //verificar se existe se as password coicidem
          if(user.password != user.confirmPass) {
              msg += "error"
          }
          if(msg == ""){
              signUpInfo = {
              //id: createUser.id,
              name: user.name,
              email: user.email,
              password: user.password,
              course: user.course,
              xp: user.xp,
              challenges: user.challenges,
              type: user.type,
              numberInscription: user.numberInscripton
              }
          }
          console.log(signUpInfo)
          if(signUpInfo != ""){
            await api.post("https://atlantisbyesmad.herokuapp.com/users",signUpInfo)
            .then(function (response) {
                console.log(response)
                swal({
                    title: "Bem vindo ao Atlantis",
                    text: "Irá ser direcionado para o login",
                    icon: "success",
                })
            })
            .catch(function(err){
                console.log(err)
            })
            //this.$store.dispatch("set_new_user",signUpInfo)
            this.$router.push({name: "login"})
          }
          else {
            swal({
                    title: "Atenção",
                    text: "Tens informações que podem conter erros",
                    icon: "danger",
            })
          }
          
      }
  }
};
</script>