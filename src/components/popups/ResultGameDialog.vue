<template>
  <BaseCard class="row-span-2 flex-col h-full items-stretch backdrop-blur-xl">
    <div class="flex w-full items-center justify-between pb-4">
      <span class="text-xl font-black">Monster Game</span>
      <BaseTooltip
        gradient
        hint="Specify BTC address (Bitcoin)
          Wait for it, the payments are made manually. Waiting time - up to 48 hours. 
          There are not enough funds in your account
          You don’t have money on your account"
      />
    </div>
    <div v-if="isWon" class="flex justify-center">
      <img src="@/assets/images/youwin.png" />
    </div>
    <div v-else class="flex justify-center pl-8">
      <img src="@/assets/images/youlose.png" />
    </div>
    <div class="flex w-full items-center justify-between pb-6 gap-2">
      <div v-if="isWon" class="w-full max-w-[140px] md:max-w-[168px]">
        <span class="text-sm font-black">Prize</span>
        <div
          class="flex justify-between items-center h-[40px] w-full bg-[#FBE9FF]/[10%] pl-4 p-2 rounded-[32px] mt-2"
        >
          <span class="font-black text-sm text-success">
            {{ amount }}
          </span>
          <img class="w-6 md:w-8" src="@/assets/icon/tigerup.svg" />
        </div>
      </div>
      <div class="flex w-full justify-center gap-2">
        <div class="flex flex-col items-center gap-2">
          <span class="font-black text-sm">Chance of winnings</span>
          <div class="flex w-full justify-between gap-2">
            <GameInfoBlockGradient :description="winningsPercent" />
            <GameInfoBlockGradient :description="winningsMultiply" />
          </div>
        </div>
      </div>
    </div>

    <div class="flex w-full justify-center items-end">
      <BaseButton primary class="w-[168px] h-[40px]" @click="onClose">
        One more
      </BaseButton>
    </div>
  </BaseCard>
</template>
<script setup lang="ts">
import BaseButton from '@/components/base/BaseButton.vue'
import BaseTooltip from '@/components/base/BaseTooltip.vue'
import GameInfoBlockGradient from '@/components/game/GameInfoBlockGradient.vue'
import { computed } from 'vue'
import { useDialogs } from '@/store/ui/dialogs'
import { useGame } from '@/store/user/game'

export interface ApprovePopupProps {
  amount?: string
  isWon: boolean
  winningsPercent: string
  winningsMultiply: string
}

const game = useGame()

const props = defineProps<ApprovePopupProps>()

const ui = useDialogs()

const onClose = () => {
  ui.closeCurrentDialog()
}
</script>
