<script setup lang="ts">
import { onBeforeMount } from 'vue';
import { useTimerStore } from '@/store/modules/timerStore';

import Timer from './Timer.vue';
import Filter from './Filter.vue';
import ActionButton from './ActionButton.vue';
import CardContainer from './CardContainer.vue';

const timerStore = useTimerStore();

onBeforeMount(() => {
  timerStore.setTimerType('Pomodoro');
});
</script>

<template>
  <CardContainer class="pm-clock">
    <template #title>
      <Filter />
    </template>

    <template #content>
      <Timer />
    </template>

    <template #footer>
      <ActionButton class="mt-3 w-full" />
    </template>
  </CardContainer>
</template>

<style lang="scss" scoped></style>
