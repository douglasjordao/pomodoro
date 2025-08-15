<script setup lang="ts">
import { computed, ref } from 'vue';
import { useTimerStore } from '@/store/modules/timerStore';
import type { TimerType } from '@/types';

import PSelectButton from 'primevue/selectbutton';

const timerStore = useTimerStore();

const options = ref<TimerType[]>(['Pomodoro', 'Short Break', 'Long Break']);

const type = computed<TimerType>({
  set(value) {
    timerStore.setTimerType(value);
  },
  get() {
    return timerStore.state.type;
  },
});
</script>

<template>
  <div class="pm-filter flex gap-3 align-items-center justify-content-center">
    <PSelectButton
      v-model="type"
      :options="options"
      :disabled="timerStore.state.isRunning"
    >
      <template #option="{ option }">
        <div class="flex align-items-center gap-2">
          <span class="pm-filter__option-text p-mr-2">{{ option }}</span>
        </div>
      </template>
    </PSelectButton>
  </div>
</template>

<style lang="scss" scoped>
.pm-filter {
  &__option {
    &-text,
    &-icon {
      font-size: 0.5em;

      @media screen and (min-width: 576px) {
        font-size: 1rem;
      }
    }
  }
}
</style>
