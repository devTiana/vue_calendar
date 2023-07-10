<template>
  <div>
    <div class="date">{{ date }}</div>
    <div
      v-for="(schedule, index) in scheduleList"
      @click="$emit('clickedSchedule', index)"
    >
      <div>{{ schedule.title }}</div>
    </div>
  </div>
</template>

<script setup>
const { date, scheduleList } = defineProps(['date', 'scheduleList']);
</script>
