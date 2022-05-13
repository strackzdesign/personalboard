<script lang="ts">
import TodoContainerComponent from '@/components/TodoComponents/TodoContainerComponent.vue'
import TodoCreationComponent from '@/components/TodoComponents/TodoCreationComponent.vue'
import { TodoContainer_Impl } from '@/interfaces/Todo_Impl'

export default {
    data() {
        return {
            todoContainers: []
        }
    },
    components: {
        TodoContainerComponent,
        TodoCreationComponent
    },
    methods: {
        getDataTodoObjectLiteral() {
            this.$parent.setTodoLocalStorage();
            return JSON.parse(localStorage.getItem('todoOfflineData'));
        },
        /**
         * Method that will insert the formData to the localstorage, it calls a parent method (Parent: TodoContainersComponent, Method: getDataTodoObjectLiteral()) in order to get the current localstorage data.
         * 
         * @returns void
         */
        insertDataToLocalstorage(formData: TodoContainer_Impl): void {
            if(this.getDataTodoObjectLiteral() === null) 
                return;

            let oldData = this.getDataTodoObjectLiteral();
            oldData.push(formData);

            let newData = JSON.stringify(oldData);
            localStorage.setItem('todoOfflineData', newData);
        },
        createTodoContainer(formData: TodoContainer_Impl): void {
            this.insertDataToLocalstorage({
                name: formData.name,
                description: formData.description,
                list: []
            })

            this.todoContainers = this.getDataTodoObjectLiteral();
        }
    }, 
    mounted() {
        this.todoContainers = this.getDataTodoObjectLiteral();
    }
}
</script>

<template>
    <div id="TodoContainersComponent">
        <TodoCreationComponent @created-todo-container="createTodoContainer"/>
        <hr class="dropdown-divider">

        <div class="container row d-flex ">
            <div class="col-4 pb-4" v-for="container in todoContainers">
                <TodoContainerComponent :container_name="container.name" :container_description="container.description"/>
            </div>
        </div>
    </div>
</template>