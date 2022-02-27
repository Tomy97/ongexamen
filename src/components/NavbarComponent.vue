<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-dog">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-12">
          <img class="logo" :src="logo" />
        </div>
      </div>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav" v-for="m in menu" :key="m.id">
          <router-link
            to="#"
            class="nav-link fw-bold text-uppercase text-center text-white"
            aria-current="page"
          >
            {{ m.name }}
          </router-link>
        </div>
        <div class="navbar-nav">
          <li class="nav-item bg-danger rounded-3">
            <router-link
              to="denuncias"
              class="nav-link fw-bold text-uppercase text-center text-white"
              aria-current="page"
            >
              Denuncias
            </router-link>
          </li>
        </div>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Menu from "@/composable/Menu";

export default defineComponent({
  setup() {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const logo = require("@/assets/img/logo.jpg");
    const { menu } = Menu();

    return {
      logo,
      menu,
    };
  },
});
</script>

<style scoped>
.bg-dog {
  background: #faac18;
}
ul li a {
  text-decoration: none;
  color: #fff;
}
ul li a:hover {
  text-decoration: none;
  color: #fff;
}

.router-link-active {
  color: #000;
}
.menu:hover {
  background: #ff9600;
}
</style>