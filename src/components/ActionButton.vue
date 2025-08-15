<script setup lang="ts">
import { useTimerStore } from '@/store/modules/timerStore';
import { computed } from 'vue';

import PButton from 'primevue/button';

const timerStore = useTimerStore();

const label = computed<string>(() => {
  if (timerStore.state.isRunning) {
    return 'Stop';
  } else if (timerStore.needReset) {
    return 'Reset';
  } else {
    return 'Start';
  }
});

const severity = computed<string>(() => {
  if (timerStore.state.isRunning) {
    return 'danger';
  } else if (timerStore.needReset) {
    return 'info';
  } else {
    return 'outlined';
  }
});

const action = computed<Function>(() => {
  if (timerStore.state.isRunning) {
    return timerStore.stopClockCountdown;
  } else if (timerStore.needReset) {
    return timerStore.resetTimer;
  } else {
    return timerStore.startClockCountdown;
  }
});
</script>

<template>
  <PButton
    v-if="!timerStore.state.isEditing"
    :label="label"
    style="font-size: 3em"
    :severity="severity"
    variant="outlined"
    @click="action()"
  />
  <div v-else class="flex align-items-center justify-content-center gap-3">
    <PButton
      label="Confirm"
      class="w-full"
      severity="success"
      variant="outlined"
      style="font-size: 3em"
      @click="timerStore.state.isEditing = !timerStore.state.isEditing"
    />
  </div>
</template>

<style scoped></style>
