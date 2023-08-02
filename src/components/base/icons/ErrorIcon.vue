<template>
  <BaseIcon v-bind="props">
    <svg
      width="41"
      height="40"
      viewBox="0 0 41 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_34_5107)">
        <path
          d="M39 20C39 30.2173 30.7173 38.5 20.5 38.5C10.2827 38.5 2 30.2173 2 20C2 9.78273 10.2827 1.5 20.5 1.5C30.7173 1.5 39 9.78273 39 20Z"
          stroke="#EE5A51"
          stroke-width="3"
        />
        <path
          d="M13.3008 27.2L20.5008 20L27.7008 12.8"
          stroke="#EE5A51"
          stroke-width="3"
          stroke-miterlimit="10"
          stroke-linecap="round"
        />
        <path
          d="M13.3008 12.8L20.5008 20L27.7008 27.2"
          stroke="#EE5A51"
          stroke-width="3"
          stroke-miterlimit="10"
          stroke-linecap="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_34_5107">
          <rect width="40" height="40" fill="white" transform="translate(0.5)" />
        </clipPath>
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
