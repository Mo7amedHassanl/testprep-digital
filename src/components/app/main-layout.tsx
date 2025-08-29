"use client";

import type { Chapter, Question, Scores } from "@/lib/types";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { useState, useTransition } from "react";
import { ChapterNavigation } from "./chapter-navigation";
import { QuestionView } from "./question-view";
import { BookOpen, Upload } from "lucide-react";
import { QuestionImporter } from "./question-importer";
import { Button } from "../ui/button";
import { addQuestionsToChapter } from "@/lib/firestore";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";

interface MainLayoutProps {
  chapters: Chapter[];
}

export function MainLayout({ chapters: initialChapters }: MainLayoutProps) {
  const [chapters, setChapters] = useState<Chapter[]>(initialChapters);
  const [selectedChapterId, setSelectedChapterId] = useState<number>(chapters[0]?.id || 1);
  const [scores, setScores] = useState<Scores>({});
  const [isImporterOpen, setIsImporterOpen] = useState(false);
  const [isPending, startTransition] = useTransition();
  const { toast } = useToast();

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

  const handleImportQuestions = (chapterId: number, newQuestions: Question[]) => {
    startTransition(async () => {
        try {
            await addQuestionsToChapter(chapterId, newQuestions);
            
            // Optimistically update the UI, or refetch
            setChapters(prevChapters => {
                return prevChapters.map(chapter => {
                    if (chapter.id === chapterId) {
                        const existingQuestionIds = new Set(chapter.questions.map(q => q.id));
                        const uniqueNewQuestions = newQuestions.filter(q => !existingQuestionIds.has(q.id));
                        const updatedQuestions = [...chapter.questions, ...uniqueNewQuestions];
                         // Sort questions by their original ID numbering
                        updatedQuestions.sort((a, b) => {
                            const aNum = parseInt(a.id.split('-')[1]);
                            const bNum = parseInt(b.id.split('-')[1]);
                            return aNum - bNum;
                        });
                        return { ...chapter, questions: updatedQuestions };
                    }
                    return chapter;
                });
            });

            toast({
                title: "Success",
                description: `Successfully imported ${newQuestions.length} questions into Chapter ${chapterId}.`,
            });
            setIsImporterOpen(false);

        } catch (error) {
            console.error("Failed to import questions:", error);
            toast({
                title: "Import Failed",
                description: "Could not save questions to the database.",
                variant: "destructive",
            });
        }
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
        <header className="flex items-center justify-between gap-4 border-b p-2">
           <div className="flex items-center gap-2">
             <SidebarTrigger />
             <BookOpen className="h-6 w-6 text-primary" />
             <h1 className="font-headline text-2xl font-bold text-primary">TestPrep Digital</h1>
           </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" onClick={() => setIsImporterOpen(true)} disabled={isPending}>
              {isPending ? (
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
              ) : (
                  <Upload className="h-4 w-4 mr-2" />
              )}
              Import Questions
            </Button>
            <QuestionImporter 
                chapters={chapters}
                onImport={handleImportQuestions}
                open={isImporterOpen}
                onOpenChange={setIsImporterOpen}
                isPending={isPending}
            />
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
