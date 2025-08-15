<script setup lang="ts">
import PCard from 'primevue/card';
import PDataTable from 'primevue/datatable';
import PColumn from 'primevue/column';

import { useTimerStore } from '@/store/modules/timerStore';

const timerStore = useTimerStore();
</script>

<template>
  <PCard class="pm-sessions">
    <template #header>
      <h2 class="ml-4 mt-4">Sessions</h2>
    </template>
    <template #content>
      <PDataTable :value="timerStore.state.session" style="height: 300px">
        <PColumn field="label" />
        <PColumn field="label" />
      </PDataTable>
    </template>
  </PCard>
</template>

<style scoped>
.pm-sessions {
  width: 465px;
  height: 385px;
}
</style>
