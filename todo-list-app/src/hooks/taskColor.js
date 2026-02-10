export function useColorTask({ priority }) {
  const rootStyles = getComputedStyle(document.documentElement);
  const success = rootStyles.getPropertyValue("--success-color").trim();
  const medium = rootStyles.getPropertyValue("--medium-color").trim();
  const hard = rootStyles.getPropertyValue("--hard-color").trim();

  let color = "#222";
  if (priority === "low") {
    color = success;
  } else if (priority === "mid") {
    color = medium;
  } else if (priority === "max") {
    color = hard;
  }
  return { color };
}
