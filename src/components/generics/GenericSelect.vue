<script setup lang="ts">
type Option = {
  id: string;
  name: string;
};
const props = defineProps<{
  name: string;
  options?: Option[];
}>();
</script>

<template>
  <div class="flex flex-col">
    <p>{{ props.name }}</p>
    <div class="border-[1px] border-black rounded-sm">
      <select
        class="bg-cherry-blossom border-[2px] border-t-white border-t-white border-r-black border-b-black p-2 w-[300px] text-md rounded-sm focus-visible:outline-none"
      >
        <option
          v-for="option in props.options"
          :key="option.id"
          :value="option.id"
        >
          {{ option.name }}
        </option>
      </select>
    </div>
  </div>
</template>

<style></style>
