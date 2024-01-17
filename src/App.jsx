import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import HomePage from "./pages/HomePage";
import Details from "./pages/Details";
import NotFound from "./pages/NotFound";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCountries } from "./redux/operation";
import { fetchAll } from "./redux/Selectors";

function App() {
  const countriesData = useSelector(fetchAll);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);

  return (
    <>
      <Header />
      <Main>
        <Routes>
          <Route index element={<HomePage countries={countriesData} />} />
          <Route path="country/:name" element={<Details />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Main>
    </>
  );
}

export default App;
