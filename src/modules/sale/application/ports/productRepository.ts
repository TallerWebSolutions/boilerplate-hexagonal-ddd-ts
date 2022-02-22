import { Product } from "../../domain/models/aggregates/Product/Product";

export interface ProductRepositoryInterface {
  getAvailableProducts(): Product[];
}
