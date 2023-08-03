<template>
  <div class="flex flex-col">
    <div class="flex justify-center md:justify-start pb-6">
      <LinearText class="text-[32px]">Reinvest</LinearText>
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
        :disabled="!isValid || !number"
        class="w-[180px] md:w-[150px] h-[40px] self-center"
        @click="onReinvest"
      >
        Reinvest
      </BaseButton>
    </div>
  </div>
</template>
<script setup lang="ts">
import BaseButton from '@/components/base/BaseButton.vue'
import BaseMaxInput from '@/components/base/BaseMaxInput.vue'
import BaseSelector from '@/components/base/BaseSelector.vue'
import LinearText from '@/components/base/LinearText.vue'
import { useProfile } from '@/store/user/profile'
import { computed, onUnmounted, reactive, ref } from 'vue'
import { useReinvestWrite } from '@/store/business/reinvest'
import { usePumpWrite } from '@/store/business/pump'
import { useToken } from '@/store/contracts/token'
import { useWeb3 } from '@/web3-tools/vue'

const number = ref('')
const web3 = useWeb3()
const token = useToken()
const profile = useProfile()
const reinvestWrite = useReinvestWrite()
const pumpWrite = usePumpWrite()

const coin = ref('TIGERUP')

const coins = reactive([
  {
    label: 'BNB',
    value: 'BNB',
  },
  {
    label: 'TIGERUP',
    value: 'TIGERUP',
  },
])

const active = ref(false)
const onPress = (isActive: boolean) => {
  active.value = isActive
}

const balanceBnb = computed(() => {
  if (isExternal.value) {
    return web3.balance ? web3.balance.formatNumber(token.decimals).toFixed(2) : '0'
  } else {
    return profile.profile?.walletBalanceBnb
      ? profile.profile.walletBalanceBnb.toFixed(2)
      : '0'
  }
})

const balanceTigerUp = computed(() => {
  if (isExternal.value) {
    return token.balance ? token.balance.formatNumber(token.decimals).toFixed(2) : '0'
  } else {
    return profile.profile?.walletBalanceTigerup
      ? profile.profile.walletBalanceTigerup.toFixed(2)
      : '0'
  }
})

const maxValue = computed(() =>
  coin.value === 'TIGERUP' ? balanceTigerUp.value : balanceBnb.value
)

const minAmount = computed(() => (coin.value === 'TIGERUP' ? 0.01 : 0.01))

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

const isExternal = computed(() => profile.profile?.walletType === 'External')

const onReinvest = () => {
  if (isExternal.value) {
    coin.value === 'TIGERUP'
      ? reinvestWrite.reinvestExternal(number.value)
      : pumpWrite.pumpExternal(number.value)
  } else
    reinvestWrite.reinvestInternal({
      amount: number.value,
      token: coin.value === 'TIGERUP',
    })
}

onUnmounted(() => {
  number.value = ''
  coin.value = 'TIGERUP'
})
</script>
