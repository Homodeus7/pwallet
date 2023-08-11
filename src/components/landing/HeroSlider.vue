<template>
  <div>
    <swiper
      :modules="modules"
      :slides-per-view="1"
      :pagination="{ clickable: true }"
      :mousewheel="{ forceToAxis: true }"
    >
      <swiper-slide v-for="_ in 3">
        <div class="flex flex-col gap-5 items-center pb-[2em] px-[1em]">
          <h1
            class="flex flex-col lg:flex-row leading-[1.2em] font-light text-[2.5em] text-center lg:text-[3.5em]"
          >
            Dive with
            <span class="font-bold">Play Wallet</span>
          </h1>
          <p class="font-light text-[0.9em] text-center hero-text pb-[5.2em] lg:pb-[1em]">
            Play Wallet is a fully on-chain protocol designed to empower you in navigating the
            crypto market according to uour preferences.
          </p>
          <div class="flex flex-col lg:flex-row gap-4 w-full lg:max-w-[25.25em] px-[1em]">
            <base-button white class="w-full"> Get started </base-button>
            <base-button outlines class="w-full"> Learn more </base-button>
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
import BaseButton from '@/components/base/BaseButton.vue'

const modules = [Pagination, A11y]
</script>

<style lang="scss">
@import '@/assets/main.css';

.hero-text {
  max-width: calc(var(--index) * 32);
  @media (min-width: 768px) {
    max-width: calc(var(--index) * 20);
  }
}

.swiper-pagination {
  bottom: 0px !important;
}
.swiper-pagination-bullet {
  opacity: 1;
  height: 12px;
  width: 12px;
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
