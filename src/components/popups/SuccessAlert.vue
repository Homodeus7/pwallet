<template>
  <div class="h-[200px] mt-[10px] w-full flex flex-col items-center justify-between">
    <div class="font-black text-4xl">
      <LinearText>Success</LinearText>
    </div>
    <div class="font-black">
      {{ props.label }}
    </div>
    <div v-if="props.txHash" class="tx-hash">
      <a
        :href="scannersLink.getTx(DEFAULT_CHAINID as ChainId, props.txHash)"
        target="_blank"
        class="link"
      >
        {{ props.txHash.shortAddress(15, 10) }}
      </a>
      <span v-if="copied" v-auto-animate class="copied">Copied!</span>
      <CopyIcon class="cursor-pointer" @click="copyText()" />
    </div>
    <BaseButton
      primary
      class="w-[140px] md:w-[168px] h-[40px]"
      @click="dialogs.closeCurrentDialog()"
    >
      Go!
    </BaseButton>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'

import CopyIcon from '@/components/base/icons/CopyIcon.vue'
import LinearText from '@/components/base/LinearText.vue'
import BaseButton from '@/components/base/BaseButton.vue'

import { scannersLink } from '@/web3-tools/vue'
import type { ChainId } from '@/web3-tools/vue/types'
import { useDialogs } from '@/store/ui/dialogs'
import { DEFAULT_CHAINID } from '@/pumper.config'

export interface SuccessAlertProps {
  label: string
  txHash?: string
  chainId?: ChainId
}
const props = defineProps<SuccessAlertProps>()

const dialogs = useDialogs()

const copied = ref(false)

const copyText = () => {
  if (props.txHash) navigator.clipboard.writeText(props.txHash)
  copied.value = true
  setTimeout(() => (copied.value = false), 2000)
}
</script>

<style scoped lang="scss">
@import '@/assets/config.scss';

.tx-hash {
  font: Inter;
  margin-top: 16px;
  position: relative;
  display: flex;
  align-items: center;
  gap: 6px;
  font-weight: 500;
  font-size: 14px;
  .link {
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
}
.copied {
  color: $primary-color;
  font-size: 12px;
  font-weight: 600;
  position: absolute;
  z-index: 10;
  right: 0px;
  top: -20px;
  @include for-size(md) {
    top: -20px;
    right: -4px;
  }
}
</style>
