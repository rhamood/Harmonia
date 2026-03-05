import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import DiscographyPage from "./Discography";
import ProfilePage from "./ProfilePage";
import GamePage from "./gamePage";
import LoginPage from "./Account/Login";
import RegisterPage from "./Account/Register";

function App() {
  return (
    <BrowserRouter>
      <div className="font-serif"> 
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/discography" element={<DiscographyPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/game" element={<GamePage />} />
          {/* <Route path="/login" element={<LoginPage />} /> */}
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
