import { useRef, useState } from "react";
import "../styles/Search.css";

export function Search({ listProduct, setListProduct }) {
  const [search, setSearch] = useState("");
  const lastProductTracked = useRef("");
  const initialListRendering = useRef(listProduct);
  const handleSearchProduct = (e) => {
    setSearch(e.target.value);
    if (lastProductTracked.current === search) return;
    search
      ? setListProduct(
          listProduct.filter((item) => item.nombre.includes(search)),
        )
      : initialListRendering.current;
    lastProductTracked.current = search;
  };

  return (
    <div className="search-container">
      <div className="search-input-box">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="m19.6 21l-6.3-6.3q-.75.6-1.725.95T9.5 16q-2.725 0-4.612-1.888T3 9.5t1.888-4.612T9.5 3t4.613 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l6.3 6.3zM9.5 14q1.875 0 3.188-1.312T14 9.5t-1.312-3.187T9.5 5T6.313 6.313T5 9.5t1.313 3.188T9.5 14"
          />
        </svg>
        <input
          className="input-search"
          type="text"
          placeholder="bucar producto"
          value={search}
          onChange={handleSearchProduct}
        />
      </div>

      {search && (
        <button
          className="search-button"
          onClick={() => {
            setListProduct(initialListRendering.current);
            setSearch("");
          }}>
          cancelar
        </button>
      )}
    </div>
  );
}
