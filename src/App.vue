<script setup lang="ts">
import Clock from './components/Clock.vue';
import SessionList from './components/SessionList.vue';
</script>

<template>
  <div
    :class="[
      'flex',
      'flex-col',
      'align-items-center',
      'justify-content-center',
      'h-screen',
      'w-screen',
      'ubuntu-light',
      'gap-3',
    ]"
  >
    <Clock />
    <SessionList />
  </div>
</template>

<style scoped>
.ubuntu-light {
  font-family: 'Ubuntu', sans-serif;
  font-weight: 300;
  font-style: normal;
}
</style>
