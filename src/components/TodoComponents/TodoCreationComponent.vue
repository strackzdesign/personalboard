<script lang="ts">
import { TodoContainer_Impl } from '@/interfaces/Todo_Impl'

/* ---------------------------- CONFIG VARIABLES ---------------------------- */
const REQUIRED_NAME_FORM_LENGTH_MIN = 10;
const REQUIRED_NAME_FORM_LENGTH_MAX = 55;
/* -------------------------------------------------------------------------- */

export default {
    data() {
        return {
            creation_name: '',
            creation_description: '',
            formReady: false
        }
    },
    methods: {
        /**
         * Last Method that we excute of all our "verification and validation" steps. We will trigger a method that will insert the data to the localstorage.
         * 
         * @returns void
         */
        createContainerTodo(): void {
            if(!this.createFormValidation()) 
                return;
            
            this.insertDataToLocalstorage({
                name: this.creation_name,
                description: this.creation_description,
                list: []
            })
        },
        /**
         * After all verifications are done, we will validate (set) the property formReady to "true", other systems will remove the disabled class from the button and let us validate the form.
         * 
         * @returns boolean | void
         */
        createFormValidation(): boolean | void {
            if(!this.creationFormVerification()) {
                this.formReady = false;
                return;
            }
            this.formReady = true;
            return true;
        },
        /**
         * We will call every method that verifies the inputs and their content integrity, if every required input is respected, the method will return true.
         * 
         * @returns boolean | void
         */
        creationFormVerification(): boolean | void {
            if(!this.creationNameVerification()) 
                return;
            
            return true;
        },
        /**
         * Method that will change the color and text of our todo name input, the method will verify the min-length and max-length in order to change the dom itself, if it returns true the input is validated.
         * 
         * @returns boolean | void
         */
        creationNameVerification(): boolean | void {
            if(this.creation_name.length < REQUIRED_NAME_FORM_LENGTH_MIN || this.creation_name.length > REQUIRED_NAME_FORM_LENGTH_MAX) {
                document.getElementById('todo-name')!.style.borderColor = '#FF0000';
                document.getElementById('todo-name-error')!.innerHTML = `( The name must be between ${REQUIRED_NAME_FORM_LENGTH_MIN} and ${REQUIRED_NAME_FORM_LENGTH_MAX} characters )`;
                return;
            }

            document.getElementById('todo-name')!.style.borderColor = '#00ADB5';
            document.getElementById('todo-name-error')!.innerHTML = '';
            return true;
        },
        /**
         * Method that will insert the formData to the localstorage, it calls a parent method (Parent: TodoContainersComponent, Method: getDataTodoObjectLiteral()) in order to get the current localstorage data.
         * 
         * @returns void
         */
        insertDataToLocalstorage(formData: TodoContainer_Impl): void {
            if(this.$parent.getDataTodoObjectLiteral() === null) 
                return;

            let oldData = this.$parent.getDataTodoObjectLiteral();
            oldData.push(formData);

            let newData = JSON.stringify(oldData);
            localStorage.setItem('todoOfflineData', newData);
        },
        
    },
    watch: {
        creation_name: {
            handler() {
                this.createFormValidation();
            },
            deep: true
        }
    }
}
</script>

<template>
    <div id="TodoCreationComponent" class="d-flex">
        <!-- Button trigger modal -->
        <button type="button" class="btn btn-creation-todo ob-text-dark-dark" data-bs-toggle="modal" data-bs-target="#TodoCreateComponent">
            Create Todolist
        </button>

        <!-- Modal -->
        <div class="modal fade" id="TodoCreateComponent" tabindex="-1" aria-labelledby="TodoCreateComponentLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg">
                <div class="modal-content modal-creation-todo">
                    <div class="modal-header ob-bg-dark">
                        <h5 class="modal-title ob-text-dark-primary" id="TodoCreateComponentLabel">Creation of a Todo container</h5>
                        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body ob-bg-dark-soft">
                        <form>
                            <div class="mb-3">
                                <label for="todo-name" class="col-form-label d-flex">Name:&nbsp;<span id="todo-name-error"></span></label>
                                <input type="text" class="input-create-todo w-100 ob-text-dark-secondary p-2" id="todo-name" v-model="creation_name">
                            </div>
                            <div class="mb-3">
                                <label for="todo-description" class="col-form-label d-flex">Description:</label>
                                <textarea class="input-create-todo w-100 ob-text-dark-secondary p-2" rows="4" id="todo-description" v-model="creation_description"></textarea>
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer ob-bg-dark">
                        <button type="button" class="btn ob-bg-dark-primary ob-text-dark" id="todo-create" :class="{'disabled': !formReady}" @click="createContainerTodo()">Create</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
    button.btn-creation-todo {
        color: #00ADB5 !important;
        padding-bottom: 2px solid #00ADB5;
        background-color: #222831 !important;
    }

    button.btn-creation-todo:hover {
        transition:all 0.20s ease-out;
        color: #ffffff !important;
        outline: 1px solid #00ADB5;
        background-color: rgba(34, 40, 49, 0) !important;
    }

    div.modal-creation-todo {
        border: 1px solid #EEEEEE !important; 
    }

    input.input-create-todo, textarea.input-create-todo {
        background-color: #ffffff00;
        border-style: none none solid none;
        border-width: 2px;
        border-color: #EEEEEE;
    }

    input.input-create-todo:focus, textarea.input-create-todo:focus {
        border-style: none none solid none;
        border-width: 2px;
        border-color: #00ADB5;
        transition:all 0.35s ease-out;
        outline: 0;
    }
</style>