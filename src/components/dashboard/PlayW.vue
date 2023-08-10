<template>
  <div class="py-[70px] mx-auto max-w-[1200px]">
    <div class="flex flex-col justify-between">
      <my-assets />
      <div class="grid grid-cols-2 grid-rows-1 gap-6 items-stretch pb-[3em]">
        <by-sell-card />
        <stake-card />
      </div>
      <current-stakes />
    </div>
  </div>
</template>
<script lang="ts" setup>
import MyAssets from '@/components/dashboard/MyAssets.vue'
import StakeCard from '@/components/dashboard/StakeCard.vue'
import BySellCard from '@/components/dashboard/BySellCard.vue'
import CurrentStakes from '@/components/dashboard/CurrentStakes.vue'
</script>
