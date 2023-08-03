<template>
  <div class="flex flex-col">
    <div class="flex justify-center md:justify-start pb-6">
      <LinearText class="text-[32px]">Withdraw</LinearText>
    </div>
    <div class="w-full pb-6 flex relative">
      <BaseInput
        :is-valid="isValidAddress"
        v-model="address"
        placeholder="Wallet address"
        class="w-full"
        :error-message="errorMsgAddress"
      >
        <template v-slot:suffix-icon>
          <img
            v-if="coin === 'BNB'"
            class="w-6 md:w-8 top-[-35px] md:top-[-39px]"
            src="@/assets/icon/bnb.svg"
          />
          <img
            v-if="coin === 'TIGERUP'"
            class="w-6 md:w-8 top-[-35px] md:top-[-39px]"
            src="@/assets/icon/tigerup.svg"
          />
        </template>
      </BaseInput>
    </div>

    <div class="flex flex-col md:flex-row gap-4 md:gap-2">
      <BaseMaxInput
        :is-valid="isValid"
        :placeholder="minAmount.toString()"
        v-model="number"
        :max-value="maxValue"
        class="self-center"
        :error-message="errorMessage"
      />
      <div
        class="h-[40px] w-[180px] md:w-[150px] border-[1px] border-[#FBE9FF]/[10%] p-2 md:p-1 rounded-[32px] self-center"
        :class="{ 'rounded-t-[24px] rounded-b-[0px]': active }"
      >
        <BaseSelector
          :options="coins"
          v-model="coin"
          @press="onPress"
          class="text-sm md:text-base"
        />
      </div>
      <BaseButton
        primary
        :disabled="!isValid || !isValidAddress || !address || !number"
        class="w-[180px] md:w-[150px] h-[40px] self-center"
        @click="onWithdraw"
      >
        Withdraw
      </BaseButton>
    </div>
  </div>
</template>
<script setup lang="ts">
import LinearText from '@/components/base/LinearText.vue'
import BaseButton from '@/components/base/BaseButton.vue'
import BaseSelector from '@/components/base/BaseSelector.vue'
import BaseInput from '@/components/base/BaseInput.vue'
import BaseMaxInput from '@/components/base/BaseMaxInput.vue'
import { useProfile } from '@/store/user/profile'
import { ref, computed, reactive, onUnmounted } from 'vue'
import { useProfileWrite } from '@/store/business/profile'
import { ethers } from 'ethers'

interface DialogProps {
  withdraw?: boolean
}

const props = defineProps<DialogProps>()

const { isAddress } = ethers.utils

const profileWrite = useProfileWrite()

const number = ref('')

const profile = useProfile()

const coin = ref('TIGERUP')

const coins = reactive([
  {
    label: 'TIGERUP',
    value: 'TIGERUP',
  },
  {
    label: 'BNB',
    value: 'BNB',
  },
])

const active = ref(false)
const onPress = (isActive: boolean) => {
  active.value = isActive
}

const balanceBnb = computed(() =>
  profile.profile?.walletBalanceBnb ? profile.profile.walletBalanceBnb.toFixed(2) : '0'
)

const balancePumpUp = computed(() =>
  profile.profile?.walletBalanceTigerup.toFixed(2)
    ? profile.profile.walletBalanceTigerup.toFixed(2)
    : '0'
)

const maxValue = computed(() =>
  coin.value === 'TIGERUP' ? balancePumpUp.value : balanceBnb.value
)

const minAmount = computed(() => (coin.value === 'TIGERUP' ? 0.01 : 0.01))

const address = ref('')

const isValidAddress = computed(() => {
  try {
    return isAddress(address.value) || !address.value
  } catch (e) {
    return false
  }
})

const errorMsgAddress = computed(() => {
  try {
    if (!isAddress(address.value)) return 'Wrong address'
  } catch (e) {
    return 'Wrong address'
  }
})

const isValid = computed(() => {
  try {
    const amount = Number(number.value)
    return (
      (amount >= minAmount.value && amount <= Number(maxValue.value)) || !number.value
    )
  } catch (e) {
    return false
  }
})

const errorMessage = computed(() => {
  try {
    const amount = Number(number.value)
    if (amount < minAmount.value) return `Amount must be more than ${minAmount.value}`
    if (amount > Number(maxValue.value)) return `Must be less than ${maxValue.value}`
    if (amount.toString().split('.').length > 2) return 'Invalid input'
    if (Number.isNaN(amount)) return 'Amount must be a number'
  } catch (e) {
    return 'Amount must be a number'
  }
})

const onWithdraw = () =>
  profileWrite.balanceWithdraw({
    address: address.value,
    amount: number.value,
    token: coin.value.toLowerCase(),
  })

onUnmounted(() => {
  number.value = ''
  address.value = ''
  coin.value = 'TIGERUP'
})
</script>
