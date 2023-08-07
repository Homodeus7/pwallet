<template>
  <div class="lg:h-[100vh]">
    <div
      class="wrapper h-full m-auto flex items-end justify-center mt-[21em] lg:mt-0"
      data-scroll
      data-scroll-direction="horizontal"
      data-scroll-speed="4"
    >
      <div class="flex flex-col items-center w-full pb-[3.5em]">
        <h1 class="font-medium text-[1.9em] lg:text-[3.7em] pb-[0.5em] lg:pb-0">
          Discover our Roadmap
        </h1>
        <p class="font-light text-[0.8em] lg:text-[1em] pr-[1.2em] lg:pb-[5.2em]">
          From mid 2023 to mid 2024
        </p>
        <div class="flex flex-col lg:flex-row h-full w-full">
          <div v-for="(event, idx) in events" :key="idx" class="flex flex-col text-center relative">
            <div
              class="absolute w-[1px] top-[50%] lg:top-0 lg:right-4 h-[70%] lg:h-[160%] bg-[#D9D9D9]/[30%]"
            ></div>
            <p class="text-[1.15em] text-[#FFF]/[60%]" :class="event.class">
              {{ event.date }}
            </p>
            <div
              :class="[
                {
                  'bg-[#282F42] text-white': event.started,
                  'bg-[#FFF] text-[#282F42]': !event.started
                }
              ]"
              class="event lg:text-[1.2em] h-[4.5em] lg:h-[3.5em] px-[1em] ml-[1em] rounded-[1em] flex items-center justify-center gap-[0.6em]"
            >
              <span>
                {{ event.name }}
              </span>
              <div v-if="event.started" class="p-[0.6em] bg-white rounded-[0.8em]">
                <img src="@/assets/icon/arrowl.svg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'

const events = reactive([
  {
    name: 'Launching on Arbitrum Network',
    class: 'launch',
    date: 'Q3 2023',
    started: true
  },
  {
    name: 'IDO',
    class: 'ido',
    date: 'Q4 2023',
    started: false
  },
  {
    name: 'AI Game mod',
    class: 'game',
    date: 'Q1 2024',
    started: false
  },
  {
    name: 'Extension to other networks',
    class: 'extension',
    date: 'Q2 2024',
    started: false
  }
])
</script>

<style lang="scss" scoped>
@import '@/assets/main.css';
.wrapper {
  width: 100%;
  padding: 0 1em 0 2em;
  @media (min-width: 768px) {
    width: var(--container-width);
  }
}

.launch {
  align-self: flex-start;
  padding: 3.5em 0;
  @media (min-width: 768px) {
    padding: 0;
    padding-bottom: 3em;
  }
}
.ido {
  align-self: flex-start;
  padding: 3.5em 0;
  @media (min-width: 768px) {
    padding: 0;
    padding-bottom: 6em;
  }
}
.game {
  align-self: flex-start;
  padding: 3.5em 0;
  @media (min-width: 768px) {
    padding: 0;
    padding-bottom: 9em;
  }
}
.extension {
  align-self: flex-start;
  padding: 3.5em 0;
  @media (min-width: 768px) {
    padding: 0;
    padding-bottom: 12em;
  }
}
.event {
  min-width: calc(var(--index) * 10);
}
</style>
