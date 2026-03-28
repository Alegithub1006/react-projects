export function UserList({ users, showColors, handleDelete, sortBy }) {
  return (
    <table>
      <thead>
        <tr>
          <th>foto</th>
          <th
            style={{
              cursor: "pointer",
            }}
            value="nombre"
            onClick={() => {
              sortBy("name");
            }}>
            nombre
          </th>
          <th
            style={{
              cursor: "pointer",
            }}
            value="last-name"
            onClick={() => {
              sortBy("last-name");
            }}>
            apellido
          </th>
          <th
            style={{
              cursor: "pointer",
            }}
            value="country"
            onClick={() => {
              sortBy("country");
            }}>
            pais
          </th>
          <th>acciones</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, index) => {
          const backgroundColor = index % 2 === 0 ? "#333" : "#555";
          const color = showColors ? backgroundColor : "transparent";
          return (
            <tr key={index} style={{ backgroundColor: color }}>
              <td>
                <img src={user.picture.thumbnail} alt={user.name.first} />
              </td>
              <td>{user.name.first}</td>
              <td>{user.name.last}</td>
              <td>{user.location.country}</td>
              <td>
                <button
                  onClick={() => {
                    handleDelete(user.login.uuid);
                  }}>
                  borrar
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
