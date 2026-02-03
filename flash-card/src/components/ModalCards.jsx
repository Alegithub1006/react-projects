import { useState } from "react";
import { ProgressBar } from "./ProgressBar";
import "../styles/modal.css";

export function ModalCards({ cards }) {
  const [showAnswer, setShowAnswer] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const card = cards[currentIndex];
  const MAX_QUESTION = cards.length - 1;
  console.log(
    "indice de las flashcards: " + currentIndex,
    "tamano de el array de flascard: " + cards.length,
    card,
  );

  const handleShowAnswer = () => {
    setShowAnswer(!showAnswer);
  };
  const handleRetry = () => {
    setCurrentIndex(0);
  };
  const handleNext = () => {
    if (currentIndex === MAX_QUESTION) return;
    setCurrentIndex(currentIndex + 1);
  };
  const handlePrev = () => {
    if (currentIndex < 0) return;
    setCurrentIndex(currentIndex - 1);
  };

  return (
    <>
      <section className="modal" key={card.id}>
        <div className="modal-question-stat">
          <span className="modal-question-bar">
            question {currentIndex} of {MAX_QUESTION}
          </span>
          <span className="modal-question-bar">
            {currentIndex * 10}% complete
          </span>
        </div>

        <ProgressBar value={currentIndex} max={MAX_QUESTION} />

        <div className="question-box">
          <h4 className="question-box-title">question</h4>
          <div className="question">{card.question}</div>

          {showAnswer && <div className="answer">{card.answer}</div>}
        </div>
      </section>
      <button className="question-show-button" onClick={handleShowAnswer}>
        {showAnswer ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M11.83 9L15 12.16V12a3 3 0 0 0-3-3zm-4.3.8l1.55 1.55c-.05.21-.08.42-.08.65a3 3 0 0 0 3 3c.22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53a5 5 0 0 1-5-5c0-.79.2-1.53.53-2.2M2 4.27l2.28 2.28l.45.45C3.08 8.3 1.78 10 1 12c1.73 4.39 6 7.5 11 7.5c1.55 0 3.03-.3 4.38-.84l.43.42L19.73 22L21 20.73L3.27 3M12 7a5 5 0 0 1 5 5c0 .64-.13 1.26-.36 1.82l2.93 2.93c1.5-1.25 2.7-2.89 3.43-4.75c-1.73-4.39-6-7.5-11-7.5c-1.4 0-2.74.25-4 .7l2.17 2.15C10.74 7.13 11.35 7 12 7"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M12 9a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3m0 8a5 5 0 0 1-5-5a5 5 0 0 1 5-5a5 5 0 0 1 5 5a5 5 0 0 1-5 5m0-12.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5"
            />
          </svg>
        )}
        {showAnswer ? "hidde" : "show"} answer
      </button>

      <div className="button-container">
        <button
          className="button-select"
          disabled={currentIndex === 0}
          onClick={handlePrev}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 20 20">
            <path
              fill="currentColor"
              d="m2 10l8 8l1.4-1.4L5.8 11H18V9H5.8l5.6-5.6L10 2z"
            />
          </svg>
          Previus
        </button>
        {currentIndex === MAX_QUESTION ? (
          <button className="button-select" onClick={handleRetry}>
            retry
          </button>
        ) : (
          <button
            className="button-select"
            disabled={currentIndex <= card.length}
            onClick={handleNext}>
            Next
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24">
              <path
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                d="M2 12h20m-9-9l9 9l-9 9"
              />
            </svg>
          </button>
        )}
      </div>
    </>
  );
}
