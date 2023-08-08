<template>
  <div class="w-full mx-auto px-[2em]">
    <swiper
      :modules="modules"
      :slides-per-view="3"
      :space-between="30"
      navigation
      :pagination="{ clickable: true }"
    >
      <swiper-slide v-for="nft in nfts" :key="nft.name">
        <BaseNftCard
          :name="nft.name"
          :author="nft.author"
          :price="nft.price"
          :img="nft.img"
          class="my-[3em]"
        />
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup lang="ts">
import BaseNftCard from '@/components/base/BaseNftCard.vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination, A11y } from 'swiper/modules'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css'
import { reactive } from 'vue'

const modules = [Pagination, A11y, Navigation]

const nfts = reactive([
  { name: 'NFT Name_1', author: 'NFT Author', price: 19.123123, img: 'nft_1.png' },
  { name: 'NFT Name_2', author: 'NFT Author', price: 0.00000123123, img: 'nft_2.png' },
  { name: 'NFT Name_3', author: 'NFT Author', price: 0.12312, img: 'nft_3.png' },
  { name: 'NFT Name_1', author: 'NFT Author', price: 19.123123, img: 'nft_1.png' },
  { name: 'NFT Name_2', author: 'NFT Author', price: 0.00000123123, img: 'nft_2.png' },
  { name: 'NFT Name_3', author: 'NFT Author', price: 0.12312, img: 'nft_3.png' }
])
</script>

<style lang="scss">
@import '@/assets/main.css';
.swiper {
  z-index: 0 !important;
}

.swiper-pagination {
  bottom: 0px !important;
}
.swiper-pagination-bullet {
  opacity: 1;
  height: 10px;
  width: 10px;
  border: 1px solid #424242;
}
.swiper-pagination-bullet {
  margin: 0 5px !important;
}
.swiper-pagination-bullet-active {
  background-color: #fff;
  border: none;
}
</style>
