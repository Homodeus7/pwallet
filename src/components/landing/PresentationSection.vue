<template>
  <div class="lg:h-[80vh]">
    <div class="wrapper m-auto h-full flex items-center justify-center mt-[4em] mb-[8em]">
      <div
        data-scroll
        data-scroll-repeat="true"
        data-scroll-class="animate"
        data-scroll-speed="5"
        class="flex items-center present-bg"
      >
        <div
          class="h-full flex flex-col items-center justify-between lg:justify-center lg:max-w-[22em] pt-[3em] pb-[2.5em] px-[1.7em] lg:pl-[2.5em]"
        >
          <div>
            <h2
              class="font-bold text-[2em] lg:text-[3em] pb-[0.5em] lg:pb-[1em] leading-[1em] tracking-tighter"
            >
              <span class="font-bold gradient">Get our</span>
              presentation
            </h2>
            <p
              class="font-light text-[0.9em] lg:text-[1em] text-center lg:text-left pr-[1em] pb-[1.8em]"
            >
              Here we have compiled all the key metrics and perspectives of the PlayWallet platform
            </p>
          </div>
          <div class="flex gap-4 items-center">
            <img class="w-[2em]" src="@/assets/img/pdf.png" />
            <base-button outlines>Download our Pitchdeck</base-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import BaseButton from '@/components/base/BaseButton.vue'
</script>

<style lang="scss" scoped>
@import '@/assets/main.css';

.wrapper {
  width: 100%;
  padding: 0 1em;
  @media (min-width: 768px) {
    width: var(--container-width);
  }
}
.present-bg {
  width: calc(var(--index) * 26.05);
  height: calc(var(--index) * 50.5);
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(@/assets/img/presentation-m-bg.png);
  @media (min-width: 768px) {
    width: calc(var(--index) * 43.3);
    height: calc(var(--index) * 16.36);
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url(@/assets/img/presentation-bg.png);
  }
}
.gradient {
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
  background-image: var(--text-gradient);
}
</style>
