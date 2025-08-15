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
  duration: string;
  time: string;
};

type TimerState = {
  isRunning: boolean;
  isEditing: boolean;
  timer: Timer;
  type: TimerType;
  session: SessionEvent[];
  pomodoros: number;
  defaultTimes: Record<TimerType, Timer>;
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
    pomodoros: 0,
    defaultTimes: {
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
    },
  });

  const interval = ref<number | null>(null);

  const time = computed<string>(() =>
    dayjs()
      .minute(state.timer.minutes)
      .second(state.timer.seconds)
      .format('mm:ss'),
  );

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

  function setTimer(timer: Timer) {
    state.timer = { ...timer };
  }

  function resetTimer() {
    setTimer(state.defaultTimes[state.type]);
  }

  function setTimerType(type: TimerType) {
    state.type = type;
    stopClockCountdown();
    resetTimer();
  }

  function addSessionHistory(sessionEvent: SessionEvent) {
    state.session.push(sessionEvent);
  }

  function checkTimer() {
    resetTimer();

    addSessionHistory({
      type: state.type,
      label: state.type,
      duration: time.value,
      time: dayjs().format('HH:mm'),
    });

    if (state.type === 'Pomodoro') {
      if (state.pomodoros === 4) {
        state.pomodoros = 0;
        setTimerType('Long Break');
      } else {
        setTimerType('Short Break');
      }
      state.pomodoros++;
    } else {
      setTimerType('Pomodoro');
    }
  }

  return {
    state,
    time,
    startClockCountdown,
    stopClockCountdown,
    setTimer,
    setTimerType,
  };
});
