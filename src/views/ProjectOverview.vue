<template>
  <div class="py-[70px] mx-auto max-w-[1200px] h-full">
    <div class="flex flex-col gap-[2.25em] justify-between">
      <tvl-area />
      <transactions-bar />
    </div>
  </div>
</template>
<script lang="ts" setup>
import TransactionsBar from '@/components/dashboard/charts/TransactionsBar.vue'
import TvlArea from '@/components/dashboard/charts/TvlArea.vue'
</script>
