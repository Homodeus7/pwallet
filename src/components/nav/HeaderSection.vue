<template>
  <header>
    <nav>
      <div class="flex items-center justify-between min-h-[100px]">
        <router-link to="/">
          <img src="@/assets/logo.png" />
        </router-link>
        <header-links />
        <base-button special>Launch app</base-button>
      </div>
    </nav>
  </header>
</template>

<script lang="ts" setup>
import BaseButton from '@/components/base/BaseButton.vue'
import HeaderLinks from '@/components/base/HeaderLinks.vue'
import { RouterLink } from 'vue-router'
</script>
