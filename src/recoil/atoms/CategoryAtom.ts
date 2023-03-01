import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

type Category = {
  label: string;
  value: 'DONE' | 'UNDONE' | string;
};

const defaultCategories = [
  { label: '미완료', value: 'UNDONE' },
  { label: '완료', value: 'DONE' },
];

const { persistAtom } = recoilPersist({
  key: 'persist-categoriesState',
  storage: localStorage,
});

const categoriesState = atom<Category[]>({
  key: 'categoriesState',
  default: defaultCategories,
  effects_UNSTABLE: [persistAtom],
});

export type { Category };
export { categoriesState };
