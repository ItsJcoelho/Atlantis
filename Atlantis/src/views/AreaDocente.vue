<template>
    <div class="AreaDocente">
        <h1>Área do Docente</h1>
    
    <div class="container">
            <div class="row">
                <div class="col-sm-4" v-for="(userEvent, index) in userEvents" :key="index">
                    <div class="card" style="width: 18rem;">
                        <div class="card-body">
                            <h5 class="card-title">{{userEvent.name}}</h5>
                            <h6 class="card-subtitle mb-2 text-muted">{{userEvent.course}}</h6>
                            <p class="card-text">{{userEvent.category}} com a capacidade de {{userEvent.capacity}} participantes, O orador de este evento é {{userEvent.speaker}}</p>
                            <a v-on:click="RemoveEvent(userEvent.id)" class="btn btn-danger">Remover Evento</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            idUser: this.$route.params.id,
            userEvents: []
        }
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
        }
    },
}
</script>