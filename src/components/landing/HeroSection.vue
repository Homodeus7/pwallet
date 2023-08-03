<template>
  <div class="h-[100vh] rounded-b-[6em] background-img relative">
    <div class="wrapper m-auto flex flex-col">
      <HeaderSection />
      <div data-scroll data-scroll-direction="vertical" data-scroll-speed="6" class="mt-[6em]">
        <HeroSlider />
      </div>
    </div>
    <img
      data-scroll
      data-scroll-direction="vertical"
      data-scroll-speed="4"
      class="absolute bottom-[25%] right-[7%] z-[-1]"
      src="@/assets/img/hero_decor.png"
      alt="hero-sphere"
    />
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
import HeaderSection from '@/components/nav/HeaderSection.vue'
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
.background-img {
  background-image: url('@/assets/img/hero_sky.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  z-index: 1;
}
</style>
