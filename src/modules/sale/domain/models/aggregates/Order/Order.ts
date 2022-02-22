import { Address } from "../../entities/Address";
import { OrderItem } from "./OrderItem";
import { Customer } from "../Customer/Customer";
import { uuid } from "uuidv4";

export type Order = {
  id: string;
  deliveryAddress: Address;
  items: OrderItem[];
  customerId: Customer;
};

export const order = (
  deliveryAddress: Address,
  items: OrderItem[],
  customerId: Customer
): Readonly<Order> => {
  const id = uuid();

  return { id, deliveryAddress, items, customerId };
};

const changeAddress = function (
  this: Order,
  newDeliveryAddress: Address
): Order {
  this.deliveryAddress = newDeliveryAddress;
  return this;
};

const removeItem = function (this: Order, orderItem: OrderItem): Order {
  const itemIndex = this.items.findIndex((item) => item.id == orderItem.id);
  this.items.splice(itemIndex, 1);

  return this;
};
