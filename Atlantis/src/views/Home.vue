<template>
  <div class="home">
    <!-- NAVBAR -->
    <navBar/>
    <br>
    <div class="imagem">
            <img src="../assets/logoAtlantis.png" class="card-img info" alt="...">
    </div>
    <br>
    <div class="container">
    <h1>Bem Vindo ao Atlantis</h1>
    <h4>Gestor de eventos</h4>
    <br>
    <h4>Filtros</h4>
        <div class="row">
            <div class="col-sm-6">
                <label for="filterCategories">Cursos</label>
                <br>
                <select class="form-control" id="filterCategories" v-model="filterCategorie">
                    <option>all</option>
                    <option v-for="(categorie, index) in categories" :key="index">{{categorie.name}}</option>
                </select>
            </div>
            <div class="col-sm-6">
                <label for="filterCourses">Categorias</label>
                <br>
                <select class="form-control" id="filterCourses" v-model="filterCourse">
                    <option>all</option>
                    <option v-for="(course, index) in courses" :key="index">{{course.name}}</option>
                </select>
            </div>
        </div>
        <br>
        <div class="row">
            <div class="col-sm-4" v-for="(event, index) in filteredEvents" :key="index">
                <div class="card" style="width: 18rem;">
                <img v-bind:src="event.poster" class="card-img rounded" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">{{event.name}}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">{{event.course}}</h6>
                        <p class="card-text">{{event.category}} com a capacidade de {{event.capacity}} participantes, O orador de este evento é {{event.speaker}}</p>
                        <a href="#" class="btn btn-outline-success changeBotao" v-if="userLogged != 0" v-on:click="subscribe(event.id)">Inscrever-me</a>
                        <router-link :to="{ name: 'infoEvents', params: { id: event.id } }" tag="button" :class="{'btn': true, 'btn-outline-info': true}">more info</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import navBar from "@/components/navBar.vue";
export default {
  name: "home",
  components: {
      navBar
  },
  data: function() {
    return {
        events: "",
        userLogged: 0,
        categories: [],
        courses:[],
        filterCategorie: "all",
        filterCourse: "all",
    };
  },
  created() {
    this.events = this.$store.getters.getEvents
    this.categories = this.$store.getters.getCategories
    this.courses = this.$store.getters.getCourses
    this.userLogged = this.$store.getters.getUserId
  },
  methods: {
    subscribe(id){
        let subscribeInfo = {
          idUser: this.userLogged,
          idEvent : id
        }
        var confirmation = confirm("Tem a certeza que quer se inscrever neste evento?");
        if (confirmation) {
           let result = this.$store.getters.subscribe(subscribeInfo)
           if(result){
              alert("subscribe")
              this.$store.dispatch("set_user_subscribe",subscribeInfo)
              this.$store.dispatch("give_xp_increase",this.userLogged)
           }
           else{
              alert("Já está inscrito")
           }
        } 

    }
  },
  computed: {
    filteredEvents() {
            return this.events.filter(
                (event) => {
                    let filterCategorieResult = true
                    let filterCourseResult = true
                    
                    // Filter Categories
                    if(this.filterCategorie!=="all") {
                        filterCategorieResult = event.category === this.filterCategorie      
                    } 
                    // Filter continent
                    if(this.filterCourse!=="all") {
                        filterCourseResult = event.course === this.filterCourse      
                    } 


                    // return the conjunction of the two filters
                    return filterCategorieResult && filterCourseResult

                }
            )
        }
    },
  };
</script>
<style>
  .card{
      margin-left:auto;
      margin-right:auto;
      display:block;
  }
  .card-title{
    color:#025E73;
  }
</style>
