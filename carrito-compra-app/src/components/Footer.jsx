import { useCart } from "../hooks/useCart";
import { useFilter } from "../hooks/useFilter";
import "../styles/footer.css";
import { Cart } from "./Cart";

export function Footer() {
  const { cart } = useCart();
  const { filters } = useFilter();
  return (
    <footer className="footer">
      <h4>Prueba tecntica de react</h4>
      {JSON.stringify(filters)}
      {JSON.stringify(cart)}
    </footer>
  );
}
