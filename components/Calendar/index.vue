<template>
  <div class="calendar_wrap">
    <div class="days_array">
      <div v-for="(day, index) in daysArr" :class="{ sunday: day == 'Sun' }">
        {{ day }}
      </div>
    </div>
    <div class="calendar">
      <!-- 이전 달 랜더링 -->
      <Item
        v-for="(date, index) in prevDates"
        :date="date"
        class="prevDays"
        @click="$emit('clickOnDatePrevMonth', date)"
      />
      <!-- 이번 달 랜더링 -->
      <Item
        v-for="(date, index) in dateInfo.lastDate"
        :date="date"
        :class="{ today: dateInfo.date == date }"
        @click="$emit('clickOnDate', date)"
        @dblclick="(scheduleModalShow = true), (createSchedule = true)"
        @clickedSchedule="
          (index) => (
            (selectedSchedule = [dateInfo.timeStamp, index]),
            (scheduleModalShow = true)
          )
        "
        :scheduleList="
          scheduleList[
            dateToString(new Date(dateInfo.year, dateInfo.month, date))
          ]
        "
      />
      <!-- 다음 달 랜더링 -->
      <Item
        v-for="date in 7 - dateInfo.lastDay"
        :date="date"
        class="nextDays"
        @click="$emit('clickOnDateNextMonth', date)"
      />
    </div>
    <!-- 일정 CRUD 모달창 -->
    <div v-if="scheduleModalShow" class="schedule_modal">
      <div
        class="modal_close_btn"
        @click="
          (scheduleModalShow = false),
            (isEdit = false),
            (createSchedule = false)
        "
      >
        &times;
      </div>
      <div v-if="isEdit" class="schedule_content_wrap">
        <input v-model="input_edit_title" placeholder="제목을 작성해주세요" />
        <button
          class="save_btn"
          @click="saveEdits(selectedSchedule, input_edit_title)"
        >
          저장하기
        </button>
      </div>
      <div
        v-if="!isEdit && selectedSchedule.length && !createSchedule"
        class="schedule_content_wrap"
      >
        <div>
          {{ scheduleList[selectedSchedule[0]][selectedSchedule[1]].title }}
        </div>
        <div>
          <button class="edit_btn" @click="isEdit = true">수정하기</button>
          <button class="delete_btn" @click="deleteSchedule(selectedSchedule)">
            삭제하기
          </button>
        </div>
      </div>
      <div v-if="!isEdit && createSchedule" class="schedule_content_wrap">
        <input v-model="input_title" placeholder="일정 제목을 작성해주세요" />
        <div class="time_stamp">{{ dateInfo.timeStamp }}</div>
        <!-- <v-date-picker
          :v-model="range"
          locale="ko"
          is-rangemode="date"
          class="datetime-picker"
          is24hr
          :max-date="new Date()"
          :columns="$screens({ default: 1 })"
        ></v-date-picker> -->
        <button
          class="create_btn"
          @click="schedulePush(dateInfo.timeStamp, input_title)"
        >
          추가하기
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import Item from './Item.vue';
const { dateInfo } = defineProps(['dateInfo', 'prevDates']);

const daysArr = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

// 전체 일정 리스트
const scheduleList = reactive({
  '2023-1-2': [
    {
      title: 'schedule',
    },
  ],
});

const scheduleModalShow = ref(false);
const isEdit = ref(false);
const createSchedule = ref(false);
const selectedSchedule = ref([]);
const input_edit_title = ref('');
const input_title = ref('');
const range = ref({});

const saveEdits = (schedule, title) => {
  const [date, index] = schedule;
  if (title.length) {
    scheduleList[date][index].title = title;
    input_edit_title.value = '';
  }
  isEdit.value = false;
};
const deleteSchedule = (schedule) => {
  const [date, index] = schedule;
  scheduleList[date].splice(index, 1);
  scheduleModalShow.value = false;
};
const schedulePush = (date, title) => {
  if (title.length) {
    if (scheduleList[date]) {
      scheduleList[date].push({ title: title });
    } else {
      scheduleList[date] = [{ title: title }];
    }
  }
  input_title.value = '';
  createSchedule.value = false;
  scheduleModalShow.value = false;
};
</script>

<style lang="scss">
.calendar_wrap {
  height: 90vh;
  flex: 1 0 0;
  display: flex;
  flex-direction: column;
  position: relative;
  .days_array {
    display: flex;
    justify-content: space-around;
    height: 5vh;
    color: #aaa;
    font-weight: bold;
    > div {
      width: 100%;
      height: 100%;
      padding-top: 4px;
      text-align: center;
      border: 1px solid #eee;
      border-bottom: none;
    }
    .sunday {
      color: #dd4848;
    }
  }
  .calendar {
    flex: 1 0 0;
    display: flex;
    flex-wrap: wrap;
    align-content: stretch;
    text-align: center;
    > div {
      flex: 1 1 14%;
      padding: 0.2rem;
      color: #333;
      border-bottom: 1px solid #eee;
      border-left: 1px solid #eee;
      > div {
        margin-top: 0.3rem;
        padding: 0 0.2rem;
        text-align: left;
        color: #5999d0;
        background: rgba(89, 153, 208, 0.2);
        border-radius: 0.2rem;
      }
    }
    .prevDays,
    .nextDays {
      color: #aaa;
    }
    .date {
      /* background: none; */
      width: 1.7rem;
      height: 1.7rem;
      margin: auto;
      color: #666;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      background: none;
    }
    .today .date {
      background: rgba(41, 134, 193, 0.2);
      border-radius: 50%;
    }
  }
  .schedule_modal {
    width: 30%;
    height: 50%;
    padding: 3rem;
    background-color: #fff;
    border-radius: 0.4rem;
    box-shadow: 0 0 0.2rem 0.2rem rgba(0, 0, 0, 0.1);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 999;
    > .modal_close_btn {
      width: 2.5rem;
      height: 2.5rem;
      font-size: 1.5rem;
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      top: 0;
      right: 0;
    }
    > .schedule_content_wrap {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      line-height: 1.5rem;
      input {
        padding: 5px;
        border: none;
        border-bottom: 1px solid #eee;
      }
      .time_stamp {
        font-size: 0.8rem;
      }
      button {
        margin: 0.4rem;
        padding: 0.4rem;
        border: 1px solid #eee;
        background-color: #fff;
        border-radius: 0.4rem;
      }
      .edit_btn,
      .create_btn {
        color: #2986c1;
      }
      .edit_btn:hover,
      .create_btn:hover {
        color: #fff;
        background-color: #2986c1;
      }
      .delete_btn {
        color: #dd4848;
      }
      .delete_btn:hover {
        color: #fff;
        background-color: #dd4848;
      }
    }
  }
}
</style>
