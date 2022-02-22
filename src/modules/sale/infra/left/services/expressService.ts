import { Request, Response } from "express";

import { getAvailableProducts } from "../../../application/use-case/getAvailableProducts";
import { productRepository } from "../../right/repositories/product";

export const getProductCatalog = async (
  request: Request,
  response: Response
) => {
  const repository = productRepository();
  const catalog = await getAvailableProducts(repository);

  return response.json(catalog);
};
