
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import { ROUTE } from "./constants";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTE.LOGIN} element={<Login />} />
        <Route path={ROUTE.REGISTER} element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
