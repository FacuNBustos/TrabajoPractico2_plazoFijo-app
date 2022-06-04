<template>
  <Bar
    :chart-options="chartOptions"
    :chart-data="chartData"
    :chart-id="chartId"
    :dataset-id-key="datasetIdKey"
    :plugins="plugins"
    :css-classes="cssClasses"
    :styles="styles"
    :width="width"
    :height="height"
  />
</template>

<script>
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
    name: 'BarChart',
    components: { Bar },
    props: {
        beginning: {
            type: Array,
            default: () => []
        },
        final: {
            type: Array,
            default: () => []
        },
        chartId: {
        type: String,
        default: 'bar-chart'
        },
        datasetIdKey: {
        type: String,
        default: 'label'
        },
        width: {
        type: Number,
        default: 650
        },
        height: {
        type: Number,
        default: 300
        },
        cssClasses: {
        default: '',
        type: String
        },
        styles: {
        type: Object,
        default: () => {}
        },
        plugins: {
        type: Object,
        default: () => {}
        }
    },
    computed: {
        log() {
            console.log(this.amount);
        }
    },
    data() {
        return {
        chartData: {
            labels: [ '1st', '2nd', '3th', '4th' ],
            datasets: [
                {
                    data: this.beginning,
                    label: 'Starting amount',
                    backgroundColor: '#fd5c63'
                },
                {
                    data: this.final,
                    label: 'Final amount',
                    backgroundColor: '#32de84'
                }
            ]
        },
        chartOptions: {
            responsive: false
        }
        }
    }
}
</script>