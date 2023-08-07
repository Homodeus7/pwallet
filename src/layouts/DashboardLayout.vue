<template>
  <SidebarLayout />
  <div class="pl-[322px]">
    <TheHeader />
    <RouterView />
  </div>
</template>

<script lang="ts" setup>
import SidebarLayout from '@/components/dashboard/SidebarLayout.vue'
import TheHeader from '@/components/dashboard/TheHeader.vue'
import { RouterView } from 'vue-router'
</script>
