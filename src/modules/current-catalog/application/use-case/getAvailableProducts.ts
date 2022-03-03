import { ProductAggregate } from "../../domain/models/aggregates/ProductAggregate";

import { ProductRepositoryInterface } from "../ports/productRepository";

export const getAvailableProducts = async (
  productRepository: ProductRepositoryInterface
): Promise<ProductAggregate[]> => {
  const products = await productRepository.getAvailableProducts();

  return products;
};
