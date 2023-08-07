<template>
  <div class="lg:h-[95vh] bg-black rounded-t-[3em] lg:rounded-t-[6em] background-img relative">
    <div
      data-scroll
      data-scroll-direction="vertical"
      data-scroll-speed="6"
      class="wrapper m-auto flex flex-col items-center lg:justify-end"
    >
      <img
        class="absolute -top-[7.5%] lg:-top-[12%] right-[10%] lg:right-0 z-100 star"
        src="@/assets/img/star.png"
      />
      <img
        data-scroll
        data-scroll-direction="vertical"
        data-scroll-speed="4"
        class="absolute bottom-[20%] right-0 z-[-1]"
        src="@/assets/img/footer_decor.png"
      />
      <div
        class="flex flex-col items-center justify-center bg-[#CAC6FF]/[10%] mb-[4.5em] px-[2.25em] py-[3.2em] lg:px-[8em] lg:py-[4em] rounded-[1.3em] lg:rounded-[2.7em] backdrop-blur-sm"
      >
        <h2 class="font-medium text-[1.9em] lg:text-[3em] leading-[1em] pb-6">
          Join the community
        </h2>
        <p class="join-text font-light text-[0.8em] lg:text-[1em] text-center pr-[1em] pb-[4em]">
          PlayWallet combines Web3's most comprehensive tools for creating and scaling your
          crypto-assets
        </p>
        <BaseSocial big />
      </div>
      <div
        class="w-full flex flex-col lg:flex-row items-center justify-between bg-[#CAC6FF]/[10%] py-[2em] px lg:pl-[2.5em] lg:pr-[9.3em] lg:py-[4em] rounded-[1.3em] lg:rounded-[2.7em] gap-[3em] lg:gap-[15.5em] backdrop-blur-sm"
      >
        <router-link to="/">
          <img class="w-[10em] lg:w-[15em]" src="@/assets/img/logo-gradient.svg" />
        </router-link>
        <div
          class="grid grid-cols-2 lg:grid-cols-3 items-center gap-x-[3em] gap-y-[2em] lg:gap-x-[5em] lg:gap-y-[2.3em]"
        >
          <a class="min-w-max" v-for="(link, idx) in menuLinks" :key="idx" :href="link.link">
            <span class="font-thin">{{ link.name }}</span>
          </a>
        </div>
        <BaseSocial background wborder class="items-center lg:items-start pt-[1em] lg:pt-0" />
      </div>
      <div
        class="w-full flex flex-col lg:flex-row items-center justify-end lg:justify-between h-[4em]"
      >
        <span class="font-thin text-[0.7em] lg:text-[0.9em] text-[#FFF]/[84%]">
          © 2023 PlayWallet. All right reserved.
        </span>
        <span class="font-thin text-[0.7em] lg:text-[0.9em] text-[#FFF]/[84%]">
          Terms & Conditions
        </span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import BaseSocial from '@/components/base/BaseSocial.vue'
import { RouterLink } from 'vue-router'

const menuLinks = reactive([
  {
    name: 'NFT',
    link: '#'
  },
  {
    name: 'Play Models',
    link: '#'
  },
  {
    name: 'Overview',
    link: '#'
  },
  {
    name: '$PlayW',
    link: '#'
  },
  {
    name: 'DAO',
    link: '#'
  },
  {
    name: 'Contacts',
    link: '#'
  }
])
</script>

<style lang="scss" scoped>
@import '@/assets/main.css';

.wrapper {
  width: 100%;
  padding: 3.5em 1em;
  @media (min-width: 768px) {
    width: var(--container-width);
  }
}
.join-text {
  max-width: calc(var(--index) * 18);
  @media (min-width: 768px) {
    max-width: calc(var(--index) * 17);
  }
}
.star {
  max-width: calc(var(--index) * 9);
  @media (min-width: 768px) {
    max-width: calc(var(--index) * 14.5);
  }
}
.background-img {
  @media (min-width: 768px) {
    background-image: url('@/assets/img/footer_sky.jpg');
    background-size: auto;
    background-repeat: no-repeat;
    z-index: 1;
  }
}
</style>
