<template>
  <HeaderSection />
  <div
    class="2xl:max-w-[1380px] max-w-[1280px] mx-auto min-h-[100vh] flex flex-col gap-10 py-14 flex-auto"
  >
    <RouterView />
  </div>
  <FooterSection />
</template>

<script lang="ts" setup>
import { RouterView } from 'vue-router'
import HeaderSection from '@/components/nav/HeaderSection.vue'
import FooterSection from '@/components/nav/FooterSection.vue'
</script>
