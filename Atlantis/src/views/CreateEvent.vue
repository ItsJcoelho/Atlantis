<template>
  <div class="create-event">
    <h1>This is The create event Page</h1>
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
                <label for="posterEvent">Orador</label>
                <input type="text" class="form-control" id="posterEvent" placeholder="Link do Poster" v-model="poster" required>
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
    created() {
        this.courses = this.$store.getters.getCourses
        this.categories = this.$store.getters.getCategories
        this.userLogged = this.$store.getters.getUserId
    },
    methods: {
        InsertEvent() {
            let event = {
                id: this.$store.getters.getLastId,
                date: this.date,
                name: this.name,
                capacity: this.capacity,
                category: this.selectedCategory,
                course: this.selectedCourse,
                poster: this.poster,
                speaker: this.speaker,
                creatorId: this.userLogged,
                participants: []
            }
            let result = this.$store.getters.verifyEvent(event)
            if(result){
                alert("Criado")
            }
            else{
                alert("Deu erro")
            }
        }
    },
}
</script>