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
    <div class="container">
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
                <tr v-for="(user, index) in showTop" :key="index">
                    <th>{{index + 1 }}</th>
                    <td>{{user.name}}</td>
                    <td>{{user.xp}}</td>
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
        users: [],
        showTop: [],
        top: 10
    };
    },
    components: {
        navBar
    },
    created() {
        this.users = this.$store.getters.getRankingByXp(top)
        if(this.users.length < 10){
            this.showTop = this.users
        }
        else{
            for(let i = 0; i < this.top; i++){
                this.showTop.push(this.users[i])
            }
        }
    },
}
</script>