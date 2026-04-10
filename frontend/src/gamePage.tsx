import NavbarComponent from "./NavbarComponent";
import { useEffect, useState } from "react";

interface Question {
    question: string;
    options: string[];
    answer: string;
}

function GamePage() {
    // const [currentIndex, setCurrentIndex] = useState(0);
    // const [score, setScore] = useState(1);
    // // const [finished, setFinished] = useState(false);
    // const currentQuestion = questions[currentIndex];
    const [questions, setQuestions] = useState<Question[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [score, setScore] = useState(0);

    useEffect(() => {
    async function loadQuestions() {
        try {
            const res = await fetch("http://localhost:8080/api/game");
            console.log("Response status:", res.status);
            const data = await res.json();
            console.log("Questions data:", data);
            setQuestions(data);
        } catch (err) {
            console.error("Error loading questions:", err);
        }
    }
    loadQuestions();
}, []);

    const currentQuestion = questions[currentIndex];
    if (questions.length === 0 || !currentQuestion) {
        return (
            <div className="bg-[#D496BB] min-h-screen">
                <NavbarComponent />
                <div className="flex flex-col items-center gap-6 px-4 sm:px-8 py-6">
                    <h1 className="text-6xl font-bold text-center mt-8 text-white">Game Page</h1>
                    <p className="text-white text-xl">Loading questions...</p>
                </div>
            </div>
        );
    }

    const handleAnswer = (index: number) => {
        const isCorrect = currentQuestion.options[index] === currentQuestion.answer;
        const newScore = isCorrect ? score + 1 : score;

        if (isCorrect) {
            setScore(newScore);
        }

        if (currentIndex < questions.length - 1) {
            setCurrentIndex(currentIndex + 1);
        } else {
            alert(`Your score is ${newScore} out of ${questions.length}`);
            setCurrentIndex(0);
            setScore(0);
        }
    };

    return (
        <div className="bg-[#D496BB] min-h-screen">
            <NavbarComponent />
            <div className="flex flex-col items-center gap-6 px-4 sm:px-8 py-6">
                {/* title */}
                <h1 className="text-6xl font-bold text-center mt-8 text-white">Game Page</h1>
                <p className="font-bold text-center text-white">Welcome to the Harmonia Gameshow! Here are some album based questions have fun!</p>
                {/* questions */}
                <h2 className="text-white text-2xl"> <strong>Question {currentIndex + 1}:</strong> {currentQuestion.question}</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    {currentQuestion.options.map((option, index) => (
                        <button
                            key={index}
                            onClick={() => handleAnswer(index)}
                            className="px-44 py-20 bg-gray-200 hover:bg-gray-300 rounded text-4xl font-bold"
                        >
                            {option}
                        </button>
                    ))}
                </div>
                <p className="text-white text-lg">
                    Question {currentIndex + 1} / {questions.length}
                </p>
            </div>
        </div>
    );
}
export default GamePage;