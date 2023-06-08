/* 
END POINT: https://dummyjson.com/todos
Rendereizar os campos: todo, completed, id
Não esqueça de criar o botão para mostrar e sumir com a lista (como exemplo em aula)
*/
import { useState, useEffect } from "react";
import axios from "axios";
export default function TodoList() {
  const [todos, setTodos] = useState([]);
  const [showTodos, setShowTodos] = useState(true);
  useEffect(() => {
    async function fetchTodos() {
      const response = await axios.get("https://dummyjson.com/todos");
      console.log(response);
      setTodos(response.data.todos);
    }
    fetchTodos();
  }, []);
  function handleTodos() {
    setShowTodos(!showTodos);
  }
  return (
    <div>
      <h2>Todos</h2>
      <button onClick={handleTodos}>Mostrar Todos</button>
      {showTodos === true && (
        <div>
          {todos.map((todo) => {
            return (
              <div key={todo.id}>
                <h3>{todo.todo}</h3>
                <p>{todo.completed ? `Completo` : `Pendente`}</p>
                <p>{todo.id}</p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
