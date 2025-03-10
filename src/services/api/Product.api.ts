import { IProduct } from "../../interfaces/IProduct.interface";
import { ProductsList } from "../../types/ProductsList.type";

export const getAllProducts = async (): Promise<ProductsList> => {
  const url = "http://localhost:3333/products";
  const response = await fetch(url);
  const data = await response.json();

  return data;
};

export const getByIdProduct = async (productId: number): Promise<IProduct> => {
  const url = `http://localhost:3333/products/${productId}`;
  const response = await fetch(url);
  const data = await response.json();

  return data;
};

export const getClothingSize = async (): Promise<string[]> => {
  const url = "http://localhost:3333/products/clothing-size";
  const response = await fetch(url);
  const data = await response.json();

  return data;
}

export const getShoeSize = async (): Promise<string[]> => {
  const url = "http://localhost:3333/products/shoe-size";
  const response = await fetch(url)
  const data = await response.json()

  return data
}
