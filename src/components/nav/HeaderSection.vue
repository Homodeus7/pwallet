<template>
  <header>
    <nav>
      <div class="flex items-center justify-between min-h-[6em]">
        <router-link to="/">
          <img class="w-[8em] lg:w-[10.5em]" src="@/assets/logo.png" />
        </router-link>
        <header-links class="hidden lg:flex" />
        <base-button special class="ml-[3em] lg:ml-0">Launch app</base-button>
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
