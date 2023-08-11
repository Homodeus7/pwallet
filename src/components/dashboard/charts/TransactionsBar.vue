<template>
  <div class="h-full">
    <h2 class="font-medium text-3xl mb-[1em]">Transactions</h2>
    <base-card color="#242731" radius="20px" padding="24px 40px 24px 60px" class="flex flex-col">
      <div class="ml-4 mr-2 border-b border-b-[#656583]">
        <h4 class="font-light text-lg text-[#9291A5]">Statistics</h4>
        <h3 class="font-medium text-2xl pb-4">Transactions</h3>
      </div>
      <div id="chart">
        <apexchart type="bar" height="380" :options="chartOptions" :series="series"></apexchart>
      </div>
    </base-card>
  </div>
</template>

<script lang="ts" setup>
import BaseCard from '@/components/base/BaseCard.vue'
import { reactive } from 'vue'

const series = reactive([
  {
    name: '$',
    data: [150000, 100000, 250000, 500000, 250000, 200000, 250000]
  }
])

const chartOptions = reactive({
  chart: {
    height: 380,
    type: 'bar',
    stacked: false,
    toolbar: {
      show: false
    },
    zoom: {
      enabled: false
    }
  },
  plotOptions: {
    bar: {
      borderRadius: 10,
      borderBottom: false
    }
  },
  colors: ['#3988FF'],
  dataLabels: {
    enabled: false
  },
  tooltip: {
    enabled: false
  },
  xaxis: {
    categories: ['1 Week', '2 Week', '3 Week', '4 Week', '5 Week', '6 Week', '7 Week'],
    labels: {
      show: true,
      maxHeight: 120,
      style: {
        colors: '#ffffff',
        fontSize: '14px',
        fontFamily: 'Inter, sans-serif',
        fontWeight: 500,
        cssClass: 'apexcharts-xaxis-label'
      }
    },
    axisBorder: {
      show: true,
      color: '#66686f'
    },
    axisTicks: {
      show: false
    },
    tooltip: {
      enabled: false
    },
    crosshairs: {
      show: true,
      position: 'back',
      stroke: {
        color: '#23A04D',
        width: 1,
        dashArray: 0
      }
    }
  },
  yaxis: {
    show: true,
    showAlways: false,
    showForNullSeries: true,
    seriesName: undefined,
    labels: {
      show: true,
      align: 'center',
      minWidth: 0,
      maxWidth: 140,
      style: {
        colors: ['#FFF'],
        fontSize: '14px',
        fontFamily: 'Inter, sans-serif',
        fontWeight: 500,
        cssClass: 'apexcharts-yaxis-label'
      }
    },
    axisBorder: {
      show: true,
      color: '#66686f'
    },
    axisTicks: {
      show: false
    },
    crosshairs: {
      show: true,
      position: 'back',
      stroke: {
        color: '#ffffff',
        width: 1,
        dashArray: 0
      }
    },
    tooltip: {
      enabled: false,
      marker: {
        show: false
      }
    }
  },
  grid: {
    show: true,
    borderColor: '#454750',
    strokeDashArray: 6
  }
})
</script>
<style lang="scss">
#chart .apexcharts-tooltip {
  color: white;
  text-align: center;
  background-color: #0a0a0a;
  border: none;
  border-radius: 6px;
  min-width: 176px;
}

#chart .apexcharts-tooltip-title {
  display: none;
  color: white;
  text-align: center;
  background-color: #0a0a0a;
  border: none;
  border-radius: 6px;
  min-width: 176px;
}
</style>
