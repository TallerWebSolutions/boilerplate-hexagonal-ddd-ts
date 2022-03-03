import { productsMock } from "../../../../mock";
import { ProductRepositoryInterface } from "../../../application/ports/productRepository";
import { ProductAggregate } from "../../../domain/models/aggregates/ProductAggregate";
import { productFromRightToDomain } from "../../dto/ProductResponseRightDTO";

export const productRepository = (): ProductRepositoryInterface => ({
  getAvailableProducts: (): ProductAggregate[] => {
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
