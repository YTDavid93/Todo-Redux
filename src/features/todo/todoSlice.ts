import { createSlice, nanoid } from "@reduxjs/toolkit";
import { RootState } from "../../app/Store";

const initialState = {
  todos: [{ id: "1", Text: "Hello World" }],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        Text: action.payload,
      };
      state.todos.push(todo); // this if fine because underthehood redux uses immer.js library
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    updateTodo: (state, action) => {
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload.id ? { ...todo, Text: action.payload.Text } : todo
      );
    },
  },
});

export const getAllTodos = (state: RootState) => state.todos;

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;

export default todoSlice.reducer;
