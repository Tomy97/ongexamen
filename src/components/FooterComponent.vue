<template>
  <footer class=" footer">
    <nav class="navbar navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Navbar</a>
      </div>
    </nav>
  </footer>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: "Footer",
  setup() {
    return {};
  },
});

</script>

<style scoped>
.footer {
  height: 2vh;
}
</style>