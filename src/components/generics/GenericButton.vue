<script setup lang="ts">
const props = defineProps<{
  text: string;
}>();
</script>

<template>
  <div class="border-[1px] border-black rounded-sm">
    <button
      class="bg-cherry-blossom border-[2px] border-l-white border-t-white border-r-black border-b-black py-2 px-10 text-xl rounded-sm active:border-r-white active:border-b-white active:border-l-black active:border-t-black"
      @click="$emit('handle-click')"
    >
      {{ props.text }}
    </button>
  </div>
</template>

<style></style>
