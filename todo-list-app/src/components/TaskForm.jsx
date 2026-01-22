import { useState } from "react";
import "../styles/TaskForm.css";
import { ListTodo, SendHorizonal } from "lucide-react";

export function TaskForm({ taskInput, setTaskInput, task }) {
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

  return (
    <>
      {showModal ? (
        <div className="container-form">
          <form className="container-form-modal" onSubmit={handleAddTask}>
            <label className="container-form-label">
              agrega un a titulo a la tarea
              <input
                className="container-form-input"
                type="text"
                value={title}
                onChange={handleChangeInput}
              />
            </label>
            <label>
              selecciona la categoria
              <select value={priority} onChange={handleSetPriority}>
                <option value={""}> </option>
                <option value={"low"}>low</option>
                <option value={"mid"}>mid</option>
                <option value={"max"}>max</option>
              </select>
            </label>
            <div className="container-form-buttons">
              <button className="container-form-button" onClick={openModal}>
                cancelar
              </button>
              <button className="container-form-button" type="submit">
                agregar tarea
              </button>
            </div>
          </form>
        </div>
      ) : (
        <section className="container-form-box">
          <div className="container-form-image">
            <ListTodo className="container-form-img-icon" />
          </div>
          {task.length === 0 && (
            <div className="container-form-body">
              <h2 className="container-form-body-title">
                no hay tareas pendientes
              </h2>
              <p className="container-form-body-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatem, perferendis eveniet consequuntur voluptatum ex
                molestias
              </p>
            </div>
          )}
          <button className="container-form-button" onClick={openModal}>
            <SendHorizonal />
            agregar tarea
          </button>
        </section>
      )}
    </>
  );
}
