<template>
  <main class="home">
    <h1>Create Todo</h1>
    <TodoCreate @create-todo="createTodo" />

    <ul class="todo-list" v-if="todos.length > 0">
      <ItemList
        :todos="todos"
        @toggle-complete="toggleTodoComplete"
        @edit-todo="toggleEditTodo"
        @update-todo="updateTodo"
        @delete-todo="deleteTodo"
      />
    </ul>
    <p class="todos-msg" v-else>😟 You have no todo's to completed! Add one!</p>
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

const toggleTodoComplete = (index: number) => {
  todos[index].completed = !todos[index].completed;
};

const toggleEditTodo = (index: number) => {
  todos[index].isEditing = !todos[index].isEditing;
  console.log(index, "iiiiiiii");
};

const updateTodo = (value: string, index: number) => {
  console.log(value, index);
  todos[index].name = value;
};

const deleteTodo = (todoId: number) => {
  const indexToRemove = todos.findIndex((todo) => todo.id === todoId);
  if (indexToRemove !== -1) {
    todos.splice(indexToRemove, 1); // Sử dụng phương thức mảng
  }
};

console.log(todos);
</script>
