import { ProductAggregate } from "../../../domain/models/aggregates/ProductAggregate";

export type CatalogResponseExpressDTO = {
  description: string;
  price: number;
};

export const productFromDomainToLeft = (
  product: ProductAggregate
): CatalogResponseExpressDTO => {
  return { description: product.description, price: product.price };
};
