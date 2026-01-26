import { Search } from "./Search";

import { FormProduct } from "./FormProduct";
import "../styles/NavBar.css";

export function NavBar({ listProduct, setListProduct }) {
  return (
    <nav className="nav-bar-container">
      <Search listProduct={listProduct} setListProduct={setListProduct} />
      <h1 className="nav-bar-container-title">Product manager app</h1>
      <FormProduct setProduct={setListProduct} />
    </nav>
  );
}
