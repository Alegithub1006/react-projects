import { useState } from "react";
import "../styles/FormProduct.css";

export function FormProduct({ setProduct }) {
  const [showModal, setShowModal] = useState(false);
  const [newProduct, setNewProduct] = useState([]);

  const handleAddProduct = () => {
    setShowModal(false);
    setProduct((prevProduct) => {
      return [...prevProduct, newProduct];
    });
  };

  const handleOpenModal = () => {
    setShowModal(!showModal);
  };
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
                      precio: e.target.value,
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
      <button className="button-add" onClick={handleOpenModal}>
        agregar producto
      </button>
    </>
  );
}
