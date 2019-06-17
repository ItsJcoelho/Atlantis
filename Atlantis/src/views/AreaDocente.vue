<template>
    <div class="AreaDocente">
        <!-- NAVBAR -->
        <navBar/>
        <br>
        <div class="imagem">
            <br>
            <br>
            <img src="data:image/png;base64,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" class="inside" alt="...">
            <br>
            <br>
        </div>
        <br>
        <h1>Área do Docente</h1>
        <br>
        <div class="container">
            <div class="row">
                <div class="col-sm-4" v-for="(userEvent, index) in userEvents" :key="index">
                    <div class="card" style="width: 18rem;">
                    <img v-bind:src="userEvent.poster" class="card-img rounded" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">{{userEvent.name}}</h5>
                            <h6 class="card-subtitle mb-2 text-muted">{{userEvent.course}}</h6>
                            <p class="card-text">{{userEvent.category}} com a capacidade de {{userEvent.capacity}} participantes, O orador de este evento é {{userEvent.speaker}}</p>
                            <a v-on:click="RemoveEvent(userEvent._id)" class="btn btn-outline-danger">Remover Evento</a>
                            <br>
                            <a v-on:click="ShowUsers(userEvent._id)" class="btn btn-outline-info">Mostrar Detalhe</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <br>
        <br>
        <div class="EventDetails" v-if="detailsActive">
            <br>
            <div class="imagem">
                <br>
                <br>
                <img src="data:image/jpeg;base64,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" class="inside" alt="...">
                <br>
                <br>
            </div>
             <br>
            <div class="container">
                <h1> Participantes no evento </h1>
                <br>
                <p> Numero de participantes: {{eventParticipants.length}}</p>
                <br>
                <table class="table">
                <thead class="thead-dark">
                    <tr>
                        <th>Nome do Participante</th>
                        <th>Email</th>
                        <th>Curso</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(eventParticipant, index) in eventParticipants " :key="index">
                        <td>{{eventParticipant.name}}</td>
                        <td>{{eventParticipant.email}}</td>
                        <td>{{eventParticipant.course}}</td>
                    </tr>
                </tbody>
            </table>
            <button type="button" class="btn btn-danger" v-on:click="close()">Fechar</button>
            </div>
        </div>
        <br>
        <br>
        <br>
        <br>
    </div>
</template>
<script>
import navBar from "@/components/navBar.vue";
import api from "@/api/api.js"
import swal from "sweetalert"
export default {
    data() {
        return {
            idUser: this.$route.params._id,
            userEvents: [],
            chosenEvent: "",
            detailsActive: false,
            eventParticipants: [],
            users: []
        }
    },
    components: {
        navBar
    },
    async created() {
        let allEvents = []
        let sendEvents = []
        var self = this
        await api.get("https://atlantisbyesmad.herokuapp.com/events").then(function(response){
            allEvents = response.data
        })
        await api.get("https://atlantisbyesmad.herokuapp.com/users").then(function(response){
            self.users = response.data
        })
        for (let i = 0; i < allEvents.length; i++) {
            if (allEvents[i].creatorId == this.idUser) {
                sendEvents.push(allEvents[i])
            }
        }
        this.userEvents = sendEvents
    },
    methods: {
        //remover o evento
        async RemoveEvent(id) {
            let response = confirm("Tem a certeza que pretende eliminar o evento?!");
            if (response) {
                await api.remove(`https://atlantisbyesmad.herokuapp.com/events/${id}`).then(function(response){
                    swal({
                        title: "Sucesso",
                        text: "O evento foi cancelado com sucesso",
                        icon: "success",
                    })
                })
                let thisEvent
                await api.get(`https://atlantisbyesmad.herokuapp.com/events/${id}`).then(function(response){
                    thisEvent = response.data[0]
                })
                let notification = {
                    name:"Evento Cancelado",
                    description: `Pedimos desculpa mas o evento ${thisEvent.name} foi cancelado`,
                    usersId: thisEvent.participants
                }
                await api.post(`https://atlantisbyesmad.herokuapp.com/notifications`,notification).then(function(response){
                    console.log()
                })
            }
            location.reload()
        },
        //mostrar os participantes do evento selecionado
        async ShowUsers(id){
            this.detailsActive = true
            var self = this
            await api.get(`https://atlantisbyesmad.herokuapp.com/events/${id}`).then(function(response){
                self.chosenEvent = response.data[0]
            })
            .catch(function(err){
                console.log(err)
            })
            console.log(this.chosenEvent.participants)
            let send = []
            for (let i = 0; i < this.chosenEvent.participants.length; i++) {
                for (let j = 0; j < this.users.length; j++) {
                    if (this.chosenEvent.participants[i] == this.users[j]._id) {
                        send.push(this.users[j])
                    }
                }
            }
            this.eventParticipants = send
            console.log(this.eventParticipants)
        },
        //fechar div dos participantes do evento
        close(){
            this.detailsActive = false
            this.eventParticipants = []
        }

    },
}
</script>