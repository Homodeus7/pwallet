<template>
  <div class="grid grid-cols-2 gap-6">
    <rare-nft-card
      v-for="nft in nfts"
      :key="nft.name"
      :name="nft.name"
      :rare="nft.rare"
      :price="nft.price"
      :img="nft.img"
      :icon="nft.icon"
      :fps="nft.fps"
      class="my-[3em]"
    />
  </div>
</template>
<script lang="ts" setup>
import RareNftCard from '@/components/base/RareNftCard.vue'
import { reactive } from 'vue'
const nfts = reactive([
  {
    name: 'Uncommon NFT',
    icon: 'uncommon.svg',
    rare: 'uncommon',
    price: 19.123123,
    img: '/img/uncommon_nft.png',
    fps: '400'
  },
  {
    name: 'Common NFT',
    icon: 'common.svg',
    rare: 'common',
    price: 0.00000123123,
    img: '/img/common_nft.png',
    fps: '400'
  },
  {
    name: 'Rare NFT',
    icon: 'rare.svg',
    rare: 'rare',
    price: 0.12312,
    img: '/img/rare_nft.png',
    fps: '400'
  },
  {
    name: 'Legendary NFT',
    icon: 'legendary.svg',
    rare: 'legendary',
    price: 19.123123,
    img: '/img/legendary_nft.png',
    fps: '400'
  }
])
</script>
