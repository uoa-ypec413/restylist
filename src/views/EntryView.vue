<script setup lang="ts">
import router from "@/router";
import GenericButton from "../components/generics/GenericButton.vue";
import GenericSelect from "../components/generics/GenericSelect.vue";

const navigateToWardrobe = () => {
  router.push("/wardrobe");
};

//TODO: Retrieve a user's boards using the Pinterest API
const userBoards = [
  {
    id: "1",
    name: "My Tops",
  },
  {
    id: "2",
    name: "My Bottoms",
  },
  {
    id: "3",
    name: "My Shoes",
  },
  {
    id: "4",
    name: "My Accessories",
  },
];

const boardOptions = userBoards.map((board) => {
  return {
    id: board.id,
    name: board.name,
  };
});
</script>

<template>
  <main class="flex items-center min-h-full h-fit p-4">
    <div class="flex flex-col h-full w-fit items-center m-auto space-y-8">
      <div class="flex flex-col items-start space-y-4">
        <h2>Please select boards</h2>
        <p>
          We use your pinterest Boards as a catalogue of your wardrobe.<br />
          Please select which board you would like to use for each category.
        </p>
        <GenericSelect name="Tops" :options="boardOptions" />
        <GenericSelect name="Bottoms" :options="boardOptions" />
        <GenericSelect name="Shoes" :options="boardOptions" />
        <GenericSelect name="Accessories" :options="boardOptions" />
      </div>
      <GenericButton text="Let's Go" @handle-click="navigateToWardrobe" />
    </div>
  </main>
</template>

<style></style>
