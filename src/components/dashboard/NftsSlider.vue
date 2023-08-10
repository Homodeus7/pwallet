<template>
  <h2 class="font-medium text-4xl">My NFT’s</h2>
  <div class="w-full mx-auto pb-[3em]">
    <swiper
      :modules="modules"
      :slides-per-view="3"
      :space-between="30"
      :navigation="{
        prevEl: prev,
        nextEl: next
      }"
      :pagination="{ clickable: true }"
      preload-images="false"
      lazy="lazy"
      class="mx-[3em]"
    >
      <swiper-slide v-for="nft in nfts" :key="nft.name" class="my-[3em]">
        <base-nft-card :name="nft.name" :author="nft.author" :price="nft.price" :img="nft.img" />
      </swiper-slide>
    </swiper>
    <div ref="prev" class="swiper-button-prev"></div>
    <div ref="next" class="swiper-button-next"></div>
  </div>
</template>

<script setup lang="ts">
import BaseNftCard from '@/components/base/BaseNftCard.vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination, A11y } from 'swiper/modules'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css'
import { reactive, ref } from 'vue'

const modules = [Pagination, A11y, Navigation]

const prev = ref(null)
const next = ref(null)

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
.swiper-button-prev,
.swiper-button-next {
  height: 36px;
  width: 36px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
}

.swiper-button-prev {
  left: -10px;
  background-repeat: no-repeat;
  background-image: url('@/assets/icon/arrow-circle-left.svg');
}

.swiper-button-next {
  right: -10px;
  background-repeat: no-repeat;
  background-image: url('@/assets/icon/arrow-circle-right.svg');
}
.swiper-button-next::after,
.swiper-button-prev::after {
  content: '';
}
</style>
