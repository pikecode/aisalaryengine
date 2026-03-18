<template>
  <!-- Mobile -->
  <AppHeaderH5 class="md:hidden" />

  <!-- Desktop -->
  <AppHeaderPC class="hidden md:block" />
</template>

<script setup lang="ts">
import AppHeaderH5 from './AppHeaderH5.vue'
import AppHeaderPC from './AppHeaderPC.vue'
</script>
