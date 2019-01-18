<template>
    <div class="ranking">
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
                <tr v-for="(user, index) in users" :key="index">
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
export default {
    data: function() {
    return {
        users: [],
        top: 3
    };
    },
    created() {
        this.users = this.$store.getters.getRankingByXp(top)
    },
}
</script>