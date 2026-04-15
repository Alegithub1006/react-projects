import { useContext } from "react";
import { CartContext } from "../context/cart";

export const useCart = () => {
  const context = useContext(CartContext);

  if (context === undefined) {
    throw new Error("usecart must be used a cartProvider");
  }
  return context;
};
