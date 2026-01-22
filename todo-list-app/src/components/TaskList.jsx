import { Task } from "./Task";
import { TaskForm } from "./TaskForm";
import "../styles/tasklist.css";

export function TaskList({ task, setTask, onToogle, onDelete }) {
  // const filteredTaskList= task.filter(prevTask=>{
  //   prevTask
  // })
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
