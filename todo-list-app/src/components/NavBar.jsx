import { ListCheckIcon, Lock, LockKeyholeOpenIcon } from "lucide-react";
import "../styles/navBar.css";
import { useState } from "react";

function useLocalStorage({ task }) {
  const [activeLS, setActiveLS] = useState(false);

  const handleToogleLocalStorage = () => {
    setActiveLS((localStorage) => !localStorage);
  };
  if (activeLS) {
    window.localStorage.setItem("task", JSON.stringify(task));
  }
  return { handleToogleLocalStorage, activeLS };
}

export function NavBar({ task }) {
  const { handleToogleLocalStorage, activeLS } = useLocalStorage({ task });
  return (
    <nav className="nav-bar-container">
      <h1 className="nav-bar-container-title">
        <ListCheckIcon className="nav-bar-container-icon" />
        Todo-List
      </h1>
      <button
        onClick={handleToogleLocalStorage}
        className="nav-bar-container-button">
        {activeLS ? <LockKeyholeOpenIcon /> : <Lock />}
        local storage
      </button>
    </nav>
  );
}
