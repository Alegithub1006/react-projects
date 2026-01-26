import { Producto } from "./Producto";
import { TotalPrecio } from "./TotalPrecio";
import { EstadisticasProductos } from "./EstadisticasProductos";
import "../styles/ListaProducto.css";
import { EmptyList } from "./EmptyList";

export function ListaProductos({ ListProduct, onDelete, setListProduct }) {
  return (
    <>
      {/* {element.length >= 5 && (
        <span className="span-items">tienes mas de 5 productos</span>
      )}
      <TotalPrecio items={element} />
      <EstadisticasProductos item={element} />
      <div className="container-input">
        <input
          className="container-input-search"
          type="text"
          onChange={handleClick}
          value={search}
          placeholder="buscar producto"
        />
      </div> */}
      <ul className="product-list">
        {ListProduct.length === 0 ? (
          <EmptyList setListProduct={setListProduct} />
        ) : (
          ListProduct.map((item, index) => {
            return (
              <li className="product-list-element" key={index}>
                <Producto
                  nombre={item.nombre}
                  precio={item.precio}
                  categoria={item.categoria}
                  onDelete={onDelete}
                />
              </li>
            );
          })
        )}
      </ul>
    </>
  );
}
