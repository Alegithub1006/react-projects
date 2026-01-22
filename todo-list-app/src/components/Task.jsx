import "../../src/App.css";
import "../styles/Task.css";

export function Task({ completed, title, priority, onToggle, onDelete }) {
  const rootStyles = getComputedStyle(document.documentElement);
  const success = rootStyles.getPropertyValue("--success-color").trim();
  const medium = rootStyles.getPropertyValue("--medium-color").trim();
  const hard = rootStyles.getPropertyValue("--hard-color").trim();
  let color = "#222";
  if (priority === "low") {
    color = success;
  } else if (priority === "mid") {
    color = medium;
  } else if (priority === "max") {
    color = hard;
  }

  return (
    <div
      className="task-container"
      style={{
        backgroundColor: `${color}`,
      }}>
      <div className="task-container-body">
        <div></div>
        <input
          required
          id="check"
          value={completed}
          type="checkbox"
          checked={completed}
          onChange={() => {
            onToggle(title);
          }}
        />
        <div className="task-container-main">
          <div className="task-container-header">
            <h2
              className="task-container-title"
              style={{
                textDecoration: `${completed ? "line-through" : "none"}`,
              }}>
              {title}
            </h2>
            <span className="task-container-priority">{priority}</span>
          </div>

          <button
            className="task-container-button"
            onClick={() => {
              onDelete(title);
            }}>
            delete
          </button>
        </div>
      </div>
    </div>
  );
}
