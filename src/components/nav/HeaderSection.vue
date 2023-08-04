<template>
  <header>
    <nav>
      <div class="flex items-center justify-between min-h-[100px]">
        <router-link to="/">
          <img src="@/assets/logo.png" />
        </router-link>
        <header-links class="hidden lg:flex" />
        <base-button special>Launch app</base-button>
        <base-burger />
      </div>
    </nav>
  </header>
</template>

<script lang="ts" setup>
import BaseButton from '@/components/base/BaseButton.vue'
import HeaderLinks from '@/components/base/HeaderLinks.vue'
import BaseBurger from '@/components/base/BaseBurger.vue'
import { RouterLink } from 'vue-router'
</script>
