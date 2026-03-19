<template>
  <div class="min-h-screen flex items-center justify-center px-4 py-8 mobile-login-bg">
    <div class="w-full max-w-md">
      <!-- Logo (Mobile only) -->
      <div class="text-center mb-8">
        <RouterLink to="/" class="inline-flex items-center gap-2 mb-2">
          <div class="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold relative">
            <span>AI</span>
            <span class="absolute -top-1 -right-1 text-yellow-300 text-sm">✦</span>
          </div>
          <span class="text-2xl font-bold text-gray-900">AI薪引擎</span>
        </RouterLink>
      </div>

      <!-- Forgot Password Card -->
      <div class="bg-white rounded-2xl p-6 shadow-lg">
        <!-- Step Indicator -->
        <div class="flex items-center justify-center mb-8">
          <div class="flex items-center gap-2">
            <div :class="['w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-all',
              step >= 1 ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-500']">
              1
            </div>
            <div :class="['w-12 h-1 transition-all', step >= 2 ? 'bg-blue-500' : 'bg-gray-200']"></div>
            <div :class="['w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-all',
              step >= 2 ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-500']">
              2
            </div>
            <div :class="['w-12 h-1 transition-all', step >= 3 ? 'bg-blue-500' : 'bg-gray-200']"></div>
            <div :class="['w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-all',
              step >= 3 ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-500']">
              3
            </div>
          </div>
        </div>

        <!-- Step 1: Enter Email/Phone -->
        <div v-if="step === 1">
          <h2 class="text-2xl font-bold text-gray-900 mb-2">验证身份</h2>
          <p class="text-gray-600 text-sm mb-6">请输入注册时使用的邮箱或手机号</p>

          <form @submit.prevent="handleSendCode" class="space-y-4">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">邮箱/手机号</label>
              <input
                v-model="form.account"
                type="text"
                placeholder="请输入邮箱或手机号"
                class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                required
              />
            </div>

            <button
              type="submit"
              class="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl"
            >
              发送验证码
            </button>
          </form>
        </div>

        <!-- Step 2: Verify Code -->
        <div v-if="step === 2">
          <h2 class="text-2xl font-bold text-gray-900 mb-2">输入验证码</h2>
          <p class="text-gray-600 text-sm mb-6">
            验证码已发送至 <span class="font-medium text-gray-900">{{ maskedAccount }}</span>
          </p>

          <form @submit.prevent="handleVerifyCode" class="space-y-4">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">验证码</label>
              <div class="flex gap-2">
                <input
                  v-model="form.code"
                  type="text"
                  placeholder="请输入6位验证码"
                  maxlength="6"
                  class="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                  required
                />
                <button
                  type="button"
                  @click="handleResendCode"
                  :disabled="countdown > 0"
                  class="px-4 py-3 border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
                >
                  {{ countdown > 0 ? `${countdown}s` : '重新发送' }}
                </button>
              </div>
            </div>

            <button
              type="submit"
              class="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl"
            >
              验证
            </button>
          </form>
        </div>

        <!-- Step 3: Reset Password -->
        <div v-if="step === 3">
          <h2 class="text-2xl font-bold text-gray-900 mb-2">设置新密码</h2>
          <p class="text-gray-600 text-sm mb-6">请设置新的登录密码</p>

          <form @submit.prevent="handleResetPassword" class="space-y-4">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">新密码</label>
              <div class="relative">
                <input
                  v-model="form.newPassword"
                  :type="showPassword ? 'text' : 'password'"
                  placeholder="请输入新密码（6-20位）"
                  class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                  required
                  minlength="6"
                  maxlength="20"
                />
                <button
                  type="button"
                  @click="showPassword = !showPassword"
                  class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <svg v-if="!showPassword" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                  </svg>
                </button>
              </div>
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">确认新密码</label>
              <input
                v-model="form.confirmPassword"
                :type="showPassword ? 'text' : 'password'"
                placeholder="请再次输入新密码"
                class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                required
              />
            </div>

            <button
              type="submit"
              class="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl"
            >
              完成
            </button>
          </form>
        </div>

        <!-- Back to Login -->
        <div class="text-center mt-6">
          <RouterLink to="/login" class="text-blue-600 hover:underline text-sm font-medium">
            返回登录
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const step = ref(1)
const countdown = ref(0)
const showPassword = ref(false)

const form = ref({
  account: '',
  code: '',
  newPassword: '',
  confirmPassword: ''
})

const maskedAccount = computed(() => {
  const account = form.value.account
  if (account.includes('@')) {
    const [name, domain] = account.split('@')
    return `${name.slice(0, 3)}***@${domain}`
  } else {
    return account.replace(/(\d{3})\d{4}(\d{4})/, '$1****$2')
  }
})

const handleSendCode = () => {
  console.log('发送验证码到:', form.value.account)
  step.value = 2
  startCountdown()
}

const handleVerifyCode = () => {
  if (form.value.code.length !== 6) {
    alert('请输入6位验证码')
    return
  }
  console.log('验证码:', form.value.code)
  step.value = 3
}

const handleResetPassword = () => {
  if (form.value.newPassword !== form.value.confirmPassword) {
    alert('两次输入的密码不一致')
    return
  }
  console.log('重置密码')
  alert('密码重置成功！')
  router.push('/login')
}

const handleResendCode = () => {
  console.log('重新发送验证码')
  startCountdown()
}

const startCountdown = () => {
  countdown.value = 60
  const timer = setInterval(() => {
    countdown.value--
    if (countdown.value <= 0) {
      clearInterval(timer)
    }
  }, 1000)
}
</script>

<style scoped>
.mobile-login-bg {
  background-image: url('/src/assets/images/mobile-login-bg.png');
  background-size: cover;
  background-position: center;
}
</style>
