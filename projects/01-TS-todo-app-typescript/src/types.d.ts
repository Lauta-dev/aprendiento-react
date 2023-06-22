export interface Todo {
  id: number;
  title: string;
  complete: boolean;
}

export type TodoId = Pick<Todo, "id">;
export type TodoIdTile = Pick<Todo, "title">;
export type TodoIdComplete = Pick<Todo, "complete">;

export type TodoIdAndComplete = ({ id, complete }: Pick<Todo, "id" | "complete">) => void

export type ListOfTodo = Todo[];
