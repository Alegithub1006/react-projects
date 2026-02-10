export function useCounterTask({ task }) {
  const alltask = task.length;

  const completedTAsk = task.reduce(
    (acc, task) => (task.completed ? acc + 1 : acc),
    0,
  );
  const noCompletedTAsk = task.reduce(
    (acc, task) => (!task.completed ? acc + 1 : acc),
    0,
  );
  return {
    alltask,
    completedTAsk,
    noCompletedTAsk,
  };
}
