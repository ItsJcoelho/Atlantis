<template>
<div class="userpage">
    <!-- NAVBAR -->
    <navBar/>
<div class="container bootstrap snippet">
    <div class="row">
        <div class="col-sm-3">

        </div>
        <div class="col-sm-9">
            <h1>{{getUser($route.params.id).name}}</h1>
        </div>
    </div>
    <br>
    <br>
    <div class="row">
        <div class="col-sm-3">
            <ul class="list-group">
                <li class="list-group-item text-muted">Informações<i class="fa fa-dashboard fa-1x"></i></li>
                <li class="list-group-item text-right"><span class="pull-left"><router-link :to="{ name: 'myEvents-user',params: { id: userId } }" :class="{ 'nav-link': true }">Minhas Inscrições</router-link></span></li>
                <li class="list-group-item text-right" v-if="thisUser.type=='docente'"><span class="pull-left"><router-link :to="{ name: 'areaDocente-user',params: { id: userId } }" :class="{ 'nav-link': true }">Área do Docente</router-link></span></li>
            </ul>
        </div>
        <div class="col-sm-9 aling-self-center">
            <ul>
                <li>Email: {{getUser($route.params.id).name}}</li>
                <br>
                <li>Password: {{getUser($route.params.id).password}}</li>
                <br>
                <li>Curso: {{getUser($route.params.id).course}}</li>
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
export default {
    data() {
        return {
            users: [],
            userId: this.$route.params.id,
            thisUser: "",
            userLogged: 0,
            conqueredAchievements: [],
            achivements :[],
            switchAchievements: true,
            switchButton: "Conquistas Completas"
        }
    },
    components:{
        navBar
    },
    created() {
        this.users = this.$store.getters.getUsers;
        this.userLogged = this.$store.getters.getUserId;
        this.thisUser = this.users.filter(user => this.userId == user.id)[0]
        for(let i = 0; i < this.thisUser.challenges.length; i++){
            if(this.thisUser.numberInscripton >= this.thisUser.challenges[i].goal && !this.thisUser.challenges[i].completed){
                this.$store.dispatch("completed_challenge", {
                    userId: this.userId,
                    challengeId: this.thisUser.challenges[i].id,
                    xp: this.thisUser.challenges[i].xpQuantity
                });
            }
        }
        

    },
    methods: {
        getUser(id){
            return this.users.filter(user => user.id == id)[0];
        },
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