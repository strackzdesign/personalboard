<script lang="ts">
export default {
    props: [
        'container_name',
        'container_description'
    ]
}
</script>

<template>
    <div id="TodoContainerComponent" class="ob-border-dark-primary ob-bg-dark container-todo rounded">
        <h3 class="p-2 mb-0">{{container_name}}</h3>
        <hr class="dropdown-divider">
        <p class="p-2 mb-0">{{container_description}}</p>
    </div>
</template>

<style>
    div.container-todo:hover {
        transition: 0.35s all ease-in-out;
        border: 1px solid #FFFFFF;
        cursor: pointer;
    }
</style>