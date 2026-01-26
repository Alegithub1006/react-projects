import "../styles/EmptyList.css";
import { FormProduct } from "./FormProduct";

export function EmptyList({ setListProduct }) {
  return (
    <div className="empty-container">
      <div className="empty-container-svg">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="64"
          height="64"
          viewBox="0 0 24 24">
          <path
            fill="#48e"
            fillRule="evenodd"
            d="M7.5 7v-.5a4.5 4.5 0 0 1 9 0V7H19c.552 0 1 .449 1 1.007v12.001c0 1.1-.895 1.992-1.994 1.992H5.994A1.994 1.994 0 0 1 4 20.008v-12C4 7.45 4.445 7 5 7zM9 7h6v-.5a3 3 0 0 0-6 0zM7.5 7v4H9V7zM15 7v4h1.5V7z"
          />
        </svg>
      </div>
      <div className="empty-container-body">
        <h2 className="empty-container-body-title">
          no hay productos para mostrar
        </h2>
        <p className="empty-container-body-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
          dolore sequi facere architecto? Ducimus at molestias.
        </p>
      </div>
      <FormProduct setProduct={setListProduct} />
    </div>
  );
}
