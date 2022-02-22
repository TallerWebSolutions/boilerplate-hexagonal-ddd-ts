import { getAvailableProducts } from "./getAvailableProducts";
import { productRepository } from "../../infra/right/repositories/product";
import { Product } from "../../domain/models/aggregates/Product/Product";

describe("getProductAvailable tests", () => {
  it("should return a list of products ", async () => {
    const repository = productRepository();

    const products = [
      {
        id: "1",
        description: "chicken pie",
        stockAmount: 10,
      },
      {
        id: "2",
        description: "cheese pie",
        stockAmount: 15,
      },
    ];

    expect(await getAvailableProducts(repository)).toMatchObject<Product[]>(
      products
    );
  });
});
