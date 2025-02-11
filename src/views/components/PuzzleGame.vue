<template>
  <div class="image-grid">
    <div
      v-for="(slice, index) in board"
      :key="index"
      :class="['image-slice', slice.class, slice.id === 0 ? 'hide' : '']"
      :style="slice.style"
      @click="$emit('handleClick', slice.id)"
    >
      <h1 class="slice-id">{{ slice.id }}</h1>
    </div>
  </div>
  <!-- <img src="/twin.jpg" alt="test" /> -->
</template>

<script setup lang="ts">
import type { GridSlice } from '@/interfaces/GridSlice'

defineProps<{
  board: GridSlice[]
}>()
</script>

<style scoped>
.image-grid {
  display: grid;
  grid-template-columns: repeat(3, 171px); /* 3 columns, each 341px wide */
  grid-template-rows: repeat(3, 171px); /* 3 rows, each 341px tall */
  gap: 0;
}

.image-slice {
  background-size: 1024px 1024px; /* Set the background image to the full size */
  background-repeat: no-repeat;
  /*border: 1px solid red;*/
  border-radius: 20px;
}

.slice-id {
  color: magenta;
  display: flex;
  justify-content: end;
  padding-right: 10px;
  text-shadow: 3px 3px 5px black;
  -webkit-text-stroke: 0.5px black;
  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10 and IE 11 */
  user-select: none; /* Standard syntax */
}

.hide {
  opacity: 0%;
}
</style>
