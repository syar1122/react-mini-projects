import { Route, Routes } from "react-router";
import "./App.css";
import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min.js";

import Dog from "./pages/dogs/Dog";
import Home from "./pages/home/Home";
import Quotes from "./pages/quotable/Quotes";
import Todos from "./pages/todos/Todos";
import NavBar from "./components/navbar/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quotes" element={<Quotes />} />
        <Route path="/todos" element={<Todos />} />
        <Route path="/dogs" element={<Dog />} />
      </Routes>
    </div>
  );
}

export default App;
