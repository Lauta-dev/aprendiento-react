import { TodoId, type ListOfTodo, TodoIdAndComplete } from "../types";
import { Todo } from "./Todo";

interface Props {
  todo: ListOfTodo;
  onRemoveTodo: ({ id }: TodoId) => void;
  onToggleTodo: TodoIdAndComplete;
}

export const Todos: React.FunctionComponent<Props> = ({
  todo,
  onRemoveTodo,
  onToggleTodo
}) => {
  return (
    <ul className="todo-list">
      {todo.map((todo) => {
        return (
          <li key={todo.id} className={todo.complete ? "completed" : ""}>
            <Todo
              complete={todo.complete}
              id={todo.id}
              title={todo.title}
              key={todo.id}
              onToggleTodo={onToggleTodo}
              onRemoveTodo={(id) => {
                onRemoveTodo(id);
              }}
            />
          </li>
        );
      })}
    </ul>
  );
};
