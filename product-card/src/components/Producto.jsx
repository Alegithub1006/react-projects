import "../styles/producto.css";

export function Producto({
  nombre = "unknown",
  precio = 0,
  categoria = "unknown",
}) {
  return (
    <div className="container">
      <div className="product-box">
        <div className="product-box-price-category">
          <p className="product-box-category">{categoria}</p>
          <p className="product-box-price">${precio}</p>
        </div>
        <h4 className="product-box-name">{nombre}</h4>
      </div>
    </div>
  );
}
