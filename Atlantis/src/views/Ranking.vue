<template>
    <div class="ranking">
    <!-- NAVBAR -->
    <navBar/>
    <br>
    <div class="imagem">
            <br>
            <img src="https://png.pngtree.com/svg/20170918/ranking_706934.png" class="inside" alt="...">
            <br>
            <br>
    </div>
    <br>
    <h1>Ranking</h1>
    <br>
    <button type="button" class="btn btn-info" v-on:click="change()">{{text}}</button>
    <div class="container" v-if="!active">
        <h3>Ranking por XP</h3>
        <br>
        <table class="table table-hover">
            <thead class="thead-dark">
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Nome</th>
                    <th scope="col">XP</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(userXp, index) in showTopXp" :key="index">
                    <th>{{index + 1 }}</th>
                    <td>{{userXp.name}}</td>
                    <td>{{userXp.xp}}</td>
                </tr>
            </tbody>
        </table>
    </div>
    <div class="container" v-if="active">
        <h3>Ranking por Numero de Eventos inscritos</h3>
        <br>
        <table class="table table-hover">
            <thead class="thead-dark">
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Nome</th>
                    <th scope="col">Nº de inscrições</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(userNumber, index) in showTopNumber" :key="index">
                    <th>{{index + 1 }}</th>
                    <td>{{userNumber.name}}</td>
                    <td>{{userNumber.numberInscription}}</td>
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
    data: function() {
    return {
        users: [],
        usersXp: [],
        usersNumber: [],
        showTopXp: [],
        showTopNumber: [],
        top: 10,
        active: false,
        text: "Por Eventos Criados"
    };
    },
    components: {
        navBar
    },
    async created() {
        var self = this
        await api.get("https://atlantisbyesmad.herokuapp.com/users").then(function(response){
            self.users = response.data
        })
        let topTen = this.users.sort(
            function orderByXp(a, b) {
                if (a.xp > b.xp) return 1;
                if (a.xp < b.xp) return -1;
                else return 0;
            }
        )
        topTen.reverse()
        this.usersXp = topTen.reverse()
        console.log(this.usersXp)
        //verifica se a quantidade de utilizadores é menor que 10 caso nao exista mais que 10 users
        if(this.usersXp.length < 10){
            this.showTopXp = this.usersXp
        }
        else{
            for(let i = 0; i < this.top; i++){
                this.showTopXp.push(this.usersXp[i])
            }
        }
        let topTenN = this.users.sort(
            function orderBySubscribes(a, b) {
                    if (a.numberInscription > b.numberInscription) return 1;
                    if (a.numberInscription < b.numberInscription) return -1;
                    else return 0;
                }
            )
        this.usersNumber = topTenN.reverse()
        console.log(this.usersNumber)
        if(this.usersNumber.length < 10){
            this.showTopNumber = this.usersNumber
        }
        else{
            for(let i = 0; i < this.top; i++){
                this.showTopNumber.push(this.usersNumber[i])
            }
        }
    },
    methods: {
        //Para alternar entre tabelas 
        change(){
            if(!this.active){
                this.active = true
                this.text = "Por Xp"
            }
            else{
                this.active = false
                this.text = "Por Eventos Criados"
            }
        }
    },
}
</script>