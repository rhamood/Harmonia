import NavbarComponent from "./NavbarComponent";
import { useState } from "react";

interface Question {
    question: string;
    options: string[];
    answer: string;
}

const questions: Question[] = [
    {
        question: "What year did Lana Del Rey release her breakthrough major-label debut, Born to Die?",
        options: ["2010", "2012", "2014", "2016"],
        answer: "2012"
    },
    {
        question: "Which Taylor Swift album is the song \"Anti-Hero\" the lead single for?",
        options: ["Lover", "Folklore", "Evermore", "Midnights"],
        answer: "Midnights"
    },
    {
        question: "Which Taylor Swift album features the hit single \"Shake It Off\"?",
        options: ["Red", "1989", "Reputation", "Speak Now"],
        answer: "1989"
    },
    {
        question: "David Bowie's 28th and final studio album, released on his 69th birthday in 2016, is titled what?",
        options: ["Blackstar", "Stardust", "Ziggy Stardust", "Heroes"],
        answer: "Blackstar"
    },
    {
        question: "What is the title of Yebba's debut studio album, released in 2021 as a tribute to her mother?",
        options: ["Dawn", "Dusk", "Sunrise", "Sunset"],
        answer: "Dawn"
    },
    {
        question: "What is the title of Frank Ocean's debut studio album Channel Orange?",
        options: ["2009", "2010", "2011", "2012"],
        answer: "2012"
    },
    {
        question: "In what year did Drake release Grammy winning album, Take Care?",
        options: ["2010", "2011", "2012", "2013"],
        answer: "2011"
    },
    {
        question: "Central Cee's breakout 2022 mixtape, is titled what?",
        options: ["17", "20", "23", "26"],
        answer: "23"
    },
    {
        question: "In what year did Doja Cat release Planet Her",
        options: ["2020", "2021", "2022", "2023"],
        answer: "2021"
    },
    {
        question: "In what year did Billie Ellish release her debut album, When We All Fall Asleep, Where Do We Go?",
        options: ["2017", "2018", "2019", "2020"],
        answer: "2019"
    }

]
function GamePage() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [score, setScore] = useState(1);
    // const [finished, setFinished] = useState(false);
    const currentQuestion = questions[currentIndex];

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
        <div className="bg-[#D496BB] h-screen">
            <NavbarComponent />
            <div className="flex flex-col items-center gap-6">
                <h1 className="text-6xl font-bold text-center mt-8 text-white">Game Page</h1>
                <p className="font-bold text-center text-white">Welcome to the Harmonia Gameshow! Here are some album based questions have fun!</p>
                <h2 className="text-white text-2xl"> <strong>Question {currentIndex + 1}:</strong> {currentQuestion.question}</h2>
                <div className="grid grid-cols-2 gap-4">
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