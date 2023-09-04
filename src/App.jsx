import { Route, Routes } from "react-router-dom";
import { Home, Root, Person } from "./pages";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Root />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="/person" element={<Person/>}></Route>
      </Routes>
    </>
  );
}

export default App;
