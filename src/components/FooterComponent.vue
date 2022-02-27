<template>
<div class=" footer" >
    <h6 class="text-center">Soy el footer</h6>
</div>
</template>

<script lang="ts" >
import { defineComponent } from "vue";

export default defineComponent({
  name: "Footer",
  setup() {
    return {};
  },
});

</script>

<style scoped>
.footer {
  height: 1vh;
}
</style>