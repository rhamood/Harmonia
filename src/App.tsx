import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import DiscographyPage from "./Discography";
import ProfilePage from "./ProfilePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/discography" element={<DiscographyPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
