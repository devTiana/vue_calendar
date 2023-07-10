<template>
  <div>
    <Header
      @navToggle="navToggle"
      :dateInfo="dateInfo"
      @prevMonth="goToPrevMonth()"
      @today="goToToday()"
      @nextMonth="goToNextMonth()"
    />
    <div class="content_wrap">
      <Nav v-if="navShow" />
      <Calendar
        :dateInfo="dateInfo"
        :prevDates="prevDates"
        @clickOnDate="changeToCurrentDate"
        @clickOnDatePrevMonth="goToPrevMonth"
        @clickOnDateNextMonth="goToNextMonth"
      />
    </div>
  </div>
</template>

<script setup>
const today = ref(new Date());
const dateInfo = reactive({
  year: today.value.getFullYear(),
  month: today.value.getMonth(),
  date: today.value.getDate(),
  timeStamp: dateToString(
    new Date(
      today.value.getFullYear(),
      today.value.getMonth(),
      today.value.getDate()
    )
  ),
  prevLastDate: new Date(
    today.value.getFullYear(),
    today.value.getMonth(),
    0
  ).getDate(),
  prevLastDay: new Date(
    today.value.getFullYear(),
    today.value.getMonth(),
    0
  ).getDay(),
  lastDate: new Date(
    today.value.getFullYear(),
    today.value.getMonth() + 1,
    0
  ).getDate(),
  lastDay: new Date(
    today.value.getFullYear(),
    today.value.getMonth() + 1,
    0
  ).getDay(),
});
const prevDates = ref(
  Array(dateInfo.prevLastDay)
    .fill(dateInfo.prevLastDate - dateInfo.prevLastDay + 1)
    .map((value, index) => value + index)
);

const navShow = ref(true);

const navToggle = () => {
  navShow.value = !navShow.value;
};

const changeToCurrentDate = (date, action) => {
  // if (action == 'prev') goToPrevMonth()
  // if (action == 'next') goToNextMonth()
  dateInfo.date = date;
  dateInfo.timeStamp = dateToString(
    new Date(dateInfo.year, dateInfo.month, date)
  );
};

const goToPrevMonth = (date) => {
  if (date) dateInfo.date = date;
  if (dateInfo.month === 0) {
    dateInfo.year -= 1;
    dateInfo.month = 11;
  } else {
    dateInfo.month -= 1;
  }
  dateInfo.timeStamp = dateToString(
    new Date(dateInfo.year, dateInfo.month, dateInfo.date)
  );
  dateInfo.prevLastDate = new Date(dateInfo.year, dateInfo.month, 0).getDate();
  dateInfo.prevLastDay = new Date(dateInfo.year, dateInfo.month, 0).getDay();
  dateInfo.lastDate = new Date(dateInfo.year, dateInfo.month + 1, 0).getDate();
  dateInfo.lastDay = new Date(dateInfo.year, dateInfo.month + 1, 0).getDay();
  prevDates.value = Array(dateInfo.prevLastDay)
    .fill(dateInfo.prevLastDate - dateInfo.prevLastDay + 1)
    .map((value, index) => value + index);
};

const goToToday = () => {
  dateInfo.year = today.value.getFullYear();
  dateInfo.month = today.value.getMonth();
  dateInfo.date = today.value.getDate();
  dateInfo.timeStamp = dateToString(
    new Date(dateInfo.year, dateInfo.month, dateInfo.date)
  );
  dateInfo.prevLastDate = new Date(dateInfo.year, dateInfo.month, 0).getDate();
  dateInfo.prevLastDay = new Date(dateInfo.year, dateInfo.month, 0).getDay();
  dateInfo.lastDate = new Date(dateInfo.year, dateInfo.month + 1, 0).getDate();
  dateInfo.lastDay = new Date(dateInfo.year, dateInfo.month + 1, 0).getDay();
  prevDates.value = Array(dateInfo.prevLastDay)
    .fill(dateInfo.prevLastDate - dateInfo.prevLastDay + 1)
    .map((value, index) => value + index);
};

const goToNextMonth = (date) => {
  if (date) dateInfo.date = date;
  if (dateInfo.month === 11) {
    dateInfo.month = 0;
    dateInfo.year += 1;
  } else {
    dateInfo.month += 1;
  }
  dateInfo.timeStamp = dateToString(
    new Date(dateInfo.year, dateInfo.month, dateInfo.date)
  );
  dateInfo.prevLastDate = new Date(dateInfo.year, dateInfo.month, 0).getDate();
  dateInfo.prevLastDay = new Date(dateInfo.year, dateInfo.month, 0).getDay();
  dateInfo.lastDate = new Date(dateInfo.year, dateInfo.month + 1, 0).getDate();
  dateInfo.lastDay = new Date(dateInfo.year, dateInfo.month + 1, 0).getDay();
  prevDates.value = Array(dateInfo.prevLastDay)
    .fill(dateInfo.prevLastDate - dateInfo.prevLastDay + 1)
    .map((value, index) => value + index);
};
</script>

<style lang="scss">
@import url('https://cdn.rawgit.com/moonspam/NanumSquare/master/nanumsquare.css');
* {
  box-sizing: border-box;
}
html,
body {
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
}
body {
  font-family: 'NanumSquare', 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 16px;
  color: #707070;
  position: relative;
  overflow: hidden;
}
button {
  border: none;
  background: none;
  color: #707070;
}
.content_wrap {
  height: 90vh;
  display: flex;
}
</style>
