import { useState } from "react";
import { ModalCards } from "./ModalCards";

export function FlashCard({ id, name, flashCard, updateCard, openCard }) {
  const [startSeccion, setStartSeccion] = useState(false);
  const handleStartSeccion = () => {
    setStartSeccion(!startSeccion);
  };
  return (
    <>
      <section className="container-card" key={id}>
        <header className="container-card-title">{name}</header>
        {startSeccion && <ModalCards cards={flashCard} />}

        <button onClick={handleStartSeccion}>start</button>
        <button className="container-card-button start" onClick={updateCard}>
          update
        </button>
      </section>
    </>
  );
}
