<template>
  <BaseIcon v-bind="props">
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.40594 9.17418L0.246289 4.01436C-0.0820967 3.68614 -0.0820967 3.15397 0.246289 2.8259C0.574382 2.49781 1.10652 2.49781 1.43458 2.8259L6.00009 7.39155L10.5654 2.82604C10.8937 2.49794 11.4257 2.49794 11.7538 2.82604C12.0821 3.15413 12.0821 3.68627 11.7538 4.0145L6.5941 9.17432C6.42998 9.33836 6.2151 9.42029 6.00011 9.42029C5.78502 9.42029 5.56998 9.3382 5.40594 9.17418Z"
        fill="url(#paint0_linear_201_3007)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_201_3007"
          x1="13.7705"
          y1="2.02608"
          x2="13.2901"
          y2="10.7838"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#F0D33C" />
          <stop offset="1" stop-color="#EDF58C" />
        </linearGradient>
      </defs>
    </svg>
  </BaseIcon>
</template>

<script setup lang="ts">
import BaseIcon from '@/components/base/BaseIcon.vue'
import type { IconProps } from '@/components/base/BaseIcon.vue'

interface CopyIconProps extends IconProps {}
const props = defineProps<CopyIconProps>()
</script>
