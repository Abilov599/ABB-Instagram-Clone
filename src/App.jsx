import { Route, Routes } from "react-router-dom";
import { Home, Root, Person, Authentication } from "./pages";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setToken } from "./redux/slice/tokenSlice";

function App() {
  const token = useSelector((state) => state.token.token);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setToken(localStorage.getItem("token") || ""));
  }, [dispatch]);

  return (
    <>
      {!!token ? (
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
