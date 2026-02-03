import { useState } from "react";
import "../styles/AddCard.css";
import { Modal } from "./Modal";
import { FormHeader } from "./FormHeader";
import { Form } from "./Form";

export function AddCard({ cards, setCards }) {
  const [openModal, setOpenModal] = useState(false);
  const handleOpenModal = () => {
    setOpenModal(!openModal);
  };
  return (
    <>
      <button onClick={handleOpenModal} className="button-add">
        <div className="icon-container">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 24 24">
            <path
              fill="var(--primary-color)"
              d="M11 13H5v-2h6V5h2v6h6v2h-6v6h-2z"
            />
          </svg>
        </div>
        <div className="button-text">
          <h2>Create New Deck</h2>
          <p>
            Add a new cards set for your decks, and start study this section.
          </p>
        </div>
      </button>
      {openModal && (
        <Modal width={"100%"} openModal={openModal}>
          <Form cards={cards} setCards={setCards} setModal={setOpenModal} />
        </Modal>
      )}
    </>
  );
}
