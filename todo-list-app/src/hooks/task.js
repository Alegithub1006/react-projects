import { useState } from "react";

export function useTask() {
  const [task, setTask] = useState(() => {
    const localStorageTask = window.localStorage.getItem("task");
    return localStorageTask ? JSON.parse(localStorageTask) : [];
  });

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
  return {
    task,
    setTask,
    onToogle,
    handleDeleteTask,
  };
}
