import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import AdminPage from "./pages/AdminPage";
import ExternDataPage from "./pages/ExternDataPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import UserPage from "./pages/UserPage";

function App() {

  return (
      <div id="wrapper" className="App">
        <BrowserRouter>
          <Header />

            <Routes>

            <Route path="/" element={<HomePage />} />
            <Route path="/userpage" element={<UserPage />} />
            <Route path="/adminpage" element={<AdminPage />} />
            <Route path="/loginpage" element={<LoginPage />} />
            <Route path="/externdatapage" element={<ExternDataPage />} />

            </Routes>
        </BrowserRouter>
      </div>
  )
}

export default App