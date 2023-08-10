<template>
  <base-card color="#242634" radius="16px" padding="35px" width="920px" height="410px">
    <div id="chart" class="w-[550px]">
      <apexchart type="donut" :options="chartOptions" :series="series"></apexchart>
    </div>
  </base-card>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import BaseCard from '@/components/base/BaseCard.vue'
const series = reactive([590, 250, 150, 150])

const chartOptions = reactive({
  chart: {
    type: 'donut'
  },
  colors: ['#FFFFFF', '#4DC876', '#F468D5', '#FF9736'],
  stroke: {
    width: 0
  },
  plotOptions: {
    pie: {
      donut: {
        size: '45%',
        labels: {
          show: false
        }
      }
    }
  },
  labels: ['Uncommon', 'Common', 'Rare', 'Legendary'],
  dataLabels: { enabled: false },
  states: {
    hover: {
      filter: 'none'
    }
  },
  legend: {
    show: true,
    position: 'right',
    offsetY: 50,
    floating: false,
    fontSize: '18px',
    fontWeight: 400,

    markers: {
      width: 20,
      height: 20
    },
    itemMargin: {
      horizontal: 10,
      vertical: 10
    }
  }
})
</script>
