<template>
  <BaseIcon v-bind="props">
    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M18.1092 8.97141H11.8782H6.26719C5.30702 8.97141 4.82694 10.1316 5.50706 10.8117L10.6879 15.9926C11.5181 16.8228 12.8683 16.8228 13.6985 15.9926L15.6688 14.0223L18.8794 10.8117C19.5495 10.1316 19.0694 8.97141 18.1092 8.97141Z"
        fill="white"
      />
    </svg>
  </BaseIcon>
</template>

<script setup lang="ts">
import BaseIcon from '@/components/base/BaseIcon.vue'
import type { IconProps } from '@/components/base/BaseIcon.vue'

interface CopyIconProps extends IconProps {}
const props = defineProps<CopyIconProps>()
</script>
