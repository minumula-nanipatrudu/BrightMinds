import "./App.css";
import LoginForm from "./Components/Login-form/LoginForm";
import Signup from "./Components/Sign-up-form/Signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Signup />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/LoginForm" element={<LoginForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
