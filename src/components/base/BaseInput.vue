<template>
  <div class="relative">
    <label>
      {{ props.label }}
      <input
        :type="password ? 'password' : 'text'"
        v-model="value"
        :class="{
          invalid: !isValid,
          'px-6 h-[40px] w-full bg-transparent border border-[#FBE9FF]/[10%]': !background,
          'px-6 h-[40px] w-full bg-[#FBE9FF]/[10%]': background
        }"
        :placeholder="placeholder"
        :disabled="disabled"
      />
    </label>

    <div class="absolute top-[43px] right-2 md:right-1">
      <slot name="suffix-icon"></slot>
    </div>
    <div class="absolute top-[43px] left-2 md:left-1">
      <slot name="prefix-icon"></slot>
    </div>
    <slot></slot>
    <span
      v-if="errorMessage && !isValid"
      class="text-error absolute -bottom-4 left-2 text-[10px] md:text-xs font-medium"
      >{{ errorMessage }}</span
    >
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { onMounted, ref } from 'vue'

export interface InputProps {
  modelValue?: string
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
  font-size: 14px;
  font-weight: 900;
  line-height: 2.5;
}
input[type='text'],
input[type='password'] {
  border-radius: 100px;
  outline: none;
  border &:focus {
    border-color: rgba(251, 233, 255, 0.1);
  }

  &::placeholder {
    font-size: 14px;
    font-weight: 900;
    color: #b0b0b0;
  }

  &.invalid {
    border-color: red;
  }
}
</style>
