<template>
    <div class = "notifications">
        <div class="text-center" v-if="!loading">
            <b-spinner variant="success" label="Spinning"></b-spinner>
        </div>
        <div v-if="loading">
            <navBar/>
            <br>
            <h1>Notificações</h1>
            <br>
            <table class="table">
                <thead>
                    <tr>
                        <th>Titulo</th>
                        <th>Descrição</th>
                        <th>Opções</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(notification, index) in notifications" :key="index">
                        <td>{{notification.name}}</td>
                        <td>{{notification.description}}</td>
                        <td><button type="button" class="btn btn-danger" v-on:click="removeNotification(notification._id)">Visto</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>
import navBar from "@/components/navBar.vue";
import api from "@/api/api.js"
export default {
    data() {
        return {
            notifications: [],
            userId: this.$route.params._id,
            loading: false
        }
    },
    components: {
      navBar
    },
    async created() {
        let getNoti = []
        let verify = false
        await api.get("https://atlantisbyesmad.herokuapp.com/notifications").then(function(response){
            getNoti = response.data
            console.log(getNoti)
        })
        console.log("hi")
        for(let i = 0;i < getNoti.length;i++){
            for(let j = 0;j < getNoti[i].usersId.length;j++){
                console.log(getNoti[i].usersId[j])
                console.log(this.userId)
                if(getNoti[i].usersId[j] == this.userId){
                    verify = true
                }
                
            }
            if(verify){
                this.notifications.push(getNoti[i])
            }
            verify = false
        }
        this.loading = true
    },
    methods: {
        async remove(id){
           await api.put().then(function(response){

           }) 
        }
    },

}
</script>