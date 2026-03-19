<template>
  <!-- Mobile -->
  <LoginViewH5 class="md:hidden" />

  <!-- Desktop -->
  <LoginViewPC class="hidden md:block" />
</template>

<script setup lang="ts">
import LoginViewH5 from './login/LoginViewH5.vue'
import LoginViewPC from './login/LoginViewPC.vue'
</script>
