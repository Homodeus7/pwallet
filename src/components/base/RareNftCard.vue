<template>
  <base-card color="#242634" radius="16px" padding="24px" class="overflow-hidden">
    <div class="flex justify-between">
      <div class="w-full flex flex-col justify-between">
        <img class="absolute w-min" :src="`/icons/${props.icon}`" />
        <div class="flex flex-col gap-2 pt-[160px] pb-6">
          <h4 class="font-medium text-xl">{{ props.name }}</h4>
          <span class="text-[#93989A]">Distribute of 20% of the platform profits</span>
        </div>
        <div class="flex gap-5">
          <base-button primary class="w-[7.5em]">Buy</base-button>
          <div class="flex flex-col">
            <span class="text-xs text-[#93989A]">Price:</span>
            <div class="flex">
              <img src="@/assets/icon/ethereum.svg" />
              <span>{{ toReduction(props.price) }}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-col items-end justify-between">
        <span class="z-10">Total: {{ props.fps }} PCS</span>
        <div class="pb-10 mr-10 z-10 w-32">
          <img class="" :src="`${props.img}`" />
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
  rare?: string
  fps?: string
  price: number
}

const props = defineProps<NFT>()
</script>
