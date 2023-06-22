import { useState } from "react";
import { Todos } from "./components/todos";
import "todomvc-app-css/index.css";
import { type Todo, type TodoId, type TodoIdAndComplete } from "./types";

const mockTodos = [
  {
    id: 1,
    title: "Mañana curso de MiduDev",
    complete: true,
  },
  {
    id: 2,
    title: "Hay comi papa frita",
    complete: false,
  },
  {
    id: 3,
    title: "Mañana mi mama sale",
    complete: false,
  },
];

function App(): JSX.Element {
  const [todo, setTodo] = useState(mockTodos);

  const handelRemove = ({ id }: TodoId) => {
    const newTodo = todo.filter((todo) => todo.id !== id);
    setTodo(newTodo);
  };

  const handelCompleted: TodoIdAndComplete = ({ id, complete }) => {
    const newTodos = todo.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          complete,
        };
      }
      return todo;
    });
    setTodo(newTodos);
  };

  return (
    <div className="todoapp">
      <Todos
        onRemoveTodo={handelRemove}
        onToggleTodo={handelCompleted}
        todo={todo}
      />
    </div>
  );
}

export default App;
