import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { v4 } from 'uuid';

import { Input } from '@components/atoms';
import { FormItem } from '@components/molecules';
import { useTodoState } from '@hooks';

interface TodoForm {
  content: string;
  category: string;
}

export const TodoCreateForm = () => {
  const { setTodoState, categories } = useTodoState();
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitSuccessful },
  } = useForm<TodoForm>();

  useEffect(() => {
    if (isSubmitSuccessful) reset();
  }, [isSubmitSuccessful]);

  const onSubmit = handleSubmit((values: TodoForm) => {
    const isDone = values.category === 'DONE';
    setTodoState((oldTodoList) => [...oldTodoList, { id: v4(), isDone, ...values }]);
  });

  return (
    <form onSubmit={onSubmit} className="flex-1 flex flex-col gap-2 p-2 border border-zinc-600 rounded-md">
      <h1 className="text-3xl font-bold">Todo Create Form</h1>
      <FormItem className="flex gap-3 justify-between" label="무슨일인가요?">
        <Input className="flex-1 border rounded-md" {...register('content', { required: true })} type="text" />
      </FormItem>

      <FormItem className="flex gap-3 justify-between" label="카테고리">
        <select className="flex-1 border rounded-md" {...register('category', { required: true })}>
          {categories.map(({ label, value }) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
      </FormItem>
      <button className="border rounded-lg" type="submit">
        저장
      </button>
    </form>
  );
};
