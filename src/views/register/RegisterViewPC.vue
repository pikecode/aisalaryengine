<template>
  <div class="h-screen flex flex-col overflow-hidden" style="background-image: url('/src/assets/images/login-bg.png'); background-size: cover; background-position: center;">
    <!-- Top Bar - Logo -->
    <div class="px-8 py-5 flex items-center">
      <RouterLink to="/" class="flex items-center gap-3">
        <div class="flex items-center justify-center text-white font-bold text-sm" style="width:48px;height:48px;background:#1427FF;border-radius:8px;">
          AI
        </div>
        <span style="font-family:'Roboto',Roboto;font-weight:bold;font-size:26px;color:#393939;line-height:24px;">AI薪引擎</span>
      </RouterLink>
    </div>

    <!-- Main Content - Left Title + Right Card -->
    <div class="flex-1 h-full flex items-center" style="padding-bottom:160px;">
      <!-- Left Side - Title -->
      <div class="flex-1 flex items-center justify-center">
        <div class="text-center">
          <h1 style="font-family:'Roboto',Roboto;font-weight:bold;font-size:120px;color:#393939;line-height:1.2;" class="mb-4">AI薪引擎</h1>
          <h2 style="font-family:'Roboto',Roboto;font-weight:bold;font-size:120px;color:#393939;line-height:1.2;">抓住AI风口</h2>
        </div>
      </div>

      <!-- Right Side - Register Card -->
      <div class="flex items-center justify-center pr-20">
        <div class="relative" style="width:504px;background:#FFFFFF;box-shadow:0px 2px 20px 0px rgba(0,0,0,0.1);border-radius:0;padding:32px;">
          <!-- QR Code Icon -->
          <button class="absolute top-0 right-0 w-16 h-16 flex items-center justify-center text-gray-700 border-b border-l border-dashed border-gray-300 rounded-tr-2xl rounded-bl-lg">
            <svg class="w-9 h-9" viewBox="0 0 36 36" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <rect x="3" y="3" width="12" height="12" rx="1" fill="none" stroke="currentColor" stroke-width="2"/>
              <rect x="6" y="6" width="6" height="6" rx="0.5"/>
              <rect x="21" y="3" width="12" height="12" rx="1" fill="none" stroke="currentColor" stroke-width="2"/>
              <rect x="24" y="6" width="6" height="6" rx="0.5"/>
              <rect x="3" y="21" width="12" height="12" rx="1" fill="none" stroke="currentColor" stroke-width="2"/>
              <rect x="6" y="24" width="6" height="6" rx="0.5"/>
              <rect x="21" y="21" width="5" height="5" rx="0.5"/>
              <rect x="28" y="21" width="5" height="5" rx="0.5"/>
              <rect x="21" y="28" width="5" height="5" rx="0.5"/>
              <rect x="28" y="28" width="5" height="5" rx="0.5"/>
            </svg>
          </button>

          <!-- Title -->
          <h3 style="font-family:'Inter',Inter;font-weight:bold;font-size:30px;color:#393939;line-height:50px;text-align:center;" class="mb-6 mt-2">欢迎注册</h3>

          <form @submit.prevent="handleRegister" class="space-y-0">
            <!-- Phone -->
            <div class="pb-4">
              <div class="flex items-center gap-2 mb-2">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="14" cy="14" r="13" stroke="#2B3FD4" stroke-width="1.5"/>
                  <circle cx="14" cy="11" r="3.5" stroke="#2B3FD4" stroke-width="1.5"/>
                  <path d="M7 21c0-3.866 3.134-7 7-7s7 3.134 7 7" stroke="#2B3FD4" stroke-width="1.5" stroke-linecap="round"/>
                </svg>
                <span style="font-family:'Source Han Sans CN',sans-serif;font-weight:500;font-size:16px;color:#314396;">手机号</span>
              </div>
              <input
                v-model="form.phone"
                type="text"
                placeholder="18701234567"
                class="w-full px-0 py-2 outline-none"
                style="background:transparent;border-bottom:1px solid #E5E7EB;font-family:'Source Han Sans CN',sans-serif;font-weight:400;font-size:16px;color:#393939;text-align:left;-webkit-appearance:none;appearance:none;"
                required
              />
            </div>

            <!-- Verification Code -->
            <div class="pb-4">
              <div class="flex items-center gap-2 mb-2">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="14" cy="14" r="13" stroke="#2B3FD4" stroke-width="1.5"/>
                  <rect x="9" y="13" width="10" height="8" rx="1.5" stroke="#2B3FD4" stroke-width="1.5"/>
                  <path d="M11 13v-2.5a3 3 0 016 0V13" stroke="#2B3FD4" stroke-width="1.5" stroke-linecap="round"/>
                  <circle cx="14" cy="17" r="1" fill="#2B3FD4"/>
                </svg>
                <span style="font-family:'Source Han Sans CN',sans-serif;font-weight:500;font-size:16px;color:#314396;">验证码</span>
              </div>
              <div class="relative">
                <input
                  v-model="form.code"
                  type="text"
                  placeholder="请输入验证码"
                  class="w-full px-0 py-2 outline-none pr-24"
                  style="background:transparent;border-bottom:1px solid #E5E7EB;font-family:'Source Han Sans CN',sans-serif;font-weight:400;font-size:16px;color:#393939;text-align:left;-webkit-appearance:none;appearance:none;"
                  required
                />
                <button
                  type="button"
                  class="absolute right-0 top-1/2 -translate-y-1/2"
                  style="font-family:'Inter',Inter;font-weight:400;font-size:14px;color:#1427FF;"
                >
                  获取验证码
                </button>
              </div>
            </div>

            <!-- Password -->
            <div class="pb-4">
              <div class="flex items-center gap-2 mb-2">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="14" cy="14" r="13" stroke="#2B3FD4" stroke-width="1.5"/>
                  <rect x="9" y="13" width="10" height="8" rx="1.5" stroke="#2B3FD4" stroke-width="1.5"/>
                  <path d="M11 13v-2.5a3 3 0 016 0V13" stroke="#2B3FD4" stroke-width="1.5" stroke-linecap="round"/>
                  <circle cx="14" cy="17" r="1" fill="#2B3FD4"/>
                </svg>
                <span style="font-family:'Source Han Sans CN',sans-serif;font-weight:500;font-size:16px;color:#314396;">请输入密码</span>
              </div>
              <div class="relative">
                <input
                  v-model="form.password"
                  :type="showPassword ? 'text' : 'password'"
                  placeholder="18701234567"
                  class="w-full px-0 py-2 outline-none pr-8"
                  style="background:transparent;border-bottom:1px solid #E5E7EB;font-family:'Source Han Sans CN',sans-serif;font-weight:400;font-size:16px;color:#393939;text-align:left;-webkit-appearance:none;appearance:none;"
                  required
                />
                <button type="button" @click="showPassword = !showPassword" class="absolute right-0 top-1/2 -translate-y-1/2 text-gray-400">
                  <svg v-if="!showPassword" class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                  </svg>
                  <svg v-else class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"/>
                  </svg>
                </button>
              </div>
            </div>

            <!-- Confirm Password -->
            <div class="pb-4">
              <div class="flex items-center gap-2 mb-2">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="14" cy="14" r="13" stroke="#2B3FD4" stroke-width="1.5"/>
                  <rect x="9" y="13" width="10" height="8" rx="1.5" stroke="#2B3FD4" stroke-width="1.5"/>
                  <path d="M11 13v-2.5a3 3 0 016 0V13" stroke="#2B3FD4" stroke-width="1.5" stroke-linecap="round"/>
                  <circle cx="14" cy="17" r="1" fill="#2B3FD4"/>
                </svg>
                <span style="font-family:'Source Han Sans CN',sans-serif;font-weight:500;font-size:16px;color:#314396;">请确认密码</span>
              </div>
              <div class="relative">
                <input
                  v-model="form.confirmPassword"
                  :type="showConfirmPassword ? 'text' : 'password'"
                  placeholder="18701234567"
                  class="w-full px-0 py-2 outline-none pr-8"
                  style="background:transparent;border-bottom:1px solid #E5E7EB;font-family:'Source Han Sans CN',sans-serif;font-weight:400;font-size:16px;color:#393939;text-align:left;-webkit-appearance:none;appearance:none;"
                  required
                />
                <button type="button" @click="showConfirmPassword = !showConfirmPassword" class="absolute right-0 top-1/2 -translate-y-1/2 text-gray-400">
                  <svg v-if="!showConfirmPassword" class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                  </svg>
                  <svg v-else class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"/>
                  </svg>
                </button>
              </div>
            </div>

            <!-- Go Login -->
            <div style="padding-top:10px;padding-bottom:20px;">
              <RouterLink to="/login" style="font-family:'Inter',Inter;font-weight:400;font-size:14px;color:#1427FF;">已有账号，去登录</RouterLink>
            </div>

            <!-- Submit -->
            <button
              type="submit"
              class="block mx-auto transition-all"
              style="background:#1427FF;border-radius:10px;width:315px;height:50px;font-family:'Source Han Sans CN',sans-serif;font-weight:500;font-size:18px;color:#FFFFFF;letter-spacing:1px;"
            >
              注册
            </button>
          </form>

          <!-- Agreement -->
          <div class="flex items-center justify-center gap-2 mt-4">
            <input
              v-model="form.agreed"
              type="checkbox"
              id="pc-reg-agreement"
              class="w-3.5 h-3.5 text-blue-600 border-gray-300 rounded accent-blue-600"
            />
            <label for="pc-reg-agreement" style="font-family:'Roboto',Roboto;font-weight:400;font-size:14px;color:#393939;line-height:24px;">
              同意服务条款和隐私政策
            </label>
          </div>
        </div>
      </div>
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
  confirmPassword: '',
  agreed: false
})

const showPassword = ref(false)
const showConfirmPassword = ref(false)

const handleRegister = () => {
  router.push('/login')
}
</script>

<style scoped>
input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus {
  -webkit-box-shadow: 0 0 0px 1000px transparent inset;
  box-shadow: 0 0 0px 1000px transparent inset;
  transition: background-color 5000s ease-in-out 0s;
}
</style>
