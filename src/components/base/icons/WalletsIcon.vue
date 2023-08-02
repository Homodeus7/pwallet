<template>
  <BaseIcon v-bind="props">
    <svg width="34" height="33" viewBox="0 0 34 33" fill="none" xmlns="http://www.w3.org/2000/svg">
    <mask id="mask0_1_3" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="34" height="33">
    <path d="M33.4769 0H0V33H33.4769V0Z" fill="white"/>
    </mask>
    <g mask="url(#mask0_1_3)">
    <path d="M16.7385 33C25.9829 33 33.4769 25.6127 33.4769 16.5C33.4769 7.38731 25.9829 0 16.7385 0C7.49407 0 0 7.38731 0 16.5C0 25.6127 7.49407 33 16.7385 33Z" fill="#3375BB"/>
    <path d="M16.8571 7.21875C20.1651 9.94207 23.9585 9.77414 25.0424 9.77414C24.8053 25.2624 22.9989 22.1911 16.8571 26.5341C10.7153 22.1911 8.92024 25.2624 8.68313 9.77414C9.7557 9.77414 13.5491 9.94207 16.8571 7.21875Z" stroke="white" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    </g>
    </svg>
  </BaseIcon>
</template>

<script setup lang="ts">
import type { IconProps } from '@/components/base/BaseIcon.vue'
import BaseIcon from '@/components/base/BaseIcon.vue'

interface CopyIconProps extends IconProps {}
const props = defineProps<CopyIconProps>()
</script>
