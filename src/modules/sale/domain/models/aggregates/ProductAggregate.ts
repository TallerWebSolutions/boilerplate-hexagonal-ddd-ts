export type ProductAggregate = {
  readonly id: string;
  readonly description: string;
  readonly price: number;
};

export const createProduct = function (
  id: string,
  description: string,
  price: number
): ProductAggregate {
  const product: ProductAggregate = {
    id: id,
    description: description,
    price: price,
  };
  return product;
};
