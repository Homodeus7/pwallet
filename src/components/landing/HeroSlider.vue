<template>
  <div class="h-full">
    <swiper
      data-scroll
      data-scroll-direction="vertical"
      data-scroll-speed="6"
      :modules="modules"
      :slides-per-view="1"
      :pagination="{ clickable: true }"
      :mousewheel="{ forceToAxis: true }"
    >
      <swiper-slide v-for="_ in 3">
        <div class="flex flex-col gap-5 items-center p-8">
          <h1 class="font-thin text-6xl">
            Dive with
            <span class="font-bold">Play Wallet</span>
          </h1>
          <p class="font-thin text-xl max-w-[540px] text-center">
            Play Wallet is a fully on-chain protocol designed to empower you in navigating the
            crypto market according to uour preferences.
          </p>
          <div class="flex gap-4">
            <button class="py-3 px-10 border-r-fuchsia-100 border-2 rounded-2xl">
              Get started
            </button>
            <button class="py-3 px-10 border-r-fuchsia-100 border-2 rounded-2xl">Learn More</button>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination, A11y } from 'swiper/modules'
import 'swiper/css/pagination'
import 'swiper/css'
const modules = [Pagination, A11y]
</script>

<style>
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
