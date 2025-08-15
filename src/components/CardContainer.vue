<script setup lang="ts">
import PCard from 'primevue/card';

import { useTimerStore } from '@/store/modules/timerStore';

const timerStore = useTimerStore();

function getCardStyle() {
  switch (timerStore.state.type) {
    case 'Pomodoro':
      return {
        border: '1px solid var(--p-yellow-500)',
      };
    case 'Short Break':
      return {
        border: '1px solid var(--p-sky-500)',
      };
    case 'Long Break':
      return {
        border: '1px solid var(--p-green-500)',
      };
  }
}
</script>

<template>
  <PCard class="pm-clock" :style="getCardStyle()">
    <template #header>
      <slot name="header" />
    </template>

    <template #title>
      <slot name="title" />
    </template>

    <template #content>
      <slot name="content" />
    </template>

    <template #footer>
      <slot name="footer" />
    </template>
  </PCard>
</template>

<style lang="scss" scoped>
.pm-clock {
  border: 1px solid var(--p-button-outlined-info-border-color);
  min-width: 300px;
  max-height: 394px;

  @media screen and (min-width: 576px) {
    width: 465px;
  }
}
</style>
