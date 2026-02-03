import "./App.css";
import data from "../src/data.json";
import { useState } from "react";
import { ListCard } from "./components/ListCard";
import { Header } from "./components/Header";
import { SearchInput } from "./components/SearchInput";
import { HeaderDescription } from "./components/HeaderDescription";

function App() {
  const [flasCard, setFlashCard] = useState(data);
  return (
    <>
      <Header />
      <HeaderDescription />
      <SearchInput state={flasCard} setState={setFlashCard} />
      <ListCard cards={flasCard} setCards={setFlashCard} />
    </>
  );
}

export default App;
