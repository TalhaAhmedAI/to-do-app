import axios from "axios";

const API_URL = "http://localhost:3000/todos/";

async function getAllTodos() {
  const { data: todos } = await axios.get(API_URL);
  return todos;
}

async function createTodo(task) {
  const { data: newTodo } = await axios.post(API_URL, {
    task,
  });
  return newTodo;
}

async function updateTodo(id, payload) {
  const { data: newTodo } = await axios.put(`${API_URL}${id}`, payload);
  return newTodo;
}

async function deleteTodo(id, payload) {
  const message = await axios.delete(`${API_URL}${id}`);
  return message;
}

export default { getAllTodos, createTodo, updateTodo, deleteTodo };
