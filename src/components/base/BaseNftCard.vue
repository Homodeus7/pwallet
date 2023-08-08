<template>
  <base-card color="#242634" radius="16px">
    <div class="flex flex-col gap-[2em]">
      <div class="w-full rounded-xl">
        <img class="w-full first:bg-cover" :src="`/nfts/${props.img}`" />
      </div>
      <div class="flex flex-col">
        <h4 class="font-medium text-xl">{{ props.name }}</h4>
        <span class="text-[#93989A]">{{ props.author }}</span>
      </div>
      <div class="flex justify-between">
        <div class="flex flex-col w-full">
          <span class="text-xs text-[#93989A]">Current Bid</span>
          <div class="flex">
            <img src="@/assets/icon/ethereum.svg" />
            <span>{{ toReduction(props.price) }}</span>
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
