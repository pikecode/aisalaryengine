import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { Project } from '@/types'
import { mockProjects } from '@/data/projects'

export const useProjectStore = defineStore('projects', () => {
  const projects = ref<Project[]>(mockProjects)

  const activeCategory = ref<string>('全部')
  const categories = ['全部', '副业', '创业', '工具']

  const filteredProjects = computed(() => {
    if (activeCategory.value === '全部') return projects.value
    return projects.value.filter(p => p.category === activeCategory.value)
  })

  function setCategory(cat: string) {
    activeCategory.value = cat
  }

  return { projects, activeCategory, categories, filteredProjects, setCategory }
})
