import { createSlice } from '@reduxjs/toolkit';


export const todoSlice = createSlice({
    name: 'todo',
    initialState:{
        incompleteTodos: [],
        completeTodos: [],
    },
    reducers: {
        addTodo: (state, action) => {
            state.incompleteTodos.push(action.payload)
        },
        removeTodo: (state, action) => {
            state.completeTodos = state.incompleteTodos.filter(todo => todo.id === action.payload)
        }
    }
})


export const {addTodo, removeTodo} = todoSlice.actions;
export default todoSlice.reducer;