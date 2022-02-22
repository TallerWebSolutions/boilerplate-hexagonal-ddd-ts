import { Address } from "../../entities/Address";
import { Customer } from "../Customer/Customer";
import { Order, order } from "./Order";
import { OrderItem } from "./OrderItem";

describe.skip("Order tests", () => {
  // it.skip("should return a new order", () => {
  //   const deliveryAddress: Address = {
  //     street: "Long way",
  //     city: "New York",
  //   };
  //   const items: OrderItem[] = [
  //     {
  //       id: "1",
  //       description: "chicken",
  //     },
  //     {
  //       id: "2",
  //       description: "rice",
  //     },
  //     {
  //       id: "3",
  //       description: "beans",
  //     },
  //   ];
  //   const customerId: Customer = {
  //     id: "132",
  //     name: "John",
  //     address: {
  //       street: "Blue river",
  //       city: "New Jersey",
  //     },
  //   };
  //   const newOrder: Order = {
  //     id: "1",
  //     deliveryAddress: {
  //       street: "Long way",
  //       city: "New York",
  //     },
  //     items: [
  //       {
  //         id: "1",
  //         description: "chicken",
  //       },
  //       {
  //         id: "2",
  //         description: "rice",
  //       },
  //       {
  //         id: "3",
  //         description: "beans",
  //       },
  //     ],
  //     customerId: {
  //       id: "132",
  //       name: "John",
  //       address: {
  //         street: "Blue river",
  //         city: "New Jersey",
  //       },
  //     },
  //   };
  //   expect(order(deliveryAddress, items, customerId)).toMatchObject(newOrder);
  // });
  // it.skip("should return the same order with new address");
  // it.skip("should return the same order without the removed item");
});
