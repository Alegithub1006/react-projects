import { FlashCard } from "./FlashCard";

export function ListCard({ cards }) {
  return (
    <>
      {cards.map((c) => {
        return (
          <div key={c.id}>
            <h2>{c.name}</h2>

            <div>
              
            </div>
          </div>
        );
      })}
    </>
  );
}
