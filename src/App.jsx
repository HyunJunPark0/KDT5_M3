import { useEffect, useState } from 'react';
import './App.css';
import { createTodo, getTodos } from './api/todosApi';
import Todo from './component/Todo';

function App() {
  const [todos, setTodos] = useState([]);
  const [todoTitle, setTodoTitle] = useState('');

  useEffect(() => {
    getTodos().then((res) => setTodos(res));
  }, []);

  const handleOnChange = (event) => {
    setTodoTitle(event.target.value);
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    setTodoTitle('');
    await createTodo(todoTitle);
    await getTodos().then((res) => setTodos(res));
  };

  return (
    <div className='container'>
      <h1 className='title'>Todo!</h1>
      {todos.map((todo) => (
        <Todo todo={todo} setTodos={setTodos} todos={todos} key={todo.id} />
      ))}
      <form onSubmit={handleOnSubmit}>
        <input
          type='text'
          value={todoTitle}
          onChange={handleOnChange}
          placeholder='할 일을 입력하세요.'
        />
        <button onClick={handleOnSubmit}>ADD</button>
      </form>
    </div>
  );
}

export default App;
