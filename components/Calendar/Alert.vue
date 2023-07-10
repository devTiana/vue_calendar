<template>
  <div class="alert_modal">{{ message }}</div>
</template>

<script setup>
const { message } = defineProps(['message']);
</script>

<style lang="scss">
.alert_modal {
  width: 100%;
  text-align: center;
  padding: 0.5rem 1rem;
  font-size: 0.9em;
  font-weight: bold;
  color: rgb(120, 120, 201);
  background-color: rgba(255, 255, 255, 0.8);
  border-left: 4px solid rgb(211, 211, 243);
  border-radius: 0.2rem;
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.2);
}
</style>
