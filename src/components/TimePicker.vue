<script setup lang="ts">
import { useTimerStore } from '@/store/modules/timerStore';
import { useToast } from 'primevue/usetoast';

import PInputNumber from 'primevue/inputnumber';

const timerStore = useTimerStore();
const toast = useToast();

function editTime() {
  if (!timerStore.state.isRunning) {
    timerStore.state.isEditing = !timerStore.state.isEditing;
  }
}

function setTime() {
  if (!timerStore.state.isRunning) {
    if (
      timerStore.state.defaultTimes[timerStore.state.type].minutes === 0 &&
      timerStore.state.defaultTimes[timerStore.state.type].seconds === 0
    ) {
      toast.add({
        severity: 'error',
        summary: 'Error',
        detail: "You can't set a time of 00:00",
        life: 3000,
      });

      return;
    }

    timerStore.state.isEditing = !timerStore.state.isEditing;
    timerStore.setTimer(timerStore.state.defaultTimes[timerStore.state.type]);
  }
}
</script>

<template>
  <div
    v-if="timerStore.state.isEditing && !timerStore.state.isRunning"
    class="flex align-items-center gap-3"
    @keyup.enter="setTime"
  >
    <PInputNumber
      v-model="timerStore.state.defaultTimes[timerStore.state.type].minutes"
      showButtons
      buttonLayout="vertical"
      :min="0"
      :max="59"
    >
      <template #incrementicon>
        <span class="pm-time-picker__icon pi pi-plus" />
      </template>
      <template #decrementicon>
        <span class="pm-time-picker__icon pi pi-minus" />
      </template>
    </PInputNumber>

    <PInputNumber
      v-model="timerStore.state.defaultTimes[timerStore.state.type].seconds"
      showButtons
      buttonLayout="vertical"
      :min="0"
      :max="59"
    >
      <template #incrementicon>
        <span class="pm-time-picker__icon pi pi-plus" />
      </template>
      <template #decrementicon>
        <span class="pm-time-picker__icon pi pi-minus" />
      </template>
    </PInputNumber>
  </div>
  <span
    v-else
    class="pm-time-picker"
    :style="{ cursor: timerStore.state.isRunning ? '' : 'pointer' }"
    @click="editTime"
  >
    {{ timerStore.time }}
  </span>
</template>

<style lang="scss" scoped>
.pm-time-picker {
  font-size: 70px;
  font-weight: bold;

  @media screen and (min-width: 576px) {
    font-size: 100px;
  }

  &__icon {
    height: 1rem;
    text-align: center;
    display: flex;
    align-items: center;
  }
}

:deep(.p-inputnumber) {
  font-size: 5em;
  width: 7rem;

  input {
    font-size: 0.7em;
  }
}
</style>
