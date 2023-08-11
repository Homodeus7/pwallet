<template>
  <base-card color="#242634" radius="16px" padding="24px" class="overflow-hidden">
    <div class="flex justify-between">
      <div class="flex flex-col justify-between relative">
        <div class="bg w-min" :class="props.rare">
          <img class="min-w-[90px] bg" :src="`/icons/${props.icon}`" />
        </div>
        <div class="flex flex-col gap-2 pt-[50px] pb-6">
          <h4 class="font-medium text-xl">{{ props.name }}</h4>
          <span class="text-[#93989A]">Distribute of 20% of the platform profits</span>
        </div>
        <div class="flex gap-5">
          <base-button primary class="w-[7.5em]">Buy</base-button>
          <div class="flex flex-col">
            <span class="text-xs text-[#93989A]">Price:</span>
            <div class="flex gap-2">
              <img src="@/assets/icon/ethereum.svg" />
              <span>{{ toReduction(props.price) }}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-col items-end justify-between">
        <span class="z-10">Total: {{ props.fps }} PCS</span>
        <div class="pb-10 mr-10 z-10 w-32 relative">
          <div class="bg" :class="props.rare">
            <img :src="`${props.img}`" />
          </div>
        </div>
      </div>
      <img class="absolute -top-2 -right-16 w-[340px] z-0 opacity-30" :src="`${props.img}`" />
    </div>
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
  top: -5%;
  bottom: 0;
  right: 0;
  left: -5%;
  width: 105%;
  height: 105%;
  opacity: 0.35;
  background: white;
  border-radius: 100px;
  filter: blur(10px);
}
.common::before {
  content: '';
  position: absolute;
  z-index: 0;
  top: -5%;
  bottom: 0;
  right: 0;
  left: -5%;
  width: 105%;
  height: 105%;
  opacity: 0.35;
  background: #5096ff;
  border-radius: 100px;
  filter: blur(10px);
}
.rare::before {
  content: '';
  position: absolute;
  z-index: 0;
  top: -5%;
  bottom: 0;
  right: 0;
  left: -5%;
  width: 105%;
  height: 105%;
  opacity: 0.35;
  background: #f468d5;
  border-radius: 100px;
  filter: blur(10px);
}
.legendary::before {
  content: '';
  position: absolute;
  z-index: 0;
  top: -5%;
  bottom: 0;
  right: 0;
  left: -5%;
  width: 105%;
  height: 105%;
  opacity: 0.35;
  background: #ffc736;
  border-radius: 100px;
  filter: blur(10px);
}
</style>
