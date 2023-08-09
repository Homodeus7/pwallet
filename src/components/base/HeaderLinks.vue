<template>
  <div class="flex gap-14">
    <router-link :to="item.link" v-for="(item, idx) in links" :key="idx" class="font-light">
      {{ item.name }}
    </router-link>
  </div>
</template>

<script lang="ts" setup>
import { RouterLink } from 'vue-router'
import { reactive } from 'vue'
const links = reactive([
  { link: '/dashboard', name: 'Join to PlayW' },
  { link: '#', name: 'Roadmap' },
  { link: '#', name: 'Pitchdeck' },
  { link: '#', name: 'Social' }
])
</script>
