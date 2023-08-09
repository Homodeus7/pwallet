<template>
  <div class="flex gap-3 relative">
    <div @click="menu = true" class="flex gap-3 pr-4 cursor-pointer hover:opacity-75">
      <div class="w-[52px] rounded-full">
        <img class="bg-cover" src="@/assets/img/user.png" />
      </div>
      <div class="flex flex-col">
        <div class="text-lg">{{ account.name }}</div>
        <div class="text-sm text-[#93989A]">{{ account.adress }}</div>
      </div>
    </div>
    <transition name="visible">
      <div
        v-if="menu"
        ref="dropdown"
        class="w-[360px] absolute left-0 top-16 bg-[#242731] rounded-[1.2em] flex flex-col items-start p-[2em] z-50"
      >
        <div class="w-full flex justify-between pb-[1.5em]">
          <h4>My account</h4>
          <button @click="menu = false">
            <img src="@/assets/icon/close-w.svg" />
          </button>
        </div>
        <div class="flex flex-col gap-[1em]">
          <div class="flex flex-col">
            <div class="text-xl">{{ account.name }}</div>
            <div class="text-sm text-[#93989A]">{{ account.adress }}</div>
          </div>
          <div class="flex flex-col">
            <div class="flex gap-4 relative">
              <span class="font-thin text-sm text-[#8A8AA9]">{{
                shortAddress(account.wallet, 10, 6)
              }}</span>
              <span v-if="copied" class="absolute text-xs right-0 -top-4">Copied!</span>
              <copy-icon class="cursor-pointer" @click="copyText()" />
            </div>

            <div class="font-thin text-sm">{{ account.email }}</div>
          </div>
        </div>
      </div>
    </transition>
    <div
      class="w-[52px] h-[52px] flex items-center justify-center rounded-full border border-[#2B2E41] cursor-pointer"
      @click="active = !active"
    >
      <img v-if="active" src="@/assets/icon/notification-active.svg" />
      <img v-else src="@/assets/icon/notification.svg" />
    </div>
    <base-button outlines>
      Log out
      <template v-slot:prefix-icon>
        <img class="pr-2" src="@/assets/icon/logout.svg" />
      </template>
    </base-button>
  </div>
</template>
<script lang="ts" setup>
import BaseButton from '@/components/base/BaseButton.vue'
import CopyIcon from '@/components/base/icons/CopyIcon.vue'
import { ref } from 'vue'
import { onClickOutside } from '@vueuse/core'
import { shortAddress } from '@/use/utils'
const menu = ref(false)
const copied = ref(false)
const dropdown = ref<HTMLElement | null>(null)

onClickOutside(dropdown, () => (menu.value = false))

const active = ref(false)
const account = ref({
  name: 'Jhon Doe',
  adress: '@jhondoe',
  wallet: '0xF1FE73D1d411A9EF7B3ff6eC7de93e9C1c73A5b3',
  email: 'klausthethale@gmail.com'
})

const copyText = () => {
  navigator.clipboard.writeText(account.value.wallet)
  copied.value = true
  setTimeout(() => (copied.value = false), 2000)
}
</script>
