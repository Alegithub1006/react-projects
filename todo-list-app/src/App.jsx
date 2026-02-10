import "./App.css";
import { TaskForm } from "./components/TaskForm";
import { TaskList } from "./components/TaskList";
import { CounterTask } from "./components/CounterTask";
import { NavBar } from "./components/NavBar";
import { useTask } from "./hooks/task";

function App() {
  const { task, setTask, onToogle, handleDeleteTask } = useTask();
  return (
    <main>
      <NavBar task={task} />
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
