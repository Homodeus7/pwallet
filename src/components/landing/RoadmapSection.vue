<template>
  <div class="h-[100vh]">
    <div
      class="wrapper h-full m-auto flex items-end justify-center pb-[2em]"
      data-scroll
      data-scroll-direction="horizontal"
      data-scroll-speed="4"
    >
      <div class="flex flex-col items-center w-full">
        <h1 class="font-medium text-[3.70em]">Discover our Roadmap</h1>
        <p class="font-light pr-[1.2em] pb-[5.2em]">From mid 2023 to mid 2024</p>
        <div class="w-full">
          <div class="roadmap">
            <div v-for="(item, idx) in events" :key="idx" class="text-center pb-[3em] relative">
              <p class="text-[1.1em] text-[#FFF]/[60%]">{{ item.date }}</p>
              <div class="absolute top-0 right-4 w-[1px] h-[500%] bg-[#D9D9D9]/[30%]"></div>
            </div>
            <div
              v-for="(event, idx) in events"
              :key="idx"
              :class="[
                event.class,
                {
                  'bg-[#282F42] text-white': event.started,
                  'bg-[#FFF] text-[#282F42]': !event.started
                }
              ]"
              class="text-[1.2em] py-[1em] px-[0.3em] rounded-[1em] flex items-center justify-center gap-[0.6em]"
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
  padding: 0 1em;
  @media (min-width: 768px) {
    width: var(--container-width);
  }
}
.roadmap {
  display: grid;
  align-items: center;
  margin: 0 -5px;
  grid-template-areas:
    'q q q q'
    'a . . .'
    '. b . .'
    '. . c .'
    '. . . d';
}
.launch {
  min-width: calc(var(--index) * 10);
  grid-area: a;
}
.ido {
  min-width: calc(var(--index) * 10);
  grid-area: b;
}
.game {
  min-width: calc(var(--index) * 10);
  grid-area: c;
}
.extension {
  min-width: calc(var(--index) * 10);
  grid-area: d;
}
</style>
