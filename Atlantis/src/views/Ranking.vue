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
                    <th scope="col">XP</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(userNumber, index) in showTopNumber" :key="index">
                    <th>{{index + 1 }}</th>
                    <td>{{userNumber.name}}</td>
                    <td>{{userNumber.numberInscripton}}</td>
                </tr>
            </tbody>
        </table>
    </div>
    </div>
</template>
<script>
import navBar from "@/components/navBar.vue";
export default {
    data: function() {
    return {
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
    created() {
        this.usersXp = this.$store.getters.getRankingByXp(top)
        console.log(this.usersXp)
        if(this.usersXp.length < 10){
            this.showTopXp = this.usersXp
        }
        else{
            for(let i = 0; i < this.top; i++){
                this.showTopXp.push(this.usersXp[i])
            }
        }
        this.usersNumber = this.$store.getters.getRankingByNumberOfSubscribes
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