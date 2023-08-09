<template>
  <div class="px-[90px] py-[70px]">
    <div class="flex flex-col justify-between">
      <nfts-slider />
      <by-nft />
    </div>
  </div>
</template>
<script lang="ts" setup>
import NftsSlider from '@/components/dashboard/NftsSlider.vue'
import ByNft from '@/components/dashboard/ByNft.vue'
</script>
<style lang="scss" scoped></style>
