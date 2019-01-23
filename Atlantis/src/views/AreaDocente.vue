<template>
    <div class="AreaDocente">
        <!-- NAVBAR -->
        <navBar/>
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
                            <a v-on:click="RemoveEvent(userEvent.id)" class="btn btn-outline-danger">Remover Evento</a>
                            <br>
                            <a v-on:click="ShowUsers(userEvent.id)" class="btn btn-outline-info">Mostrar Detalhe</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <br>
        <br>
        <div class="EventDetails" v-if="detailsActive">
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
export default {
    data() {
        return {
            idUser: this.$route.params.id,
            userEvents: [],
            chosenEvent: "",
            detailsActive: false,
            eventParticipants: []
        }
    },
    components: {
        navBar
    },
    created() {
        this.userEvents = this.$store.getters.GetUserCreatedEvents(this.idUser)
    },
    methods: {
        RemoveEvent(id) {
            let response = confirm("Tem a certeza que pretende eliminar o evento?!");
            if (response) {
                this.$store.dispatch("remove_event",id)
            }
            this.userEvents = this.$store.getters.GetUserCreatedEvents(this.idUser)
        },
        ShowUsers(id){
            this.detailsActive = true
            this.chosenEvent = this.userEvents.filter(userEvent => userEvent.id == id)[0];
            console.log(this.chosenEvent.participants)
            this.eventParticipants = this.$store.getters.GetEventUsers(this.chosenEvent.participants)
            console.log(this.eventParticipants)
        },
        close(){
            this.detailsActive = false
            this.eventParticipant = []
        }

    },
}
</script>