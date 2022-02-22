import { Product } from "../../domain/models/aggregates/Product/Product";

export type CatalogResponseLeftDTO = {
  description: string;
  price: number;
};

export const productFromDomainToLeft = (
  product: Product
): CatalogResponseLeftDTO => {
  return { description: product.description, price: product.price };
};
