<template>
  <!-- Mobile -->
  <PricingSectionH5 class="md:hidden" />

  <!-- Desktop -->
  <PricingSectionPC class="hidden md:block" />
</template>

<script setup lang="ts">
import PricingSectionH5 from './PricingSectionH5.vue'
import PricingSectionPC from './PricingSectionPC.vue'
</script>
