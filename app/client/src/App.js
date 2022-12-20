import { RegisterPg, Home, LoginPg } from "./pages/index/index.pages";
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home />}></Route>
        <Route path="/register" element={<RegisterPg />}></Route> 
        <Route path="/login" element={<LoginPg />}></Route> 
      </Routes>
    </div>
  );
}

export default App;
