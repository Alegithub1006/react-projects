import "./App.css";
import { useCatImage } from "./hooks/useCatImage.js";
import { useCatFact } from "./hooks/useCatFact.js";

function App() {
  const { fact, refreshFact } = useCatFact();
  const { imageUrl } = useCatImage({ fact });

  const handleClick = async () => {
    refreshFact();
  };

  return (
    <>
      <h1>app de gatitos api </h1>
      <button onClick={handleClick}>get new fact</button>
      {fact && <p>{fact}</p>}
      {imageUrl && <img width={200} height={200} src={imageUrl} alt={fact} />}
    </>
  );
}

export default App;
