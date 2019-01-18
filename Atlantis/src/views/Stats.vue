<template>
    <div class="stats">
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
import Chart from 'chart.js';
export default {
    data() {
        return {
            labelsCourses: [],
            numbersCourses: [],
            labelsCategories: [],
            numbersCategories: []
        }
    },
    mounted() {
        this.labelsCourses = this.$store.getters.GetArrayCoursesNamesForGrafs
        this.numbersCourses = this.$store.getters.GetDataCoursesForCharts
        this.labelsCategories = this.$store.getters.GetArrayCategoriesNamesForGrafs
        this.numbersCategories = this.$store.getters.GetDataCategoriesForCharts
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