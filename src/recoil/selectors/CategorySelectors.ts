import { selector } from 'recoil';

import { categoriesState } from '@atoms/CategoryAtom';

const getCategoriesState = selector({
  key: 'getCategoriesState',
  get: ({ get }) => get(categoriesState),
});

export { getCategoriesState };
