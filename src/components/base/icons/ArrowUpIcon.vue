<template>
  <BaseIcon v-bind="props">
    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M6.26699 16.6127H12.4981H18.109C19.0692 16.6127 19.5493 15.4525 18.8692 14.7724L13.6883 9.59146C12.8581 8.76132 11.5079 8.76132 10.6778 9.59146L8.70741 11.5618L5.49686 14.7724C4.82675 15.4525 5.30683 16.6127 6.26699 16.6127Z"
        fill="white"
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
