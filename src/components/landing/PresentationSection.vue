<template>
  <div class="h-[80vh]">
    <div class="wrapper m-auto h-full flex items-center justify-center">
      <div
        data-scroll
        data-scroll-repeat="true"
        data-scroll-class="animate"
        data-scroll-speed="5"
        class="flex items-center present-bg"
      >
        <div class="flex flex-col justify-center max-w-[22em] pl-[2.5em]">
          <h2 class="font-bold text-[3em] pb-[1em] leading-[1em]">
            <span class="font-bold gradient">Get our</span>
            presentation
          </h2>
          <p class="font-light pr-[1em] join-text pb-[1.8em]">
            Here we have compiled all the key metrics and perspectives of the PlayWallet platform
          </p>
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
  width: var(--container-width);
}
.present-bg {
  width: calc(var(--index) * 43.3);
  height: calc(var(--index) * 16.36);
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(@/assets/img/presentation-bg.png);
}
.gradient {
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
  background-image: var(--text-gradient);
}
</style>
