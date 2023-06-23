import { useState } from 'react';
import Todo from './components/Todo';
import TodoForm from './components/TodoForm';
import './App.css';
import Search from './components/Search';
import Filter from './components/Filter';

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Criar funcionalidade X no sistema",
      category: "Trabalho",
      isCompleted: false
    },
    { id: 2, text: "realizar treinos fisícos", category: "Pessoal", isCompleted: false },
    { id: 3, text: "fazer curso de react", category: "Estudo", isCompleted: false },
    { id: 4, text: "criar uma ramificação do curriculum vitae", category: "Trabalho", isCompleted: false }
  ]);

  const [search, setSearch] = useState("");

  const [filter, setFilter] = useState("All");
  const [sort, setSort] = useState("Asc");

  const addTodo = (text, category) => {
    const newTodos = [...todos, {
      id: Math.floor(Math.random() * 10000),
      text,
      category,
      isCompleted: false
    }];

    setTodos(newTodos);
  };

  const removeTodo = id => {
    const newTodos = [...todos];
    const filteredTodos = newTodos.filter(todo => todo.id !== id ? todo : null);
    setTodos(filteredTodos);
  }

  const completeTodo = id => {
    const newTodos = [...todos]
    newTodos.map(todo => todo.id === id ? todo.isCompleted = !todo.isCompleted: todo);
    setTodos(newTodos);
  }

  return (
    <div className='app'>
      <h1>Lista de tarefas</h1>
      <Search search={search} setSearch={setSearch} />
      <Filter filter={filter} setFilter={setFilter} setSort={setSort} />
      <div className="todo-list">
        {todos
        .filter(todo => filter === "All" ? true : filter === "Completed" ? todo.isCompleted : !todo.isCompleted)
        .filter(todo => todo.text.toLowerCase().includes(search.toLowerCase()))
        .sort((ele1, ele2) => sort === "Asc" ? ele1.text.localeCompare(ele2.text) : ele2.text.localeCompare(ele1.text))
        .map((todo) => (
          <Todo key={todo.id} todo={todo} removeTodo={removeTodo} completeTodo={completeTodo} />
        ))}
      </div>
      <TodoForm addTodo={addTodo} />
    </div>
  )
}

export default App
