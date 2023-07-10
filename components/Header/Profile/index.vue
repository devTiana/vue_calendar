<template>
  <div class="profile_img">
    <!-- profile image btn (click -> modal open) -->
    <img
      src="~/assets/profile.png"
      alt="프로필 이미지"
      @click="modalShow = true"
    />
    <ProfileModal v-if="modalShow" @modalClose="modalShow = false" />
  </div>
</template>

<script setup>
import ProfileModal from './ProfileModal/index.vue';

const modalShow = ref(false);
</script>

<style lang="scss">
.profile_img {
  margin: 0 30px 0 20px;
  cursor: pointer;
}
</style>
