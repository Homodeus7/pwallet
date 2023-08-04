<template>
  <template>
    <header class="bg-main-header flex w-full items-center">
      <div
        class="mx-auto hidden w-full max-w-[1600px] items-center justify-between px-5 py-6 md:px-14 lg:flex lg:px-20"
      >
        <div class="flex items-center gap-3">
          <img src="@/assets/images/icons/logo.svg" />
          <span class="text-lg font-semibold">Dyme Staking Protocol</span>
        </div>
        <div class="flex items-center gap-11">
          <nav>
            <ul class="flex items-center gap-5 md:gap-11">
              <li>
                <nuxt-link to="/" exact> Overview </nuxt-link>
              </li>
              <li>
                <nuxt-link to="/rewards" exact> Rewards </nuxt-link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div class="flex w-full items-center px-6 md:px-12 lg:hidden">
        <div class="items center flex w-full pb-6 pt-10">
          <img src="@/assets/images/icons/logo.svg" />

          <div class="ml-auto flex items-center gap-5">
            <button @click="menu = true">
              <img src="@/assets/images/icons/menu-white.svg" /> // ====> burger
            </button>
          </div>
        </div>
        <Transition name="visible">
          <div
            v-if="menu"
            ref="dropdown"
            class="rounded-b-10px fixed left-0 top-0 z-10 flex w-[100vw] flex-col bg-white px-6 py-5 dark:bg-[#3A3B3F]"
          >
            <button @click="menu = false" class="ml-auto px-0">
              <img src="@/assets/images/icons/close-white.svg" /> // картинка закрытия => х
            </button>
            <nav class="mt-5">
              <ul class="flex flex-col items-end gap-5">
                <li>
                  <nuxt-link to="/" exact class="block py-2" @click="menu = false">
                    Overview
                  </nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/rewards" exact class="block py-2" @click="menu = false">
                    Rewards
                  </nuxt-link>
                </li>
              </ul>
            </nav>
          </div>
        </Transition>
      </div>
    </header>
  </template>

  <script lang="ts" setup>
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
</template>
