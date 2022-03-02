<template>
  <nav class="navbar navbar-expand-xl navbar-light bg-dog">
    <div class="container-fluid">
      <img :src="logo" alt="campito-logo" />
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="collapse navbar-collapse justify-content-center"
        id="navbarNav"
      >
        <div class="navbar-nav" v-for="m in navbar" :key="m">
          <router-link
            :to="m.link ? m.link : '#'"
            class="nav-link fw-bold text-uppercase text-center text-white"
            aria-current="page"
          >
            {{ m.name }}
          </router-link>
        </div>
        <ul class="navbar-nav p-lg-2">
          <li class="nav-item dropdown">
            <a
              class="
                nav-link
                dropdown-toggle
                text-center text-white
                fw-bold
                text-uppercase
              "
              id="navbarDarkDropdownMenuLink"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Campitos
            </a>
            <ul
              class="dropdown-menu"
              aria-labelledby="navbarDarkDropdownMenuLink"
            >
              <li v-for="c in campito" :key="c.id">
                <a
                  class="dropdown-item text-center text-uppercase"
                  :to="c.link"
                >
                  {{ c.name }}
                </a>
              </li>
            </ul>
          </li>
        </ul>
        <ul class="navbar-nav p-lg-2 m-lg-1">
          <li class="nav-item dropdown">
            <a
              class="
                nav-link
                dropdown-toggle
                text-center text-white
                fw-bold
                text-uppercase
              "
              id="navbarDropdownMenuLink"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Clubs
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <li v-for="c in club" :key="c.id">
                <a
                  class="dropdown-item text-center text-uppercase"
                  :to="c.link"
                >
                  {{ c.name }}
                </a>
              </li>
            </ul>
          </li>
        </ul>
        <div class="navbar-nav bg-danger rounded-3">
          <router-link
            :to="(denuncia.link) ? denuncia.link : '#'"
            class="nav-link fw-bold text-uppercase text-center text-white"
            aria-current="page"
          >
            {{ denuncia.name }}
          </router-link>
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
    const { navbar, campito, club, denuncia } = Menu();
    return {
      logo,
      navbar,
      campito,
      club,
      denuncia
    };
  },
});
</script>

<style scoped>
.bg-dog {
  background: #faac18;
}
</style>