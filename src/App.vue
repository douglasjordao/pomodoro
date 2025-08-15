<script setup lang="ts">
import Clock from './components/Clock.vue';
import SessionList from './components/SessionList.vue';
import PToast from 'primevue/toast';
</script>

<template>
  <div
    :class="[
      'flex',
      'flex-column',
      'align-items-center',
      'justify-content-center',
      'ubuntu-light',
      'h-screen',
      'w-screen',
      'my-auto',
      'gap-3',
    ]"
  >
    <Clock />
    <SessionList />
  </div>
  <PToast />
</template>

<style>
body {
  margin: 0;
}
</style>

<style scoped>
.ubuntu-light {
  font-family: 'Ubuntu', sans-serif;
  font-weight: 300;
  font-style: normal;
}
</style>
