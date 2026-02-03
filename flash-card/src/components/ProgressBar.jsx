export function ProgressBar({ max, value }) {
  const percentageProgress = Math.min((value / max) * 100, 100);
  return (
    <div
      style={{
        width: "100%",
        height: "10px",
        backgroundColor: "#ddd",
        borderRadius: "8px",
        overflow: "hidden",
      }}>
      <div
        className="progress-fill"
        style={{
          width: `${percentageProgress}%`,
          height: "100%",
          backgroundColor: "var(--primary-color)",
        }}></div>
    </div>
  );
}
