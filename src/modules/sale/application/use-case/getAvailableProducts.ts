import { Product } from "../../domain/models/aggregates/Product/Product";

import { ProductRepositoryInterface } from "../ports/productRepository";

export const getAvailableProducts = async (
  productRepository: ProductRepositoryInterface
): Promise<Product[]> => {
  const products = await productRepository.getAvailableProducts();

  return products;
};
