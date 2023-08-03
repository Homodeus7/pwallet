<script setup lang="ts">
import BaseButton from '@/components/base/BaseButton.vue'
import BaseLoader from '@/components/base/BaseLoader.vue'

import { useDialogs } from '@/store/ui/dialogs'

export interface WaitDialogProps {
  loading: boolean
  success: boolean
  waitingMsg: string
  waitingText: string
  errorMsg: string
  successMsg: string
}

const props = defineProps<WaitDialogProps>()
const dialogs = useDialogs()
</script>

<template>
  <div class="h-[200px] mt-[24px] w-full flex flex-col items-center justify-between">
    <div v-if="loading || success" class="font-black text-[28px] mt-[10px]">
      {{ props.waitingMsg }}
    </div>
    <div
      v-else-if="!loading && !success"
      class="wait-text__error text-[28px] md:text-[34px]"
    >
      Error
    </div>
    <div v-if="loading && !success" class="mt-4 mb-4 text-base md:text-xl text-center">
      {{ waitingText }}
    </div>
    <div
      v-else-if="!loading && success"
      class="mt-4 mb-4 text-base md:text-xl text-center"
    >
      {{ props.successMsg }}
    </div>
    <div v-else-if="!loading && !success" class="text-base md:text-xl text-center">
      {{ props.errorMsg }}
    </div>
    <BaseLoader v-if="loading" />
    <BaseButton
      v-else-if="!loading && !success"
      primary
      class="w-[168px] h-[40px] mb-5"
      @click="dialogs.closeCurrentDialog"
    >
      Try again
    </BaseButton>
    <BaseButton
      v-else
      primary
      class="w-[168px] h-[40px]"
      @click="dialogs.closeCurrentDialog"
    >
      Okay
    </BaseButton>
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/config.scss';

.wait-dialog {
  display: flex;
  flex-direction: column;
}

.wait-text {
  &__error {
    font-weight: 900;
    text-align: center;
    color: $error-color;
  }
}
</style>
