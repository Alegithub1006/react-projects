import { TaskForm } from "./TaskForm";
import "../styles/tasklist.css";
import { useTaskList } from "../hooks/taskList";

export function TaskList({ task, setTask, onToogle, onDelete }) {
  const { tasklist } = useTaskList({ task, onDelete, onToogle });
  return (
    <div className="container">
      <ul className="container-list">
        {tasklist.length === 0 ? (
          <TaskForm task={task} taskInput={task} setTaskInput={setTask} />
        ) : (
          tasklist
        )}
      </ul>
    </div>
  );
}
