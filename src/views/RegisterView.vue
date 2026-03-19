<template>
  <!-- Mobile -->
  <RegisterViewH5 class="md:hidden" />

  <!-- Desktop -->
  <RegisterViewPC class="hidden md:block" />
</template>

<script setup lang="ts">
import RegisterViewH5 from './register/RegisterViewH5.vue'
import RegisterViewPC from './register/RegisterViewPC.vue'
</script>
