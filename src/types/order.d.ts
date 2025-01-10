import { ProductInterface } from "./product";

export enum OrderStatusEnum {
  Completed = "Completed",
  Pending = "Pending",
  Canceled = "Canceled",
}

export enum OrderTypeEnum {
  Product = "Product",
  Money = "Money",
}

export interface OrderInterface {
  _id: string;
  userId: string;
  status: OrderStatusEnum;
  items: ProductInterface[];
  totalMoney: number;
}
