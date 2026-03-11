<template>
  <div>
    <AppHeader />
    <main>
      <HeroSection />
      <ProjectGrid />
      <ValuePillars />
      <SuccessStories />
      <PricingSection />
    </main>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import AppHeader from '@/components/common/AppHeader.vue'
import AppFooter from '@/components/common/AppFooter.vue'
import HeroSection from '@/components/home/HeroSection.vue'
import ProjectGrid from '@/components/home/ProjectGrid.vue'
import SuccessStories from '@/components/home/SuccessStories.vue'
import ValuePillars from '@/components/home/ValuePillars.vue'
import PricingSection from '@/components/home/PricingSection.vue'
</script>
