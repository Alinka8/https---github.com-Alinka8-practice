import Todoinput from "./components/todo-input/Todo-input";
import GutterlessList from "./components/todo-input/list-group/List-group";
import "./App.css";

function App() {
  const config = { color: "red" };
  return (
    <div className="App">
      <input abc={config} />
      <Todoinput />
      <GutterlessList />
    </div>
  );
}

export default App;
