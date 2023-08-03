<template>
  <div class="flex flex-col justify-center items-center">
    <div class="flex gap-5 items-center justify-center pb-6">
      <div class="flex flex-col items-center justify-center">
        <LinearText class="text-[34px] pb-5">{{ title }}</LinearText>
        <div class="pb-4 font-black text-lg">{{ props.amount }}</div>
        <div class="font-medium text-center pl-2 text-xs md:text-sm max-w-[208px]">
          {{ text }}
        </div>
      </div>
    </div>

    <BaseButton
      v-if="button"
      primary
      class="w-[144px] h-[40px]"
      @click="props.onConfirm()"
    >
      {{ button }}
    </BaseButton>
    <BaseButton v-else primary class="w-[144px] h-[40px]" @click="props.onConfirm()">
      Go!
    </BaseButton>
  </div>
</template>
<script setup lang="ts">
import { useDialogs } from '@/store/ui/dialogs'
import LinearText from '@/components/base/LinearText.vue'
import BaseButton from '@/components/base/BaseButton.vue'
import { useProfile } from '@/store/user/profile'
import { ref } from 'vue'

export interface ApprovePopupProps {
  title: string
  text: string
  amount: string
  button?: string
  onCancel: () => any
  onConfirm: () => any
}

const profile = useProfile()

const props = defineProps<ApprovePopupProps>()

const ui = useDialogs()

const onClose = () => {
  ui.closeCurrentDialog()
  props.onCancel()
}

const copied = ref(false)

const copyText = () => {
  if (profile.profile?.walletAddress)
    navigator.clipboard.writeText(profile.profile?.walletAddress)
  copied.value = true
  setTimeout(() => (copied.value = false), 2000)
}
</script>

<style scoped lang="scss">
@import '@/assets/config.scss';
</style>
