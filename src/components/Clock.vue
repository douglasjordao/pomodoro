<script setup lang="ts">
import { onBeforeMount } from 'vue';
import { useTimerStore } from '@/store/modules/timerStore';

import PCard from 'primevue/card';
import Timer from './Timer.vue';
import Filter from './Filter.vue';
import ActionButton from './ActionButton.vue';

const timerStore = useTimerStore();

onBeforeMount(() => {
  timerStore.setTimerType('Pomodoro');
});
</script>

<template>
  <PCard class="pm-clock">
    <template #title>
      <Filter />
    </template>
    <template #content>
      <Timer />
    </template>

    <template #footer>
      <ActionButton class="mt-3 w-full" />
    </template>
  </PCard>
</template>

<style lang="scss" scoped>
.pm-clock {
  width: 465px;
  height: 385px;
}
</style>
