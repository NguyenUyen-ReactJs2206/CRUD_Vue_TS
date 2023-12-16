<template>
  <main class="home">
    <h1>Create Todo</h1>
    <div class="input-wrap">
      <input
        type="text"
        v-model="newTodo"
        @keyup.enter="addTodo"
        placeholder="Nhập việc cần làm..."
      />
      <button type="submit" @click="addTodo">Create</button>
    </div>
    <p>{{ newTodo }}</p>

    <p>😟 You have no todo's to completed! Add one!</p>
    <ItemList :todos="todos" />
    <p>🎉 You have completed all your todos!</p>
  </main>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
import { TodoInterface } from "../types/todoList.type";
import ItemList from "../components/ItemList.vue";
import { saveToLocalStorage } from "../utils/localstorage";

const todos: TodoInterface[] = reactive([]);
const newTodo: { value: string } = ref("");

let id = 0;

const addTodo = () => {
  if (newTodo.value.trim() !== "") {
    todos.push({
      id: id++,
      name: newTodo.value,
      completed: false,
    });
    newTodo.value = "";
  }

  saveToLocalStorage(todos);
};
</script>
