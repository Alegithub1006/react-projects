import { ListCheckIcon } from "lucide-react";
import "../styles/navBar.css";

export function NavBar() {
  return (
    <nav className="nav-bar-container">
      <h1 className="nav-bar-container-title">
        <ListCheckIcon className="nav-bar-container-icon" />
        Todo-List
      </h1>
      <button className="nav-bar-container-button">local storage</button>
    </nav>
  );
}
