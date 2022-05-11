<script lang="ts">
export default {
    name: 'NavbarComponent',
    props: ['project_name']
}
</script>

<template>
    <div class="ob-sidebar d-flex flex-column flex-shrink-0 p-3 text-white ob-bg-dark vh-100 text-center" style="width: 280px;">
      <a href="/" class="d-flex text-center text-white justify-content-center text-decoration-none">
        <span class="fs-4">{{project_name}}</span>
      </a>
      <hr>
      <ul class="nav nav-pills flex-column mb-auto">
        <li class="nav-item p-1">
            <router-link class="nav-link text-white text-decoration-none ob-bg-dark-primary" to="/home">
                <!-- <svg class="bi me-2" width="16" height="16"><use xlink:href="#home"></use></svg> -->
                Home
            </router-link>
        </li>
        <li class="nav-item p-1">
            <router-link class="nav-link text-white text-decoration-none" to="/objectives">
                <!-- <svg class="bi me-2" width="16" height="16"><use xlink:href="#table"></use></svg> -->
                Objectives
            </router-link>
        </li>
        <li class="nav-item p-1">
            <router-link class="nav-link text-white text-decoration-none" to="/budget">
                <!-- <svg class="bi me-2" width="16" height="16"><use xlink:href="#table"></use></svg> -->
                Budget
            </router-link>
        </li>
        <li class="nav-item p-1">
            <router-link class="nav-link text-white text-decoration-none" to="/todo">
                <!-- <svg class="bi me-2" width="16" height="16"><use xlink:href="#speedometer2"></use></svg> -->
                Todo
            </router-link>
        </li>
      </ul>
      <hr>
      <div class="dropdown">
        <a href="#" class="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
          <img src="https://github.com/mdo.png" alt="" width="32" height="32" class="rounded-circle me-2">
          <strong>Username</strong>
        </a>
        <ul class="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
          <!-- <li><a class="dropdown-item" href="#">New project...</a></li>
          <li><a class="dropdown-item" href="#">Settings</a></li>
          <li><a class="dropdown-item" href="#">Profile</a></li> -->
          <!-- <li><hr class="dropdown-divider"></li> -->
          <li><a class="dropdown-item" href="#">Login Feature - Under Development</a></li>
        </ul>
      </div>
    </div>
</template>

<style>

template, div.ob-sidebar {
  border-right: 1px solid #00ADB5;
}

.nav-link:hover {
  transition: all 0.35s ease-out;
}

</style>