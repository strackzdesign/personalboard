<script lang="ts">
export default {
  name: 'TodoView',
  data() {
    return {
      data: 'hello'
    }
  },
  props: {
    session_status: Boolean
  },
  methods: {
    setTodoLocalStorage(): void {
      if(localStorage.getItem('todoOfflineData') === null) 
        localStorage.setItem('todoOfflineData', JSON.stringify([]));
    }
  },
  mounted() {
    this.setTodoLocalStorage();
  },
}
</script>

<template>
  <div id="TodoView" class="text-center">
    <h1>This is an TodoView {{ session_status }}</h1>
  </div>
</template>

<style>

</style>
