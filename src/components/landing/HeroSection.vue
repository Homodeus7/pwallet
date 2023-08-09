<template>
  <div class="h-[100vh] bg-black rounded-b-[3em] lg:rounded-b-[6em] background-img relative">
    <div class="wrapper m-auto flex flex-col">
      <header-nav class="z-50" />
      <div
        data-scroll
        data-scroll-direction="vertical"
        data-scroll-speed="6"
        class="mt-[3em] lg:mt-[6em]"
      >
        <hero-slider />
      </div>
    </div>
    <img
      class="absolute bottom-[10%] right-[7%] hidden lg:block -z-10 hero_decor"
      src="@/assets/img/hero_decor.png"
    />
    <img
      class="absolute top-0 left-[5%] lg:hidden -z-10 hero_decor"
      src="@/assets/img/hero_decor_m.png"
    />
    <img
      class="absolute bottom-[5%] translate-y-[5%] lg:-bottom-[65%] lg:-translate-y-[65%] right-[50%] translate-x-[50%] z-100 sphere"
      src="@/assets/img/login-sphere.png"
    />
    <base-social
      data-scroll
      data-scroll-direction="vertical"
      data-scroll-speed="2"
      oborder
      class="absolute bottom-[10%] right-[12%] hidden lg:block"
    />
  </div>
</template>
<script lang="ts" setup>
import HeaderNav from '@/components/landing/nav/HeaderNav.vue'
import HeroSlider from '@/components/landing/HeroSlider.vue'
import BaseSocial from '@/components/base/BaseSocial.vue'
</script>

<style lang="scss" scoped>
@import '@/assets/main.css';
.wrapper {
  width: 100%;
  padding: 0 1em;
  @media (min-width: 768px) {
    width: var(--container-width);
  }
}
.hero_decor {
  width: calc(var(--index) * 26);
  @media (min-width: 768px) {
    width: calc(var(--index) * 55);
  }
}
.sphere {
  width: calc(var(--index) * 24);
  @media (min-width: 768px) {
    width: calc(var(--index) * var(--side-img));
  }
}
.background-img {
  @media (min-width: 768px) {
    background-image: url('@/assets/img/hero_sky.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    z-index: 1;
  }
}
</style>
