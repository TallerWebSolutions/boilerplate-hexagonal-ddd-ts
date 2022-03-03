import { ProductAggregate } from "../../../domain/models/aggregates/ProductAggregate";

export type ProductResponseRepositoryDTO = {
  id: string;
  description: string;
  stockAmount: number;
  salePrice: number;
  costPrice: number;
};

export const productFromRightToDomain = (
  product: ProductResponseRepositoryDTO
): ProductAggregate => {
  return {
    id: product.id,
    description: product.description,
    price: product.salePrice,
  };
};
