
import {
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import { ROUTE } from "./constants";
import Home from "./Pages/Home"

function App() {
  return (
      <Routes>
        <Route path={ROUTE.HOME} element={<Home />} />
        <Route path={ROUTE.LOGIN} element={<Login />} />
        <Route path={ROUTE.REGISTER} element={<Register />} />
      </Routes>
  );
}

export default App;
