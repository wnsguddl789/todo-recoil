import { selector } from 'recoil';
import { todoListState } from '@atoms/TodoAtoms';

const getAllTodoListState = selector({
  key: 'getAllTodoListState',
  get: ({ get }) => get(todoListState),
});

const getDoneTodoListState = selector({
  key: 'getDoneTodoListState',
  get: ({ get }) => get(todoListState).filter((todo) => todo.category === 'DONE'),
});

const getUnDoneTodoListState = selector({
  key: 'getUnDoneTodoListState',
  get: ({ get }) => get(todoListState).filter((todo) => todo.category !== 'DONE'),
});

export { getAllTodoListState, getDoneTodoListState, getUnDoneTodoListState };
