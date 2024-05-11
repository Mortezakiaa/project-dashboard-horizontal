"use server";

// utils
import connectDB from "@/utils/connectDB";
import { MESSAGES, STATUS_CODES } from "@/utils/messages";
// models
import { Order } from "@/utils/models/orders";
import { Product } from "@/utils/models/product";
import { User } from "@/utils/models/user";

export const getOrders = async () => {
  try {
    await connectDB();

    const orders = await Order.find()
      .populate({
        path: "userId",
        model: User,
      })
      .populate({
        path: "items.productId",
        model: Product,
      })
      .lean();

    return {
      orders,
      status: MESSAGES.success,
      code: STATUS_CODES.success,
    };
  } catch (error) {
    console.log(error);
    return {
      message: MESSAGES.server,
      status: MESSAGES.failed,
      code: STATUS_CODES.server,
    };
  }
};
