interface Todo {
  id: number;
  content: string;
  edit: boolean;
}

export default interface TodoList {
  todos: Todo[];
  input: string;
  todoNum: number;
}
