import { useState } from "react";

export function ModalCards({ cards }) {
  const [showModal, setShowModal] = useState(true);
  const [showAnswer, setShowAnswer] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const card = cards[currentIndex];
  console.log(currentIndex, cards.length - 1);

  const handleModal = () => {
    setShowModal(!showModal);
  };
  const handleShowAnswer = () => {
    setShowAnswer(!showAnswer);
  };
  const handleNext = () => {
    if (currentIndex < card.length - 1) return;
    setCurrentIndex(currentIndex + 1);
  };
  const handlePrev = () => {
    if (currentIndex > 0) return;
    setCurrentIndex(currentIndex - 1);
  };

  return (
    <>
      {showModal && (
        <>
          <button onClick={handleModal}>x</button>
          <section key={card.id}>
            <div>{card.question}</div>
            <button onClick={handleShowAnswer}>
              {showAnswer ? "hidde" : "show"} answer
            </button>
            {showAnswer && <div>{card.answer}</div>}
          </section>
          <button disabled={currentIndex <= card.length} onClick={handleNext}>
            next
          </button>
          <button disabled={currentIndex === 0} onClick={handlePrev}>
            prev
          </button>
        </>
      )}
    </>
  );
}
