import { useState } from "react";
import { FormHeader } from "./FormHeader";
import "../styles/Form.css";

export function Form({ cards, setCards, setModal }) {
  const newID = Number(cards[cards.length - 1].id) + 1;

  const [newFlashcards, setNewFlashcards] = useState([]);
  const newFlashcardID = newFlashcards.length + 1;
  const [newCard, setNewCard] = useState({
    id: newID,
    name: "",
    flashcards: [],
  });

  const handleSetNameCard = (e) => {
    setNewCard({
      ...newCard,
      name: e.target.value,
    });
  };

  const hanldeChange = (e, id) => {
    setNewFlashcards(
      newFlashcards.map((fc) => {
        if (fc.id === id) {
          return {
            ...fc,
            [e.target.name]: e.target.value,
          };
        } else {
          return fc;
        }
      }),
    );
  };
  const handleAddFlashcard = () => {
    setCards([...cards, newCard]);
  };

  const handleAddCard = () => {
    setNewFlashcards([
      ...newFlashcards,
      { id: newFlashcardID, answer: "answer", question: "question" },
    ]);
    setNewCard({ ...newCard, flashcards: newFlashcards });
    console.log(newFlashcards);

    // setModal(false);
  };
  const handleDeleteFlashcard = (id) => {
    setNewFlashcards(
      newFlashcards.filter((fc) => {
        return fc.id !== id;
      }),
    );
  };
  return (
    <section className="form-section">
      <FormHeader setModal={setModal} setCardState={handleAddFlashcard} />
      <div className="form">
        <div className="input-form">
          <label className="input-label">Deck Title</label>

          <input
            className="input"
            placeholder="text your deck name"
            onChange={handleSetNameCard}
            value={newCard.name}
            type="text"
          />
        </div>
        <section className="flashcard-section">
          <header className="flashcard-header">
            <h2>Cards{`(${newFlashcards.length})`}</h2>
            <p>Add questions and answer</p>
          </header>
          {newFlashcards.length === 0 && (
            <span>no hay flascards creadas todavia</span>
          )}
          {newFlashcards.length > 0 &&
            newFlashcards.map((flashcard) => {
              return (
                <div className="flashcard-box" key={flashcard.id}>
                  <header className="flashcard-box-header">
                    <p>Cards{`(${newFlashcards.length})`}</p>
                    <button
                      onClick={() => {
                        handleDeleteFlashcard(flashcard.id);
                      }}>
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
                          <path
                            strokeDasharray="24"
                            d="M12 20h5c0.5 0 1 -0.5 1 -1v-14M12 20h-5c-0.5 0 -1 -0.5 -1 -1v-14">
                            <animate
                              fill="freeze"
                              attributeName="stroke-dashoffset"
                              dur="0.5s"
                              values="24;0"
                            />
                          </path>
                          <path
                            strokeDasharray="18"
                            strokeDashoffset="18"
                            d="M4 5h16">
                            <animate
                              fill="freeze"
                              attributeName="stroke-dashoffset"
                              begin="0.5s"
                              dur="0.3s"
                              to="0"
                            />
                          </path>
                          <path
                            strokeDasharray="10"
                            strokeDashoffset="10"
                            d="M10 4h4M10 9v7M14 9v7">
                            <animate
                              fill="freeze"
                              attributeName="stroke-dashoffset"
                              begin="0.8s"
                              dur="0.2s"
                              to="0"
                            />
                          </path>
                        </g>
                      </svg>
                    </button>
                  </header>
                  <div className="flashcard-textarea">
                    <div className="textarea-box">
                      <p>FRON{"(question)"}</p>
                      <textarea
                        className="flashcard-question"
                        name="question"
                        onChange={(e) => {
                          hanldeChange(e, flashcard.id);
                        }}
                        value={flashcard.question}
                        placeholder="question"
                      />
                    </div>
                    <div className="textarea-box">
                      <p>BACK{"(answer)"}</p>
                      <textarea
                        className="flashcard-answer"
                        name="answer"
                        onChange={(e) => {
                          hanldeChange(e, flashcard.id);
                        }}
                        value={flashcard.answer}
                        placeholder="answer"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          <button className="flashcard-button-add" onClick={handleAddCard}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M12 4c4.411 0 8 3.589 8 8s-3.589 8-8 8s-8-3.589-8-8s3.589-8 8-8m0-2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10S17.523 2 12 2m5 9h-4V7h-2v4H7v2h4v4h2v-4h4z"
              />
            </svg>
            <p>add card</p>
          </button>
        </section>
      </div>
    </section>
  );
}
