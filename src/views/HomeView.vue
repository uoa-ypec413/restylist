<script setup lang="ts">
import router from "@/router";
import GenericButton from "../components/generics/GenericButton.vue";

const navigateToLogin = () => {
  router.push("/login");
};
</script>

<template>
  <main class="h-full">
    <div class="flex flex-col h-full items-center place-content-center">
      <h1>Welcome to</h1>
      <img
        src="@/assets/restylist-logo.svg"
        alt="Restylist Logo"
        class="h-[80px] mb-8"
      />
      <GenericButton
        text="Login with Pinterest"
        @handle-click="navigateToLogin"
      />
    </div>
  </main>
</template>

<style></style>
