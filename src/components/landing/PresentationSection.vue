<template>
  <div class="h-[80vh]">
    <div
      class="wrapper m-auto h-full flex items-center justify-center"
      data-scroll
      data-scroll-direction="vertical"
      data-scroll-speed="6"
    >
      <div class="flex items-center w-[1180px] h-[445px] present-bg">
        <div class="flex flex-col justify-center max-w-[390px] pl-[2.5em]">
          <h2 class="font-bold text-[3em] pb-[1em] leading-[1em]">
            <span class="font-bold gradient">Get our</span>
            presentation
          </h2>
          <p class="font-light pr-[1em] join-text pb-[1.8em]">
            Here we have compiled all the key metrics and perspectives of the PlayWallet platform
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
@import '@/assets/main.css';
.wrapper {
  width: var(--container-width);
}
.present-bg {
  background-repeat: no-repeat;
  background-image: url(@/assets/img/presentation-bg.png);
}
.gradient {
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
  background-image: var(--text-gradient);
}
</style>
