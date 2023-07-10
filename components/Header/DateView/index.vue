<template>
  <div class="date_view_wrap">
    <div class="date_view">
      <div class="date_info">
        <div>{{ monthsNames[dateInfo.month] }}</div>
        <div>{{ dateInfo.year }}</div>
      </div>
      <div class="date_view_btns">
        <PrevBtn @click="$emit('prevMonth')" />
        <TodayBtn @click="$emit('today')" />
        <NextBtn @click="$emit('nextMonth')" />
      </div>
      <ViewType />
    </div>
  </div>
</template>

<script setup>
import PrevBtn from './PrevBtn.vue';
import TodayBtn from './TodayBtn.vue';
import NextBtn from './NextBtn.vue';
import ViewType from './ViewType/index.vue';
const emit = defineEmits(['goToPrevMonth', 'goToNextMonth']);
const { dateInfo } = defineProps(['dateInfo']);

const monthsNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
</script>

<style lang="scss">
.date_view_wrap {
  flex: 1 0 0;
  .date_view {
    display: flex;
    align-items: center;
    .date_info {
      min-width: 18%;
      margin: 0 1rem 0 2.4rem;
      font-size: 1.4rem;
      color: #2986c1;
      display: flex;
      > div {
        font-weight: 800;
      }
      > div:nth-child(1) {
        margin-right: 0.5rem;
      }
    }
    .date_view_btns {
      margin-right: 0.8rem;
      display: flex;
      > div {
        margin: 0 0.1rem;
        padding: 0.2rem;
        border: 1px solid #ddd;
        border-radius: 0.2rem;
      }
    }
  }
}
</style>
