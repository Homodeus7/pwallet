<template>
  <div class="h-[100vh] bg-black rounded-[100px] relative">
    <img
      class="absolute top-0 right-[50%] translate-x-[50%] z-100"
      src="@/assets/img/join-sphere.png"
      alt="hero-sphere"
    />
    <div class="max-w-[88rem] m-auto h-full flex items-center">
      <div class="flex flex-col gap-6">
        <h1 class="font-bold text-6xl">Join to PlayWallet</h1>
        <p class="font-thin pr-4 max-w-[385px]">
          Play Wallet is a fully on-chain protocol designed to empower you in navigating the crypto
          market according to uour preferences.
        </p>
        <div class="border-[1px] border-[#FFF]/[12%] rounded-[30px] w-full p-5">
          <div class="bg-[#FFF]/[8%] px-16 py-8 rounded-[24px] flex gap-32 content">
            <div v-for="(result, idx) in results" :key="idx" class="flex flex-col gap-1 z-10">
              <span class="font-bold text-6xl">{{ result.amount }}</span>
              <span class="font-thin text-lg">{{ result.name }}</span>
            </div>
          </div>
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
<style>
.content:after {
  content: '';
  position: absolute;
  z-index: 0;
  top: 15%;
  width: 90%;
  height: 70%;
  right: 5%;
  opacity: 0.35;
  border-radius: 24px;
  filter: blur(60px);
  background: #a168ff;
}
</style>
