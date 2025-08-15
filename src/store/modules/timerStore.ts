import { defineStore } from 'pinia';
import { computed, reactive, ref } from 'vue';
import type { TimerType } from '@/types';

import dayjs from 'dayjs';

type Timer = {
  minutes: number;
  seconds: number;
};

type SessionEvent = {
  type: TimerType;
  label: string;
  time: string;
};

type TimerState = {
  isRunning: boolean;
  isEditing: boolean;
  timer: Timer;
  type: TimerType;
  session: SessionEvent[];
};

export const useTimerStore = defineStore('timerStore', () => {
  const state = reactive<TimerState>({
    isRunning: false,
    isEditing: false,
    timer: {
      minutes: 0,
      seconds: 0,
    },
    type: 'Pomodoro',
    session: [],
  });

  const defaultTimes = reactive<Record<TimerType, Timer>>({
    Pomodoro: {
      minutes: 25,
      seconds: 0,
    },
    'Short Break': {
      minutes: 5,
      seconds: 0,
    },
    'Long Break': {
      minutes: 15,
      seconds: 0,
    },
  });

  const interval = ref<number | null>(null);

  const pomodoros = ref<number>(0);

  const time = computed<string>(() =>
    dayjs()
      .minute(state.timer.minutes)
      .second(state.timer.seconds)
      .format('mm:ss'),
  );

  const needReset = computed<boolean>(() => {
    return (
      state.timer.minutes !== defaultTimes[state.type].minutes ||
      state.timer.seconds !== defaultTimes[state.type].seconds
    );
  });

  function setMinutes(minutes: number) {
    state.timer.minutes = minutes;
  }

  function setSeconds(seconds: number) {
    state.timer.seconds = seconds;
  }

  function addMinutes() {
    state.timer.minutes++;
  }

  function addSeconds() {
    state.timer.seconds++;
  }

  function startClockCountdown() {
    state.isRunning = true;

    interval.value = setInterval(() => {
      state.timer.seconds--;

      if (state.timer.seconds <= 0) {
        state.timer.minutes--;
        state.timer.seconds = 59;

        if (state.timer.minutes <= 0) {
          checkTimer();
        }
      }
    }, 1000);
  }

  function stopClockCountdown() {
    clearInterval(interval.value!);
    interval.value = null;
    state.isRunning = false;
  }

  function resetTimer() {
    state.isRunning = false;
    state.timer = defaultTimes[state.type];
    state.timer.minutes = state.timer.minutes;
    state.timer.seconds = state.timer.seconds;
  }

  function setTimerType(type: TimerType) {
    state.type = type;
    stopClockCountdown();
    resetTimer();
  }

  function checkTimer() {
    if (state.type === 'Pomodoro') {
      setTimerType(pomodoros.value === 4 ? 'Long Break' : 'Short Break');
    } else {
      setTimerType('Pomodoro');
    }
  }

  return {
    state,
    needReset,
    time,
    setMinutes,
    setSeconds,
    addMinutes,
    addSeconds,
    startClockCountdown,
    stopClockCountdown,
    resetTimer,
    setTimerType,
  };
});
