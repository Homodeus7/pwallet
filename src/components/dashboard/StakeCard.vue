<template>
  <div class="h-full">
    <h2 class="font-medium text-3xl mb-[1em]">Stake</h2>
    <base-card
      color="#242731"
      radius="16px"
      padding="24px"
      class="h-[360px] flex flex-col justify-between"
    >
      <div class="flex flex-col justify-between gap-[0.8em]">
        <base-input label="You give PlayW" isValid background labelThin>
          <template v-slot:coin-icon>
            <div class="flex gap-2">
              <img src="@/assets/icon/playw.svg" />
              <span class="font-medium text-[0.9em]">PlayW</span>
            </div>
          </template>
        </base-input>
        <div class="flex gap-[1em]">
          <base-max-input
            label="Months"
            isValid
            background
            labelThin
            max-value="20"
            v-model="months"
          />
          <base-max-input label="Days" isValid background labelThin max-value="13" v-model="days" />
        </div>
      </div>
      <base-button primary>Stake</base-button>
    </base-card>
  </div>
</template>

<script lang="ts" setup>
import BaseCard from '@/components/base/BaseCard.vue'
import BaseInput from '@/components/base/BaseInput.vue'
import BaseButton from '@/components/base/BaseButton.vue'
import BaseMaxInput from '@/components/base/BaseMaxInput.vue'
import { ref } from 'vue'
const months = ref('')
const days = ref('')
</script>
