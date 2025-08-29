export type QuestionType = 'MCQ' | 'T/F';

export type Question = {
  id: string;
  type: QuestionType;
  statement: string;
  choices: string[];
  correctAnswer: string;
  explanation: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  reference: string;
  keyConcepts: string[];
  msc: string;
};

export type Chapter = {
  id: number;
  title: string;
  questions: Question[];
};

export type Score = {
  correct: number;
  total: number;
};

export type Scores = {
  [chapterId: number]: Score;
};
