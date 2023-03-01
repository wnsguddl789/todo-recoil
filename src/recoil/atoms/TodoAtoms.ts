import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

import { Category } from '@atoms/CategoryAtom';

type Todo = {
  id: string;
  category: Category['value'];
  content: string;
};

const { persistAtom } = recoilPersist({
  key: 'persist-todoListState',
  storage: localStorage,
});

const todoListState = atom<Todo[]>({
  key: 'todoListState',
  default: [],
  effects_UNSTABLE: [persistAtom],
});

export type { Todo };
export { todoListState };
