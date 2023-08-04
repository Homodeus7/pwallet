<template>
  <div class="h-[73vh] lg:h-[100vh] bg-black rounded-[3em] lg:rounded-[6em] relative">
    <img
      class="absolute -bottom-[20%] translate-y-[20%] right-[50%] translate-x-[50%] lg:-bottom-[10%] lg:translate-y-[10%] lg:right-[20%] lg:translate-x-[20%] z-100 iphone"
      src="@/assets/img/iphone.png"
      alt="iphone-image"
    />
    <div
      data-scroll
      data-scroll-direction="vertical"
      data-scroll-speed="6"
      class="wrapper m-auto h-full flex lg:items-center"
    >
      <div class="flex flex-col items-center lg:items-start gap-[1.5em] relative pt-[3em] lg:pt-0">
        <h2 class="font-medium text-[2em] lg:text-[3.70em]">Join to PlayWallet</h2>
        <p
          class="font-light text-[0.95em] lg:text-[1em] pr-[1em] join-text text-center lg:text-left"
        >
          Play Wallet is a fully on-chain protocol designed to empower you in navigating the crypto
          market according to uour preferences.
        </p>
        <div class="border-[1px] border-[#FFF]/[12%] rounded-[1.9em] w-full p-[1.25em] relative">
          <div
            class="bg-[#FFF]/[8%] px-[1.5em] lg:px-[4em] py-[1.5em] lg:py-[1.9em] rounded-[1.5em] flex gap-[2em] lg:gap-[8em] content"
          >
            <div
              v-for="(result, idx) in results"
              :key="idx"
              class="flex flex-col gap-[0.25em] z-10"
            >
              <span class="font-bold text-[2em] lg:text-[3.70em]">{{ result.amount }}</span>
              <span class="font-light text-[0.9em] lg:text-[1.125em] text-[#A1B1C9]">{{
                result.name
              }}</span>
            </div>
          </div>
          <img
            class="absolute -bottom-[45%] lg:-bottom-[35%] lg:-left-[10%] z-100 spike"
            src="@/assets/img/join-spike.png"
            alt="hero-sphere"
          />
        </div>
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
  width: 100%;
  padding: 0 1em;
  @media (min-width: 768px) {
    width: var(--container-width);
  }
}
.join-text {
  @media (min-width: 768px) {
    max-width: calc(var(--index) * 14.5);
  }
}
.iphone {
  width: calc(var(--index) * 18);
  filter: drop-shadow(-10mm 17mm 10mm rgba(0, 0, 0, 0.6));
  @media (min-width: 768px) {
    width: calc(var(--index) * 14);
  }
}
.spike {
  max-width: calc(var(--index) * 8);
  @media (min-width: 768px) {
    max-width: calc(var(--index) * 14.5);
  }
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
