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
        d="M6.59406 2.82582L11.7537 7.98564C12.0821 8.31386 12.0821 8.84603 11.7537 9.1741C11.4256 9.50219 10.8935 9.50219 10.5654 9.1741L5.99991 4.60845L1.43457 9.17396C1.10635 9.50206 0.574263 9.50206 0.24617 9.17396C-0.0820565 8.84587 -0.0820565 8.31373 0.24617 7.9855L5.4059 2.82568C5.57002 2.66164 5.7849 2.57971 5.99989 2.57971C6.21498 2.57971 6.43002 2.6618 6.59406 2.82582Z"
        fill="url(#paint0_linear_201_3007)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_201_3007"
          x1="-1.77049"
          y1="9.97392"
          x2="-1.2901"
          y2="1.21622"
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
import type { IconProps } from '@/components/base/BaseIcon.vue'
import BaseIcon from '@/components/base/BaseIcon.vue'

interface CopyIconProps extends IconProps {}
const props = defineProps<CopyIconProps>()
</script>
