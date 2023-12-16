<template>
  <main class="home">
    <h1>Create Todo</h1>
    <TodoCreate @create-todo="createTodo" />
    <!-- <p>😟 You have no todo's to completed! Add one!</p> -->
    <ul class="todo-list">
      <ItemList :todos="todos" />
    </ul>

    <!-- <p>🎉 You have completed all your todos!</p> -->
  </main>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import ItemList from "../components/ItemList.vue";
import TodoCreate from "../components/TodoCreate.vue";
import { TodoInterface } from "../types/todoList.type";
import { uid } from "uid";

const todos: TodoInterface[] = reactive([]);

const createTodo = (newTodo: string) => {
  if (newTodo.trim() !== "") {
    todos.push({
      id: uid(),
      name: newTodo,
      completed: false,
      isEditing: false,
    });
  }
};
</script>
