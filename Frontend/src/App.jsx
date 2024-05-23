import Header from "./components/Header";
import style from "./App.module.scss";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className={`${style.main}`}>
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
