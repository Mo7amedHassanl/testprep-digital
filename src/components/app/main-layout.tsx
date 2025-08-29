"use client";

import type { Chapter, Scores } from "@/lib/types";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { useState } from "react";
import { ChapterNavigation } from "./chapter-navigation";
import { QuestionView } from "./question-view";
import { BookOpen } from "lucide-react";

interface MainLayoutProps {
  chapters: Chapter[];
}

export function MainLayout({ chapters }: MainLayoutProps) {
  const [selectedChapterId, setSelectedChapterId] = useState<number>(chapters[0]?.id || 1);
  const [scores, setScores] = useState<Scores>({});

  const handleSelectChapter = (chapterId: number) => {
    setSelectedChapterId(chapterId);
  };

  const handleAnswer = (chapterId: number, isCorrect: boolean) => {
    setScores((prevScores) => {
      const currentScore = prevScores[chapterId] || { correct: 0, total: 0 };
      return {
        ...prevScores,
        [chapterId]: {
          correct: isCorrect ? currentScore.correct + 1 : currentScore.correct,
          total: currentScore.total + 1,
        },
      };
    });
  };

  const selectedChapter = chapters.find((c) => c.id === selectedChapterId);

  return (
    <SidebarProvider>
      <ChapterNavigation
        chapters={chapters}
        scores={scores}
        onSelectChapter={handleSelectChapter}
        selectedChapterId={selectedChapterId}
      />
      <SidebarInset className="flex flex-col">
        <header className="flex items-center gap-4 border-b p-2">
           <div className="flex items-center gap-2">
             <SidebarTrigger />
             <BookOpen className="h-6 w-6 text-primary" />
             <h1 className="font-headline text-2xl font-bold text-primary">TestPrep Digital</h1>
           </div>
          <div className="flex items-center gap-2">
            {/* Future header actions could go here */}
          </div>
        </header>
        <div className="flex-1 overflow-y-auto">
          {selectedChapter ? (
            <QuestionView
              key={selectedChapter.id}
              chapter={selectedChapter}
              onAnswer={(isCorrect) => handleAnswer(selectedChapter.id, isCorrect)}
            />
          ) : (
            <div className="flex h-full items-center justify-center p-8">
              <p className="text-muted-foreground">Select a chapter to begin.</p>
            </div>
          )}
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
