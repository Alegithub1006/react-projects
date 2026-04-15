import { useEffect, useMemo, useRef, useState } from "react";
import "./App.css";
import { results } from "../src/mocks/user.json";
import { UserList } from "./components/UsersList";

function App() {
  const [user, setUser] = useState(results);
  const [showColors, setShowColors] = useState(false);
  const [sortByCountry, setSortByCountry] = useState(false);
  const [sortBy, setSortBy] = useState({
    isSorted: false,
    sortValue: "",
  });
  const [filterCountry, setFilterCountry] = useState(null);
  const originalUser = useRef(results);

  const toogleColors = () => {
    setShowColors(!showColors);
  };
  const toogleSortByCountry = () => {
    setSortByCountry(!sortByCountry);
  };

  const handleSort = (value) => {
    setSortBy({
      isSorted: !sortBy.isSorted,
      sortValue: value,
    });
    console.log(sortBy);
  };

  const handleDelete = (id) => {
    const filteredUser = user.filter((u) => {
      return u.login.uuid !== id;
    });
    setUser(filteredUser);
  };
  const handleReset = () => {
    setUser(originalUser.current);
  };

  const filteredUser = useMemo(() => {
    return typeof filterCountry === "string" && filterCountry.length > 0
      ? user.filter((users) => {
          return users.location.country
            .toLowerCase()
            .includes(filterCountry.toLowerCase());
        })
      : user;
  }, [user, filterCountry]);

  const sortedUser = useMemo(() => {
    return sortByCountry
      ? filteredUser.toSorted((a, b) => {
          return a.location.country.localeCompare(b.location.country);
        })
      : filteredUser;
  }, [filteredUser, sortByCountry]);

  const sortedUserByValue = useMemo(() => {
    let sortedUsersByValue = [];
    //sorted by name
    sortBy.isSorted
      ? sortBy.sortValue === "name"
        ? (sortedUsersByValue = sortedUser.toSorted((a, b) => {
            return a.name.first.localeCompare(b.name.first);
          }))
        : sortBy.sortValue === "last-name"
          ? (sortedUsersByValue = sortedUser.toSorted((a, b) => {
              return a.name.last.localeCompare(b.name.last);
            }))
          : sortBy.sortValue === "country"
            ? (sortedUsersByValue = sortedUser.toSorted((a, b) => {
                return a.location.country.localeCompare(b.location.country);
              }))
            : (sortedUsersByValue = sortedUser)
      : (sortedUsersByValue = sortedUser);

    return sortedUsersByValue;
  }, [sortedUser, sortBy]);

  useEffect(() => {
    fetch("https://randomuser.me/?result=100")
      .then((res) => res.json())
      .then((res) => {
        setUser(res.results);
        originalUser.current = res.results;
      })
      .catch((e) => {
        throw new Error("error to fetch data from the api " + e.message);
      });
  }, []);

  return (
    <>
      <h1>prueba tecnica</h1>
      <button onClick={toogleColors}>colorear filas</button>
      <button onClick={toogleSortByCountry}>
        {sortByCountry ? "Desordenar por pais" : "ordenar por pais"}
      </button>
      <button onClick={handleReset}>restablecer lista</button>
      <input
        type="text"
        value={filterCountry}
        onChange={(e) => {
          setFilterCountry(e.target.value);
        }}
      />
      <UserList
        sortBy={handleSort}
        handleDelete={handleDelete}
        showColors={showColors}
        users={sortedUserByValue}
      />
    </>
  );
}

export default App;
