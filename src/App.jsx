import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import ShowPage from "./pages/ShowPage";
import SignUpPage from "./pages/SignUpPage";
import HomePage from "./pages/HomePage";
import MyShowsPage from "./pages/MyShowsPage"
import LoginPage from "./pages/LoginPage";
import UserPage from "./pages/UserPage";

function App() {

  return (
      <div id="wrapper" className="App">
        <BrowserRouter>
          <Header />

            <Routes>

            <Route path="/" element={<HomePage />} />
            <Route path="/myshows" element={<MyShowsPage />} />
            <Route path="/shows" element={<ShowPage />} />
            <Route path="/homepage" element={<HomePage />} />
            <Route path="/loginpage" element={<HomePage />} />
            <Route path="/signuppage" element={<SignUpPage />} />

            </Routes>
        </BrowserRouter>
      </div>
  )
}

export default App