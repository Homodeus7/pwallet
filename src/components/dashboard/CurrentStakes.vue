<template>
  <div class="w-[975px] mx-auto flex flex-col gap-[1em] pb-[3em]">
    <h2 class="font-medium text-[2em]">Current stakes</h2>
    <div>
      <div class="grid grid-cols-6 justify-between">
        <div
          v-for="title in stakesTableTitles"
          :key="title"
          class="py-[1em] text-[0.8em] text-[#93989A] border-b border-b-[#2B2E41]"
        >
          {{ title }}
        </div>
      </div>
      <div
        v-for="(stake, idx) in stakes"
        :key="idx + stake.dates"
        class="grid grid-cols-6 justify-between items-center py-[1.5em] border-b border-b-[#2B2E41]"
      >
        <div>{{ stake.dates }}</div>
        <div>{{ stake.amount }} PlayW</div>
        <div>{{ stake.apy }}</div>
        <div>{{ stake.total }} PlayW</div>
        <div>{{ toReduction(stake.dividends) }} ETH - USDC</div>
        <div class="flex gap-2">
          <base-button primary>Claim</base-button>
          <base-button outlines>Unstake</base-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import BaseButton from '@/components/base/BaseButton.vue'
import { ref, reactive } from 'vue'
import { toReduction } from '@/use/utils'

const stakesTableTitles = ref(['From - To', 'Amount', 'APY', 'Total profit', 'Dividends', ''])

const stakes = reactive([
  {
    dates: '22.01.2024 - 22.01.2025',
    amount: 30.032,
    apy: '22,03 %',
    total: 12.3,
    dividends: 0.32
  },
  {
    dates: '22.01.2024 - 22.01.2025',
    amount: 30.032,
    apy: '22,03 %',
    total: 12.3,
    dividends: 0.32
  },
  {
    dates: '22.01.2024 - 22.01.2025',
    amount: 30.032,
    apy: '22,03 %',
    total: 12.3,
    dividends: 0.32
  },
  {
    dates: '22.01.2024 - 22.01.2025',
    amount: 30.032,
    apy: '22,03 %',
    total: 12.3,
    dividends: 0.32
  },
  {
    dates: '22.01.2024 - 22.01.2025',
    amount: 30.032,
    apy: '22,03 %',
    total: 12.3,
    dividends: 0.32
  },
  {
    dates: '22.01.2024 - 22.01.2025',
    amount: 30.032,
    apy: '22,03 %',
    total: 12.3,
    dividends: 0.32
  }
])
</script>

<style>
.pagination-container {
  display: flex;
  column-gap: 10px;
}
.paginate-buttons {
  height: 40px;
  width: 40px;
  border-radius: 20px;
  cursor: pointer;
}
.paginate-buttons:hover {
  color: #767eba;
}
.active-page {
  color: #767eba;
}
.active-page:hover {
}
#prev-button-active:hover {
  opacity: 0.5;
}
</style>
