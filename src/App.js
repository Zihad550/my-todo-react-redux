import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from './redux/slices/todoSlice';

const App = () => {
  const [todo, setTodo] = useState('');
  const {completeTodos, incompleteTodos} = useSelector(state => state.todo)
  console.log(completeTodos, incompleteTodos)
  const dispatch = useDispatch();

  // handlers
  const handleAddTodo = (e) => {
    e.preventDefault();
    dispatch(addTodo({todo}))
  }
  return (
    <div>
      {/* create todo */}
      <form onSubmit={handleAddTodo}>
      <input onChange={e => setTodo(e.target.value)} type="text" />
      <button type="submit">Add Todo</button>
      </form>

      {/* show incomplete todos */}
      {
        incompleteTodos.map(todo => (
          <p>{todo.todo}</p>
        ))
      }

      {/* show complete todos */}
    </div>
  )
}

export default App