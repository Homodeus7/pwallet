<template>
  <header>
    <nav>
      <div class="flex items-center justify-between min-h-[100px]">
        <router-link to="/">
          <img src="@/assets/logo.png" />
        </router-link>
        <header-links class="hidden lg:flex" />
        <base-button special class="hidden lg:block">Launch app</base-button>
        <div class="lg:hidden">
          <button @click="menu = true">
            <img src="@/assets/icon/burger.svg" />
          </button>
          <Transition name="visible">
            <div
              v-if="menu"
              ref="dropdown"
              class="w-[80vw] h-[100vh] fixed right-0 top-0 bg-[#0c0c14] rounded-l-[1.4em] flex flex-col items-start px-[1.25em] py-[4rem]"
            >
              <div class="w-full flex justify-between pb-[3.5em]">
                <router-link to="/">
                  <img src="@/assets/logo.png" />
                </router-link>
                <button @click="menu = false">
                  <img src="@/assets/icon/close.svg" />
                </button>
              </div>
              <header-links class="flex-col items-start text-[1.3em]" />
              <div class="w-full h-full flex flex-col justify-end gap-[1em]">
                <BaseSocial oborder class="w-min pb-[3em]" />
                <base-button white class="w-full">Sign in</base-button>
                <base-button outlines class="w-full">Log in</base-button>
              </div>
            </div>
          </Transition>
        </div>
      </div>
    </nav>
  </header>
</template>

<script lang="ts" setup>
import BaseButton from '@/components/base/BaseButton.vue'
import HeaderLinks from '@/components/base/HeaderLinks.vue'
import BaseSocial from '@/components/base/BaseSocial.vue'
import { RouterLink } from 'vue-router'

import { ref } from 'vue'
import { onClickOutside } from '@vueuse/core'
const menu = ref(false)
const dropdown = ref<HTMLElement | null>(null)
onClickOutside(dropdown, () => (menu.value = false))
</script>

<style lang="scss" scoped>
.router-link-exact-active {
  font-weight: 700;
}
.visible-enter-active {
  animation: menu-in 0.2s;
}
.visible-leave-active {
  animation: menu-in 0.2s reverse;
}
@keyframes menu-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
