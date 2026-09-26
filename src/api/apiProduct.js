/** @format */

import apiData from "./client";

export const getProducts = async (page, limit) => {
  try {
    const products = await apiData.get("/products", {
      params: {
        limit: limit,
        skip: limit * (page - 1),
      },
    });

    return products;
  } catch (error) {
    console.error("error message:", error);
    return error;
  } finally {
    console.log("axios run successfully");
  }
};
