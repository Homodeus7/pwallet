<template>
  <SidebarNav />
  <div class="pl-[322px]">
    <HeaderNav />
    <main class="main-bg">
      <RouterView class="h-full" />
    </main>
  </div>
</template>

<script lang="ts" setup>
import SidebarNav from '@/components/dashboard/nav/SidebarNav.vue'
import HeaderNav from '@/components/dashboard/nav/HeaderNav.vue'
import { RouterView } from 'vue-router'
</script>
<style lang="scss" scoped>
.main-bg {
  height: 100%;
  background: #161616;
}
</style>
