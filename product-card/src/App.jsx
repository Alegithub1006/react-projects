import { ListaProductos } from "./components/ListaProductos";
import { productos } from "./utils/list";

function App() {
  return (
    <>
      <ListaProductos ListItems={productos} />
    </>
  );
}

export default App;
