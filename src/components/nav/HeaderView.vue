<template>
  <header>
    <nav>
      <div class="flex items-center justify-between min-h-[100px]">
        <img src="@/assets/logo.png" />
        <div class="flex gap-14">
          <a v-for="(item, idx) in links" :key="idx" :href="item.link" class="font-light">
            {{ item.name }}
          </a>
        </div>
        <button>Launch app</button>
      </div>
    </nav>
  </header>
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
