import "./App.css";
import PostsList from "./components/PostsList";
import ProductsList from "./components/ProductsList";
import QuotesList from "./components/QuotesList";
import TodoList from "./components/TodoList";
import UsersList from "./components/UsersList";
/* BONUS POINTS PARA QUEM ESTILIZAR MINIMAMENTE OS COMPONENTES!! */

function App() {
  return (
    <div className="container">
      <h1>Atividade Fetch</h1>

      <small className="small">
        Axios já instalado. (olhar as dependencias do arquivo: package.json)
      </small>

      <p>
        Nessa atividade vamos treinar buscar as informações de várias API's.
      </p>
      <small>Use como exemplo o código da aula. Arquivo: Axios.jsx</small>

      <div>
        {/* 
            Coloque aqui embaixo os componentes criados por você
            exemple: 
            
            */}
        <PostsList className="component" />
        <ProductsList className="component" />
        <QuotesList className="component" />
        <TodoList className="component" />
        <UsersList className="component" />
      </div>
    </div>
  );
}

export default App;
