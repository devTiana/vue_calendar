<template>
  <div class="search_box" :class="{ active: activeSearch }">
    <input v-model="input_search" placeholder="검색어를 입력해주세요" />
    <img
      src="~/assets/search_btn.png"
      alt="일정 검색 버튼"
      @click="activeSearch = !activeSearch"
    />
  </div>
</template>

<script setup>
const activeSearch = ref(false);
const input_search = ref('');
</script>

<style lang="scss">
.search_box {
  border: 1px solid #fff;
  display: visible;
  border-radius: 0.4rem;
  input {
    padding: 0.5rem;
    border: none;
    background: none;
    display: none;
  }
}
.search_box.active {
  border: 1px solid #ccc;
  display: flex;
  input {
    border: none;
    background: none;
    display: block;
  }
}
</style>
