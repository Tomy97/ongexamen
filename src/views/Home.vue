<template>
    <NavbarComponent />
  <main>
    <div class="container">
      <MainC />
    </div>
  </main>
    <Footer />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavbarComponent from "@/components/NavbarComponent.vue";
import MainC from "@/components/MainComponent.vue";
import Footer from "@/components/FooterComponent.vue";

export default defineComponent({
  name: "Home",
  components: {
    NavbarComponent,
    MainC,
    Footer,
  },
});
</script>
<style scoped>
main {
  height: 100vh;
  height: -webkit-fill-available;
  max-height: 100vh;
  overflow-y: hidden;
  overflow-x: auto;
}
</style>
