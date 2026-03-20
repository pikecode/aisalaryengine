<template>
  <div class="min-h-screen flex flex-col mobile-login-bg">
    <!-- Logo -->
    <div class="flex items-center justify-center pt-12" style="padding-bottom:60px;">
      <RouterLink to="/" class="flex items-center gap-3">
        <div class="flex items-center justify-center text-white font-bold" style="width:48px;height:48px;background:#1427FF;border-radius:8px;font-size:14px;">
          AI
        </div>
        <span style="font-family:'Roboto',Roboto;font-weight:bold;font-size:26px;color:#393939;line-height:24px;">AI薪引擎</span>
      </RouterLink>
    </div>

    <!-- Form Area -->
    <div class="px-5">
      <!-- Phone Input -->
      <div class="mb-3">
        <input
          v-model="form.phone"
          type="text"
          placeholder="请输入手机号"
          class="w-full px-4 py-4 rounded outline-none text-base"
          style="background:rgba(255,255,255,0.8);box-shadow:inset 0px 0px 1px 0px #000C95;border-radius:4px;font-family:'Source Han Sans CN',sans-serif;font-size:15px;color:#393939;"
          required
        />
      </div>

      <!-- Verification Code -->
      <div class="mb-3">
        <div class="relative">
          <input
            v-model="form.code"
            type="text"
            placeholder="请输入验证码"
            class="w-full px-4 py-4 rounded outline-none text-base pr-28"
            style="background:rgba(255,255,255,0.8);box-shadow:inset 0px 0px 1px 0px #000C95;border-radius:4px;font-family:'Source Han Sans CN',sans-serif;font-size:15px;color:#393939;"
            required
          />
          <button
            type="button"
            class="absolute right-4 top-1/2 -translate-y-1/2 text-sm whitespace-nowrap"
            style="color:#1427FF;"
          >
            获取验证码
          </button>
        </div>
      </div>

      <!-- Password -->
      <div class="mb-3">
        <div class="relative">
          <input
            v-model="form.password"
            :type="showPassword ? 'text' : 'password'"
            placeholder="请输入密码"
            class="w-full px-4 py-4 rounded outline-none text-base pr-12"
            style="background:rgba(255,255,255,0.8);box-shadow:inset 0px 0px 1px 0px #000C95;border-radius:4px;font-family:'Source Han Sans CN',sans-serif;font-size:15px;color:#393939;"
            required
          />
          <button
            type="button"
            @click="showPassword = !showPassword"
            class="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
          >
            <svg v-if="!showPassword" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
            </svg>
            <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"/>
            </svg>
          </button>
        </div>
      </div>

      <!-- Confirm Password -->
      <div class="mb-3">
        <div class="relative">
          <input
            v-model="form.confirmPassword"
            :type="showConfirmPassword ? 'text' : 'password'"
            placeholder="请再次输入密码"
            class="w-full px-4 py-4 rounded outline-none text-base pr-12"
            style="background:rgba(255,255,255,0.8);box-shadow:inset 0px 0px 1px 0px #000C95;border-radius:4px;font-family:'Source Han Sans CN',sans-serif;font-size:15px;color:#393939;"
            required
          />
          <button
            type="button"
            @click="showConfirmPassword = !showConfirmPassword"
            class="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
          >
            <svg v-if="!showConfirmPassword" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
            </svg>
            <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"/>
            </svg>
          </button>
        </div>
      </div>

      <!-- Go Login -->
      <div class="mb-4">
        <RouterLink to="/login" style="font-family:'Inter',Inter;font-weight:400;font-size:14px;color:#1427FF;">
          已有账号，去登录
        </RouterLink>
      </div>
    </div>

    <!-- Spacer with background -->
    <div class="flex-1"></div>

    <!-- Bottom Actions -->
    <div class="px-5 pb-10">
      <button
        @click="handleRegister"
        class="w-full block transition-all"
        style="background:#1427FF;border-radius:10px;height:50px;font-family:'Source Han Sans CN',sans-serif;font-weight:500;font-size:18px;color:#FFFFFF;letter-spacing:1px;"
      >
        注册
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const form = ref({
  phone: '',
  code: '',
  password: '',
  confirmPassword: ''
})

const showPassword = ref(false)
const showConfirmPassword = ref(false)

const handleRegister = () => {
  router.push('/login')
}
</script>

<style scoped>
.mobile-login-bg {
  background-image: url('/src/assets/images/mobile-login-bg.png');
  background-size: cover;
  background-position: center;
}

input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus {
  -webkit-box-shadow: 0 0 0px 1000px white inset;
  box-shadow: 0 0 0px 1000px white inset;
  transition: background-color 5000s ease-in-out 0s;
}
</style>
