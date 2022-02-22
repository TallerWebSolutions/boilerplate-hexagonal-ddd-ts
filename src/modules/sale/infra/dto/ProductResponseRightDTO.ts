import { Product } from "../../domain/models/aggregates/Product/Product";

export type ProductResponseRightDTO = {
  id: string;
  description: string;
  stockAmount: number;
  salePrice: number;
  costPrice: number;
};

export const productFromRightToDomain = (
  product: ProductResponseRightDTO
): Product => {
  return {
    id: product.id,
    description: product.description,
    price: product.salePrice,
  };
};
