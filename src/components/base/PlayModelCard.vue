<template>
  <base-card
    color="#1d1e25"
    radius="20px"
    padding="30px 40px"
    class="flex flex-col gap-7 border-2 border-[#2b2e41]"
  >
    <div class="flex justify-between">
      <div class="flex flex-col gap-[1.75em]">
        <div class="flex items-center gap-4">
          <div class="flex items-center p-2 rounded-full bg-[#2a313c]">
            <img v-if="props.toBlocked" src="@/assets/icon/lock.svg" />
            <img v-else :src="props.iconGame" />
          </div>
          <h2 class="font-medium text-[1.5em]">{{ props.nameGame }}</h2>
        </div>
        <div class="max-w-[30em]">
          <p class="font-light">{{ props.descGame }}</p>
        </div>
      </div>
      <div
        v-if="props.toBlocked"
        class="min-w-[22em] flex items-center justify-center rounded-2xl bg-[#464646]"
      >
        <img src="@/assets/icon/img-blocked.svg" />
      </div>
      <img v-else class="min-w-[22em]" :src="props.imgGame" />
    </div>
    <div class="grid grid-cols-2 grid-rows-2 gap-[0.9em]">
      <div
        v-for="item in props.stats"
        class="flex justify-between p-4 rounded-xl border border-[#2a313c]"
      >
        <div class="flex gap-2 items-center">
          <div class="flex items-center p-2 rounded-full bg-[#2a313c]">
            <img :src="item.statsImg" />
          </div>
          <span class="font-medium">{{ item.statsName }}</span>
        </div>
        <div class="font-medium text-[#BEB4FF] self-center">
          {{ toPriceView(item.statsAmt) }}
        </div>
      </div>
    </div>
    <base-button v-if="props.toBlocked" disabled class="min-w-[24em] min-h-[3.5em] self-center"
      >Play</base-button
    >
    <base-button v-else primary class="min-w-[24em] min-h-[3.5em] self-center">Play</base-button>
  </base-card>
</template>

<script lang="ts" setup>
import BaseCard from '@/components/base/BaseCard.vue'
import BaseButton from '@/components/base/BaseButton.vue'
import { toPriceView } from '@/use/utils'

interface PlayMCard {
  nameGame?: string
  iconGame?: string
  descGame?: string
  imgGame?: string
  stats?: object
  toBlocked?: boolean
}

const props = defineProps<PlayMCard>()
</script>
