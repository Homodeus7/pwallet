<template>
  <div class="relative">
    <label
      :class="{
        'label-thin': labelThin,
        'label-normal': !labelThin
      }"
    >
      {{ props.label }}
      <input
        :type="password ? 'password' : 'text'"
        v-model="value"
        :class="{
          invalid: !isValid,
          'w-full bg-transparent border border-[#334155] rounded-[1em]': !background,
          'w-full bg-[#181a26] rounded-[0.5em]': background
        }"
        :placeholder="placeholder"
        :disabled="disabled"
      />
    </label>
    <div class="absolute bottom-[0.9em] left-[1em]">
      <slot name="prefix-icon"></slot>
    </div>

    <div class="absolute bottom-[0.3em] right-[1em]">
      <slot name="suffix-icon"></slot>
    </div>
    <div class="absolute bottom-[0.7em] right-[1em]">
      <slot name="coin-icon"></slot>
    </div>

    <slot></slot>
    <span
      v-if="errorMessage && !isValid"
      class="absolute -bottom-[1.6em] left-2 text-[0.8em] font-medium text-[#ff8686]"
    >
      {{ errorMessage }}
    </span>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { onMounted, ref } from 'vue'

export interface InputProps {
  modelValue?: string | unknown
  placeholder?: string
  isValid?: boolean
  errorMessage?: string
  disabled?: boolean
  maxValue?: string
  width?: string
  label?: string
  background?: boolean
  labelThin?: boolean
  password?: boolean
}

const props = defineProps<InputProps>()
const emit = defineEmits(['update:modelValue'])

const value = computed({
  get: () => props.modelValue,
  set: (text) => emit('update:modelValue', text)
})

const input = ref<HTMLElement | null>(null)

onMounted(() => {
  try {
    const tag = input.value as any

    if (props.width) {
      tag.style.width = props.width
    }
  } catch (e) {
    console.error(e)
  }
})
</script>

<style lang="scss" scoped>
.label-thin {
  font-size: 0.9em;
  color: #9ca2aa;
  font-weight: 300;
}
label .label-normal {
  font-size: 1em;
  color: white;
  font-weight: 500;
}
input[type='text'],
input[type='password'] {
  font-size: 16px;
  color: white;
  padding: 0.8em 1em 0.8em 1em;
  margin-top: 12px;
  outline: none;
  &::placeholder {
    font-size: 16px;
    font-weight: 300;
    color: #b0b7c3;
  }
  &.invalid {
    border-color: #ff8686;
  }
}
</style>
