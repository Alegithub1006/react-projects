import { AlertCircle, CheckCircle2, ListCheck, Timer } from "lucide-react";
import "../styles/CounterTask.css";

export function CounterTask({ task }) {
  const alltask = task.length;

  const completedTAsk = task.reduce(
    (acc, task) => (task.completed ? acc + 1 : acc),
    0,
  );
  const noCompletedTAsk = task.reduce(
    (acc, task) => (!task.completed ? acc + 1 : acc),
    0,
  );

  return (
    <section className="dashborad-container">
      <div className="dashboard-container-box">
        <h2 className="dashboard-container-box-header">
          estaditicas generales de tus tareas
        </h2>
        <div className="box-card">
          <div className="box-card-container">
            <div className="box-cards">
              <div className="box-card-header">
                <p className="box-card-title total">TOTAL TAREAS</p>
                <ListCheck className="box-card-icon total" />
              </div>
              <p className="box-card-task">{alltask}</p>
            </div>
            <div className="box-cards">
              <div className="box-card-header">
                <p className="box-card-title completed">COMPLETADAS</p>
                <CheckCircle2 className="box-card-icon completed" />
              </div>

              <p className="box-card-task">{completedTAsk}</p>
            </div>
            <div className="box-cards">
              <div className="box-card-header">
                <p className="box-card-title pending">PENDIENTES</p>
                <Timer className="box-card-icon pending" />
              </div>

              <p className="box-card-task">{noCompletedTAsk}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="notification-container">
        {noCompletedTAsk >= 5 && (
          <span className="span-pending-task">
            <AlertCircle className="span-pending-task-icon" /> tienes mas de 5
            tareas pendiantes
          </span>
        )}
        {noCompletedTAsk === 0 && completedTAsk >= 1 && (
          <span className="span-pending-task">
            🎉 ¡Has terminado todas tus tareas!
          </span>
        )}
      </div>
    </section>
  );
}
