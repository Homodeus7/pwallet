<template>
  <BaseIcon v-bind="props">
    <svg
      width="11"
      height="9"
      viewBox="0 0 11 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.66667 1L10 4.5M10 4.5L6.66667 8M10 4.5L8.54287e-08 4.5"
        stroke="#E0E0E0"
        stroke-width="1.3"
      />
    </svg>
  </BaseIcon>
</template>

<script setup lang="ts">
import type { IconProps } from '@/components/base/BaseIcon.vue'
import BaseIcon from '@/components/base/BaseIcon.vue'

interface CopyIconProps extends IconProps {}
const props = defineProps<CopyIconProps>()
</script>
