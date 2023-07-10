<template>
  <header>
    <div>
      <div class="nav_toggle_btn" @click="$emit('navToggle')">
        <img src="~/assets/hamburger_btn.png" alt="메뉴창 토글 버튼" />
      </div>
      <Logo />
    </div>
    <DateView
      :dateInfo="dateInfo"
      @prevMonth="$emit('prevMonth')"
      @today="$emit('today')"
      @nextMonth="$emit('nextMonth')"
    />
    <Search />
    <CreateBtn />
    <Profile />
  </header>
</template>

<script setup>
import Logo from './Logo.vue';
import DateView from './DateView/index.vue';
import Search from './Search.vue';
import CreateBtn from './CreateBtn.vue';
import Profile from './Profile/index.vue';
const { dateInfo } = defineProps(['dateInfo']);
</script>

<style lang="scss">
header {
  height: 10vh;
  display: flex;
  align-items: center;
  > div:nth-child(1) {
    width: 15.5vw;
    display: flex;
    align-items: center;
    .nav_toggle_btn {
      height: 100%;
      padding: 0 30px;
      display: flex;
      align-items: center;
      img {
        height: 16px;
      }
    }
  }
}
</style>
