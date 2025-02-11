<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>
<template>
  <div class="btn" @click="$emit('reset')">
    <h3>{{ title }}</h3>
  </div>
</template>
<style scoped>
.btn {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10%;
  background-color: #237847;
}

.btn:hover {
  cursor: pointer;
  border: 2px solid white;
}

h3 {
  filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 1));
  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10 and IE 11 */
  user-select: none; /* Standard syntax */
}
</style>
