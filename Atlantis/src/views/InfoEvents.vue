<template>
  <div class="about" v-if="loaded">
    <!-- NAVBAR -->
    <navBar/>
    <div class="container">
        <div class="sectio">
            <div class="one">
                <img v-bind:src="thisEvent.poster" class="card-img" alt="...">
            </div>
            <div class="two">
                <br>
                <br>
                <h2>{{thisEvent.name}}</h2>
                <br>
                <h3>{{thisEvent.category}}</h3>
                <h5> Evento do Curso {{thisEvent.course}}, tendo a capacidade
                de {{thisEvent.capacity}} participantes em que o orador do evento é {{thisEvent.speaker}} insreva-se já neste evento</h5>
                <br>
                <h6> Data: {{thisEvent.date}} </h6>
                <h6> Neste momento estão inscritos no evento {{thisEvent.participants.length}} </h6>
            </div>
        </div>
        <br>
        <br>
        <br>
        <br>
        <div class="comment" v-if="userLogged != 0">
        <div class="row">
            <div class="col-sm-12">
                 <label id="commentL" for="comment">Comente, Diga o que espera deste evento</label>
                 <textarea class="form-control" id="comment" rows="3" v-model="comment"></textarea>
            </div>
        </div>
        <div class="row">
             <div class="col-sm-auto">
                <label for="rating" id="smaller">Rating</label>
                <input type="number" class="form-control" id="rating" v-model="rating" min="1" max="5">
             </div>
        </div>
        <button type="button" class="btn btn-outline-success" v-on:click="addComment()">Comentar</button>
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
        <button type="button" class="btn btn-outline-danger" v-on:click="back()">Voltar</button>
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
            events: [],
            eventId: this.$route.params._id,
            comment: "",
            rating:0,
            thisEvent: "",
            userLogged: 0,
            loaded: false
        }
    },
    components: {
        navBar
    },
    async created() {
        var self = this
        this.events = this.$store.getters.getEvents;
        await api.get(`https://atlantisbyesmad.herokuapp.com/events/${this.$route.params._id}`).then(function(response){
                self.thisEvent = response.data
                self.thisEvent = self.thisEvent[0]
                self.loaded = true
        })
        this.userLogged = this.$store.getters.getUserId
        
    },
    methods: {
        //obter evento selecionado
        async getEvent(id){
            var self = this
            let event = ""
            await api.get(`https://atlantisbyesmad.herokuapp.com/events/${id}`).then(function(response){
                event = response.data
            })
            console.log(event)
            return event
        },
        //adicionar comentário
        async addComment(){
            let op = {
                comment: this.comment,
                rating: this.rating,
            }
            let commentList = this.thisEvent.comments
            commentList.push(op)
            await api.put(`https://atlantisbyesmad.herokuapp.com/events/${this.thisEvent._id}`,{comments: commentList}).then(function(response){
                swal({
                    title: "Comentado",
                    text: "Muito Obrigado pela sua opiniao",
                    icon: "success",
                })
            })
            
        },
        back(){
            window.history.back()
        }
    },
}
</script>