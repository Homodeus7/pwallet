<template>
  <div class="h-full">
    <h2 class="font-medium text-[1.875em] mb-[1em]">TVL</h2>
    <base-card color="#242731" radius="20px" padding="24px 40px 24px 60px" class="flex flex-col">
      <div class="ml-4 mr-9 border-b border-b-[#656583]">
        <h4 class="font-light text-lg text-[#9291A5]">Statistics</h4>
        <h3 class="font-medium text-[2em] pb-4">TVL</h3>
      </div>
      <div id="chart">
        <apexchart
          type="area"
          theme="dark"
          height="350"
          :options="chartOptions"
          :series="series"
        ></apexchart>
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
    data: [0, 100000, 250000, 500000, 250000, 250000]
  }
])

const chartOptions = reactive({
  chart: {
    height: 350,
    type: 'area',
    stacked: false,
    toolbar: {
      show: false
    },
    zoom: {
      enabled: false
    }
  },
  animations: {
    enabled: true,
    easing: 'easeinout',
    speed: 800,
    animateGradually: {
      enabled: true,
      delay: 150
    },
    dynamicAnimation: {
      enabled: true,
      speed: 350
    }
  },
  colors: ['#4dc876'],
  stroke: {
    curve: 'smooth',
    width: '2'
  },
  dataLabels: {
    enabled: false
  },
  fill: {
    type: 'gradient',
    gradient: {
      opacityFrom: 0,
      opacityTo: 0
    }
  },
  tooltip: {
    shared: false,
    style: {
      fontSize: '13px',
      fontFamily: 'Ranua Trials',
      fontWeight: 'light'
    }
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
      show: false
    },
    axisTicks: {
      show: false
    },
    tooltip: {
      enabled: false,
      theme: 'dark'
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
      show: false,
      color: '#78909C',
      offsetX: 0,
      offsetY: 0
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
    strokeDashArray: 0
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
}
</style>
