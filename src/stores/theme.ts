import { defineStore } from 'pinia'

export type Theme = 'dark-purple' | 'light'

export const useThemeStore = defineStore('theme', {
  state: () => ({
    current: (localStorage.getItem('theme') as Theme) || 'dark-purple'
  }),

  actions: {
    setTheme(theme: Theme) {
      this.current = theme
      document.documentElement.setAttribute('data-theme', theme)
      localStorage.setItem('theme', theme)
    },

    init() {
      document.documentElement.setAttribute('data-theme', this.current)
    }
  }
})
