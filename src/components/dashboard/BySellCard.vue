<template>
  <div>
    <h2 class="font-medium text-3xl pb-[1em]">Buy / Sell</h2>
    <base-card color="#242731" radius="16px" padding="24px" class="flex flex-col gap-[1.2em]">
      <base-input label="You give" isValid background labelThin>
        <template v-slot:coin-icon>
          <div class="flex gap-2">
            <img src="@/assets/icon/usdt.svg" />
            <span class="font-medium text-[0.9em]">USDT</span>
          </div>
        </template>
      </base-input>
      <decor-text color="#3e3e59">
        <base-button icon><img class="w-[30px]" src="@/assets/icon/change.svg" /></base-button>
      </decor-text>
      <base-input label="Take PlayW" isValid background labelThin>
        <template v-slot:coin-icon>
          <div class="flex gap-2">
            <img src="@/assets/icon/playw.svg" />
            <span class="font-medium text-[0.9em]">PlayW</span>
          </div>
        </template>
      </base-input>
      <base-button primary>Buy PlayW</base-button>
    </base-card>
  </div>
</template>
<script lang="ts" setup>
import BaseCard from '@/components/base/BaseCard.vue'
import BaseInput from '@/components/base/BaseInput.vue'
import BaseButton from '@/components/base/BaseButton.vue'
import DecorText from '@/components//base/DecorText.vue'
</script>
