/** @format */

import { useEffect, useState } from "react";
import { getProducts } from "../api/apiProduct";

export const Product = () => {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [items, setItems] = useState();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const products = await getProducts(page, limit);
        const productList = products?.data?.products;
        setItems(productList);
      } catch (error) {
        console.error("error message", error);
      }
    };
    fetchProduct();
  }, [page]);

  console.log(items);

  return (
    <div className="px-2">
      <h1 className="w-full">List of all the items</h1>
      <ul className="px-2  mt-4">
        {items?.map((item) => {
          return (
            <li
              className="w-full h-48 rounded-sm border mt-1 p-2 "
              key={item.id}>
              <div className="flex justify-between">
                <img className="w-1/6" src={item?.images} alt={item.brand} />
                <div>
                  <p>{item.title}</p>
                  <p>Brand: {item.brand}</p>
                </div>
                <div>
                  <button className=" mx-2 h-max w-max bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                    Edit
                  </button>
                  <button className="h-max w-max  bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                    Delete
                  </button>
                </div>
              </div>
            </li>
          );
        })}
      </ul>

      <div
        className="flex justify-end
       my-8  ">
        <button
          className={`flex items-center justify-center rounded-sm mx-2 h-8 w-8 border ${page == 1 ? "text-red-700" : ""}`}>
          {page - 1}
        </button>
        <button className="flex items-center justify-center rounded-sm mx-2 h-8 w-8 border">
          {page}
        </button>
        <button className="flex items-center justify-center rounded-sm mx-2 h-8 w-8 border">
          {page + 1}
        </button>
      </div>

      <div>Footer</div>
    </div>
  );
};
