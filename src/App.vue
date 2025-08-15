<script setup lang="ts">
import Clock from './components/Clock.vue';
import SessionList from './components/SessionList.vue';
import PToast from 'primevue/toast';
import PPanel from 'primevue/panel';

import logo from './assets/logo.png';
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

      <PPanel class="pm-what-is-pomodoro">
        <template #default>
          <div class="flex align-items-center">
            <img :src="logo" alt="Pomodoro" class="pm-logo" />
            <h2>What is the Pomodoro Technique?</h2>
          </div>

          <p class="px-4 text-lg">
            The Pomodoro Technique is a productivity method that alternates
            periods of intense focus with short breaks. Traditionally, you work
            for 25 minutes with full concentration, followed by a 5-minute
            break. After 4 cycles, you take a longer break of 15 to 30 minutes.
            This practice helps maintain focus, prevent mental fatigue, and
            improve time management.
          </p>

          <div class="flex align-items-center">
            <img :src="logo" alt="Pomodoro" class="pm-logo" />
            <h2>How does it work?</h2>
          </div>

          <ul class="px-4 text-lg">
            <li>Just hit Start and you're ready to go.</li>
            <li>
              If you want to customize your timers, click the clock you'd like
              to edit.
            </li>
          </ul>
        </template>
      </PPanel>
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

<style lang="scss" scoped>
.pm-logo {
  width: 72px;
  height: 72px;
}

.pm-what-is-pomodoro {
  max-width: 465px;
  height: 570px;

  @media screen and (min-width: 992px) {
    width: 800px;
  }
}
</style>
