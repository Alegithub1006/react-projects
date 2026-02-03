export function Modal({ openModal = false, children, width }) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        zIndex: 10,
        backgroundColor: "var(--surface-color)",
        position: "absolute",
        top: 0,
        left: 0,
      }}>
      {openModal && (
        <div style={{ width: `${width}`, margin: "auto" }}>{children}</div>
      )}
    </div>
  );
}
