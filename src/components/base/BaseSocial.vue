<template>
  <div v-if="props.big" class="flex gap-[2.5em]">
    <a
      v-for="social in socials"
      :key="social.name"
      :href="social.link"
      class="flex flex-col items-center gap-[0.5em]"
    >
      <img class="w-[3.2em]" :src="`/socials/${social.img}`" />
      <span class="font-thin text-[0.8em]">{{ social.name }}</span>
    </a>
  </div>
  <div v-else class="flex flex-col gap-[0.3em]">
    <span class="font-light text-[0.9em] text-[#FFF]/[30%]">Socials</span>
    <div
      class="min-w-max flex p-[0.3em] gap-[1.5em] rounded-[3.5em] border-[1px]"
      :class="[
        { 'border-white': props.wborder },
        { ' border-[#FFF]/[30%]': props.oborder },
        { 'bg-[#DCDEE1]/[10%]': props.background }
      ]"
    >
      <a v-for="social in socials" :key="social.name" :href="social.link">
        <img class="w-[1.75em]" :src="`/socials/${social.img}`" />
      </a>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'

export interface Social {
  background?: boolean
  big?: boolean
  wborder?: boolean
  oborder?: boolean
}

const props = defineProps<Social>()

const socials = reactive([
  {
    name: 'Instagram',
    link: '#',
    img: 'instagram.svg'
  },
  {
    name: 'Telegram',
    link: '#',
    img: 'telegram.svg'
  },
  {
    name: 'Discord',
    link: '#',
    img: 'discord.svg'
  }
])
</script>
