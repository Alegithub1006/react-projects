import { lazy, Suspense } from "react";
import { Page404 } from "./404";
import HomePage from "./pages/Home";
import { Route } from "./Route";
import { Router } from "./Routes";

const lazyAboutPage = lazy(() => import("./pages/About.jsx"));

function App() {
  const appRoutes = [
    {
      path: "/search/:query",
      Component: ({ routeParams }) => <h1>has buscado {routeParams.query}</h1>,
    },
  ];
  return (
    <div style={{ margin: "auto" }}>
      <Suspense fallback={<div>loading</div>}>
        <Router routes={appRoutes} defaultComponent={Page404}>
          <Route path={"/"} Component={HomePage} />
          <Route path={"/about"} Component={lazyAboutPage} />
        </Router>
      </Suspense>
    </div>
  );
}

export default App;
