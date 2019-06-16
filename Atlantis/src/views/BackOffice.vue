<template>
    <div class="BackOffice">
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
        <h1>Espaço do Administrador</h1>
        <br>
        <h1>Utilizadores</h1>
        <br>
        <table class="table">
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Email</th>
                    <th>Permissões</th>
                    <th>Opções</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(user, index) in users" :key="index">
                    <td>{{user.name}}</td>
                    <td>{{user.email}}</td>
                    <td>{{user.type}}</td>
                    <td><button type="button" class="btn btn-success" v-on:click="Activate(user._id)">Editar</button><button type="button" class="btn btn-danger" v-on:click="removeUser(user._id)">Remover</button></td>
                </tr>
            </tbody>
        </table>
        <div v-if="activeEdit == true">
            <div class="row justify-content-md-center">
                <div class="col-sm-6">
                <label for="editType">Tipos</label>
                    <select class="form-control" id="editType" v-model="changeType">
                        <option>admin</option>
                        <option>docente</option>
                        <option>normal</option>
                    </select>
                </div>
            </div>
            <br>
            <button type="button" class="btn btn-danger" v-on:click="Close()">Fechar</button>
            <button type="button" class="btn btn-success" v-on:click="ChangeType()">Editar</button>
        </div>
        <div class="categories">
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
            changeId: 0,
            changeType: "",
            activeEdit: false
        }
    },
    components: {
      navBar
    },
    async created() {
        var self = this
        await api.get("https://atlantisbyesmad.herokuapp.com/users").then(function(response){
            self.users = response.data
        })
    },
    methods: {
        //activar a div de edição de permissões 
        Activate(id){
            this.activeEdit = true
            this.changeId = id
        },
        //função para ativar tipo
        async ChangeType(){
            let send = {
                userId: this.changeId,
                type: this.changeType
            }
            console.log(send.userId)
            await api.put(`https://atlantisbyesmad.herokuapp.com/users/${send.userId}`,{type: send.type}).then(function(response){
                swal({
                    title: "Sucesso",
                    text: "Permissões alteradas com sucesso",
                    icon: "success",
                })
            })
            location.reload()
        },
        //funcao para fechar div de edição de permissões
        Close(){
            this.activeEdit = false;
            this.changeId = 0;
        },
        async removeUser(id){
            const confirmation = await confirm("Tem a certeza que pretende remover este utilizador?")
            if(confirmation){
                await api.remove(`https://atlantisbyesmad.herokuapp.com/users/${id}`).then(function(response){
                    swal({
                        title: "Sucesso",
                        text: "Utilizador Removido",
                        icon: "success",
                    })

                })
                for(let i = 0; i < this.users.length; i++){
                    if(this.users[i]._id == id){
                        this.users.splice(i,1)
                    }
                }
            }
        }
    },
}
</script>