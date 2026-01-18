import "../styles/estadisticaProducto.css";
export function EstadisticasProductos({ item }) {
  const precioPromedio =
    item.reduce((acc, producto) => acc + producto.precio, 0) /
    (item.length - 1);

  const totalProductos = item.reduce((acc) => acc + 1, 0);

  const categoriaFrecuente = item.reduce((acc, prod) => {
    const cat = prod.categoria;
    acc[cat] = (acc[cat] || 0) + 1;
    return acc;
  }, {});
  const categoria = Object.entries(categoriaFrecuente).reduce(
    (acc, [cat, count]) => (count > acc[1] ? [cat, count] : acc),
  );
  console.log(categoriaFrecuente);
  return (
    <div className="estadistica-container">
      <div className="estadistica-container-box">
        total de productos {totalProductos}
      </div>
      <div className="estadistica-container-box">
        precio promedio {precioPromedio.toFixed(2)}
      </div>
      <div className="estadistica-container-box">
        categoria mas frecuente {categoria[0]}
      </div>
    </div>
  );
}
