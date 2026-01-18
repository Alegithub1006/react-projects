import { useState } from "react";
import { Producto } from "./Producto";
import { TotalPrecio } from "./TotalPrecio";
import { EstadisticasProductos } from "./EstadisticasProductos";
import "../styles/ListaProducto.css";
export function ListaProductos({ ListItems }) {
  const [element, setElement] = useState(ListItems);
  const [newProduct, setNewProduct] = useState({
    nombre: "",
    precio: 0,
    categoria: "",
  });
  const [search, setSearch] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleAddProduct = () => {
    setShowModal(false);
    setElement((product) => {
      return [...product, newProduct];
    });
  };

  const handleClick = (e) => {
    setSearch(e.target.value);
  };

  const handleOpenModal = () => {
    setShowModal(!showModal);
  };

  const filteredList = element.filter((item) => item.nombre.includes(search));
  console.log(filteredList);
  return (
    <>
      {showModal && (
        <div className="modal-container">
          <div className="modal-container-box">
            <div className="modal-container-header">
              <h3>agregar un nuevo producto</h3>
            </div>
            <div className="modal-container-inputs">
              <div className="modal-container-inputs-box">
                <p>nombre del producto:</p>
                <input
                  type="text"
                  value={newProduct.nombre}
                  onChange={(e) => {
                    setNewProduct({
                      ...newProduct,
                      nombre: e.target.value,
                    });
                  }}
                  placeholder="introduce nombre"
                />
              </div>
              <div className="modal-container-inputs-box">
                <p>Precio:</p>
                <input
                  type="text"
                  value={newProduct.precio}
                  onChange={(e) => {
                    setNewProduct({
                      ...newProduct,
                      precio: Number(e.target.value),
                    });
                  }}
                  placeholder="introduce precio"
                />
              </div>
              <div className="modal-container-inputs-box">
                <p>Categoria:</p>
                <input
                  type="text"
                  value={newProduct.categoria}
                  onChange={(e) => {
                    setNewProduct({
                      ...newProduct,
                      categoria: e.target.value,
                    });
                  }}
                  placeholder="introduce categoria"
                />
              </div>
            </div>
            <div className="modal-container-buttons">
              <button
                className="button-modal"
                onClick={() => {
                  setShowModal(false);
                }}>
                cancelar
              </button>
              <button className="button-modal" onClick={handleAddProduct}>
                agregar
              </button>
            </div>
          </div>
        </div>
      )}
      {element.length >= 5 && (
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
      </div>
      <ul className="product-list">
        {ListItems.length === 0 ? (
          <span>no hay producos para mostrar</span>
        ) : (
          filteredList.map((item, index) => {
            return (
              <li className="product-list-element" key={index}>
                <Producto
                  nombre={item.nombre}
                  precio={item.precio}
                  categoria={item.categoria}
                />
              </li>
            );
          })
        )}
      </ul>

      <button className="button-add" onClick={handleOpenModal}>
        agregar
      </button>
    </>
  );
}
