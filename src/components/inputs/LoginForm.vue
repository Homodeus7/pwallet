<template>
  <div class="h-full flex flex-col justify-center gap-[2em] w-[24em]">
    <div class="flex flex-col gap-[1.5em] pb-[1em]">
      <h2 class="font-medium text-[3em] leading-[1em]">Log In</h2>
      <span class="text-[#8D98AF] text-[1.2em]">Welcome back, you’ve been missed!</span>
    </div>
    <BaseButton connect class="w-full flex items-center justify-center">
      <span class="ml-[0.8em]">Connect Wallet</span>
      <template v-slot:prefix-icon>
        <WalletsIcon />
        <MetamaskIcon class="-ml-[0.8em]" />
      </template>
    </BaseButton>
    <DecorText>OR</DecorText>
    <div class="flex flex-col gap-[1.5em]">
      <BaseInput
        v-model="valid.email.value"
        :is-valid="Boolean(!valid.eError.value)"
        placeholder="Email"
        :error-message="valid.eError.value"
      />
      <BaseInput
        :password="showPassword"
        v-model="valid.password.value"
        :error-message="valid.pError.value"
        :is-valid="Boolean(!valid.pError.value)"
        placeholder="Password"
      >
        <template v-slot:suffix-icon>
          <Button @click="showPassword = !showPassword">
            <img v-show="!showPassword" src="@/assets/icon/hide.svg" />
            <img v-show="showPassword" src="@/assets/icon/show.svg" />
          </Button>
        </template>
      </BaseInput>
    </div>
    <div class="flex justify-between">
      <BaseCheckbox
        label="Remember me"
        id="checkboxActive"
        name="checkboxActive"
        value="I like it"
        v-model:checked="checkboxActive"
      />
      <a href="#">
        <span class="text-[#6271EB]">Forgot password?</span>
      </a>
    </div>
    <BaseButton primary :disabled="!isValid" class="w-full"> Log In </BaseButton>
    <div class="flex gap-2">
      <span class="text-[#8d98af]">Don't have an account? </span>
      <a href="#">
        <span class="text-[#6271EB]">Sign Up</span>
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import BaseInput from '@/components/base/BaseInput.vue'
import BaseButton from '@/components/base/BaseButton.vue'
import BaseCheckbox from '@/components/base/BaseCheckbox.vue'
import DecorText from '@/components/base/DecorText.vue'
import MetamaskIcon from '@/components/base/icons/MetamaskIcon.vue'
import WalletsIcon from '@/components/base/icons/WalletsIcon.vue'
import { useValidationFields } from '@/use/validation-fields'

const checkboxActive = ref(true)
const emit = defineEmits(['signIn'])

const valid = { ...useValidationFields() }
const showPassword = ref(true)

const isValid = computed(
  () => !!valid.email.value && !!valid.password.value && !valid.eError.value && !valid.pError.value
)
</script>

<style lang="scss" scoped></style>
