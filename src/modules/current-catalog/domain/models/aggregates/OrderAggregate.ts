import { ProductAggregate } from "./ProductAggregate";

export type OrderAggregate = {
  id: string;
  items: OrderItem[];
  addItems(this: OrderAggregate, item: OrderItem): OrderItem[];
};

type OrderItem = {
  id: string;
  product: ProductAggregate;
  amount: number;
};

const addItems = function (this: OrderAggregate, item: OrderItem): OrderItem[] {
  this.items.push(item);
  return this.items;
};

export const createOrder = function (item: OrderItem): OrderAggregate {
  const order: OrderAggregate = {
    id: "1", //TODO Fix me - I supposed to be a uuid
    items: [],
    addItems: addItems,
  };
  return order;
};
