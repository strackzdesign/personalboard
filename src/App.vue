<script lang="ts">
  import NavbarComponent from '@/components/NavbarComponent.vue';

  export default {
    data() {
      return {
        project_name: 'Objective Board'
      }
    },
    components: {
      NavbarComponent
    },
  }
</script>

<template>
  <div id="app" class="d-flex">
    <NavbarComponent :project_name='project_name'/>
    <router-view class="w-100 p-3" />
  </div>
</template>

<style>
@import '@/assets/base.css';

</style>
