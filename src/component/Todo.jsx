import { deleteTodos, getTodos, updateDone } from '../api/todosApi';

/* eslint-disable react/prop-types */
export default function Todo({ todo, setTodos, todos }) {
  const handleCheckbox = async (event) => {
    await updateDone(todo.id, todo.title, event.target.checked); //검색
    await getTodos().then((res) => setTodos(res));
  };

  const handleDelete = async () => {
    setTodos(todos.filter((element) => element.id !== todo.id));
    await deleteTodos(todo.id); // 검색!
    // await getTodos().then((res) => setTodos(res));
  };

  return (
    <div className='todolist'>
      <input
        type='checkbox'
        id={todo.id}
        checked={todo.done}
        onChange={handleCheckbox}
      />
      <span>{todo.title}</span>
      <div className='flex-space'></div>
      <button onClick={handleDelete}>삭제</button>
    </div>
  );
}
