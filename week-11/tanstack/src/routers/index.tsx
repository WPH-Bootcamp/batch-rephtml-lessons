import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Product from "../pages/Product";
import ProductDetail from "../pages/ProductDetail";
import ProductAdd from "../pages/ProductAdd";

import MainLayout from "../layouts/MainLayout";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/products",
        element: <Product />,
      },
      {
        path: "/products/:id",
        element: <ProductDetail />,
      },
      {
        path: "/products/add",
        element: <ProductAdd />,
      },
    ],
  },
]);

export default routes;
