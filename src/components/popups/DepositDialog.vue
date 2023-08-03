<template>
  <div class="flex flex-col max-w-[320px] md:max-w-none">
    <div class="flex gap-5 items-center pb-6">
      <div
        class="p-3 md:p-5 rounded-[32px] border-[1px] border-[#FBE9FF]/[10%] bg-white w-full max-w-[120px] md:max-w-[140px]"
      >
        <QrcodeVue :value="wallet" class="mx-auto" :size="92" />
      </div>
      <div class="flex flex-col items-start">
        <div class="transfer-text">
          <LinearText>Deposit</LinearText>
        </div>
        <div class="font-black text-xs md:text-sm max-w-[208px]">
          Funds will be credited to your wallet within 2-3 minutes
        </div>
      </div>
    </div>
    <div
      class="flex justify-between items-center gap-2 h-[40px] w-full pl-4 pr-2 mb-6 border-[1px] border-[#FBE9FF]/[10%] rounded-[32px] relative"
    >
      <div class="text-[10px] md:text-sm md:font-black">
        {{ profile.profile?.walletAddress }}
      </div>
      <span v-if="copied" v-auto-animate class="copied">Copied!</span>
      <div class="flex items-center gap-2">
        <CopyIcon class="cursor-pointer" @click="copyText()" />
        <img class="w-[24px]" src="@/assets/icon/bnb.svg" />
      </div>
    </div>

    <div class="w-full flex items-center justify-between">
      <a href="#">
        <span class="text-14 font-black">Need help?</span>
      </a>
      <BaseButton primary class="w-[144px] h-[40px]" @click="onClose"> Close </BaseButton>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useDialogs } from '@/store/ui/dialogs'
import LinearText from '@/components/base/LinearText.vue'
import BaseButton from '@/components/base/BaseButton.vue'
import CopyIcon from '@/components/base/icons/CopyIcon.vue'
import { useProfile } from '@/store/user/profile'
import { ref } from 'vue'
import QrcodeVue from 'qrcode.vue'

export interface DepositPopupProps {
  wallet: string
}

const profile = useProfile()

const props = defineProps<DepositPopupProps>()

const dialogs = useDialogs()

const onClose = () => {
  dialogs.closeCurrentDialog()
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

.copied {
  font-size: 12px;
  position: absolute;
  right: 30px;
  bottom: 40px;
}

.transfer-text {
  font-weight: 700;
  font-size: 34px;
}

.small-text {
  font-weight: 700;
  color: white;
}
</style>
