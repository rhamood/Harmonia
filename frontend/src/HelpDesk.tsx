import { useState, useEffect } from 'react';
import NavbarComponent from "./NavbarComponent";
import { io } from "socket.io-client";
// import { set } from 'mongoose';
// import { send } from 'vite';
const socket = io("http://localhost:8080");


function HelpDesk() {
  const [question, setQuestion] = useState("");
  const [search, setSearch] = useState<string[]>([]);

  useEffect(() => {
    socket.on("answer", (answer) => {
      setSearch(prevQuestions => [...prevQuestions, "helpdesk: " + answer]);
    });
    return () => {
      socket.off("answer");
    };
  }, []);

  const sendQuestion = () => {
    if (!question.trim()) return; // Don't send empty questions
    socket.emit("question", question);
    setSearch(prevQuestions => [...prevQuestions, "user: " + question]);
    setQuestion(""); // Clear the input after sending
  }

  return (
    <>
      <div className='bg-[#D496BB] min-h-screen'>
        <NavbarComponent />
        <h1 className='text-6xl font-bold text-center mt-8 text-white'> Help Desk </h1>
        <p className='text-desc font-bold text-center mt-8 text-white'> For your non-frequently asked questions. </p>
        <br></br>
        <div className='px-4 sm:px-8 md:px-16 lg:px-32 text-white'>
          <ul className='space-y-4 mb-6'>
            {search.map((item, index) => (
              <li key={index} className="bg-gray-300 text-black p-4 rounded">
                {item}
              </li>
            ))}
          </ul>
          <input 
            type="text" 
            placeholder="Ask a question..." 
            className="w-full p-4 rounded mb-6 text-black border" 
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          />
          <button 
          onClick={sendQuestion}
          className="w-full bg-gray-200 hover:bg-gray-300 text-black font-bold py-4 rounded mb-6">Ask</button>

        </div>
      </div>
    </>
  )
}
export default HelpDesk;