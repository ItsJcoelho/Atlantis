<template>
    <div class="MyEvents">
    <!-- NAVBAR -->
    <navBar/>
    <div class="imagem">
            <br>
            <br>
            <img src="data:image/jpeg;base64,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" class="inside" alt="...">
            <br>
            <br>
    </div>
        <h1>Meus Eventos</h1>
        <br>
        <br>
        <div class="container">
            <div class="row">
                <div class="col-sm-4" v-for="(myEvent, index) in myEvents" :key="index">
                    <div class="card font-weight-bolder" style="width: 18rem;">
                    <img v-bind:src="myEvent.poster" class="card-img rounded" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">{{myEvent.name}}</h5>
                            <h6 class="card-subtitle mb-2 text-muted">{{myEvent.course}}</h6>
                            <p class="card-text">{{myEvent.category}} com a capacidade de {{myEvent.capacity}} participantes, O orador de este evento é {{myEvent.speaker}}</p>
                            <a v-on:click="RemoveSubscribe(myEvent._id)" class="btn btn-outline-danger">Remover Inscrição</a>
                        </div>
                    </div>
                </div>
            </div>
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
            idUser: this.$route.params._id,
            events: [],
            myEvents: []
            
        }
    },
    components: {
        navBar
    },
    async created() {
        var self = this
        await api.get("https://atlantisbyesmad.herokuapp.com/events").then(function(response){
            self.events = response.data
        })
        for (let i = 0; i < this.events.length; i++) {
            for (let j = 0; j < this.events[i].participants.length; j++) {
                if (this.events[i].participants[j] == this.idUser) {
                    this.myEvents.push(this.events[i])
                }
            }
        }
        
    },
    methods: {
        // funcao para remover a inscrição de um evento
        async RemoveSubscribe(id){
            let send = {
                idUser: this.idUser,
                idEvent: id
            }
            let response = confirm("Tem a certeza que pretende eliminar a sua inscrição?!");
            if (response) {
                for (let i = 0; i < this.events.length; i++) {
                    if(this.events[i]._id == send.idEvent){
                        for (let j = 0; j < this.events[i].participants.length; j++) {
                            console.log(2)
                            if (this.events[i].participants[j] == send.idUser) {
                                console.log("hi")
                                this.events[i].participants.splice(j,1)
                                await api.put(`https://atlantisbyesmad.herokuapp.com/events/${send.idEvent}`,{participants: this.events[i].participants}).then(function(response){
                                    swal({
                                        title: "Cancelado",
                                        text: "Inscrição Cancelada",
                                        icon: "success",
                                    })
                                })
                                
                            }
                        }
                    }
                }
            }
            this.myEvents = []
            for (let i = 0; i < this.events.length; i++) {
                for (let j = 0; j < this.events[i].participants.length; j++) {
                    if (this.events[i].participants[j] == this.idUser) {
                        this.myEvents.push(this.events[i])
                    }
                }
            }
            
        }
    },
}
</script>