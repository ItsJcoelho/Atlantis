<template>
<div class="userpage"v-if="loaded">
    <!-- NAVBAR -->
    <navBar/>
    <br>
        <div class="imagem">
            <br>
            <br>
            <img src="data:image/jpeg;base64,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" class="inside" alt="...">
            <br>
            <br>
        </div>
    <br>
<div class="container bootstrap snippet">
    <div class="row">
        <div class="col-sm-3">

        </div>
        <div class="col-sm-9">
            <h1>{{thisUser.name}}</h1>
        </div>
    </div>
    <br>
    <br>
    <div class="row">
        <div class="col-sm-3">
            <ul class="list-group">
                <li class="list-group-item text-muted">Páginas<i class="fa fa-dashboard fa-1x"></i></li>
                <li class="list-group-item text-right"><span class="pull-left"><router-link :to="{ name: 'myEvents-user',params: { _id: userId } }" :class="{ 'nav-link': true }">Minhas Inscrições</router-link></span></li>
                <li class="list-group-item text-right" v-if="thisUser.type=='docente'"><span class="pull-left"><router-link :to="{ name: 'areaDocente-user',params: { _id: userId } }" :class="{ 'nav-link': true }">Área do Docente</router-link></span></li>
                <li class="list-group-item text-right"><span class="pull-left"><router-link :to="{ name: 'notificacoes-user',params: { _id: userId } }" :class="{ 'nav-link': true }">Notificações</router-link></span></li>
            </ul>
        </div>
        <div class="col-sm-9 aling-self-center">
            <ul class="list-group">
                <li class="list-group-item text-muted">Páginas<i class="fa fa-dashboard fa-1x"></i></li>
                <li class="list-group-item text-left">Email: {{thisUser.email}}</li>
                
                <li class="list-group-item text-left">Pontos de Experiencia: {{thisUser.xp}}</li>

                <li class="list-group-item text-left">Curso: {{thisUser.course}}</li>
                <li class="list-group-item text-left">Nivel: {{level}}</li>
            </ul>
        </div>
    </div>
    <br>
    <br>
    <button type="button" class="btn btn-success" v-on:click="alternate()">{{switchButton}}</button>
    <br>
    <br>
   <div class="achivements-to-complete" v-if="switchAchievements">
        <h1>Conquistas por conquistar</h1>
        <br>
        <br>
        <div class="row">
            <div class="col-sm-4" v-for="(challenge, index) in thisUser.challenges" :key="index" v-if="!challenge.completed">
                <img src="https://cdn4.iconfinder.com/data/icons/education-training/33/cup-512.png" class="card-img-top" alt="...">
                <div class="card" style="width: 18rem;">
                    <div class="card-body">
                        <h6 class="card-subtitle mb-2 text-muted">{{challenge.name}}</h6>
                        <p class="card-text">Irá receber {{challenge.xpQuantity}} de xp</p>
                    </div>
                </div>
            </div>
        </div>
   </div>
   <div class="achivements-completed" v-if="!switchAchievements">
        <h1>Conquistas Completas</h1>
        <br>
        <br>
        <div class="row">
            <div class="col-sm-4" v-for="(challenge, index) in thisUser.challenges" :key="index" v-if="challenge.completed">
               <img src="https://cdn4.iconfinder.com/data/icons/education-training/33/cup-512.png" class="card-img-top" alt="...">
               <div class="card" style="width: 18rem;">
                    <div class="card-body">
                        <h6 class="card-subtitle mb-2 text-muted">{{challenge.name}}</h6>
                        <p class="card-text">Recebeste {{challenge.xpQuantity}} de xp</p>
                    </div>
                </div>
            </div>
        </div>
   </div>
   <br>
   <br>
</div>
</div>

</template>

<script>
import navBar from "@/components/navBar.vue";
import api from "@/api/api.js"
import swal from "sweetalert"
export default {
    data() {
        return {
            users: [],
            userId: this.$route.params._id,
            thisUser: "",
            userLogged: 0,
            conqueredAchievements: [],
            achivements :[],
            switchAchievements: true,
            switchButton: "Conquistas Completas",
            level: 0,
            loaded: false
        }
    },
    components:{
        navBar
    },
    async created() {
        var self = this
        await api.get("https://atlantisbyesmad.herokuapp.com/users").then(function(response){
            self.users = response.data
        })
        this.userLogged = this.$store.getters.getUserId
        await api.get(`https://atlantisbyesmad.herokuapp.com/users/${this.userLogged}`).then(function(response){
            self.thisUser = response.data
        })
        this.thisUser = this.thisUser[0]
        console.log(this.thisUser)
        //verifica se completou as conquistas
        console.log(this.thisUser.challenges.length)
        for(let i = 0; i < this.thisUser.challenges.length; i++){
            if(this.thisUser.numberInscription >= this.thisUser.challenges[i].goal && !this.thisUser.challenges[i].completed){
                let information = {
                    userId: this.userId,
                    challengeId: this.thisUser.challenges[i]._id,
                    xp: this.thisUser.challenges[i].xpQuantity
                }
                for (let k = 0; k < this.users.length; k++) {
                    if(this.users[k]._id == information.userId){
                        for (let j = 0; j < this.users[k].challenges.length; j++) {
                            if (this.users[k].challenges[j]._id == information.challengeId) {
                                this.users[k].challenges[j].completed = true
                                console.log(this.users[k].challenges)
                                this.users[k].xp += information.xp
                                let newXp = this.users[k].xp
                                let updateChallenges = this.users[k].challenges
                                await api.put(`https://atlantisbyesmad.herokuapp.com/users/${this.userLogged}`,{challenges: updateChallenges,xp:newXp}).then(function(response){
                                    swal({
                                        title: "Parabéns",
                                        text: "Desafio concluído",
                                        icon: "success",
                                    })
                                })
                                

                                
                            }
                        }
                    }
                }
                /*this.$store.dispatch("completed_challenge", {
                    userId: this.userId,
                    challengeId: this.thisUser.challenges[i].id,
                    xp: this.thisUser.challenges[i].xpQuantity
                });*/
            }
        }
        //devolve o nivel
        this.level = this.$store.getters.getUserLevel(this.thisUser.xp)
        console.log(this.thisUser.xp)
        
        this.loaded = true

    },
    methods: {
        //alternar entre conquistas completas e por completar
        alternate() {
            if(this.switchAchievements){
                this.switchAchievements = false
                console.log(this.switchAchievements)
                this.switchButton = "Conquistas por conquistar"
            }
            else {
                this.switchAchievements = true
                console.log(this.switchAchievements)
                this.switchButton = "Conquistas Completas"
            }
            
        }
    },
}
</script>