<template>
  <div class="about">
    <!-- NAVBAR -->
    <navBar/>
    <div class="container">
        <div class="imagem">
            <img v-bind:src="getEvent($route.params.id).poster" class="card-img info" alt="...">
        </div>
        <br>
        <br>
        <h1>{{getEvent($route.params.id).name}}</h1>
        <h2>{{getEvent($route.params.id).category}}</h2>
        <h4> Evento do Curso {{getEvent($route.params.id).course}}, tendo a capacidade
        de {{getEvent($route.params.id).capacity}} o orador do evento é {{getEvent($route.params.id).speaker}}</h4>
        <br>
        <br>
        <p> Data: {{getEvent($route.params.id).date}} </p>
        <br>

        <br>
        <p> Neste momento estão inscritos no evento {{getEvent($route.params.id).participants.length}} </p>
        <br>
        <br>
        <div class="comment" v-if="userLogged != 0">
        <div class="row">
            <div class="col-sm-12">
                 <label for="comment">Comentar</label>
                 <textarea class="form-control" id="comment" rows="3" v-model="comment"></textarea>
            </div>
        </div>
        <div class="row">
             <div class="col-sm-auto">
                <label for="rating" id="smaller">Rating</label>
                <input type="number" class="form-control" id="rating" v-model="rating" min="1" max="5">
             </div>
        </div>
        <button type="button" class="btn btn-dark" v-on:click="addComment()">Comentar</button>
        </div>
        <br>
            <br>
            <br>
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Rating</th>
                        <th scope="col">Comentário</th>
                    </tr>
                </thead>
                <tbody>
                <tr v-for="(comment, index) in thisEvent.comments" :key="index">
                    <td>{{comment.rating}}</td>
                    <td>{{comment.comment}}</td>
                </tr>
                </tbody>
            </table>
        <br>
        <button type="button" class="btn btn-dak" v-on:click="back()">Voltar</button>
    </div>
  </div>
</template>
<script>
import navBar from "@/components/navBar.vue";
export default {
    data() {
        return {
            events: [],
            eventId: this.$route.params.id,
            comment: "",
            rating:0,
            thisEvent: "",
            userLogged: 0,
        }
    },
    components: {
        navBar
    },
    created() {
        this.events = this.$store.getters.getEvents;
        this.thisEvent = this.events.filter(event => event.id === this.eventId)[0];
        this.userLogged = this.$store.getters.getUserId
    },
    methods: {
        //obter evento selecionado
        getEvent(id){
            return this.events.filter(event => event.id === id)[0];
        },
        //adicionar comentário
        addComment(){
            let op = {
                comment: this.comment,
                rating: this.rating,
            }
            this.$store.dispatch("set_comment", {
                opinion: op,
                eventId: this.eventId
            });
            alert("Comentou")
        },
        back(){
            window.history.back()
        }
    },
}
</script>