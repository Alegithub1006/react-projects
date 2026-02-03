import { FlashCard } from "./FlashCard";
import "../styles/ListCard.css";

import { AddCard } from "./AddCard";

export function ListCard({ cards, setCards }) {
  return (
    <div className="cards-container">
      <ul className="cards-list">
        {cards.map((c) => {
          return (
            <li className="card-item" key={c.id}>
              <FlashCard id={c.id} name={c.name} flashCard={c.flashcards} />
            </li>
          );
        })}
        <li className="card-item">
          <AddCard cards={cards} setCards={setCards} />
        </li>
      </ul>
    </div>
  );
}
