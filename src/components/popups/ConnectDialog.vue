<template>
  <div class="w-full flex flex-col items-center gap-4 mt-8">
    <div>
      <BaseInput
        :is-valid="isValidReferralLink"
        v-model="referralLink"
        placeholder="Referral code"
        class="w-[270px] h-[44px] text-success"
        :error-message="errorMsgPassword"
      />
    </div>
    <BaseButton
      noborder
      class="w-[230px] h-[48px]"
      :loading="isLoading"
      :disabled="isLoading"
      @click="dbConnectMetaMask"
    >
      Connect wallet
      <template v-if="!isLoading" v-slot:suffix-icon>
        <MetamaskIcon size="24px" />
        <WalletsIcon size="24px" />
      </template>
    </BaseButton>
    <BaseTumbler @sign-in="dbSignIn" @sign-up="dbSignUp" />
  </div>
</template>

<script setup lang="ts">
import { computed, ref, onMounted } from 'vue'
import MetamaskIcon from '@/components/base/icons/MetamaskIcon.vue'
import WalletsIcon from '@/components/base/icons/WalletsIcon.vue'
import BaseButton from '@/components/base/BaseButton.vue'
import BaseTumbler from '@/components/base/BaseTumbler.vue'
import BaseInput from '@/components/base/BaseInput.vue'
import { useWallet } from '@/web3-tools/vue'
import { useDialogs } from '@/store/ui/dialogs'
import { useAuthWrite } from '@/store/business/auth'
import { SignInRequest, SignUpRequest } from '@/api/types'
import { useWeb3 } from '@/web3-tools/vue'
import { useAuth } from '@/store/user/auth'
import { useDebounceFn } from '@vueuse/core'
import { useRouter } from 'vue-router'

const router = useRouter()
const web3 = useWeb3()
const authWrite = useAuthWrite()
const { connectMetamask } = useWallet()
const dialogs = useDialogs()
const auth = useAuth()

const clickLoading = ref(false)
const isLoading = computed(() => clickLoading.value || auth.loading || web3.loading)

const referralLink = ref('')

const dbConnectMetaMask = async () => {
  clickLoading.value = true
  await connectMetamask()
  authWrite.connectWallet({ wallet: web3.wallet, referralCode: referralLink.value })
  dialogs.closeCurrentDialog()
  setTimeout(() => (clickLoading.value = false), 3000)
}

const dbSignIn = (user: SignInRequest) => {
  console.log(user, 'user sign in')
  authWrite.signIn(user)
  dialogs.closeCurrentDialog()
}

const dbSignUp = (user: SignUpRequest) => {
  console.log(user, 'user sign up')
  authWrite.signUp({ ...user, referralCode: referralLink.value })
  dialogs.closeCurrentDialog()
}

const isValidReferralLink = computed(() => {
  try {
    return referralLink.value.length === 6 || !referralLink.value
  } catch (e) {
    return false
  }
})

const errorMsgPassword = computed(() =>
  !isValidReferralLink.value ? 'Referral code must be 6 characters long' : ''
)

const refCode = computed(() => router.currentRoute.value.params.referralId)

onMounted(() =>
  refCode.value
    ? (referralLink.value = refCode.value as string)
    : (referralLink.value = '')
)
</script>

<style scoped lang="scss"></style>
