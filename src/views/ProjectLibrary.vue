<template>
  <div>
    <AppHeader />
    <main class="pt-16 min-h-screen bg-gray-50">

      <!-- Search Section -->
      <SearchSection
        @search="handleSearch"
        @tag-click="handleTagClick"
        @quick-filter="handleQuickFilter"
      />

      <!-- Main Content -->
      <section class="py-6 md:py-12">
        <div class="max-w-7xl mx-auto px-4 md:px-6">
          <div class="flex gap-6">

            <!-- Filter Sidebar -->
            <FilterSidebar
              @filter-change="handleFilterChange"
              @open-mobile-filter="showMobileFilter = true"
            />

            <!-- Project Grid -->
            <ProjectLibraryGrid
              :projects="filteredProjects"
              :loading="loading"
              :has-more="hasMore"
              @load-more="loadMore"
              @project-action="handleProjectAction"
            />

          </div>
        </div>
      </section>

    </main>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useProjectStore } from '@/stores/projects'
import AppHeader from '@/components/common/AppHeader.vue'
import AppFooter from '@/components/common/AppFooter.vue'
import SearchSection from '@/components/project-library/SearchSection.vue'
import FilterSidebar from '@/components/project-library/FilterSidebar.vue'
import ProjectLibraryGrid from '@/components/project-library/ProjectLibraryGrid.vue'
import type { Project } from '@/types'

// Store
const projectStore = useProjectStore()

// State
const loading = ref(false)
const hasMore = ref(true)
const showMobileFilter = ref(false)
const searchQuery = ref('')
const activeFilters = ref<any>({})

// Computed
const filteredProjects = computed(() => {
  // TODO: Implement filtering logic based on searchQuery and activeFilters
  return projectStore.projects.slice(0, 6)
})

// Methods
const handleSearch = (query: string) => {
  searchQuery.value = query
  console.log('Search:', query)
}

const handleTagClick = (tag: string) => {
  console.log('Tag clicked:', tag)
}

const handleQuickFilter = (filter: string) => {
  console.log('Quick filter:', filter)
}

const handleFilterChange = (filters: any) => {
  activeFilters.value = filters
  console.log('Filters changed:', filters)
}

const loadMore = () => {
  loading.value = true
  setTimeout(() => {
    loading.value = false
  }, 1000)
}

const handleProjectAction = (action: string, project: Project) => {
  console.log('Project action:', action, project)
}
</script>