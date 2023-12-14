<template>
  <div>
    <h1>My Todo List</h1>
    <h3>{{ completedAll }}</h3>
    <ItemList :listItem="listItem" />
    <!-- @changeItem="completedItem"  -->
  </div>
</template>

<script setup lang="ts">
import { computed, reactive } from "vue";
import ItemList from "./components/items/Item.vue";
import { ItemInterface } from "./models/types/item.type";
//Create data item
const listItem: ItemInterface[] = reactive([
  {
    id: 1,
    name: "Coffee ☕",
    completed: true,
  },
  {
    id: 2,
    name: "Read Book 📖",
    completed: false,
  },
  { id: 3, name: "Sport 🤾‍♂️", completed: false },
  { id: 4, name: "Listening to music", completed: true },
]);

// const completedItem = (id: number) => {
//   alert("Id Item" + id);
// };

//watch item when change
const completedAll = computed(() => {
  let all = listItem.length;
  let countCompleted = 0;

  listItem.forEach((item) => {
    if (item.completed) {
      countCompleted++;
    }
  });

  return countCompleted === all
    ? "[ All todo is completed. ]"
    : "[ All todo isn't completed. ]";
});
</script>
