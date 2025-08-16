<script setup lang="ts">
import { useTimerStore } from '@/store/modules/timerStore';
import { computed } from 'vue';
import { useConfirm } from 'primevue';

import type { TimerType } from '@/types';

import PButton from 'primevue/button';
import { useNotification } from '@/composables/useNotification';

type ButtonPassThrough = {
  root: {
    style: {
      border: string;
      color: string;
    };
  };
};

type PassThroughType = Record<TimerType, ButtonPassThrough>;

const timerStore = useTimerStore();
const confirm = useConfirm();
const notification = useNotification();

const buttonPassThrough = computed<PassThroughType>(() => ({
  Pomodoro: {
    root: {
      style: {
        border: `1px solid var(${
          timerStore.state.isRunning ? '--p-red-500' : '--p-yellow-500'
        })`,
        color: `var(${
          timerStore.state.isRunning ? '--p-white-500' : '--p-yellow-500'
        })`,
      },
    },
  },
  'Short Break': {
    root: {
      style: {
        border: `1px solid var(${
          timerStore.state.isRunning ? '--p-red-500' : '--p-sky-500'
        })`,
        color: `var(${
          timerStore.state.isRunning ? '--p-white-500' : '--p-sky-500'
        })`,
      },
    },
  },
  'Long Break': {
    root: {
      style: {
        border: `1px solid var(${
          timerStore.state.isRunning ? '--p-red-500' : '--p-green-500'
        })`,
        color: `var(${
          timerStore.state.isRunning ? '--p-white-500' : '--p-green-500'
        })`,
      },
    },
  },
}));

const label = computed<string>(() => {
  if (timerStore.state.isRunning) {
    return 'Stop';
  } else {
    return 'Start';
  }
});

const severity = computed<string>(() => {
  if (timerStore.state.isRunning) {
    return 'danger';
  } else {
    return 'info';
  }
});

function showNotificationDisclaimer() {
  confirm.require({
    message: `This app can show reminders as notifications on your computer.
      For a better experience, we recommend allowing them. If you agree, your browser will ask for permission first.`,
    header: 'Notifications',
    icon: 'pi pi-exclamation-triangle',
    rejectProps: {
      label: 'Cancel',
      severity: 'secondary',
      outlined: true,
    },
    acceptProps: {
      label: 'Accept',
      outlined: true,
    },
    accept: () => {
      notification.askPermission();
    },
  });
}

const action = computed<Function>(() => {
  if (!timerStore.state.isRunning) {
    if (
      notification.isNavigatorSupported() &&
      !notification.isPermissionGranted()
    ) {
      showNotificationDisclaimer();

      return () => {};
    } else {
      return timerStore.startClockCountdown;
    }
  } else {
    return timerStore.stopClockCountdown;
  }
});

function setTimer() {
  timerStore.setTimer(timerStore.state.defaultTimes[timerStore.state.type]);
  timerStore.state.isEditing = !timerStore.state.isEditing;
}
</script>

<template>
  <PButton
    v-if="!timerStore.state.isEditing"
    :label="label"
    :severity="severity"
    class="pm-action-button"
    :variant="timerStore.state.isRunning ? 'filled' : 'outlined'"
    :pt="buttonPassThrough[timerStore.state.type]"
    @click="action()"
  />
  <div v-else class="flex align-items-center justify-content-center gap-3">
    <PButton
      label="Confirm"
      severity="success"
      variant="outlined"
      class="pm-action-button"
      :pt="buttonPassThrough[timerStore.state.type]"
      @click="setTimer"
    />
  </div>
</template>

<style scoped>
.pm-action-button {
  font-size: 1em;
  width: 100%;

  @media screen and (min-width: 576px) {
    font-size: 3em;
  }

  &--pomodoro {
    color: var(--p-yellow-500);
  }

  &--short-break {
    color: var(--p-sky-500);
  }

  &--long-break {
    color: var(--p-green-500);
  }
}
</style>
