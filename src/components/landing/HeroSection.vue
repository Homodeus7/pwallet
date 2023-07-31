<template>
  <div class="h-[100vh] bg-black rounded-b-[100px] relative">
    <div class="max-w-[88rem] m-auto flex flex-col">
      <HeaderView />
      <div class="mt-32">
        <HeroSlider />
      </div>
    </div>
    <img
      class="absolute bottom-0 right-[50%] translate-x-[50%] z-100"
      src="@/assets/img/hero-sphere.png"
      alt="hero-sphere"
    />
  </div>
</template>
<script lang="ts" setup>
import HeaderView from '@/components/nav/HeaderView.vue'
import HeroSlider from '@/components/landing/HeroSlider.vue'
</script>
