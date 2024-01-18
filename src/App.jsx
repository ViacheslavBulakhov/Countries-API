import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import HomePage from "./pages/HomePage";
import Details from "./pages/Details";
import NotFound from "./pages/NotFound";
import { useState } from "react";

import { useStore } from "./zustand/store";
import { useShallow } from "zustand/react/shallow";

export function BearCounter() {
  const bears = useStore(useShallow((state) => state.bears));
  console.log("render");
  return <h1>{bears} around here...</h1>;
}

function App() {
  const [countries, setCountries] = useState([]);

  return (
    <>
      <Header />
      <Main>
        <Routes>
          <Route
            index
            element={
              <HomePage countries={countries} setCountries={setCountries} />
            }
          />
          <Route path="country/:name" element={<Details />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Main>
    </>
  );
}

export default App;
