import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

import TodoListPage from '@pages/TodoListPage';
export default function App(): JSX.Element {
  const router = createBrowserRouter([
    {
      element: <TodoListPage />,
      path: '/',
    },
  ]);
  return (
    <RecoilRoot>
      <RouterProvider router={router}></RouterProvider>
    </RecoilRoot>
  );
}
