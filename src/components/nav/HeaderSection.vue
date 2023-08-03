<template>
  <header>
    <nav>
      <div class="flex items-center justify-between min-h-[100px]">
        <img src="@/assets/logo.png" />
        <header-links />
        <base-button special>Launch app</base-button>
      </div>
    </nav>
  </header>
</template>

<script lang="ts" setup>
import BaseButton from '@/components/base/BaseButton.vue'
import HeaderLinks from '@/components/base/HeaderLinks.vue'
</script>
