<script setup lang="ts">
import TimePicker from './TimePicker.vue';
</script>

<template>
  <div
    class="flex justify-content-center align-items-center"
    style="height: 200px"
  >
    <div class="pm-timer flex justify-content-center align-items-center">
      <TimePicker />
    </div>
  </div>
</template>

<style scoped lang="scss">
.pm-timer {
  width: 100%;
  font-size: 100px;
  font-weight: bold;
  margin: auto 0;
}
</style>
