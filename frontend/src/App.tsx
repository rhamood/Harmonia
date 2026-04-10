// Main App - main app component that sets up routing for the application

// imports routing components from react-router and all page components 
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import DiscographyPage from "./Discography";
import ProfilePage from "./ProfilePage";
import GamePage from "./gamePage";
import AuthPage from "./Auth";
import FAQPage from "./FAQ";
import HelpDesk from "./HelpDesk";
import LoadingPage from "./LoadingPage";

//main app component that sets up routing for between all pages in the application
function App() {
  return (
    <BrowserRouter>
      <div className="font-serif"> 
        <Routes>
          <Route path="/" element={<AuthPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/helpdesk" element={<HelpDesk />} />
          <Route path="/discography" element={<DiscographyPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/game" element={<GamePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/loading" element={<LoadingPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
