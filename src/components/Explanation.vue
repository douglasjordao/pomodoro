<script setup lang="ts">
import CardContainer from '@/components/CardContainer.vue';

import logo from '@/assets/logo.png';
</script>

<template>
  <CardContainer class="pm-what-is-pomodoro">
    <template #content>
      <div class="flex align-items-center justify-content-center">
        <img :src="logo" alt="Pomodoro" class="pm-logo" />
        <h2 class="pm-what-is-pomodoro__title">
          What is the Pomodoro Technique?
        </h2>
      </div>

      <p class="px-4 text-lg">
        The Pomodoro Technique is a productivity method that alternates periods
        of intense focus with short breaks. Traditionally, you work for 25
        minutes with full concentration, followed by a 5-minute break. After 4
        cycles, you take a longer break of 15 to 30 minutes.
      </p>
      <p class="px-4 text-lg">
        This practice helps maintain focus, prevent mental fatigue, and improve
        time management.
      </p>

      <div class="flex align-items-center justify-content-center mt-8">
        <img :src="logo" alt="Pomodoro" class="pm-logo" />
        <h2 class="pm-what-is-pomodoro__title">How does it work?</h2>
      </div>

      <p class="px-4 text-lg">
        Just hit Start and you're ready to go. If you want to customize your
        timers, click the clock name you'd like to edit, then click the timer
        and set a value of your choice.
      </p>
    </template>
  </CardContainer>
</template>

<style lang="scss" scoped>
.pm-logo {
  width: 48px;
  height: 48px;

  @media screen and (min-width: 576px) {
    width: 72px;
    height: 72px;
  }
}

.pm-what-is-pomodoro {
  width: 298px;

  @media screen and (min-width: 576px) {
    width: 465px;
    height: 753px;
  }

  &__title {
    font-size: 1.25em;
    width: 250px;
    text-align: center;
  }
}
</style>
