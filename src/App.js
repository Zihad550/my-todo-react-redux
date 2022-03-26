import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from './components/Button';
import Container from './components/Container';
import CreateTodoWrapper from './components/CreateTodoWrapper';
import Form from './components/Form';
import Input from './components/Input';
import Title from './components/Title';
import Todo from './components/Todo';
import TodoContainer from './components/TodoContainer';
import TodosContainer from './components/TodosContainer';
import { addTodo } from './redux/slices/todoSlice';

function App() {
  const [todo, setTodo] = useState('');
  const { completeTodos, incompleteTodos } = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  // handlers
  const handleAddTodo = (e) => {
    e.preventDefault();
    dispatch(addTodo({ todo }));
  };
  return (
    <Container>
      {/* create todo */}
      <CreateTodoWrapper>
        <Form onSubmit={handleAddTodo}>
          <Input placeholder="Todo" onChange={(e) => setTodo(e.target.value)} type="text" />
          <Button type="submit">Add Todo</Button>
        </Form>
      </CreateTodoWrapper>

      <TodosContainer>
        {/* show incomplete todos */}
        <div>
          <Title>
            Todos
          </Title>
          <TodoContainer>
            {
        incompleteTodos.map((todo) => (
          <Todo>{todo.todo}</Todo>
        ))
      }
          </TodoContainer>
        </div>

        {/* show complete todos */}
        <div>
          <Title>
            Completed Todos
          </Title>
          <TodoContainer>

            {
        incompleteTodos.map((todo) => (
          <Todo>{todo.todo}</Todo>
        ))
      }
          </TodoContainer>
        </div>
      </TodosContainer>
    </Container>
  );
}

export default App;
