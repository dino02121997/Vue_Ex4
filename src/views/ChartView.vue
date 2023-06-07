<template>
  <div>
    <h1>My Chart</h1>
    <ChartUser :ChartData="chartData" />
    <button @click="updateData">Update Data</button>
  </div>
</template>

<script setup>
import ChartUser from '../components/ChartUser.vue'
import { reactive } from 'vue'
const chartData = reactive({
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      borderWidth: 1
    }
  ]
})
function updateData() {
  // Update the chart data
  chartData.datasets[0].data = [40, 50, 60,29,10,3]
}
</script>