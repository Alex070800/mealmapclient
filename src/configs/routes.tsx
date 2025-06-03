import { Suspense } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ViewMealPage } from "../pages/view-meal-page/view-meal-page";
import { RootPage } from "../pages/root-page/root-page";
import { links } from "./links";
import { ProfilePage } from "../pages/profile-page/profile-page";
import { SettingsPage } from "../pages/settings-page/settings-page";
import { LoginPage } from "../pages/login-page/login-page";
import { DayPage } from "../pages/day-page/day-page";

const AppRouter = () => {
  const router = createBrowserRouter([
    {
      path: links.start,
      element: <RootPage />,
      children: [
        {
          path: links.view_menu,
          element: <ViewMealPage />,
        },
        {
          path: links.profile,
          element: <ProfilePage />,
        },
        {
          path: links.settings,
          element: <SettingsPage />,
        },
        {
          path: links.view_day,
          element: <DayPage />,
        },
      ],
    },
    {
      path: links.login,
      element: <LoginPage />,
    },
    {
      path: "*",
      element: <RootPage />,
    },
  ]);

  // return (
  //   <Suspense fallback={<BigLoader />}>
  //     <RouterProvider router={router} />
  //   </Suspense>
  // );

  return (
    <Suspense>
      <RouterProvider router={router} />
    </Suspense>
  );
};

export default AppRouter;
