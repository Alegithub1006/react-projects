import "../styles/producto.css";

export function Producto({ nombre, precio, categoria, onDelete }) {
  return (
    <div className="container">
      <div className="product-box">
        <div className="product-box-price-category">
          <p className="product-box-category">{categoria}</p>
          <p className="product-box-price">${precio}</p>
        </div>
        <div className="product-box-body">
          <h4 className="product-box-name">{nombre}</h4>

          <button
            className="product-box-button"
            onClick={() => {
              onDelete(nombre);
            }}>
            delete
          </button>
        </div>
      </div>
    </div>
  );
}
