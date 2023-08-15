<template>
  <base-card color="#242634" radius="16px" class="p-[0.75em]">
    <div class="flex flex-col gap-[1em] lg:gap-[2em]">
      <div
        class="min-h-[195px] lg:w-full bg-cover bg-no-repeat rounded-xl"
        :style="{ backgroundImage: `url(/nfts/${props.img})` }"
      ></div>
      <div class="flex flex-col lg:px-[0.75em]">
        <h4 class="font-medium lg:text-xl">{{ props.name }}</h4>
        <span class="text-[#93989A] text-xs lg:text-base">{{ props.author }}</span>
      </div>
      <div class="flex justify-between flex-col lg:flex-row gap-[1em] lg:p-[0.75em]">
        <div class="flex flex-col w-full">
          <span class="text-[10px] lg:text-xs text-[#93989A]">Current Bid</span>
          <div class="flex gap-2">
            <img src="@/assets/icon/ethereum.svg" />
            <span class="text-sm lg:text-base">{{ toReduction(props.price) }}</span>
          </div>
        </div>
        <base-button primary class="w-full">Sell</base-button>
      </div>
    </div>
  </base-card>
</template>

<script lang="ts" setup>
import BaseCard from '@/components/base/BaseCard.vue'
import BaseButton from '@/components/base/BaseButton.vue'
import { toReduction } from '@/use/utils'

interface NFT {
  img?: string
  name?: string
  author?: string
  price: number
}

const props = defineProps<NFT>()
</script>
