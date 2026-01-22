import { useState } from "react";
import "./App.css";
import { Task } from "./components/Task";
import { TaskForm } from "./components/TaskForm";
import { TaskList } from "./components/TaskList";
import { CounterTask } from "./components/CounterTask";
import { NavBar } from "./components/NavBar";

function App() {
  const [task, setTask] = useState([]);

  const onToogle = (title) => {
    setTask((prevTask) =>
      prevTask.map((t) =>
        t.title === title ? { ...t, completed: !t.completed } : t,
      ),
    );
  };

  const handleDeleteTask = (title) => {
    setTask(task.filter((t) => t.title !== title));
  };
  return (
    <main>
      <NavBar />
      <CounterTask task={task} />
      <section className="section-task">
        {task.length > 0 && (
          <TaskForm task={task} taskInput={task} setTaskInput={setTask} />
        )}
        <TaskList
          task={task}
          setTask={setTask}
          onToogle={onToogle}
          onDelete={handleDeleteTask}
        />
      </section>
    </main>
  );
}

export default App;
