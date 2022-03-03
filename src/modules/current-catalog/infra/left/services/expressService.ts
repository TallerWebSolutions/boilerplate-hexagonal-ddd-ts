import { Request, Response } from "express";

import { getAvailableProducts } from "../../../application/use-case/getAvailableProducts";
import { productFromDomainToLeft } from "../../dto/CatalogResponseLeftDTO";
import { productRepository } from "../../right/repositories/product";

export const getProductCatalog = async (
  request: Request,
  response: Response
) => {
  const repository = productRepository();
  const catalog = await getAvailableProducts(repository);
  const catalogDTO = catalog.map((item) => {
    return productFromDomainToLeft(item);
  });

  return response.json(catalogDTO);
};
