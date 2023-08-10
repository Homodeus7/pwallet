<template>
  <div class="py-[70px] mx-auto max-w-[1200px]">
    <div class="flex flex-col justify-between">
      <nfts-slider />
      <div class="grid grid-cols-2 grid-rows-1 gap-6 pb-[3em]">
        <nft-bridge />
        <stake-card />
      </div>
      <by-nft />
      <my-market />
    </div>
  </div>
</template>
<script lang="ts" setup>
import NftsSlider from '@/components/dashboard/NftsSlider.vue'
import ByNft from '@/components/dashboard/ByNft.vue'
import NftBridge from '@/components/dashboard/NftBridge.vue'
import MyMarket from '@/components/dashboard/MyMarket.vue'
</script>
<style lang="scss" scoped></style>
