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
                <label for="filterCategories">Categorias</label>
                <br>
                <select class="form-control" id="filterCategories" v-model="filterCategorie">
                    <option></option>
                    <option v-for="(categorie, index) in categories" :key="index">{{categorie.name}}</option>
                </select>
            </div>
            <div class="col-sm-6">
                <label for="filterCourses">Cursos</label>
                <br>
                <select class="form-control" id="filterCourses" v-model="filterCourse">
                    <option></option>
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
                        <a href="#" class="btn btn-outline-success changeBotao" v-if="userLogged != 0" v-on:click="subscribe(event._id)">Inscrever-me</a>
                        <router-link :to="{ name: 'infoEvents', params: { _id: event._id } }" tag="button" :class="{'btn': true, 'btn-outline-info': true}">more info</router-link>
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
import api from "@/api/api.js"
import swal from "sweetalert"
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
  async created() {
    var self = this
    //Obtem as informações 
    this.userLogged = this.$store.getters.getUserId
    let verify = false
    if(this.userLogged == 0){
        await api.get("https://atlantisbyesmad.herokuapp.com/events").then(function (response) {
            self.events = response.data
        })   
    }
    else{
        let verify = false
        let allEvents = []
        await api.get("https://atlantisbyesmad.herokuapp.com/events").then(function (response) {
            allEvents = response.data
        })
        let notSubscribedEvents = []
        for (let i = 0; i < allEvents.length; i++) {
          for (let j = 0; j < allEvents[i].participants.length; j++) {
            if(allEvents[i].participants[j] == this.userLogged){
              verify = true
            }
          }
          if(!verify){
            notSubscribedEvents.push(allEvents[i])
          }
          verify = false
        }
        this.events = notSubscribedEvents
    }
    await api.get("https://atlantisbyesmad.herokuapp.com/categories").then(function (response) {
        self.categories = response.data
    })
    await api.get("https://atlantisbyesmad.herokuapp.com/course").then(function (response) {
        self.courses = response.data
    })
  },
  methods: {
    // metodo para subscrever a um evento
    async subscribe(id){
        let subscribeInfo = {
          idUser: this.userLogged,
          idEvent : id
        }
        
        var confirmation = confirm("Tem a certeza que quer se inscrever neste evento?");
        if (confirmation) {
            let eventToSubscribe = "o"
            let result = true
            let alreadySub = false
            for (let i = 0; i < this.events.length; i++) {
                if (this.events[i]._id == subscribeInfo.idEvent) {
                    eventToSubscribe = this.events[i]
                }
            }
            
            for (let i = 0; i < eventToSubscribe.participants.length; i++) {
                if (eventToSubscribe.participants[i] == subscribeInfo.idUser) {
                    alreadySub = true
                    result = false 
                }
            }
           if(result){
              
              let newList = eventToSubscribe.participants
              newList.push(subscribeInfo.idUser)
              await api.put(`https://atlantisbyesmad.herokuapp.com/events/${subscribeInfo.idEvent}`,{participants: newList}).then(function (response) {
                    console.log(response)
                    swal({
                        title: "Sucesso",
                        text: "Inscrição bem Sucedida",
                        icon: "success",
                    })
              })
              //this.$store.dispatch("set_user_subscribe",subscribeInfo)
              let userData = []
              await api.get(`https://atlantisbyesmad.herokuapp.com/users/${this.userLogged}`).then(function(response){
                    userData = response.data
                    userData = userData[0]
              })
              let newXp = userData.xp + 50
              let subscribes = userData.numberInscription + 1
              await api.put(`https://atlantisbyesmad.herokuapp.com/users/${this.userLogged}`,{xp:newXp,numberInscription:subscribes}).then(function(response){
                    console.log(response)
              })
              let verify = false
                let allEvents = []
                await api.get("https://atlantisbyesmad.herokuapp.com/events").then(function (response) {
                    allEvents = response.data
                })
                let notSubscribedEvents = []
                for (let i = 0; i < allEvents.length; i++) {
                for (let j = 0; j < allEvents[i].participants.length; j++) {
                    if(allEvents[i].participants[j] == this.userLogged){
                    verify = true
                    }
                }
                if(!verify){
                    notSubscribedEvents.push(allEvents[i])
                }
                verify = false
                }
                this.events = notSubscribedEvents
              //this.$store.dispatch("give_xp_increase",this.userLogged)
           }
           else{
              swal({
                    title: "Atenção",
                    text: "Já estás inscrito",
                    icon: "warning",
                })
           }
        } 

    }
  },
  computed: {
    // filtros
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
