<script lang="ts">
import TodoContainersComponent from '@/components/TodoComponents/TodoContainersComponent.vue'

export default {
  name: 'TodoView',
  components: {
    TodoContainersComponent
  },
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
    <div class="container mt-3 mb-3">
      <TodoContainersComponent />
    </div>
  </div>
</template>

<style>

</style>
