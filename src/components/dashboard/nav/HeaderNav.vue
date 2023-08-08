<template>
  <header>
    <div class="header flex justify-between">
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
  background: #0f0f0f;
  border-bottom: 2px solid #2b2e41;
  margin-left: 322px;
  padding: 0 50px 0 30px;
  height: 124px;
  display: flex;
  align-items: center;
  z-index: 1;
  position: relative;
}
</style>
