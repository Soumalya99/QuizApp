import { BugPlayIcon, LucideTrophy } from "lucide-react"

interface GameOverProp{
  reset: () => void;
  score: number;
  totalQuestions: number;
}

const GameOver = ({reset, score, totalQuestions}: GameOverProp) => {
  const correctPercentage = Math.round((score / totalQuestions) * 100);
  return (
    <div className="flex flex-col items-center justify-center h-full ">
      <LucideTrophy className="w-16 h-16 text-green-700 mb-4" />
      <h1 className="text-2xl font-semibold italic text-gray-800 mb-2">Game Over!</h1>
      <p className="text-blue-800 mb-8 text-lg font-semibold">Scored : {score} / {totalQuestions}</p>
      <div className="mb-6">
        <p className="text-black text-md text-center mb-4 italic font-medium">Correct Answers: {correctPercentage}%</p>
      <p className="text-purple-700 text-xl italic font-medium">Thank you for playing !</p>
      </div>
      <button
      onClick={reset}
      className="bg-blue-600 text-white px-4 py-2 flex items-center rounded-2xl hover:bg-green-700 transition duration-300">
        <BugPlayIcon className="w-5 h-5 mr-2" />
        Play Again
      </button>
    </div>
  )
}

export default GameOver