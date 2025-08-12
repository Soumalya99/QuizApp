
import GameOver from "./components/GameOver";
import QuestionCard from "./components/QuestionScreen";
import StartScreen from "./components/StartScreen";
import Timer from "./components/Timer";
import { QUESTIONS } from "./data/questions";

import type { GameState } from "./types/types";
import { useState } from 'react'


function App(){
    const [GameState, setGameState] = useState<GameState>("start");
    const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
    const [currentQuestion, setCurrentQuestion] = useState<number>(0);
    const [gameScore, setGameScore] = useState<number>(0);

    const handleStart = () =>{
      setGameState("playing");
      setCurrentQuestion(0);
      setGameScore(0);
    };

    const handleAnswerSelect = (idx: number): void => {
      // Logic to handle answer selection
      setSelectedAnswer(idx);

      const isCorrect = idx === QUESTIONS[currentQuestion].correct;
      isCorrect ? setGameScore(prev => prev + 1) : setGameScore(prev => prev);
      console.log(`Selected answer index: ${idx}`);

      setTimeout(() => {
        if (currentQuestion < QUESTIONS.length - 1) {
        setCurrentQuestion(prev => prev + 1);
        setSelectedAnswer(null); // Reset selected answer for the next question
        }else{
          setGameState("finished");
          setSelectedAnswer(null);
        }
      },1500)
    }

    return (
      <div className="in-h-screen  py-14 flex items-center justify-center lg:px-8 sm:px-6 bg-gray-500 min-h-screen">
        <div className="max-w-md mx-auto bg-gradient-to-b from-yellow-300 to-blue-400 rounded-xl shadow-md overflow-hidden p-12">
          {GameState === "start" && (
            <StartScreen onStart={handleStart} />
          )}
          {GameState === "playing" && (
            <div className="py-8">
              <Timer 
              questionId={currentQuestion}
              />
              <QuestionCard 
              questions={QUESTIONS[currentQuestion]}
              handleAnswer={handleAnswerSelect}
              selectedAnswer={selectedAnswer}
              totalQuestions={QUESTIONS.length}
              currentQuestion={currentQuestion}
              />
              <div className="mt-6 text-center text-gray-800 font-semibold text-lg italic">
                Score : {gameScore} / {QUESTIONS.length}

              </div>
            </div>
          )}
          {GameState === "finished" && (
            <div className="flex flex-col items-center justify-center h-full py-10">
              <GameOver 
              reset={handleStart}
              score={gameScore}
              totalQuestions={QUESTIONS.length}
              />
            </div>
          )}
        </div>
      </div>
    )
}
export default App