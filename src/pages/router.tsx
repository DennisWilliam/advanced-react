import { createBrowserRouter, RouterProvider } from "react-router-dom";
import pagesData from "./pagesData";

const AppRouterProvider = () => {
  return <RouterProvider router={createBrowserRouter(pagesData)} />;
};

export default AppRouterProvider;
