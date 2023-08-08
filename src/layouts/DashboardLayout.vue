<template>
  <SidebarNav />
  <HeaderNav />
  <main class="main-bg">
    <RouterView />
  </main>
</template>

<script lang="ts" setup>
import SidebarNav from '@/components/dashboard/nav/SidebarNav.vue'
import HeaderNav from '@/components/dashboard/nav/HeaderNav.vue'
import { RouterView } from 'vue-router'
</script>
<style lang="scss" scoped>
.main-bg {
  height: 100%;
  width: 100%;
  margin-left: 322px;
  background: #161616;
}
</style>
