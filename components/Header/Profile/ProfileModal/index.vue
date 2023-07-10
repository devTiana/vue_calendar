<template>
  <div class="profile_modal">
    <div class="modal_close_btn" @click="$emit('modalClose')">&times;</div>
    <div class="user_info">
      <img src="~/assets/profile.png" alt="프로필 이미지" />
      <div>user nickname</div>
      <div>user email</div>
    </div>
    <div class="mypage_menu">
      <ResetPasswordBtn />
      <DeleteAccountBtn />
      <SignOutBtn />
    </div>
  </div>
</template>

<script setup>
import ResetPasswordBtn from './ResetPasswordBtn.vue';
import DeleteAccountBtn from './DeleteAccountBtn.vue';
import SignOutBtn from './SignOutBtn.vue';
</script>

<style lang="scss">
.profile_modal {
  padding: 2rem;
  background-color: #fff;
  border-radius: 0.4rem;
  box-shadow: 0 0 0.5rem 0 rgba(0, 0, 0, 0.2);
  position: absolute;
  top: 1rem;
  right: 1rem;
  z-index: 999;
  .modal_close_btn {
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
  .user_info {
    margin-bottom: 1rem;
    text-align: center;
    > div:nth-child(2) {
      font-weight: 700;
    }
    > div:nth-child(3) {
      font-size: 0.9em;
      font-weight: 300;
    }
  }
  .mypage_menu {
    > div {
      padding: 0.4rem 0;
      border-top: 1px solid #eee;
    }
  }
}
</style>
