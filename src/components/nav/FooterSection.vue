<template>
  <div class="h-[95vh] bg-black rounded-t-[6em] background-img relative">
    <div
      data-scroll
      data-scroll-direction="vertical"
      data-scroll-speed="6"
      class="wrapper m-auto h-full flex flex-col items-center justify-end"
    >
      <img
        class="absolute top-[-12%] right-0 z-100"
        src="@/assets/img/star.png"
        alt="hero-sphere"
      />
      <img
        data-scroll
        data-scroll-direction="vertical"
        data-scroll-speed="4"
        class="absolute bottom-[20%] right-0 z-[-1]"
        src="@/assets/img/footer_decor.png"
        alt="hero-sphere"
      />
      <div
        class="flex flex-col items-center justify-center bg-[#CAC6FF]/[10%] mb-[4.5em] px-[8em] py-[4em] rounded-[2.7em] backdrop-blur-sm"
      >
        <h2 class="font-medium text-[3em] leading-[1em] pb-6">Join the community</h2>
        <p class="join-text font-light text-center pr-[1em] pb-[4em]">
          PlayWallet combines Web3's most comprehensive tools for creating and scaling your
          crypto-assets
        </p>
        <BaseSocial big />
      </div>
      <div
        class="w-full flex items-center justify-between bg-[#CAC6FF]/[10%] pl-[2.5em] pr-[9.3em] py-[4em] rounded-[2.7em] gap-[15.5em] backdrop-blur-sm"
      >
        <router-link to="/">
          <img src="@/assets/img/logo-gradient.svg" />
        </router-link>
        <div class="grid grid-cols-3 items-center gap-x-[5em] gap-y-[2.3em]">
          <a class="min-w-max" v-for="(link, idx) in menuLinks" :key="idx" :href="link.link">
            <span class="font-thin">{{ link.name }}</span>
          </a>
        </div>
        <BaseSocial background wborder />
      </div>
      <div class="w-full flex items-center justify-between h-[4em]">
        <span class="font-thin text-[0.9em] text-[#FFF]/[84%]">
          © 2023 PlayWallet. All right reserved.
        </span>
        <span class="font-thin text-[0.8em] text-[#FFF]/[84%]"> Terms & Conditions </span>
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
  width: var(--container-width);
}
.join-text {
  max-width: calc(var(--index) * 17);
}

.background-img {
  background-image: url('@/assets/img/footer_sky.jpg');
  background-size: auto;
  background-repeat: no-repeat;
  z-index: 1;
}
</style>
