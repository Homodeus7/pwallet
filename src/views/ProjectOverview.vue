<template>
  <div class="py-[70px] mx-auto max-w-[1200px] h-full">
    <div class="flex flex-col gap-[2.25em] justify-between">
      <tvl-area />
      <users-bar />
      <transactions-bar />
    </div>
  </div>
</template>
<script lang="ts" setup>
import TvlArea from '@/components/dashboard/charts/TvlArea.vue'
import TransactionsBar from '@/components/dashboard/charts/TransactionsBar.vue'
import UsersBar from '@/components/dashboard/charts/UsersBar.vue'
</script>
