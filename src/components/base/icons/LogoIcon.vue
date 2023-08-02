<template>
  <BaseIcon v-bind="props">
    <svg
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="64" height="64" rx="16" fill="#007CFF" />
      <path
        d="M32 23C25.7102 23 21.8784 27.5648 20.2497 30.0686C19.6109 31.0506 19.6109 32.2828 20.2497 33.2647C21.8784 35.7685 25.7102 40.3333 32 40.3333C38.2898 40.3333 42.1216 35.7685 43.7503 33.2647C44.3891 32.2828 44.3891 31.0506 43.7503 30.0686C42.1216 27.5648 38.2898 23 32 23Z"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <ellipse cx="32" cy="31.6667" rx="4" ry="4" stroke="white" stroke-width="2" />
    </svg>
  </BaseIcon>
</template>

<script setup lang="ts">
import type { IconProps } from '@/components/base/BaseIcon.vue'
import BaseIcon from '@/components/base/BaseIcon.vue'

interface CopyIconProps extends IconProps {}
const props = defineProps<CopyIconProps>()
</script>
