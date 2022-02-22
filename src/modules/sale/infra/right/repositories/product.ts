import { productsMock } from "../../../../mock";
import { ProductRepositoryInterface } from "../../../application/ports/productRepository";
import { Product } from "../../../domain/models/aggregates/Product/Product";

export const productRepository = (): ProductRepositoryInterface => ({
  getAvailableProducts: (): Product[] => {
    try {
      const availableProducts = productsMock.filter((item) => {
        return item.stockAmount > 0;
      });

      return availableProducts;
    } catch (e) {
      console.log(e.message);
    }
  },
});
