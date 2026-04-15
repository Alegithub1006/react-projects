export function Home() {
  return (
    <>
      <h1>Home</h1>
      <a href="/about">ir a about</a>
    </>
  );
}

export function About() {
  return (
    <>
      <h1>About</h1>
      <a href="/">ir a home</a>
    </>
  );
}

function App() {
  return (
    <>
      <Home />
      <About />
    </>
  );
}

export default App;
