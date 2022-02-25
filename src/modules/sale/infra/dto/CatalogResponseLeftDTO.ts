import { ProductAggregate } from "../../domain/models/aggregates/ProductAggregate";

export type CatalogResponseLeftDTO = {
  description: string;
  price: number;
};

export const productFromDomainToLeft = (
  product: ProductAggregate
): CatalogResponseLeftDTO => {
  return { description: product.description, price: product.price };
};
