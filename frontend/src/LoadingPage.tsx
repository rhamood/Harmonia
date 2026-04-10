//Loading Page - loading screen with a spinning vinyl record and progess bar

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function LoadingPage() {
  const navigate = useNavigate();
  const [progress, setProgress] = useState(0); // tracks loading progress (0-100%)
  const [fadeOut, setFadeOut] = useState(false); // controles fade-out animation before going to home page

  useEffect(() => {
    const interval = setInterval(() => { // gradually increase progress bar
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 2;
      });
    }, 40);

    const fadeTimer = setTimeout(() => setFadeOut(true), 2200); // fadeout animation
    const navTimer = setTimeout(() => navigate("/home"), 2800); // navigate to home page after loading is complete

    //clean up timers 
    return () => {
      clearInterval(interval);
      clearTimeout(fadeTimer);
      clearTimeout(navTimer);
    };
  }, [navigate]);

  return (
    <div
      className="min-h-screen bg-[#D496BB] flex flex-col items-center justify-center relative overflow-hidden transition-opacity duration-700"
      style={{ opacity: fadeOut ? 0 : 1 }}
    >
      {/* Background blobs — same as Auth.tsx */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-pink-300 rounded-full opacity-30 blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-200 rounded-full opacity-20 blur-3xl translate-x-1/3 translate-y-1/3 pointer-events-none" />

      {/* Frosted glass card — same as Auth.tsx */}
      <div className="bg-white/30 backdrop-blur-md border border-white/50 rounded-3xl shadow-2xl px-14 py-12 flex flex-col items-center gap-6 w-full max-w-sm">
        {/* Spinning vinyl record */}
        <div
          className="w-24 h-24 rounded-full bg-gradient-to-br from-pink-800 to-pink-400 flex items-center justify-center shadow-xl"
          style={{ animation: "spin 1.8s linear infinite" }}
        >
          <div className="w-8 h-8 rounded-full bg-white/80 flex items-center justify-center">
            <div className="w-3 h-3 rounded-full bg-pink-400" />
          </div>
        </div>

        <div className="text-center">
          <h1 className="text-4xl font-bold text-white drop-shadow-md tracking-tight">Harmonia</h1>
          <p className="text-white/80 mt-2 text-sm tracking-wide">Loading your music diary…</p>
        </div>

        {/* Progress bar */}
        <div className="w-full bg-white/20 rounded-full h-2.5 overflow-hidden">
          <div
            className="h-full bg-white rounded-full transition-all duration-75"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="text-white/60 text-xs tracking-widest">{progress}%</p>
      </div>
    </div>
  );
}

export default LoadingPage;
