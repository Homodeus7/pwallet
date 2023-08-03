<template>
  <div class="flex gap-14">
    <a v-for="(item, idx) in links" :key="idx" :href="item.link" class="font-light">
      {{ item.name }}
    </a>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
const links = reactive([
  { link: '#', name: 'Join to PlayW' },
  { link: '#', name: 'Roadmap' },
  { link: '#', name: 'Pitchdeck' },
  { link: '#', name: 'Social' }
])
</script>
