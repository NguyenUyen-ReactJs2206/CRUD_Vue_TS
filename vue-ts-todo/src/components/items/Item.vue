<template>
  <div>List Item</div>
  <!--Show Item-->
  <ul>
    <li v-for="item in listItem" :key="item.id">
      <input type="checkbox" value="" v-model="item.completed" />
      <!-- @click="completedItem(item.id)" -->
      <label for=""> {{ item.name }}</label>
    </li>
  </ul>
  <div>{{ listItem }}</div>
</template>

<script setup lang="ts">
import { ItemInterface } from "../../models/types/item.type";

defineProps<{ listItem: ItemInterface[] }>();

//USING DEFINE EMIT
// const emit = defineEmits<{ (e: "changeItem", id: number): any }>();

// const completedItem = (id: number) => {
//   emit("changeItem", id);
// };
</script>
