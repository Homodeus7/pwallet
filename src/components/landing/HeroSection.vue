<template>
  <div class="h-[100vh] bg-black rounded-b-[6em] relative">
    <div class="wrapper m-auto flex flex-col">
      <HeaderView />
      <div data-scroll data-scroll-direction="vertical" data-scroll-speed="6" class="mt-[6em]">
        <HeroSlider />
      </div>
    </div>
    <img
      class="absolute bottom-0 right-[50%] translate-x-[50%] z-100 sphere"
      src="@/assets/img/hero-sphere.png"
      alt="hero-sphere"
    />
    <BaseSocial
      data-scroll
      data-scroll-direction="vertical"
      data-scroll-speed="2"
      oborder
      class="absolute bottom-[10%] right-[12%]"
    />
  </div>
</template>
<script lang="ts" setup>
import HeaderView from '@/components/nav/HeaderView.vue'
import HeroSlider from '@/components/landing/HeroSlider.vue'
import BaseSocial from '@/components/base/BaseSocial.vue'
</script>

<style lang="scss" scoped>
@import '@/assets/main.css';
.wrapper {
  width: var(--container-width);
}
.sphere {
  width: calc(var(--index) * var(--side-img));
}
</style>
