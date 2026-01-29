import { FlashCard } from "./FlashCard";

export function ListCard({ cards }) {
  return (
    <>
      {cards.map((c) => {
        return <FlashCard id={c.id} name={c.name} flashCard={c.flashcards} />;
      })}
    </>
  );
}
