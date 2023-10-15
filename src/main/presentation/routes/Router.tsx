import type { ReactElement } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Main } from "../templates/Main";
import { emptyLazy } from "../../../lib/lazy";

export function Router(): ReactElement {
  return <RouterProvider router={router} />;
}

const Comp1 = emptyLazy(() => import("../test/Comp1"));
const Comp2 = emptyLazy(() => import("../test/Comp2"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/teste",
        element: <div>hello</div>,
      },
      {
        path: "comp1",
        element: <Comp1 />,
      },
      {
        path: "comp2",
        element: <Comp2 />,
      },
    ],
  },
]);
