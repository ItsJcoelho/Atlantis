<template>
  <div class="create-event">
   <!-- NAVBAR -->
    <navBar/>
    <br>
        <div class="imagem">
            <br>
            <br>
            <img src="data:image/jpeg;base64,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" class="inside" alt="...">
            <br>
            <br>
        </div>
    <br>
    <h1>Criar Evento</h1>
    <br>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-sm-3">
                <label for="nameEvent">Nome</label>
                <input type="text" class="form-control" id="nameEvent" placeholder="Nome" v-model="name" required>
            </div>
            <div class="col-sm-3">
                <label for="dateEvent">Data</label>
                <input type="date" class="form-control" id="dateEvent" v-model="date" required>
            </div>
        </div>
        <br>
        <div class="row justify-content-center">
            <div class="col-sm-3">
                <label for="coursesEvent">Cursos</label>
                <select class="form-control" id="coursesEvent" v-model="selectedCourse">
                    <option v-for="(course, index) in courses" :key="index">{{course.name}}</option>
                </select>
            </div>
            <div class="col-sm-3">
                <label for="categoriesEvent">Categorias</label>
                <select class="form-control" id="categoriesEvent" v-model="selectedCategory">
                    <option v-for="(category, index) in categories" :key="index">{{category.name}}</option>
                </select>
            </div>
        </div>
        <br>
        <div class="row justify-content-center">
            <div class="col-sm-3">
               <label for="capacityEvent">Capacidade</label>
               <input type="number" class="form-control" id="capacityEvent" min="20" v-model="capacity" required>
            </div>
            <div class="col-sm-3">
                <label for="posterEvent">Poster</label>
                <input type="link" class="form-control" id="posterEvent" placeholder="Link do Poster" v-model="poster" required>
            </div>
        </div>
        <br>
        <div class="row justify-content-center">
            <div class="col-sm-3">
                <label for="speakerEvent">Orador</label>
                <input type="text" class="form-control" id="speakerEvent" placeholder="Orador" v-model="speaker" required>
            </div>
        </div>
        <br>
        <button type="button" class="btn btn-dark" v-on:click="InsertEvent()">CRIAR EVENTO</button>
    </div>
  </div>
</template>
<script>
import navBar from "@/components/navBar.vue";
export default {
    data: function() {
    return {
        userLogged: 0,
        name: "",
        date:"",
        capacity:"",
        poster:"",
        speaker:"",
        courses: [],
        categories: [],
        selectedCourse: "",
        selectedCategory:""
    };
    },
    components: {
        navBar
    },
    created() {
        this.courses = this.$store.getters.getCourses
        this.categories = this.$store.getters.getCategories
        this.userLogged = this.$store.getters.getUserId
    },
    methods: {
        //funcao para inserir evento
        InsertEvent() {
            let event = {
                id: this.$store.getters.GetLastIdOfEvents,
                date: this.date,
                name: this.name,
                capacity: this.capacity,
                category: this.selectedCategory,
                course: this.selectedCourse,
                poster: this.poster,
                speaker: this.speaker,
                creatorId: this.userLogged,
                participants: [],
                comments: []
            }
            let result = this.$store.getters.verifyEvent(event)
            if(result){
                this.$store.dispatch("set_new_event",event)
                console.log(event)
                alert("O evento foi criado com sucesso")
            }
            else{
                alert("Existe algum erro, por favor verifique os dados")
            }
        }
    },
}
</script>