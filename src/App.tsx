import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import DiscographyPage from "./Discography";
import ProfilePage from "./ProfilePage";

function App() {
  return (
    <BrowserRouter>
      <div className="font-serif"> 
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/discography" element={<DiscographyPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
