<template>
  <div class="lg:hidden">
    <div class="flex gap-[1.5em] items-center justify-center">
      <button @click="toggleMenu">
        <img src="@/assets/icon/burger.svg" />
      </button>
      <router-link to="/nft">
        <img class="w-[2.75em]" src="@/assets/icon/logo-m.svg" />
      </router-link>
    </div>
    <transition name="visible">
      <sidebar-nav :open-sidebar="isOpen" />
    </transition>
  </div>
</template>
<script lang="ts" setup>
import SidebarNav from '@/components/dashboard/nav/SidebarNav.vue'
import { ref } from 'vue'

const isOpen = ref(false)

const emit = defineEmits(['isOpen'])

const toggleMenu = () => {
  isOpen.value = !isOpen.value
  emit('isOpen')
}
</script>
<style lang="scss" scoped></style>
