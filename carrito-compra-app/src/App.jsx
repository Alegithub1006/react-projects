import { products as initialProducts } from "./mocks/product.json";
import { Product } from "./components/Product";
import { Header } from "./components/Header";
import { useFilter } from "./hooks/useFilter";
import { Footer } from "./components/Footer";
import { Cart } from "./components/Cart";
import { CartProvider } from "./context/cart";

function App() {
  const { filteredProducts } = useFilter();
  const filterProducts = filteredProducts(initialProducts);

  return (
    <CartProvider>
      <Header />
      <Cart />
      <Product products={filterProducts} />
      <Footer />
    </CartProvider>
  );
}

export default App;
