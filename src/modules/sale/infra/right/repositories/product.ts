import { productsMock } from "../../../../mock";
import { ProductRepositoryInterface } from "../../../application/ports/productRepository";
import { Product } from "../../../domain/models/aggregates/Product/Product";
import { productFromRightToDomain } from "../../dto/ProductResponseRightDTO";

export const productRepository = (): ProductRepositoryInterface => ({
  getAvailableProducts: (): Product[] => {
    try {
      const availableProducts = productsMock.filter((item) => {
        return item.stockAmount > 0;
      });
      const availableProductsDomain = availableProducts.map((item) => {
        return productFromRightToDomain(item);
      });

      return availableProductsDomain;
    } catch (e) {
      console.log(e.message);
    }
  },
});
