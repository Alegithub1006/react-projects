import { createContext, useState } from "react";

export const CartContext = createContext();
export function Cartprovider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    //check if theproduct already exist
    const productInCartIndex = cart.findIndex((item) => item.id === product.id);
    if (productInCartIndex >= 0) {
      const newCart = structuredClone(cart);
      newCart[productInCartIndex].quantity += 1;
      setCart(newCart);
    }

    //if product is noy in cart
    setCart((prevState) => [
      ...prevState,
      {
        ...product,
        quantity: 1,
      },
    ]);
  };
  const clearCart = () => {
    setCart([]);
  };

  const removeFromCart = (product) => {
    setCart((prevState) => prevState.filter((item) => item.id !== product.id));
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        clearCart,
        removeFromCart,
      }}>
      {children}
    </CartContext.Provider>
  );
}
