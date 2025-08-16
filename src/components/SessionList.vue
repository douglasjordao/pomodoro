<script setup lang="ts">
import PDataTable from 'primevue/datatable';
import PColumn from 'primevue/column';
import PTag from 'primevue/tag';

import { useTimerStore } from '@/store/modules/timerStore';
import CardContainer from './CardContainer.vue';

import logo from '@/assets/logo.png';

const timerStore = useTimerStore();

function getTagSeverity(type: string) {
  if (type === 'Pomodoro') {
    return 'warn';
  } else if (type === 'Short Break') {
    return 'info';
  } else {
    return 'success';
  }
}
</script>

<template>
  <CardContainer class="pm-sessions">
    <template #header>
      <h2 class="ml-4">Sessions</h2>
    </template>
    <template #content>
      <PDataTable
        :value="timerStore.state.session"
        scrollable
        scrollHeight="250px"
        class="pm-sessions__table"
      >
        <template #empty>
          <div class="flex align-items-center justify-content-center">
            <img
              :src="logo"
              alt="Pomodoro"
              class="pm-logo"
              style="width: 40px; height: 40px"
            />
            <h2 class="pm-sessions__title ml-4">No sessions yet</h2>
          </div>
        </template>

        <PColumn field="time">
          <template #header>
            <span class="pm-sessions__header">Time</span>
          </template>
          <template #body="{ data }">
            <PTag
              :value="data.time"
              :severity="getTagSeverity(data.type)"
              class="pm-sessions__tag"
            />
          </template>
        </PColumn>

        <PColumn field="label">
          <template #header>
            <span class="pm-sessions__header">Type</span>
          </template>
          <template #body="{ data }">
            <PTag
              :value="data.label"
              :severity="getTagSeverity(data.type)"
              class="pm-sessions__tag"
            />
          </template>
        </PColumn>

        <PColumn field="duration">
          <template #header>
            <span class="pm-sessions__header">Duration</span>
          </template>
          <template #body="{ data }">
            <PTag
              :value="data.duration"
              :severity="getTagSeverity(data.type)"
              class="pm-sessions__tag"
            />
          </template>
        </PColumn>
      </PDataTable>
    </template>
  </CardContainer>
</template>

<style lang="scss" scoped>
.pm-sessions {
  height: 375px;
  width: 298px;

  @media screen and (min-width: 576px) {
    width: 465px;

    &__option {
      &-text,
      &-icon {
        font-size: 0.5em;
      }
    }
  }

  &__header {
    font-size: 0.8em;

    @media screen and (min-width: 576px) {
      font-size: 1em;
    }
  }

  &__tag {
    font-size: 0.65em;

    @media screen and (min-width: 576px) {
      font-size: 1em;
    }
  }
}
</style>
