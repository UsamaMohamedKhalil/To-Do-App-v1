import './App.css';
import './components/ToDoForm';
import ToDoList from './components/ToDoList';
function App() {
  return (
    <div className="todo-app">
      <ToDoList />
    </div>
  );
}

export default App;
