import { Product } from "../Product/Product";

export type OrderItem = {
  id: string;
  product: Product;
  amount: number;
};
