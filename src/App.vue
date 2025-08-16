<script setup lang="ts">
import Clock from './components/Clock.vue';
import SessionList from './components/SessionList.vue';
import PToast from 'primevue/toast';
import PConfirmDialog from 'primevue/confirmdialog';

import logo from './assets/logo.png';
import Explanation from '@/components/Explanation.vue';
</script>

<template>
  <div class="pb-6">
    <div
      :class="['flex', 'justify-content-center', 'align-items-center', 'gap-3']"
    >
      <img :src="logo" alt="Pomodoro" class="pm-logo" />
      <h1 class="pm-title">Pomodoro</h1>
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
  <PConfirmDialog class="pm-confirm-dialog" />

  <footer class="flex justify-content-center align-items-center gap-3">
    <p>© 2025 Made by Douglas Jordão</p>
    <div class="flex gap-3">
      <a
        href="https://linkedin.com/in/douglasjordao/"
        target="_blank"
        aria-label="LinkedIn"
      >
        <i class="pi pi-linkedin"></i>
      </a>
      <a
        href="https://github.com/douglasjordao"
        target="_blank"
        aria-label="GitHub"
      >
        <i class="pi pi-github"></i>
      </a>
    </div>
  </footer>
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

.pm-title {
  font-size: 2em;
  margin: 2rem 0;
  text-align: center;

  @media screen and (min-width: 576px) {
    font-size: 5em;
  }
}

.pm-logo {
  width: 72px;
  height: 72px;

  @media screen and (min-width: 576px) {
    width: 128px;
    height: 128px;
  }
}

.pm-confirm-dialog {
  width: 300px;

  @media screen and (min-width: 576px) {
    width: 465px;
  }
}
</style>

<style lang="scss" scoped></style>
