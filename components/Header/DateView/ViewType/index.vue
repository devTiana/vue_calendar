<template>
  <div>
    <div class="view_type_group">
      <WeekBtn />
      <MonthBtn />
      <YearBtn />
    </div>
  </div>
</template>

<script setup>
import WeekBtn from './WeekBtn.vue';
import MonthBtn from './MonthBtn.vue';
import YearBtn from './YearBtn.vue';
</script>

<style lang="scss">
.view_type_group {
  display: flex;
  padding: 0.2rem;
  border: 1px solid #ddd;
  border-radius: 0.2rem;
  > div {
    border-radius: 0.2rem;
  }
  > div:nth-child(2) {
    background-color: #aaa;
    > button {
      color: #fff;
    }
  }
}
</style>
