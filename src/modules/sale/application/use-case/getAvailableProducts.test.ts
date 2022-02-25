import { getAvailableProducts } from "./getAvailableProducts";
import { productRepository } from "../../infra/right/repositories/product";
import { ProductAggregate } from "../../domain/models/aggregates/ProductAggregate";

describe("getProductAvailable tests", () => {
  it("should return a list of products ", async () => {
    const repository = productRepository();

    const products = [
      {
        id: "1",
        description: "chicken pie",
        price: 20,
      },
      {
        id: "2",
        description: "cheese pie",
        price: 20,
      },
    ];

    expect(await getAvailableProducts(repository)).toMatchObject<
      ProductAggregate[]
    >(products);
  });
});
