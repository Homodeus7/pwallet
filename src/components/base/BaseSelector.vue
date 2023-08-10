<template>
  <div class="flex flex-col gap-3">
    <span class="font-medium text-[1.2em]">{{ props.name }}</span>
    <div class="flex relative">
      <div
        class="list cursor-pointer w-full"
        @click="
          () => {
            active = !active
            $emit('press', active)
          }
        "
        ref="dropdown"
      >
        <div
          class="flex items-center justify-between bg-[#181a26] rounded-[0.5em] py-[0.8em] px-[1em]"
          :class="{ 'rounded-b-none': active }"
        >
          {{ mainLabel }}
          <ArrowUp v-if="active" />
          <ArrowDown v-else />
        </div>
      </div>
      <transition name="slide">
        <div
          class="list absolute top-[3em] left-0 right-0 z-10 flex flex-col items-start bg-[#181a26] rounded-b-[0.5em]"
          v-if="active"
        >
          <div
            class="w-full flex flex-col items-start py-[0.8em] px-[1em] rounded-[0.5em] text-[0.9em] text-[#7884E1] cursor-pointer hover:bg-[#5568FF]/[10%]"
            v-for="option of filteredOptions"
            :key="option.value"
            @click="() => onSelect(option.value)"
          >
            {{ option.label }}
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, computed } from 'vue'
import { onClickOutside } from '@vueuse/core'

import ArrowDown from '@/components/base/icons/ArrowDownIcon.vue'
import ArrowUp from '@/components/base/icons/ArrowUpIcon.vue'

export interface ISelectorOptions {
  value: string | number
  label: string
}

export interface SelectorProps {
  options: ISelectorOptions[]
  modelValue?: string
  dropdownWidth?: string
  name?: string
}

const emit = defineEmits(['update:modelValue', 'press'])
const props = defineProps<SelectorProps>()
const active = ref(false)
const dropdown = ref<HTMLElement>()
const mainLabel = ref('')
const filteredOptions = computed(() => props.options.filter((c) => c.label !== props.modelValue))

onClickOutside(dropdown, () => {
  active.value = false
  emit('press', active.value)
})

onMounted(() => {
  mainLabel.value = props.options.filter((option) => option.value === props.modelValue)[0].label
})

function onSelect(value: string | number) {
  emit('update:modelValue', value)
  mainLabel.value = props.options.filter((option) => option.value === value)[0].label
}
</script>

<style lang="scss">
.list {
  transform-origin: top;
  transition: transform 0.2s ease-in-out;
}
.slide-enter-from,
.slide-leave-active {
  transform: scaleY(0);
}
</style>
