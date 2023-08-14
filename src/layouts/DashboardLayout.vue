<template>
  <div class="w-[100vw] h-full">
    <header-nav />
    <sidebar-nav />
    <main class="bg-[#161616] lg:ml-[322px] pt-[124px] h-full">
      <router-view />
    </main>
  </div>
</template>

<script lang="ts" setup>
import { RouterView } from 'vue-router'
import SidebarNav from '@/components/dashboard/nav/SidebarNav.vue'
import HeaderNav from '@/components/dashboard/nav/HeaderNav.vue'
</script>
