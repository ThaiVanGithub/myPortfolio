<template>
  <header class=" fw-bold text-dark bg-light p-3 shadow-sm">
    <div class="container d-flex justify-content-between align-items-center">
      <!-- Logo -->
<div class="col-lg-4 ">
  <router-link to="/" class="fw-bold nav-link"  exact>
        <h3 class="fw-bold">Portfolio</h3>
      </router-link>
</div>
      
      <div class="col-lg-4 d-flex align-items-center justify-content-center">
        <h2 class=" d-none d-lg-flex"><i class="fa-brands fa-vuejs"></i>

        </h2>

      </div>

      <!-- Navigation -->
      <nav class="col-lg-4 d-flex justify-content-end ">
        <ul class="d-flex align-items-end gap-4 list-unstyled mb-0 d-none d-lg-flex">
          <li>
            <router-link to="/" class="nav-link" active-class="text-active" exact>
              <p class="nav-link">Home</p>
            </router-link>
          </li>
          <li>
            <router-link to="/About" class="nav-link" active-class="text-active">
              <p class="nav-link">About</p>
            </router-link>
          </li>
          <li>
            <router-link to="/Projects" class="nav-link" active-class="text-active">
              <p class="nav-link">
                Projects
              </p>
            </router-link>
          </li>
          <li>
            <router-link to="/Contact" class="nav-link" active-class="text-active">
              <p class="nav-link">Contact</p>
            </router-link>
          </li>
        </ul>
      </nav>

      <a-button class="col-lg-4 d-lg-none d-sm-flex" type="primary"
       @click="showDrawer"><i class="fa-solid fa-bars"></i></a-button>

      <!-- drawer antds -->
      <a-drawer v-model:open="open" class="custom-class" root-class-name="root-class-name"
        :root-style="{ color: 'black' }" title="Menu" placement="right"
        @after-open-change="afterOpenChange">
        
        <ul class="d-flex-columns fw-semibold gap-4 list-unstyled text-center">
          <li>
            <router-link to="/" active-class="text-danger" exact>
              <p class="nav-link">Home</p>
            </router-link>
          </li>
          <li>
            <router-link to="/About"  active-class="text-danger">
              <p class="nav-link">About</p>
            </router-link>
          </li>
          <li>
            <router-link to="/Projects" active-class="text-danger">
              <p class="nav-link">
                Projects
              </p>
            </router-link>
          </li>
          <li>
            <router-link to="/Contact" active-class="text-danger">
              <p class="nav-link">Contact</p>
            </router-link>
          </li>
        </ul>

      </a-drawer>

    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue';
const open = ref(false);
const afterOpenChange = bool => {
  console.log('open', bool);
};
const showDrawer = () => {
  open.value = true;
};
</script>

<style scoped>
.nav-link {
  transition: color 0.3s;
}

.nav-link:hover {
  color: navy;
}
.text-active{
  color: rgb(215, 36, 36);
}
</style>
