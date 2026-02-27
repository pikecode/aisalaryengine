import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserStore = defineStore('user', () => {
  const isLoggedIn = ref(false)
  const username = ref('')
  const avatar = ref('')

  function login(name: string) {
    isLoggedIn.value = true
    username.value = name
  }

  function logout() {
    isLoggedIn.value = false
    username.value = ''
    avatar.value = ''
  }

  return { isLoggedIn, username, avatar, login, logout }
})
