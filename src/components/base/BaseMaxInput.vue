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
        type="text"
        v-bind="props"
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
    <BaseButton
      v-if="props.maxValue"
      class="absolute right-[1em] bottom-[0.8em]"
      :disabled="props.disabled"
      @click="value = props.maxValue"
    >
      <span class="text-[#A698F9]">Max</span>
    </BaseButton>
    <span
      v-if="errorMessage && !isValid"
      class="absolute -bottom-[1.6em] left-2 text-[0.8em] font-medium text-[#ff8686]"
    >
      {{ errorMessage }}
    </span>
  </div>
</template>

<script setup lang="ts">
import { computed, watch } from 'vue'
import BaseButton from '@/components/base/BaseButton.vue'

export interface InputProps {
  modelValue?: string
  placeholder?: string
  isValid?: boolean
  disabled?: boolean
  maxValue?: string
  validate?: string
  errorMessage?: string
  label?: string
  background?: boolean
  labelThin?: boolean
}

const props = defineProps<InputProps>()
const emit = defineEmits(['update:modelValue'])

const value = computed({
  get: () => props.modelValue,
  set: (text) => emit('update:modelValue', text)
})

watch(
  () => props.modelValue,
  (newValue, oldValue) => {
    if (newValue && props.validate === 'number')
      if (newValue.match(/^[0-9]*$/)) value.value = newValue
      else value.value = oldValue
  }
)
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
