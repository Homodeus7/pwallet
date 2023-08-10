<template>
  <h2 class="font-medium text-3xl pb-[1em]">My Assets</h2>
  <div class="grid grid-cols-2 gap-6 pb-[3em]">
    <base-card color="#242731" radius="16px" padding="30px 24px" class="flex flex-col gap-[1em]">
      <base-input label="Total PlayW" isValid background />
      <base-input label="Allocated PlayW" isValid background />
    </base-card>
    <base-card color="#242731" radius="16px" padding="30px 24px" class="flex flex-col gap-[1em]">
      <base-input label="Available PlayW" isValid background />
      <base-input label="Redeeming PlayW" isValid background />
    </base-card>
  </div>
</template>
<script lang="ts" setup>
import BaseCard from '@/components/base/BaseCard.vue'
import BaseInput from '@/components/base/BaseInput.vue'
</script>
