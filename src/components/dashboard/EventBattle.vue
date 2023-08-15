<template>
  <div class="max-w-[1200px] py-[70px] mx-auto">
    <play-model-card
      v-for="game in eventBattle"
      :toBlocked="game.toBlocked"
      :nameGame="game.nameGame"
      :descGame="game.descGame"
      :stats="game.stats"
    ></play-model-card>
  </div>
</template>

<script lang="ts" setup>
import PlayModelCard from '@/components/base/PlayModelCard.vue'
import { reactive } from 'vue'

const eventBattle = reactive([
  {
    toBlocked: true,
    nameGame: 'Event battle',
    descGame:
      'Probability of execution real-world events within the Play Wallet platform, which allows users to place their prediction on actual events happening around the world. This new game mode aims to engage users in a unique and exciting way, offering opportunities to earn rewards and enhance their experience on the platform',

    stats: [
      { statsImg: 'src/assets/icon/play_stats.svg', statsName: 'Players', statsAmt: 1503823 },
      {
        statsImg: 'src/assets/icon/play_stats.svg',
        statsName: 'Total win PlayW',
        statsAmt: 1023423
      },
      {
        statsImg: 'src/assets/icon/play_stats.svg',
        statsName: 'Total used PlayW',
        statsAmt: 867423
      },
      {
        statsImg: 'src/assets/icon/play_stats.svg',
        statsName: 'Total lose PlayW',
        statsAmt: 53234
      }
    ]
  }
])
</script>
