import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

import { Input } from '@components/atoms';
import { FormItem } from '@components/molecules';
import { useTodoState } from '@hooks';

interface CategoryForm {
  value: string;
  label: string;
}

export const TodoCategoryForm = () => {
  const { setCategoriesState } = useTodoState();
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitSuccessful },
  } = useForm<CategoryForm>();

  useEffect(() => {
    if (isSubmitSuccessful) reset();
  }, [isSubmitSuccessful]);

  const onSubmit = handleSubmit((values: CategoryForm) => {
    setCategoriesState((oldCategories) => [...oldCategories, values]);
  });

  return (
    <form onSubmit={onSubmit} className="flex-1 flex flex-col gap-2 p-2 border border-zinc-600 rounded-md">
      <h1 className="text-3xl font-bold">Todo Category Form</h1>
      <FormItem className="flex gap-3" label="label을 등록해주세요">
        <Input className="flex-1 border rounded-md" {...register('label', { required: true })} type="text" />
      </FormItem>
      <FormItem className="flex gap-3" label="value를 등록해주세요">
        <Input className="flex-1 border rounded-md" {...register('value', { required: true })} type="text" />
      </FormItem>
      <button className="border rounded-lg" type="submit">
        저장
      </button>
    </form>
  );
};
