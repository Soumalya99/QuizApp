import { Play } from "lucide-react"

interface onStartProps {
    onStart: () => void;
}

const StartScreen = ({ onStart }: onStartProps) => {
  return (
    <div className='flex flex-col items-center justify-center h-full bg-gradient-to-b from-yellow-300 to-blue-300 rounded-xl shadow-md p-12'>
        <h1 className='text-3xl font-bold italic text-gray-800 mb-6'>Coding Quiz game</h1>
        <p className='text-gray-600 mb-6 text-xl font-semibold'>Test your coding knowledge with this fun quiz game!</p>
        <button className='bg-blue-600 text-white px-4 py-2 rounded-2xl hover:bg-blue-700 transition duration-300 flex items-center justify-center mx-auto'
            onClick={onStart}>
            <Play className="w-5 h-5 mr-2" />
            Start Quiz
        </button>

    </div>
  )
}

export default StartScreen