import Todoinput from "./components/todo-input/Todo-input";
import GutterlessList from "./components/todo-input/list-group/List-group";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Todoinput />
      <GutterlessList />
    </div>
  );
}

export default App;
