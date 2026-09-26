/** @format */

import { useEffect } from "react";
import { getProducts } from "./api/apiProduct";
import { Product } from "./pages/Product";

const App = () => {
  return (
    <>
      <Product />
    </>
  );
};

export default App;
