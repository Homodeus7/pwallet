<template>
  <div class="py-[70px] mx-auto max-w-[1200px]">
    <div class="flex flex-col justify-between">
      <nfts-slider />
      <by-nft />
      <my-market />
    </div>
  </div>
</template>
<script lang="ts" setup>
import NftsSlider from '@/components/dashboard/NftsSlider.vue'
import ByNft from '@/components/dashboard/ByNft.vue'
import MyMarket from '@/components/dashboard/MyMarket.vue'
</script>
<style lang="scss" scoped></style>
