import { useContext } from "react";
import { FiltersContext } from "../context/filters";

export function useFilter() {
  const { filters, setFilters } = useContext(FiltersContext);

  const filteredProducts = (products) => {
    return products.filter((prod) => {
      return (
        prod.price >= filters.minPrice &&
        (filters.category === "all" || prod.category === filters.category)
      );
    });
  };

  return { filters, filteredProducts, setFilters };
}
