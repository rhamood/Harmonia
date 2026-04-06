import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import DiscographyPage from "./Discography";
import ProfilePage from "./ProfilePage";
import GamePage from "./gamePage";
import AuthPage from "./Auth";
import FAQPage from "./FAQ";

function App() {
  return (
    <BrowserRouter>
      <div className="font-serif"> 
        <Routes>
          <Route path="/" element={<AuthPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/discography" element={<DiscographyPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/game" element={<GamePage />} />
          {/* <Route path="/login" element={<LoginPage />} /> */}
          <Route path="/home" element={<HomePage />} />
          
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
