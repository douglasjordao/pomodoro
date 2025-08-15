<script setup lang="ts">
import { ref, watch } from 'vue';
import { useTimerStore } from '@/store/modules/timerStore';

import PInputNumber from 'primevue/inputnumber';

const timerStore = useTimerStore();

watch(
  () => timerStore.state.timer.seconds,
  (newVal) => {
    if (newVal >= 60) {
      timerStore.state.timer.seconds = 60;
      timerStore.state.timer.seconds = 0;
    }
  },
);
</script>

<template>
  <span
    v-if="!timerStore.state.isEditing"
    class="pm-time-picker"
    @click="timerStore.state.isEditing = !timerStore.state.isEditing"
  >
    {{ timerStore.time }}
  </span>
  <div v-else class="flex align-items-center gap-3">
    <PInputNumber
      v-model="timerStore.state.timer.minutes"
      showButtons
      buttonLayout="vertical"
      :min="0"
      :max="60"
    >
      <template #incrementicon>
        <span class="pi pi-plus" />
      </template>
      <template #decrementicon>
        <span class="pi pi-minus" />
      </template>
    </PInputNumber>

    <PInputNumber
      v-model="timerStore.state.timer.seconds"
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
