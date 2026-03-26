<template>
  <!-- Mobile -->
  <AppHeaderH5 v-model:checkin-open="checkinOpen" class="md:hidden" />

  <!-- Desktop -->
  <AppHeaderPC v-model:checkin-open="checkinOpen" class="hidden md:block" />

  <CheckinModal v-model="checkinOpen" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import AppHeaderH5 from './AppHeaderH5.vue'
import AppHeaderPC from './AppHeaderPC.vue'
import CheckinModal from './CheckinModal.vue'

const checkinOpen = ref(false)
</script>
