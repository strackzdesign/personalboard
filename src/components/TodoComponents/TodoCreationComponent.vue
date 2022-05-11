<script lang="ts">
const REQUIRED_NAME_FORM_LENGTH_MIN = 10;
const REQUIRED_NAME_FORM_LENGTH_MAX = 55;

export default {
    data() {
        return {
            creation_name: '',
            creation_description: '',
            formReady: false
        }
    },
    methods: {
        createContainerTodo() {
            console.log(this.creation_name, this.creation_description);
        },
        createFormValidation() {
            if(!this.creationFormVerification()) {
                this.formReady = false;
                return;
            }
            this.formReady = true;
        },
        creationFormVerification() {
            if(!this.creationNameVerification()) 
                return;
            
            return true;
        },
        creationNameVerification() {
            if(this.creation_name.length < REQUIRED_NAME_FORM_LENGTH_MIN || this.creation_name.length > REQUIRED_NAME_FORM_LENGTH_MAX) {
                document.getElementById('todo-name')!.style.borderColor = '#FF0000';
                document.getElementById('todo-name-error')!.innerHTML = `( The name must be between ${REQUIRED_NAME_FORM_LENGTH_MIN} and ${REQUIRED_NAME_FORM_LENGTH_MAX} characters )`;
                return;
            }

            document.getElementById('todo-name')!.style.borderColor = '#00ADB5';
            document.getElementById('todo-name-error')!.innerHTML = '';
            return true;
        }
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