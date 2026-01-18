import "../styles/totalPrecio.css";

export function TotalPrecio({ items }) {
  const totalPrecio = items.reduce((acc, producto) => acc + producto.precio, 0);
  return (
    <div className="totalprice-container">
      <p>precio total de la venta </p>
      <span>{totalPrecio}$</span>
    </div>
  );
}
