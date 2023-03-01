import { Todo } from '@atoms/TodoAtoms';

interface Props {
  todoList: Todo[];
  renderLabel: (value: string) => string;
}

export const TodoList = ({ todoList, renderLabel }: Props) => (
  <ul className="flex flex-col gap-3">
    {todoList.map((todo) => (
      <li key={todo.id} className="flex flex-col gap-1">
        <p>{todo.content}</p>
        <p>{renderLabel(todo.category)}</p>
      </li>
    ))}
  </ul>
);
