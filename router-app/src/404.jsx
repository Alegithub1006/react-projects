import { Link } from "./Link";

export function Page404() {
  return (
    <>
      <div>
        <h1>This is NOT fine</h1>
        <img src="./assets/ThisIsFine.gif" alt="gif the perro this is Fine" />
      </div>
      <Link to={"/"}>volver a la home</Link>
    </>
  );
}
