<template>
  <div class="flex flex-col items-center justify-between min-h-[230px]">
    <div class="flex items-center flex-col gap-4">
      <div class="md:mr-2">
        <BaseInput
          v-model="email"
          :is-valid="isValidPassword"
          placeholder="Email"
          :error-message="errorEmail"
          class="w-[270px] h-[44px]"
        />
      </div>
      <div class="md:mr-2">
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
      <!--
      <a href="#">
        <span class="text-14 font-black">Forgot password?</span>
      </a>-->
    </div>
    <BaseButton
      primary
      :disabled="Boolean(errorEmail) || Boolean(errorPassword) || !email || !password || loading"
      @click="$emit('signIn', { email, password })"
      class="w-[162px] h-[48px]"
    >
      Sign In
    </BaseButton>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import BaseInput from '@/components/base/BaseInput.vue'
import BaseButton from '@/components/base/BaseButton.vue'
// import { useProfile } from '@/store/user/profile'

// const profileStore = useProfile()
// const loading = computed(() => profileStore.loading)

const emit = defineEmits(['signIn'])

const email = ref('')
const password = ref('')
const showPassword = ref(true)

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
</script>

<style lang="scss" scoped></style>
