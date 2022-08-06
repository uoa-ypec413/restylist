<script setup lang="ts">
import router from "@/router";
import GenericButton from "../components/generics/GenericButton.vue";

const navigateToHome = () => {
  router.push("/");
};
</script>

<template>
  <main class="flex flex-col items-center min-h-full h-fit">
    <div class="flex flex-col h-full w-fit items-center m-auto space-y-4">
      <h1>Oops!</h1>
      <h3>We can't seem to find the page that you're looking for.</h3>
      <GenericButton text="Back to homepage" @handle-click="navigateToHome" />
    </div>
  </main>
</template>

<style></style>
