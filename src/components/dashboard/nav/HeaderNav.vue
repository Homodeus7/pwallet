<template>
  <header class="header">
    <div class="w-full flex justify-between pl-[322px]">
      <div>
        <h2 class="font-medium text-2xl">Hello world!</h2>
        <p class="text-sm text-[#9f9f9f]">This is your own PW Dashboard.</p>
      </div>
      <AccountNav />
    </div>
  </header>
</template>
<script lang="ts" setup>
import AccountNav from '@/components/dashboard/nav/AccountNav.vue'
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
