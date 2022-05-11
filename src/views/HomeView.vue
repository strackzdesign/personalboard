<script lang="ts">
import TestComponent from '@/components/TestComponent.vue'

export default {
    components: {
      TestComponent
    }
}
</script>

<template>
  <main id="HomeView" class="text-center">
    <TestComponent />
    <img class="position-absolute bottom-0 start-0" src="../assets/images/homepattern.svg" alt="Homepagepattern">
  </main>
</template>

<style>
  /* path {
    fill: ;
    stroke: #d12222;
    stroke-width: 2px;
  } */
</style>

