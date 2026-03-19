<template>
  <!-- Mobile -->
  <ForgotPasswordViewH5 class="md:hidden" />

  <!-- Desktop -->
  <ForgotPasswordViewPC class="hidden md:block" />
</template>

<script setup lang="ts">
import ForgotPasswordViewH5 from './forgot-password/ForgotPasswordViewH5.vue'
import ForgotPasswordViewPC from './forgot-password/ForgotPasswordViewPC.vue'
</script>
