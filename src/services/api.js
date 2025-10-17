import axios from "axios";

const BASE_URL = "https://fakestoreapi.com";

export const getProducts = async () => {
  const res = await axios.get(`${BASE_URL}/products`);
  return res.data;
};

export const getProductById = async (id) => {
  const res = await axios.get(`${BASE_URL}/products/${id}`);
  return res.data;
};