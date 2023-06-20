import {useState} from 'react'

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");
  const [category, setCategory] = useState("");

  function handleSubmit (ele) {
    ele.preventDefault()
    if (!value || !category) return;
    //add ToDo
    addTodo(value, category);

    //clear fields
    setValue("");
    setCategory("");
  }

  return (
    <div className='todo-form'>
        <h2>Criar tarefa:</h2>
        <form onSubmit={handleSubmit}>
            <input type="text" value={value} placeholder='Digite o título' onChange={(event) => setValue(event.target.value)} />
            <select value={category} onChange={event => setCategory(event.target.value)}>
                <option value="">Selecione uma categoria</option>
                <option value="Trabalho">Trabalho</option>
                <option value="Pessoal">Pessoal</option>
                <option value="Estudos">Estudos</option>
            </select>
            <button type='submit'>Criar tarefa</button>
        </form>
    </div>
  )
}

export default TodoForm