<template>
  <div class="h-full flex flex-col justify-center gap-[1.8em] w-[24em]">
    <div class="flex flex-col gap-[1.5em] pb-[0.5em]">
      <h2 class="font-medium text-[3em] leading-[1em]">Getting Started</h2>
      <span class="text-[#8D98AF] text-[1.2em]">Create an account to continue</span>
    </div>
    <BaseButton connect class="w-full flex items-center justify-center">
      <span class="ml-[0.4em]">Connect Wallet</span>
      <template v-slot:prefix-icon>
        <img src="@/assets/icon/coinbase.svg" />
        <img class="-ml-4" src="@/assets/icon/metamask.png" />
        <img class="-ml-4" src="@/assets/icon/phantom.png" />
      </template>
    </BaseButton>
    <DecorText>OR</DecorText>
    <div class="flex flex-col gap-[1.4em]">
      <div class="flex gap-[1em]">
        <BaseInput :is-valid="true" placeholder="First name">
          <template v-slot:prefix-icon>
            <img class="bottom-[0.2em]" src="@/assets/icon/user.svg" />
          </template>
        </BaseInput>
        <BaseInput :is-valid="true" placeholder="Last name">
          <template v-slot:prefix-icon>
            <img class="bottom-[0.2em]" src="@/assets/icon/user.svg" />
          </template>
        </BaseInput>
      </div>
      <BaseInput
        v-model="valid.email.value"
        :is-valid="Boolean(!valid.eError.value)"
        placeholder="Email"
        :error-message="valid.eError.value"
      >
        <template v-slot:prefix-icon>
          <img src="@/assets/icon/email.svg" />
        </template>
      </BaseInput>
      <BaseInput
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
      </BaseInput>
      <BaseInput :is-valid="true" placeholder="Referal link">
        <template v-slot:prefix-icon>
          <img src="@/assets/icon/add.svg" />
        </template>
      </BaseInput>
    </div>

    <div class="flex justify-center">
      <BaseCheckbox
        label="I agree to the Terms & Conditions"
        id="checkboxActive"
        name="checkboxActive"
        value="I like it"
        v-model:checked="checkboxActive"
      />
    </div>
    <BaseButton primary :disabled="!isValid" class="w-full"> Log In </BaseButton>
    <div class="flex gap-2">
      <span class="text-[#8d98af]">Already have an account? </span>
      <router-link to="/login"><span class="text-[#6271EB]">Log In</span></router-link>
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
