import {
  type Todo as TodoTypesProps,
  type TodoId,
  type TodoIdAndComplete,
} from "../types";

interface Props extends TodoTypesProps {
  onToggleTodo: TodoIdAndComplete;
  onRemoveTodo: ({ id }: TodoId) => void;
}

export const Todo: React.FC<Props> = ({
  id,
  title,
  complete,
  onRemoveTodo,
  onToggleTodo,
}) => (
  <div>
    <input
      type="checkbox"
      checked={complete}
      onChange={(event) => {
        onToggleTodo({ id, complete: event.target.checked });
      }}
    />
    <label> {title} </label>
    <button
      onClick={() => {
        onRemoveTodo({ id });
      }}
      className="destroy"
    />
  </div>
);
