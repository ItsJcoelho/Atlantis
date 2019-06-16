<template>
    <div class="stats">
    <!-- NAVBAR -->
    <navBar/>
    <div class="imagem">
            <br>
            <br>
            <img src="https://png.pngtree.com/svg/20161222/stock_market_ranking_18666.png" class="inside" alt="...">
            <br>
            <br>
    </div>
    <br>
        <h1>Estatística</h1>
        <br>
        <br>
         <div class="charts">
            <canvas id="myChart1" width="800" height="500"></canvas>
         </div>
         <br>
         <br>
          <div class="charts">
            <canvas id="myChart2" width="800" height="500"></canvas>
         </div>
    </div>
</template>
<script>
import navBar from "@/components/navBar.vue";
import Chart from 'chart.js';
import api from '@/api/api.js';
export default {
    data() {
        return {
            labelsCourses: [],
            numbersCourses: [],
            labelsCategories: [],
            numbersCategories: []
        }
    },
    components:{
        navBar
    },
    async mounted() {
        //obter labels para os graficos
        let courses = []
        let categories = []
        let events = []
        await api.get("https://atlantisbyesmad.herokuapp.com/events").then(function (response) {
            events = response.data
        })
        await api.get("https://atlantisbyesmad.herokuapp.com/course").then(function (response) {
            courses = response.data
        })
        for (let i = 0; i < courses.length; i++) {
            this.labelsCourses.push(courses[i].name)
        }
        let sendCourses = []
        let counterCourses = 0
        for (let i = 0; i < courses.length; i++) {
            for (let j = 0; j < events.length; j++) {
                if (courses[i].name == events[j].course) {
                    counterCourses++
                }
            }
            sendCourses.push(counterCourses)
            counterCourses = 0
        }
        this.numbersCourses = sendCourses
        await api.get("https://atlantisbyesmad.herokuapp.com/categories").then(function (response) {
            categories = response.data
        })
        for (let i = 0; i < categories.length; i++) {
            this.labelsCategories.push(categories[i].name)
        }
        let sendCategories = []
        let counterCategories = 0
        for (let i = 0; i < categories.length; i++) {
            for (let j = 0; j < events.length; j++) {
                console.log(`${categories[i].name},${events[j].category}`)
                if (categories[i].name == events[j].category) {
                    counterCategories++
                }
            }
            sendCategories.push(counterCategories)
            counterCategories = 0
        }
        this.numbersCategories = sendCategories
        let canvas1 = document.getElementById("myChart1")
        let ctx1 = canvas1.getContext("2d")
        let chart1 = new Chart(ctx1,{
            type: "bar",
            data: {
                    labels: this.labelsCategories,
                    datasets: [{
                        label: 'Numero de Eventos por Categoria',
                        data: this.numbersCategories,
                        backgroundColor: ['rgba(0, 102, 102, 0.2)','rgba(0, 153, 204, 0.2)','rgba(0, 204, 255, 0.2)','rgba(102, 153, 153, 0.2)','rgba(0, 51, 102, 0.2)','rgba(51, 51, 255, 0.2)'],
                        borderColor: ['rgba(0, 102, 102,1)','rgba(0, 153, 204, 1)','rgba(0, 204, 255, 1)','rgba(102, 153, 153, 1)','rgba(0, 51, 102 1)','rgba(51, 51, 255, 1)'],
                        borderWidth: 1
                    }]
                },
                options: {
                    responsive: false,
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                    }
                }
        })
        let canvas2 = document.getElementById("myChart2")
        let ctx2 = canvas2.getContext("2d")
        let chart2 = new Chart(ctx2,{
            type: "bar",
            data: {
                    labels: this.labelsCourses,
                    datasets: [{
                        label: 'Numero de Eventos por Curso',
                        data: this.numbersCourses,
                        backgroundColor: ['rgba(0, 102, 102, 0.2)','rgba(0, 153, 204, 0.2)','rgba(0, 204, 255, 0.2)','rgba(102, 153, 153, 0.2)','rgba(0, 51, 102, 0.2)','rgba(51, 51, 255, 0.2)'],
                        borderColor: ['rgba(0, 102, 102,1)','rgba(0, 153, 204, 1)','rgba(0, 204, 255, 1)','rgba(102, 153, 153, 1)','rgba(0, 51, 102 1)','rgba(51, 51, 255, 1)'],
                        borderWidth: 1
                    }]
                },
                options: {
                    responsive: false,
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                    }
                }
        })
    },
}
</script>