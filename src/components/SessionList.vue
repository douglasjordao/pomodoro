<script setup lang="ts">
import PCard from 'primevue/card';
import PDataTable from 'primevue/datatable';
import PColumn from 'primevue/column';
import PTag from 'primevue/tag';

import { useTimerStore } from '@/store/modules/timerStore';
import CardContainer from './CardContainer.vue';

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
        <PColumn field="time" header="Time">
          <template #body="{ data }">
            <PTag :value="data.time" :severity="getTagSeverity(data.type)" />
          </template>
        </PColumn>
        <PColumn field="label" header="Type">
          <template #body="{ data }">
            <PTag :value="data.label" :severity="getTagSeverity(data.type)" />
          </template>
        </PColumn>
        <PColumn field="duration" header="Duration">
          <template #body="{ data }">
            <PTag
              :value="data.duration"
              :severity="getTagSeverity(data.type)"
            />
          </template>
        </PColumn>
      </PDataTable>
    </template>
  </CardContainer>
</template>

<style lang="scss" scoped>
.pm-sessions {
  @media screen and (min-width: 576px) {
    &__option {
      &-text,
      &-icon {
        font-size: 0.5em;
      }
    }
  }
}
</style>
