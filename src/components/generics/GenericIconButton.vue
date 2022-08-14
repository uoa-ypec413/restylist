<script setup lang="ts">
import { Icon } from "@iconify/vue";

const props = defineProps<{
  iconName: string;
  iconClass: string;
}>();
</script>

<template>
  <div class="border-[1px] border-black rounded-sm">
    <button
      class="bg-cherry-blossom border-[2px] border-l-white border-t-white border-r-black border-b-black p-1 rounded-sm active:border-r-white active:border-b-white active:border-l-black active:border-t-black"
      @click="$emit('handle-click')"
    >
      <Icon :icon="props.iconName" :class="props.iconClass" />
    </button>
  </div>
</template>

<style></style>
