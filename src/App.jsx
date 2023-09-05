import { Route, Routes } from "react-router-dom";
import { Home, Root, Person, Authentication } from "./pages";
import { useEffect, useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    localStorage.getItem("loggedIn") ? setIsLoggedIn(true) : null;
  }, []);

  console.log("isLoggedIn", isLoggedIn);

  return (
    <>
      {isLoggedIn ? (
        <Routes>
          <Route path="/" element={<Root />}>
            <Route index element={<Home />} />
            <Route path="/person" element={<Person />} />
          </Route>
        </Routes>
      ) : (
        <Authentication />
      )}
    </>
  );
}

export default App;
