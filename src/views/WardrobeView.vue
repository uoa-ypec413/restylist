<script setup lang="ts">
import ItemContainer from "../components/ItemContainer.vue";
import GenericButton from "../components/generics/GenericButton.vue";
</script>

<template>
  <main class="flex flex-col h-full overflow-hidden">
    <div class="grid grid-rows-2 grid-cols-1 gap-4 w-fit m-auto min-h-0">
      <ItemContainer fileName="placeholder" class="m-auto h-full" />
      <ItemContainer fileName="placeholder" class="m-auto h-full" />
    </div>
    <div class="flex flex-row h-fit w-fit m-auto p-4 space-x-8">
      <GenericButton text="Browse" />
      <GenericButton text="Dress me" />
    </div>
  </main>
</template>

<style></style>
