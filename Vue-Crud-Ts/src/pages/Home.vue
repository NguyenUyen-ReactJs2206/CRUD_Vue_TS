<template>
  <main class="home">
    <h1>Create Todo</h1>
    <TodoCreate @create-todo="createTodo" />

    <ul class="todo-list" v-if="state.todos.length > 0">
      <ItemList
        :todos="state.todos"
        @toggle-complete="toggleTodoComplete"
        @edit-todo="toggleEditTodo"
        @update-todo="updateTodo"
        @delete-todo="deleteTodo"
      />
    </ul>
    <p class="todos-msg" v-else>😟 You have no todo's to completed! Add one!</p>
    <p v-if="completedAll">{{ completedAll }}</p>
  </main>
</template>

<script setup lang="ts">
import { computed, reactive } from "vue";
import ItemList from "../components/ItemList.vue";
import TodoCreate from "../components/TodoCreate.vue";
import { StateType } from "../types/todoList.type";
import { uid } from "uid";
import {
  setTodosToLocalStorage,
  fetchTodosfromLocalStorage,
} from "../utils/localstorage";

const state: StateType = reactive({
  todos: [],
});

fetchTodosfromLocalStorage(state);

const createTodo = (newTodo: string) => {
  if (newTodo.trim() !== "") {
    state.todos.push({
      id: uid(),
      name: newTodo,
      completed: false,
      isEditing: false,
    });
  }

  setTodosToLocalStorage(state.todos);
};

const toggleTodoComplete = (index: number) => {
  state.todos[index].completed = !state.todos[index].completed;
  setTodosToLocalStorage(state.todos);
};

const toggleEditTodo = (index: number) => {
  state.todos[index].isEditing = !state.todos[index].isEditing;
  setTodosToLocalStorage(state.todos);
};

const updateTodo = (newValue: string, index: number) => {
  state.todos[index].name = newValue;
  setTodosToLocalStorage(state.todos);
};

const deleteTodo = (todoId: number) => {
  const indexToRemove = state.todos.findIndex((todo) => todo.id === todoId);
  if (indexToRemove !== -1) {
    state.todos.splice(indexToRemove, 1); // Sử dụng phương thức mảng
  }
  setTodosToLocalStorage(state.todos);
};

//watch item when change
const completedAll = computed(() => {
  let all = state.todos.length;
  let countCompleted = 0;

  state.todos.forEach((todo) => {
    if (todo.completed) {
      countCompleted++;
    }
  });

  return countCompleted === all && countCompleted > 0
    ? "🎉 You have completed all your todos!"
    : "";
});
</script>
