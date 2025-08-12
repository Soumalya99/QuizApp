export type GameState = "start" | "playing" | 'finished';
export interface Question {
    question: string;
    options: string[];
    correct: number;
}