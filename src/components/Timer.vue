<script setup lang="ts">
import TimePicker from './TimePicker.vue';
</script>

<template>
  <div class="flex justify-content-center align-items-center">
    <div class="pm-timer flex justify-content-center align-items-center">
      <TimePicker />
    </div>
  </div>
</template>

<style scoped lang="scss">
.pm-timer {
  margin: 2rem 0;
  width: 100%;
}
</style>
