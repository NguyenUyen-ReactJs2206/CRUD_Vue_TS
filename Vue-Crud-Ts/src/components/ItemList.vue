<template>
  <li v-for="(todo, index) in todos" :key="todo.id">
    <input
      type="checkbox"
      v-model="todo.completed"
      @input="$emit('toggle-complete', index)"
    />
    <div class="todo">
      <input
        type="text"
        v-if="todo.isEditing"
        :value="todo.name"
        @input="
          $emit('update-todo', ($event.target as HTMLInputElement).value, index)
        "
      />
      <span v-else :class="{ 'completed-todo': todo.completed }">{{
        todo.name
      }}</span>
    </div>
    <div class="icon">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="20"
        width="20"
        viewBox="0 0 512 512"
        v-if="todo.isEditing"
        @click="$emit('edit-todo', index)"
      >
        <path
          d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
        />
      </svg>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="18"
        width="18"
        viewBox="0 0 512 512"
        v-else
        @click="$emit('edit-todo', index)"
      >
        <path
          d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"
        />
      </svg>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="18"
        width="18"
        viewBox="0 0 448 512"
        @click="$emit('delete-todo', todo.id)"
      >
        <path
          d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z"
        />
      </svg>
    </div>
  </li>
</template>

<script setup lang="ts">
import { TodoInterface } from "../types/todoList.type";

const { todos } = defineProps(["todos"]) as {
  todos: TodoInterface[];
};

defineEmits(["toggle-complete", "edit-todo", "update-todo", "delete-todo"]);
</script>
