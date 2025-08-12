import { TimerIcon } from 'lucide-react'
import { useEffect, useState } from 'react';

interface TimerProp {
    duration?: number; // Duration in seconds
    questionId: number; // Optional question ID, if needed for tracking
}
const Timer = ({duration = 30, questionId}: TimerProp) => {
    const [timerLeft, setTimerLeft] = useState<number>(duration); // Set initial timer value
    let timer: number;
    useEffect(() => {
        setTimerLeft(duration); // Reset timer to 30 seconds when component mounts
        timer = setInterval(() => {
            setTimerLeft(prev => (prev > 0 ? prev - 1 : 0));
        }, 1000); // Update timer every second
        return () => clearInterval(timer); // Clear interval on component unmount
    }, [duration, questionId]);

    return (
        <div className='flex items-center space-x-3 text-2xl font-bold text-gray-800 mb-6'>
            <TimerIcon className='w-6 h-6 text-blue-600' />
            <span>{timerLeft} 's</span>
        </div>
    )
}

export default Timer