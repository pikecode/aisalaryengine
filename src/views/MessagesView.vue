<template>
  <!-- Mobile -->
  <MessagesViewH5 class="md:hidden" />

  <!-- Desktop -->
  <MessagesViewPC class="hidden md:block" />
</template>

<script setup lang="ts">
import MessagesViewH5 from './messages/MessagesViewH5.vue'
import MessagesViewPC from './messages/MessagesViewPC.vue'
</script>
