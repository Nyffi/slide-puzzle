<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import PuzzleGame from './components/PuzzleGame.vue'
import { useGameStore } from '@/stores/puzzle'
import Button from './components/Button.vue'

const { getVictoryStatus, setWin, getGrid, handleClick, reset } = useGameStore()
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld v-if="getVictoryStatus()" msg="Congrats! 🥳" />
      <HelloWorld v-else @click="setWin()" msg="Slide Puzzle" />
    </div>
  </header>

  <main>
    <PuzzleGame v-if="!getVictoryStatus()" :board="getGrid()" @handle-click="handleClick" />
    <img v-else src="./assets/city.jpg" class="image" />
    <div class="btn-container">
      <Button title="Reset" @click="reset()" />
    </div>
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}
.logo {
  display: block;
  margin: 0 auto 2rem;
}

.image {
  width: 512px;
  height: 512px;
}

.btn-container {
  width: 100px;
  height: 50px;
  display: flex;
  justify-content: end;
  column-gap: 40%;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
