import { Task } from "../components/Task";

export function useTaskList({ task, onToogle, onDelete }) {
  const tasklist = task.map((t) => {
    return (
      <li className="container-list-item" key={t.title}>
        <Task
          onToggle={onToogle}
          title={t.title}
          priority={t.priority}
          completed={t.completed}
          onDelete={onDelete}
        />
      </li>
    );
  });
  return { tasklist };
}
