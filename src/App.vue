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
    <router-view class="w-100" />


    <!-- <header>
      <div class="wrapper">
        <nav>
          <router-link to="/">Home</router-link>
          <router-link to="/about">About</router-link>
        </nav>
      </div>
    </header> -->

  </div>
</template>

<style>
@import '@/assets/base.css';

</style>
