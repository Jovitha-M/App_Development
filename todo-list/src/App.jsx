import { useState } from "react";

function App() {
  const [task, setTask] = useState("");
  const [todo, setTodo] = useState([]);

  const handleSubmit = () => {
    setTodo((currentTodo) => {
      return [
        ...currentTodo,
        { id: crypto.randomUUID(), content: task, completed: false },
      ];
    });
  };

  const toggleTodo = (id) => {
    setTodo((currentTodo) =>
      currentTodo.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodo((currentTodo) => {
      return currentTodo.filter((todos) => todos.id !== id);
    });
  };

  return (
    <div>
      <label>Enter the task: </label>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={handleSubmit}>Add task</button>
      <h3>To Do tasks</h3>
      <ul>
        {todo.map((item) => {
          return (
            <li key={item.id}>
              <label>
                <input
                  type="checkbox"
                  checked={item.completed}
                  onChange={(e) => toggleTodo(item.id)}
                />
                {item.content}
                <button onClick={() => deleteTodo(item.id)}>Complete</button>
              </label>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
