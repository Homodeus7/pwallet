<template>
  <div class="px-[90px] py-[70px]">
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
