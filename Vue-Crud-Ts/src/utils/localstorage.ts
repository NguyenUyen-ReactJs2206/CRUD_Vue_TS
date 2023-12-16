import { TodoInterface } from "../types/todoList.type";

export const saveToLocalStorage = (todos: TodoInterface[]) => {
  localStorage.setItem("todos", JSON.stringify(todos));
};
