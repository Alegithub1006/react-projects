import { useState } from "react";

export function useTaskForm({ taskInput, setTaskInput }) {
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("");
  const [showModal, isShowmodal] = useState(false);

  const handleChangeInput = (e) => {
    setTitle(e.target.value);
  };
  const handleSetPriority = (e) => {
    setPriority(e.target.value);
  };

  const openModal = () => {
    isShowmodal(!showModal);
  };

  const handleAddTask = (e) => {
    e.preventDefault();
    setTaskInput([...taskInput, { title, priority, completed: false }]);
    setTitle("");
    setPriority("");
    isShowmodal(false);
  };
  return {
    title,
    priority,
    showModal,
    handleAddTask,
    handleChangeInput,
    handleSetPriority,
    openModal,
  };
}
