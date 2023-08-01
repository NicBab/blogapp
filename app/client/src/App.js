import { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import { Topbar } from "./components/index/index.comp";
import {
  HomePg,
  AboutPg,
  ContactPg,
  Single,
  Write,
  Settings,
  LoginPg,
  RegisterPg,
} from "./pages/index/index.pages";
import { Context } from "./context/Context";


function App() {
  const { user } = useContext(Context);

  return (
    <>
      <Topbar />
      <Routes>
        <Route exact path="/" element={<HomePg />} />
        <Route path="/about" element={<AboutPg />} />
        <Route path="/contact" element={<ContactPg />} />
        <Route path="/write" element={user ? <Write /> : <RegisterPg />} />
        <Route path="/login" element={user ? <HomePg /> : <LoginPg />} />
        <Route path="/register" element={user ? <HomePg /> : <RegisterPg />} />
        <Route
          path="/settings"
          element={user ? <Settings /> : <RegisterPg />}
        />
        <Route path="/post/:postId" element={<Single />} />
      </Routes>
    </>
  );
}

export default App;
