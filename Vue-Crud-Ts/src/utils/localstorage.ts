import { StateType, TodoInterface } from "../types/todoList.type";

export const setTodosToLocalStorage = (todos: TodoInterface[]) => {
  localStorage.setItem("todos", JSON.stringify(todos));
};

export const fetchTodosfromLocalStorage = (state: StateType) => {
  const saveTodos = JSON.parse(localStorage.getItem("todos") || "");
  if (saveTodos) {
    state.todos = saveTodos;
  }
};
