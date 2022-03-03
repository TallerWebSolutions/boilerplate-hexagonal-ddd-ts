import { ProductAggregate } from "../../domain/models/aggregates/ProductAggregate";

export interface ProductRepositoryInterface {
  getAvailableProducts(): ProductAggregate[];
}
