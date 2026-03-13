<template>
  <div class="min-h-screen flex">
    <!-- Left Side - Promotional Content (PC only) -->
    <div class="hidden md:flex flex-1 bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700 relative overflow-hidden">
      <!-- Decorative circles -->
      <div class="absolute top-20 left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
      <div class="absolute bottom-20 right-20 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl"></div>

      <div class="relative z-10 flex flex-col justify-center px-16 text-white">
        <div class="space-y-8">
          <div>
            <h1 class="text-6xl font-bold leading-tight mb-4">
              AI薪引擎
            </h1>
            <h2 class="text-4xl font-bold">
              抓住AI风口
            </h2>
          </div>

          <p class="text-xl text-white/90 leading-relaxed">
            欢迎回来<br/>
            继续探索AI创业机会
          </p>

          <div class="space-y-4 pt-4">
            <div class="flex items-center gap-3">
              <div class="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
              </div>
              <span class="text-lg">实时更新项目库</span>
            </div>
            <div class="flex items-center gap-3">
              <div class="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
              </div>
              <span class="text-lg">AI工具推荐</span>
            </div>
            <div class="flex items-center gap-3">
              <div class="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
              </div>
              <span class="text-lg">专属会员权益</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Right Side - Login Form -->
    <div class="w-full md:w-[600px] flex-shrink-0 bg-white flex items-center justify-center px-8 py-12">
      <div class="w-full max-w-md">
        <!-- Logo -->
        <div class="text-center mb-8">
          <RouterLink to="/" class="inline-flex items-center gap-2 mb-2">
            <div class="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold relative">
              <span>AI</span>
              <span class="absolute -top-1 -right-1 text-yellow-300 text-sm">✦</span>
            </div>
            <span class="text-2xl font-bold text-gray-900">AI薪引擎</span>
          </RouterLink>
          <p class="text-gray-600 text-sm mt-2">欢迎回来，继续你的AI创业之旅</p>
        </div>

        <!-- Login Form Card -->
        <div class="bg-white rounded-2xl p-8">
        <h2 class="text-2xl font-bold text-gray-900 mb-6">登录账号</h2>

        <form @submit.prevent="handleLogin" class="space-y-4">
          <!-- Account -->
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">账号</label>
            <input
              v-model="form.account"
              type="text"
              placeholder="请输入邮箱/手机号/用户名"
              class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
              required
            />
          </div>

          <!-- Password -->
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">密码</label>
            <div class="relative">
              <input
                v-model="form.password"
                :type="showPassword ? 'text' : 'password'"
                placeholder="请输入密码"
                class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                required
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

          <!-- Remember & Forgot -->
          <div class="flex items-center justify-between">
            <label class="flex items-center gap-2">
              <input
                v-model="form.remember"
                type="checkbox"
                class="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <span class="text-sm text-gray-600">记住我</span>
            </label>
            <RouterLink to="/forgot-password" class="text-sm text-blue-600 hover:underline">
              忘记密码？
            </RouterLink>
          </div>

          <!-- Submit Button -->
          <button
            type="submit"
            class="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl btn-mobile"
          >
            登录
          </button>
        </form>

        <!-- Divider -->
        <div class="relative my-6">
          <div class="absolute inset-0 flex items-center">
            <div class="w-full border-t border-gray-200"></div>
          </div>
          <div class="relative flex justify-center text-sm">
            <span class="px-4 bg-white text-gray-500">或使用第三方账号登录</span>
          </div>
        </div>

        <!-- Social Login -->
        <div class="grid grid-cols-3 gap-3">
          <button class="flex items-center justify-center py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors btn-mobile">
            <svg class="w-5 h-5" viewBox="0 0 24 24" fill="#1DA1F2">
              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
            </svg>
          </button>
          <button class="flex items-center justify-center py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors btn-mobile">
            <svg class="w-5 h-5" viewBox="0 0 24 24" fill="#09B83E">
              <path d="M8.691 2.188C7.099 2.188 5.785 3.515 5.785 5.12c0 1.606 1.314 2.933 2.906 2.933s2.906-1.327 2.906-2.933c0-1.605-1.314-2.932-2.906-2.932zm11.618 0c-1.592 0-2.906 1.327-2.906 2.932 0 1.606 1.314 2.933 2.906 2.933s2.906-1.327 2.906-2.933c0-1.605-1.314-2.932-2.906-2.932zM8.691 8.053c-1.592 0-2.906 1.327-2.906 2.933 0 1.605 1.314 2.932 2.906 2.932s2.906-1.327 2.906-2.932c0-1.606-1.314-2.933-2.906-2.933zm11.618 0c-1.592 0-2.906 1.327-2.906 2.933 0 1.605 1.314 2.932 2.906 2.932s2.906-1.327 2.906-2.932c0-1.606-1.314-2.933-2.906-2.933zM8.691 13.918c-1.592 0-2.906 1.327-2.906 2.933 0 1.605 1.314 2.932 2.906 2.932s2.906-1.327 2.906-2.932c0-1.606-1.314-2.933-2.906-2.933zm11.618 0c-1.592 0-2.906 1.327-2.906 2.933 0 1.605 1.314 2.932 2.906 2.932s2.906-1.327 2.906-2.932c0-1.606-1.314-2.933-2.906-2.933z"/>
            </svg>
          </button>
          <button class="flex items-center justify-center py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors btn-mobile">
            <svg class="w-5 h-5" viewBox="0 0 24 24">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
          </button>
        </div>

        <!-- Register Link -->
        <div class="text-center mt-6">
          <span class="text-gray-600 text-sm">还没有账号？</span>
          <RouterLink to="/register" class="text-blue-600 hover:underline text-sm font-medium ml-1">
            立即注册
          </RouterLink>
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
  account: '',
  password: '',
  remember: false
})

const showPassword = ref(false)

const handleLogin = () => {
  console.log('登录信息:', form.value)
  alert('登录成功！')
  router.push('/')
}
</script>
