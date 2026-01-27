import "./App.css";
import data from "../src/data.json";
import { useState } from "react";
import { ListCard } from "./components/ListCard";

function App() {
  const [flasCard, setFlashCard] = useState(data);
  console.log(flasCard);
  return (
    <>
      flash card Roboto
      <ListCard cards={flasCard} />
    </>
  );
}

export default App;
