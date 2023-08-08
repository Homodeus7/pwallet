<template>
  <HeaderNav />
  <SidebarNav />
  <main class="main-bg bg-[#161616] pl-[322px] pt-[124px]">
    <div class="px-[90px] py-[70px]">
      <h2 class="font-medium text-4xl">My NFT’s</h2>
      <div class="flex flex-col justify-between">
        <NftsSlider />
        <ByNft />
      </div>
      <div>content</div>
    </div>
  </main>
</template>
<script lang="ts" setup>
import SidebarNav from '@/components/dashboard/nav/SidebarNav.vue'
import HeaderNav from '@/components/dashboard/nav/HeaderNav.vue'
import NftsSlider from '@/components/dashboard/NftsSlider.vue'
import ByNft from '@/components/dashboard/ByNft.vue'
</script>
<style lang="scss" scoped></style>
