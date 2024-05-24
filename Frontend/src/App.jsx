import Header from "./components/Header";
import style from "./App.module.scss";
import { Outlet } from "react-router-dom";
import UserProvider from "./components/Providers/UserProvider";

function App() {
  return (
    <div className={`${style.main}`}>
      <UserProvider>
        <Header />
        <Outlet />
      </UserProvider>
    </div>
  );
}

export default App;
