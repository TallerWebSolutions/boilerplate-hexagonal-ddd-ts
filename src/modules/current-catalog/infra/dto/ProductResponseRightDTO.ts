import { ProductAggregate } from "../../domain/models/aggregates/ProductAggregate";

export type ProductResponseRightDTO = {
  id: string;
  description: string;
  stockAmount: number;
  salePrice: number;
  costPrice: number;
};

export const productFromRightToDomain = (
  product: ProductResponseRightDTO
): ProductAggregate => {
  return {
    id: product.id,
    description: product.description,
    price: product.salePrice,
  };
};
