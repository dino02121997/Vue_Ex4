<template>
  <canvas id="ChartBar"></canvas>
</template>

<script setup>
import { reactive, onMounted, defineProps } from 'vue'
import { Chart, registerables } from 'chart.js'
import { ref, watch } from 'vue'

const props = defineProps({
  ChartData: {
    type: Array,
    required: true
  }
})
let chartInstance = null

Chart.register(...registerables)
onMounted(() => {
  console.log('Component mounted!')

  renderChartBar()
})

function renderChartBar() {
  const ctx = document.getElementById('ChartBar')
  chartInstance = new Chart(ctx, {
    type: 'bar', // Replace with your desired chart type
    data: props.ChartData,
    options: {
      // Replace with your desired chart options
    }
  })
}
watch(props.ChartData, (newValue, oldValue) => {
  //console.log(`Count changed from ${oldValue} to ${newValue}`)

  chartInstance.data.datasets[0].data = newValue.datasets[0].data
  
  chartInstance.update()
});
</script>