import { createBrowserRouter } from "react-router-dom";
import Landing from "../screens/landing";
import ArticleDetail from "../screens/articleDetail";
import { Suspense } from "react";
import { SpinningLoader } from "../components/widgets";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<SpinningLoader />}>
        <Landing />
      </Suspense>
    ),
  },
  {
    path: "/detail/:articleId",
    element: (
      <Suspense fallback={<SpinningLoader />}>
        <ArticleDetail />
      </Suspense>
    ),
  },
  {
    path: "*",
    element: (
      <Suspense fallback={<SpinningLoader />}>
        <Landing />
      </Suspense>
    ),
  },
]);
