<script setup lang="ts">
import Clock from './components/Clock.vue';
import SessionList from './components/SessionList.vue';
import PToast from 'primevue/toast';

import logo from './assets/logo.png';
import Explanation from '@/components/Explanation.vue';
</script>

<template>
  <div class="pb-6">
    <div :class="['flex', 'justify-content-center', 'align-items-center']">
      <img :src="logo" alt="Pomodoro" style="height: 128px; width: 128px" />
      <h1 class="font-bold text-7xl lg:text-8xl">Pomodoro</h1>
    </div>
    <div
      :class="[
        'flex',
        'flex-column',
        'lg:flex-row',
        'lg:align-items-start',
        'align-items-center',
        'justify-content-center',
        'lg:px-5',
        'gap-3',
      ]"
    >
      <div
        :class="[
          'flex',
          'flex-column',
          'align-items-center',
          'justify-content-center',
          'gap-3',
        ]"
      >
        <Clock />
        <SessionList />
      </div>

      <Explanation />
    </div>
  </div>

  <PToast />
</template>

<style>
html {
  font-family: 'Ubuntu', sans-serif !important;
}

body {
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

<style lang="scss" scoped></style>
