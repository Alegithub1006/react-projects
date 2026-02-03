import { useState } from "react";
import { ModalCards } from "./ModalCards";
import { Modal } from "./Modal";
import { HeaderModal } from "./HeaderModal";
import "../styles/FlashCard.css";

export function FlashCard({ id, name, flashCard, updateCard }) {
  const [startSeccion, setStartSeccion] = useState(false);
  const handleStartSeccion = () => {
    setStartSeccion(!startSeccion);
  };
  return (
    <>
      <section className="container-card" key={id}>
        <header className="container-card-header">
          <div className="container-card-text">
            <h2 className="container-card-title">{name}</h2>
            <p className="container-card-flashcards">
              {flashCard.length} Cards
            </p>
          </div>

          {startSeccion && (
            <Modal width={"85%"} openModal={startSeccion}>
              <section className="modal-section">
                <HeaderModal handleFunc={handleStartSeccion} />
                <ModalCards cards={flashCard} />
              </section>
            </Modal>
          )}
          <div className="container-card-buttons">
            <button
              className="container-card-button start"
              onClick={handleStartSeccion}>
              start
            </button>
            <button
              className="container-card-button update"
              onClick={updateCard}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24">
                <g
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2">
                  <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                  <path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z" />
                </g>
              </svg>
            </button>
          </div>
        </header>
      </section>
    </>
  );
}
