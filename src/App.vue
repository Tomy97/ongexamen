<template>
  <header>
    <NavbarComponent/>
  </header>
  <main>
    <router-view/>
  </main>
  <Footer/>
</template>
<script lang="ts">
import NavbarComponent from '@/components/NavbarComponent.vue'
export default {
  components: {
    NavbarComponent
  }
}
</script>
