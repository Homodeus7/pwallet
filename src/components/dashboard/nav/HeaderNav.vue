<template>
  <header class="header">
    <div class="w-full flex items-center justify-between lg:pl-[322px]">
      <burger-menu />
      <div class="hidden lg:flex flex-col items-start">
        <h2 class="font-medium text-2xl">Hello world!</h2>
        <p class="text-sm text-[#9f9f9f]">This is your own PW Dashboard.</p>
      </div>
      <account-nav />
    </div>
  </header>
</template>
<script lang="ts" setup>
import AccountNav from '@/components/dashboard/nav/AccountNav.vue'
import BurgerMenu from '@/components/dashboard/nav/BurgerMenu.vue'
</script>
<style lang="scss" scoped>
.header {
  position: fixed;
  width: 100%;
  background: #0f0f0f;
  border-bottom: 2px solid #2b2e41;
  padding: 35px 50px 35px 30px;
  display: flex;
  align-items: center;
  z-index: 20;
}
</style>
