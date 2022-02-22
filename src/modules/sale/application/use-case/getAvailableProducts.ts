//recebe um domain e e um port(interface que também é implementada pelo adapter no infra-right)
//recebe domain e um repository(interface)
/// application/ports/productRepository.ts
/// application/ports/addressCorreiosApi.ts
/// infra/right/respositories/product.ts
/// infra/right/respositories/order.ts
/// infra/right/respositories/customer.ts
/// infra/right/knexAdapter/migations/...
/// infra/right/knexAdapter/database.ts
/// infra/right/knexAdapter/knexfile.ts
/// infra/right/knexAdapter/knexfile.ts
/// infra/right/correiosApiAdapter/...
import { Product } from "../../domain/models/aggregates/Product/Product";

import { ProductRepositoryInterface } from "../ports/productRepository";

export const getAvailableProducts = async (
  productRepository: ProductRepositoryInterface
): Promise<Product[]> => {
  const products = await productRepository.getAvailableProducts();

  return products;
};
