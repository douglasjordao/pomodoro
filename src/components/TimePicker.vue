<script setup lang="ts">
import { useTimerStore } from '@/store/modules/timerStore';

import PInputNumber from 'primevue/inputnumber';

const timerStore = useTimerStore();

function setTime() {
  timerStore.state.isEditing = !timerStore.state.isEditing;
  timerStore.setTimer(timerStore.state.defaultTimes[timerStore.state.type]);
}
</script>

<template>
  <span
    v-if="!timerStore.state.isEditing"
    class="pm-time-picker"
    @click="timerStore.state.isEditing = !timerStore.state.isEditing"
  >
    {{ timerStore.time }}
  </span>
  <div v-else class="flex align-items-center gap-3" @keyup.enter="setTime">
    <PInputNumber
      v-model="timerStore.state.defaultTimes[timerStore.state.type].minutes"
      showButtons
      buttonLayout="vertical"
      :min="0"
      :max="59"
    >
      <template #incrementicon>
        <span class="pi pi-plus" />
      </template>
      <template #decrementicon>
        <span class="pi pi-minus" />
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
        <span class="pi pi-plus" />
      </template>
      <template #decrementicon>
        <span class="pi pi-minus" />
      </template>
    </PInputNumber>
  </div>
</template>

<style lang="scss" scoped>
.pm-time-picker {
  cursor: pointer;

  &:hover {
    color: var(--p-primary-color);
  }
}

:deep(.p-inputnumber) {
  width: 10rem;

  input {
    font-size: 0.7em;
  }
}
</style>
