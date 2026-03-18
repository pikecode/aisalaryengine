<template>
  <!-- Mobile -->
  <AppFooterH5 class="md:hidden" />

  <!-- Desktop -->
  <AppFooterPC class="hidden md:block" />
</template>

<script setup lang="ts">
import AppFooterH5 from './AppFooterH5.vue'
import AppFooterPC from './AppFooterPC.vue'
</script>
