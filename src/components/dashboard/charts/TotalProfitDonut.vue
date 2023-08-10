<template>
  <div class="w-full">
    <h2 class="font-medium text-3xl pb-[1em]">Total Profit</h2>
    <base-card color="#242731" radius="16px" padding="20px">
      <div id="chart" class="w-[473px]">
        <apexchart type="donut" :options="chartOptions" :series="series"></apexchart>
      </div>
    </base-card>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import BaseCard from '@/components/base/BaseCard.vue'
const series = reactive([90, 150, 100])

const chartOptions = reactive({
  chart: {
    type: 'donut'
  },
  colors: ['#6c5dd3', '#ffb7f4', '#1d1f24'],
  stroke: {
    width: 0
  },
  plotOptions: {
    pie: {
      donut: {
        size: '65%',
        labels: {
          show: false
        }
      }
    }
  },
  labels: ['Templates', 'Themes', ''],
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
      horizontal: 5,
      vertical: 5
    }
  }
})
</script>
