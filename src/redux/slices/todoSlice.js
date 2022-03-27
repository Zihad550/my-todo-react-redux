import { createSlice } from '@reduxjs/toolkit';

export const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    incompleteTodos: [],
    completeTodos: [],
  },
  reducers: {
    addTodo: (state, action) => {
      state.incompleteTodos.push(action.payload);
    },
    removeFromTodos: (state, action) => {
      state.incompleteTodos = state.incompleteTodos.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addTodo, removeFromTodos } = todoSlice.actions;
export default todoSlice.reducer;
