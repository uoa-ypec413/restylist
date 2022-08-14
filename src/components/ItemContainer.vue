<script setup lang="ts">
import { ref, watchEffect } from "vue";
import GenericIconButton from "./generics/GenericIconButton.vue";
const props = defineProps<{
  fileName: string;
  class?: string;
}>();

const imageSrc = ref();
watchEffect(async () => {
  imageSrc.value = (
    await import(/* @vite-ignore */ `../assets/${props.fileName}.png`)
  ).default;
});
</script>

<template>
  <div :class="`${props.class} flex flex-row items-center space-x-4`">
    <GenericIconButton
      iconName="ooui:double-chevron-start-ltr"
      iconClass="text-lg text-black"
    />
    <div
      class="flex justify-center bg-white rounded-sm border-[1px] border-black h-full"
    >
      <img class="object-contain" :src="imageSrc" />
    </div>
    <GenericIconButton
      iconName="ooui:double-chevron-start-rtl"
      iconClass="text-lg text-black"
    />
  </div>
</template>

<style></style>
