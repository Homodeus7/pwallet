<template>
  <header-nav />
  <sidebar-nav />
  <main class="main-bg bg-[#161616] pl-[322px] pt-[124px]">
    <router-view />
  </main>
</template>

<script lang="ts" setup>
import { RouterView } from 'vue-router'
import SidebarNav from '@/components/dashboard/nav/SidebarNav.vue'
import HeaderNav from '@/components/dashboard/nav/HeaderNav.vue'
</script>
