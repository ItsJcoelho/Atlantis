<template>
    <div class="MyEvents">
    <!-- NAVBAR -->
    <navBar/>
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
                            <a v-on:click="RemoveSubscribe(myEvent.id)" class="btn btn-outline-danger">Remover Inscrição</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import navBar from "@/components/navBar.vue";
export default {
    data() {
        return {
            idUser: this.$route.params.id,
            myEvents: []
            
        }
    },
    components: {
        navBar
    },
    created() {
        this.myEvents = this.$store.getters.getMyEvents(this.idUser)
    },
    methods: {
        RemoveSubscribe(id){
            let send = {
                idUser: this.idUser,
                idEvent: id
            }
            let response = confirm("Tem a certeza que pretende eliminar a sua inscrição?!");
            if (response) {
                this.$store.dispatch("remove_subscribe",send)
            }
            this.myEvents = this.$store.getters.getMyEvents(this.idUser)
            
        }
    },
}
</script>