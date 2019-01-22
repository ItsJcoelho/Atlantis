<template>
    <div class="BackOffice">
    <!-- NAVBAR -->
    <navBar/>
        <h1>Espaço do Administrador</h1>
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
                    <td><button type="button" class="btn btn-success" v-on:click="Activate(user.id)">Editar</button></td>
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
    </div>
</template>
<script>
import navBar from "@/components/navBar.vue";
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
    created() {
        this.users = this.$store.getters.getUsers
    },
    methods: {
        Activate(id){
            this.activeEdit = true
            this.changeId = id
        },
        ChangeType(){
            let send = {
                userId: this.changeId,
                type: this.changeType
            }
            this.$store.dispatch("change_type",send)
            alert("Mudança Feita")
        },
        Close(){
            this.activeEdit = false;
            this.changeId = 0;
        }
    },
}
</script>