<template>
  <div class="h-full flex flex-col justify-center gap-[2em] w-[24em]">
    <div class="flex flex-col gap-[1.5em] pb-[1em]">
      <h2 class="font-medium text-[3em] leading-[1em]">Log In</h2>
      <span class="text-[#8D98AF] text-[1.2em]">Welcome back, you’ve been missed!</span>
    </div>
    <base-button connect class="w-full flex items-center justify-center">
      <span class="ml-[0.8em]">Connect Wallet</span>
      <template v-slot:prefix-icon>
        <img src="@/assets/icon/coinbase.svg" />
        <img class="-ml-4" src="@/assets/icon/metamask.png" />
        <img class="-ml-4" src="@/assets/icon/phantom.png" />
      </template>
    </base-button>
    <decor-text>OR</decor-text>
    <div class="flex flex-col gap-[1.5em]">
      <base-input
        v-model="valid.email.value"
        :is-valid="Boolean(!valid.eError.value)"
        placeholder="Email"
        :error-message="valid.eError.value"
      >
        <template v-slot:prefix-icon>
          <img src="@/assets/icon/email.svg" />
        </template>
      </base-input>
      <base-input
        :password="showPassword"
        v-model="valid.password.value"
        :error-message="valid.pError.value"
        :is-valid="Boolean(!valid.pError.value)"
        placeholder="Password"
      >
        <template v-slot:prefix-icon>
          <img src="@/assets/icon/lock.svg" />
        </template>
        <template v-slot:suffix-icon>
          <Button @click="showPassword = !showPassword">
            <img v-show="!showPassword" src="@/assets/icon/hide.svg" />
            <img v-show="showPassword" src="@/assets/icon/show.svg" />
          </Button>
        </template>
      </base-input>
    </div>
    <div class="flex justify-between">
      <base-checkbox
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
    <base-button primary :disabled="!isValid" class="w-full"> Log In </base-button>
    <div class="flex gap-2">
      <span class="text-[#8d98af]">Don't have an account? </span>
      <router-link to="registration">
        <span class="text-[#6271EB]">Sign Up</span>
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import BaseInput from '@/components/base/BaseInput.vue'
import BaseButton from '@/components/base/BaseButton.vue'
import BaseCheckbox from '@/components/base/BaseCheckbox.vue'
import DecorText from '@/components/base/DecorText.vue'
import { RouterLink } from 'vue-router'
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
