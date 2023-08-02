<template>
  <div class="h-[100vh] bg-black rounded-[6em] relative">
    <img
      class="absolute top-0 right-[50%] translate-x-[50%] z-100 sphere"
      src="@/assets/img/join-sphere.png"
      alt="hero-sphere"
    />
    <img
      class="absolute bottom-[-25%] right-[20%] translate-x-[20%] z-100 iphone"
      src="@/assets/img/iphone.png"
      alt="iphone-image"
    />
    <div
      data-scroll
      data-scroll-direction="vertical"
      data-scroll-speed="6"
      class="wrapper m-auto h-full flex items-center"
    >
      <div class="flex flex-col gap-[1.5em] relative">
        <h2 class="font-medium text-[3.70em]">Join to PlayWallet</h2>
        <p class="font-light pr-[1em] join-text">
          Play Wallet is a fully on-chain protocol designed to empower you in navigating the crypto
          market according to uour preferences.
        </p>
        <div class="border-[1px] border-[#FFF]/[12%] rounded-[1.9em] w-full p-[1.25em]">
          <div class="bg-[#FFF]/[8%] px-[4em] py-[1.9em] rounded-[1.5em] flex gap-[8em] content">
            <div v-for="(result, idx) in results" :key="idx" class="flex flex-col gap-1 z-10">
              <span class="font-bold text-[3.75em]">{{ result.amount }}</span>
              <span class="font-light text-[1.125em]">{{ result.name }}</span>
            </div>
          </div>
        </div>
        <img
          class="absolute bottom-[-35%] left-[-10%] z-100"
          src="@/assets/img/join-spike.png"
          alt="hero-sphere"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'

const results = reactive([
  {
    name: 'Users',
    amount: '294'
  },
  {
    name: 'Network',
    amount: '1'
  },
  {
    name: 'Investments',
    amount: '196k'
  }
])
</script>

<style lang="scss" scoped>
@import '@/assets/main.css';

.wrapper {
  width: var(--container-width);
}
.sphere {
  width: calc(var(--index) * var(--side-img));
}
.join-text {
  max-width: calc(var(--index) * 14.5);
}
.iphone {
  width: calc(var(--index) * 14.5);
  filter: drop-shadow(-10mm 17mm 10mm rgba(0, 0, 0, 0.6));
}

.content:after {
  content: '';
  position: absolute;
  z-index: 0;
  top: 20%;
  width: 90%;
  height: 90%;
  right: 5%;
  opacity: 0.35;
  border-radius: 24px;
  filter: blur(60px);
  background: #a168ff;
}
</style>
