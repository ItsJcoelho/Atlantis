<template>
  <div class="signUp">
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
export default {
  data: function() {
    return {
        name: "",
        email: "",
        pass: "",
        courses: [],
        selectedCourse: "",
        confirmPass: "",
    };
  },
  created() {
    this.courses = this.$store.getters.getCourses
  },
  methods: {
      signUp() {
          let user = {
              id: this.$store.getters.getLastId,
              name: this.name,
              email: this.email,
              password: this.pass,
              confirmPass: this.confirmPass,
              course: this.selectedCourse,
              xp: 0,
              challenges: []
          }
          let signUpInfo = this.$store.getters.signUp(user)
          if(signUpInfo == ""){
            alert("registou")
            this.$router.push({name: "login"})
          }
          else {
            alert(signUpInfo)
          }
          
      }
  }
};
</script>