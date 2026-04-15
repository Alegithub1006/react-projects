import { useId } from "react";
import "../styles/filters.css";
import { useFilter } from "../hooks/useFilter";

export function Filters() {
  const { filters, setFilters } = useFilter();
  const minPriceId = useId();
  const categoryId = useId();

  const handleChangeMinPrice = (event) => {
    setFilters((prevState) => ({
      ...prevState,
      minPrice: event.target.value,
    }));
  };

  const handleChangeCategory = (event) => {
    setFilters((prevState) => ({
      ...prevState,
      category: event.target.value,
    }));
  };

  return (
    <section className="filters">
      <div>
        <label htmlFor={minPriceId}>price:</label>
        <input
          type="range"
          id={minPriceId}
          min={0}
          max={1000}
          onChange={handleChangeMinPrice}
          value={filters.minPrice}
        />
        <span>${filters.minPrice}</span>
      </div>
      <div>
        <label htmlFor={categoryId}>category</label>
        <select onChange={handleChangeCategory} id={categoryId}>
          <option value="all">all</option>
          <option value="laptops">laptops</option>
          <option value="smartphones">mobiles</option>
        </select>
      </div>
    </section>
  );
}
