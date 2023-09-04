import { Route, Routes } from "react-router-dom";
import { Home, Root } from "./pages";
import { useSelector } from "react-redux";
import Authentication from "./components/Authentication";

function App() {
  const user = useSelector((state) => state.user.user);
  return (
    <>
      {user ? (
        <Routes>
          <Route path="/" element={<Root />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      ) : (
        <Authentication />
      )}
    </>
  );
}

export default App;
