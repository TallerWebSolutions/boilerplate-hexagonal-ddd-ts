import { Address } from "../../entities/Address";
import { OrderItem } from "./OrderItem";
import { Customer } from "./../Customer/Custumer";

type Order = {
  id: number;
  deliveryAddress: Address;
  items: OrderItem[];
  customerId: Customer;
};

const orderNewDelivery = (
  deliveryAddress: Address,
  items: OrderItem[],
  customerId: Customer
): Order => {
  const id = 1; // uuid
  return { id, deliveryAddress, items, customerId };
};
