<script setup lang="ts">
import AppHeader from "./components/AppHeader.vue";
</script>

<template>
  <div
    id="app"
    class="bg-gradient-to-r from-cotton-candy to-baby-blue flex flex-col h-screen"
  >
    <AppHeader />
    <div class="h-full p-2">
      <RouterView />
    </div>
  </div>
</template>

<style></style>
