import { productRepository } from "./product";

describe("getAvailableProducts", () => {
  it("should return all products that exist at least one unit in stock", async () => {
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

    const repository = productRepository();

    expect(await repository.getAvailableProducts()).toMatchObject(products);
  });
});
