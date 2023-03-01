import { Todo, todoListState } from '@atoms/TodoAtoms';
import { Category, categoriesState } from '@atoms/CategoryAtom';

import { getAllTodoListState, getDoneTodoListState, getUnDoneTodoListState } from '@/recoil/selectors/TodoSelectors';
import { getCategoriesState } from '@selectors/CategorySelectors';

import { useRecoilValue, useSetRecoilState } from 'recoil';

export const useTodoState = () => {
  const _setTodoState = useSetRecoilState(todoListState);
  const todoList = useRecoilValue(getAllTodoListState);
  const doneTodoList = useRecoilValue(getDoneTodoListState);
  const unDoneTodoList = useRecoilValue(getUnDoneTodoListState);

  const _setCategoriesState = useSetRecoilState(categoriesState);

  const categories = useRecoilValue(getCategoriesState);

  const setTodoState = (callback: (todo: Todo[]) => Todo[]) => {
    _setTodoState(callback);
  };

  const setCategoriesState = (callback: (todo: Category[]) => Category[]) => {
    _setCategoriesState(callback);
  };

  return {
    setTodoState,

    todoList,
    doneTodoList,
    unDoneTodoList,

    setCategoriesState,

    categories,
  };
};
