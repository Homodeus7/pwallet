<template>
  <base-card color="#242634" radius="16px" padding="24px" class="overflow-hidden">
    <div class="flex justify-between">
      <div class="flex flex-col justify-between relative z-10">
        <div class="w-min" :class="props.rare">
          <img class="min-w-[67px] lg:min-w-[90px]" :src="`/icons/${props.icon}`" />
        </div>
        <div class="flex flex-col gap-2 pt-[30px] lg:pt-[50px] pb-[1.5em]">
          <h4 class="font-medium text-lg lg:text-xl">{{ props.name }}</h4>
          <span class="text-[#93989A] pr-10 lg:pr-0"
            >Distribute of 20% of the platform profits</span
          >
        </div>
        <div class="flex flex-col-reverse gap-5">
          <base-button primary class="w-[7.5em] hidden lg:block">Buy</base-button>
          <div class="flex flex-col">
            <span class="text-xs text-[#93989A]">Price:</span>
            <div class="flex gap-2">
              <img class="py-2 lg:py-0" src="@/assets/icon/ethereum.svg" />
              <span class="text-[1.5em]">{{ toReduction(props.price) }}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-col items-end justify-center lg:justify-between z-10">
        <span class="hidden lg:block">Total: {{ props.fps }} PCS</span>
        <div class="lg:pb-10 lg:mr-10 w-32 relative pt-10 lg:pt-0">
          <div class="drop-shadow-2xl" :class="props.rare">
            <img class="w-[90%] lg:w-[100%]" :src="`${props.img}`" />
          </div>
        </div>
      </div>
      <img
        class="absolute -top-14 -right-32 lg:-top-2 lg:-right-16 w-[340px] z-0 opacity-30"
        :src="`${props.img}`"
      />
    </div>
    <base-button primary class="w-full lg:hidden mt-4 h-14">Buy</base-button>
  </base-card>
</template>

<script lang="ts" setup>
import BaseCard from '@/components/base/BaseCard.vue'
import BaseButton from '@/components/base/BaseButton.vue'
import { toReduction } from '@/use/utils'

interface NFT {
  icon: string
  img?: string
  name?: string
  rare: string
  fps?: string
  price: number
  backlight?: string
}

const props = defineProps<NFT>()
</script>

<style lang="scss" scoped>
.uncommon::before {
  content: '';
  position: absolute;
  z-index: 0;
  top: -2%;
  bottom: 0;
  right: 0;
  left: -7%;
  width: 105%;
  height: 105%;
  opacity: 0.35;
  background: white;
  border-radius: 100px;
  filter: blur(20px);
}
.common::before {
  content: '';
  position: absolute;
  z-index: 0;
  top: -2%;
  bottom: 0;
  right: 0;
  left: -7%;
  width: 105%;
  height: 105%;
  opacity: 0.35;
  background: #5096ff;
  border-radius: 100px;
  filter: blur(20px);
}
.rare::before {
  content: '';
  position: absolute;
  z-index: 0;
  top: -2%;
  bottom: 0;
  right: 0;
  left: -7%;
  width: 105%;
  height: 105%;
  opacity: 0.35;
  background: #f468d5;
  border-radius: 100px;
  filter: blur(20px);
}
.legendary::before {
  content: '';
  position: absolute;
  z-index: 0;
  top: -2%;
  bottom: 0;
  right: 0;
  left: -7%;
  width: 105%;
  height: 105%;
  opacity: 0.35;
  background: #ffc736;
  border-radius: 100px;
  filter: blur(20px);
}
</style>
