import { useTodoState } from '@hooks';

import { TodoCreateForm, TodoCategoryForm } from '@components/organisms';
import { TodoList } from '@components/molecules';

export default function TodoListPage(): JSX.Element {
  const { doneTodoList, unDoneTodoList, categories } = useTodoState();

  const renderLabel = (value: string) => categories.find((category) => category.value === value)?.label as string;

  return (
    <div className="flex min-h-screen max-h-screen">
      <div className="flex flex-1 flex-col">
        <div className="flex-1 p-2 border border-zinc-600 rounded-md">
          <h1 className="text-3xl font-bold">미완료한 Todo!</h1>
          <TodoList todoList={unDoneTodoList} renderLabel={renderLabel} />
        </div>
        <div className="flex-1 p-2 border border-zinc-600 rounded-md">
          <h1 className="text-3xl font-bold">완료한 Todo!</h1>
          <TodoList todoList={doneTodoList} renderLabel={renderLabel} />
        </div>
      </div>
      <div className="flex flex-1 flex-col">
        <TodoCreateForm />
        <TodoCategoryForm />
      </div>
    </div>
  );
}
