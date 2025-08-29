import type { Chapter } from "@/lib/types";
import { QuestionCard } from "./question-card";

interface QuestionViewProps {
  chapter: Chapter;
  onAnswer: (isCorrect: boolean) => void;
}

export function QuestionView({ chapter, onAnswer }: QuestionViewProps) {
  return (
    <div className="p-4 md:p-8 space-y-8">
      <div className="space-y-2">
        <h2 className="font-headline text-3xl font-bold tracking-tight">
          {chapter.title}
        </h2>
        <p className="text-muted-foreground">
          {chapter.questions.length > 0
            ? `This chapter has ${chapter.questions.length} question(s). Answer them to test your knowledge.`
            : "This chapter has no questions yet."}
        </p>
      </div>

      {chapter.questions.length > 0 && (
        <div className="space-y-6">
          {chapter.questions.map((question, index) => (
            <QuestionCard
              key={question.id}
              question={question}
              questionNumber={index + 1}
              onAnswer={onAnswer}
            />
          ))}
        </div>
      )}
    </div>
  );
}
