<template>
  <div class="input-wrap" :class="{ 'input-error': todoState.invalid }">
    <input
      type="text"
      v-model="todoState.todo"
      placeholder="Nhập việc cần làm..."
      @keyup.enter="createTodo"
    />
    <button type="submit" @click="createTodo">Create</button>
  </div>
  <p v-show="todoState.invalid" class="error-msg">
    {{ todoState.errMsg }}
  </p>
</template>

<script setup lang="ts">
import { defineEmits, reactive } from "vue";
import { TodoStateInterface } from "../types/todoList.type";

const todoState: TodoStateInterface = reactive({
  todo: "",
  invalid: false,
  errMsg: "",
});

const emit = defineEmits(["create-todo"]);

const createTodo = () => {
  if (todoState.todo !== "") {
    emit("create-todo", todoState.todo);
    todoState.todo = "";
    todoState.invalid = false;
    return;
  }
  todoState.invalid = true;
  todoState.errMsg = "Todo value cannot be empty";
};
</script>
