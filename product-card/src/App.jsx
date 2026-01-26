import { useState } from "react";
import { Producto } from "./components/Producto";
import { ListaProductos } from "./components/ListaProductos";
import { Search } from "./components/Search";
import { NavBar } from "./components/NavBar";

function App() {
  const [product, setProduct] = useState([
    // {
    //   nombre: "perro",
    //   precio: 20,
    //   categoria: "animal",
    // },
    // {
    //   nombre: "gato",
    //   precio: 20,
    //   categoria: "animal",
    // },
    // {
    //   nombre: "leon",
    //   precio: 20,
    //   categoria: "animal",
    // },
    // {
    //   nombre: "vaca",
    //   precio: 20,
    //   categoria: "animal",
    // },
  ]);
  const deleteProduct = (nombre) => {
    setProduct(product.filter((p) => p.nombre !== nombre));
    console.log(product.nombre);
  };

  return (
    <>
      <NavBar listProduct={product} setListProduct={setProduct} />
      <ListaProductos
        ListProduct={product}
        setListProduct={setProduct}
        onDelete={deleteProduct}
      />
    </>
  );
}

export default App;
