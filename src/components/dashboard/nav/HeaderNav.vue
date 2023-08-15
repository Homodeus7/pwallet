<template>
  <header
    class="fixded w-full py-[2.25em] pr-[3em] pl-[2em] z-20 bg-[#0f0f0f] border-b-2 border-b-[#2b2e41]"
  >
    <div class="w-full flex items-center justify-between lg:pl-[322px]">
      <burger-menu />
      <div class="hidden lg:flex flex-col items-start">
        <h2 class="font-medium text-[2em]">Hello world!</h2>
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
