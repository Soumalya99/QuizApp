import { BadgeXIcon, CheckSquareIcon } from "lucide-react";
import type { Question } from "../types/types"


interface QuestionCardProps {
    questions: Question;
    handleAnswer: (idx: number) => void;
    selectedAnswer: number | null;
    totalQuestions: number;
    currentQuestion: number;
}
export default function QuestionCard (
  {
    questions,
    handleAnswer, 
    selectedAnswer,
    totalQuestions,
    currentQuestion
  } : QuestionCardProps) {

  const getButtonClass = (idx: number): string => {
    if(selectedAnswer === null) return "bg-gray-200";
    if(idx === questions.correct) return "bg-green-200 hover:bg-green-300 border border-green-500";
    if(selectedAnswer === idx) return "bg-red-200 hover:bg-red-400 border border-red-500";
    return "opacity-60";
  };

  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-800 mb-6">
        Question {currentQuestion + 1} out of {totalQuestions}
      </h2>
      <p className="text-gray-800 font-medium text-lg mb-8">{questions.question}</p>
      <div className="space-y-5">
        {questions.options.map((option, idx) => (
          <button 
            /**JavaScript's short-circuit evaluation: 
             * If selectedAnswer === null is true, then handleAnswer(idx) is called.
             * 
             * If selectedAnswer !== null (i.e., an answer has already been selected),
             *  then handleAnswer(idx) is not called.
            */
            onClick={() => selectedAnswer === null && handleAnswer(idx)}
            key={idx}
            className={`block w-full text-left p-3 rounded-md outline-none 
            transition-all duration-300 ${getButtonClass(idx)}`}
          >
            <div className="flex items-center justify-between">
              <span className="italic">{option}</span>
              {selectedAnswer !== null && idx === questions.correct && (
                <CheckSquareIcon className="w-5 h-5 text-green-700" />
              )}
              {selectedAnswer !== null && idx !== questions.correct && (
                <BadgeXIcon className="w-5 h-5 text-red-700" />
              )}
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}

