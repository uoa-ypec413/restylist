<script setup lang="ts">
import AppHeader from "./components/AppHeader.vue";
</script>

<template>
  <div
    id="app"
    class="bg-gradient-to-r from-cotton-candy to-baby-blue flex flex-col h-screen"
  >
    <AppHeader />
    <div class="h-full p-2 overflow-y-auto scrollbar">
      <RouterView />
    </div>
  </div>
</template>

<style lang="postcss">
.scrollbar::-webkit-scrollbar {
  @apply w-4;
}

.scrollbar::-webkit-scrollbar-track {
  @apply rounded-sm bg-cherry-blossom shadow-[inset_0_0_2px_rgba(0,0,0,0.3)] border-l-[1px] border-black p-1;
}

.scrollbar::-webkit-scrollbar-thumb {
  @apply bg-gray-500 rounded-md border-[2px] border-solid border-cherry-blossom;
}

.scrollbar::-webkit-scrollbar-thumb:hover {
  @apply bg-gray-600;
}
</style>
