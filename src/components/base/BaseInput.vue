<template>
  <div class="relative">
    <label>
      {{ props.label }}
      <input
        :type="password ? 'password' : 'text'"
        v-model="value"
        :class="{
          invalid: !isValid,
          'w-full bg-transparent border border-[#334155]': !background,
          'w-full bg-[#FBE9FF]/[10%]': background
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
label {
  font-size: 16px;
  font-weight: 300;
}
input[type='text'],
input[type='password'] {
  padding: 0.7em 1em 0.7em 2.6em;
  border-radius: 1em;
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
