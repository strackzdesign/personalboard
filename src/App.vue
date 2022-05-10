<script lang="ts">
  import NavbarComponent from '@/components/NavbarComponent.vue';

  export default {
    data() {
      return {
        project_name: 'Personal Board',
        session_status: false
      }
    },
    methods: { },
    components: {
      NavbarComponent
    },
  }
</script>

<template>
  <div id="app" class="d-flex">
    <NavbarComponent :project_name='project_name' :session_status='session_status'/>
    <router-view class="w-100 p-3" :session_status='session_status'/>
  </div>
</template>

<style>
@import '@/assets/base.css';

</style>
