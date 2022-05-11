<script lang="ts">
import TodoContainerComponent from '@/components/TodoComponents/TodoContainerComponent.vue'
import TodoCreationComponent from '@/components/TodoComponents/TodoCreationComponent.vue'

export default {
    components: {
        TodoContainerComponent,
        TodoCreationComponent
    },
    methods: {
        getDataTodoObjectLiteral() {
            this.$parent.setTodoLocalStorage();
            return JSON.parse(localStorage.getItem('todoOfflineData'));
        }
    }
}
</script>

<template>
    <div id="TodoContainersComponent">
        <TodoCreationComponent />
        <hr class="dropdown-divider">

        <TodoContainerComponent />
    </div>
</template>