<template>
  <div class="flex flex-col items-center justify-between min-h-[230px]">
    <div class="flex flex-col gap-3">
      <div class="md:mr-2 mb-4 md:mb-0 relative">
        <BaseInput
          v-model="email"
          :is-valid="isValidEmail"
          placeholder="Email"
          :error-message="errorEmail"
          class="w-[270px] h-[44px]"
        >
        </BaseInput>
      </div>
      <div class="md:mr-2 mb-4 md:mb-0">
        <BaseInput
          :password="showPassword"
          v-model="password"
          :is-valid="isValidPassword"
          :error-message="errorPassword"
          placeholder="Password"
          class="w-[270px] h-[44px]"
        >
          <template v-slot:suffix-icon>
            <Button @click="showPassword = !showPassword">
              <img
                v-show="!showPassword"
                class="w-6 md:w-8 top-[-39px]"
                src="@/assets/icon/hide.svg"
              />
              <img
                v-show="showPassword"
                class="w-6 md:w-8 top-[-39px]"
                src="@/assets/icon/show.svg"
              />
            </Button>
          </template>
        </BaseInput>
      </div>
      <div class="md:mr-2 mb-4 md:mb-0">
        <BaseInput
          :password="showRepeatPassword"
          v-model="repeatPassword"
          :is-valid="!isValidEmail"
          placeholder="Repeat password"
          class="w-[270px] h-[44px]"
          :error-message="errorRepeatPassword"
        >
          <template v-slot:suffix-icon>
            <Button @click="showRepeatPassword = !showRepeatPassword">
              <img
                v-show="!showRepeatPassword"
                class="w-6 md:w-8 top-[-39px]"
                src="@/assets/icon/hide.svg"
              />
              <img
                v-show="showRepeatPassword"
                class="w-6 md:w-8 top-[-39px]"
                src="@/assets/icon/show.svg"
              />
            </Button>
          </template>
        </BaseInput>
      </div>
    </div>
    <BaseButton
      primary
      :disabled="
        !isValidEmail ||
        !isValidPassword ||
        !isValidRepeatPassword ||
        !email ||
        !password ||
        !repeatPassword ||
        loading
      "
      :loading="loading"
      @click="$emit('signUp', { email, password, repeatPassword, referralCode: '' })"
      class="w-[162px] h-[48px]"
    >
      Sign Up
    </BaseButton>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import BaseInput from '@/components/base/BaseInput.vue'
import BaseButton from '@/components/base/BaseButton.vue'
import { useProfile } from '@/store/user/profile'
const profileStore = useProfile()
const loading = computed(() => profileStore.loading)

const showPassword = ref(true)
const showRepeatPassword = ref(true)
const email = ref('')
const password = ref('')
const repeatPassword = ref('')

const isValidEmail = computed(() => {
  try {
    return /^[^@]+@\w+(\.\w+)+\w$/.test(email.value) || !email.value
  } catch (e) {
    return false
  }
})
const errorEmail = computed(() => (!isValidEmail.value ? 'Please enter a valid email address' : ''))

const isValidPassword = computed(() => {
  try {
    return password.value.length >= 4 || !password.value
  } catch (e) {
    return false
  }
})
const errorPassword = computed(() =>
  !isValidPassword.value ? 'Password must be at least 4 characters long' : ''
)

const isValidRepeatPassword = computed(() => {
  try {
    if (repeatPassword.value === password.value) return true
  } catch (e) {
    return false
  }
})

const errorRepeatPassword = computed(() => {
  if (repeatPassword.value !== password.value) return 'Password was repeated incorrectly'
})
</script>
