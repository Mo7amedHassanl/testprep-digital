"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import type { Chapter, Question } from "@/lib/types";

interface QuestionImporterProps {
  chapters: Chapter[];
  onImport: (chapterId: number, questions: Question[]) => void;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

// This is the structure of the user's JSON
interface JsonInput {
  chapter: number;
  questions: Array<{
    id: number;
    type: string;
    question: string;
    options?: string[];
    correct_answer: string;
    explanation: string | null;
    difficulty: 'Easy' | 'Medium' | 'Hard';
    reference: string;
    category: string;
    type_label: string;
  }>;
}

export function QuestionImporter({
  chapters,
  onImport,
  open,
  onOpenChange,
}: QuestionImporterProps) {
  const [selectedChapterId, setSelectedChapterId] = useState<string>("");
  const [jsonContent, setJsonContent] = useState("");
  const { toast } = useToast();

  const handleImport = () => {
    if (!selectedChapterId) {
      toast({
        title: "Error",
        description: "Please select a chapter.",
        variant: "destructive",
      });
      return;
    }
    if (!jsonContent) {
      toast({
        title: "Error",
        description: "Please paste the JSON content.",
        variant: "destructive",
      });
      return;
    }

    try {
      const parsedJson: JsonInput = JSON.parse(jsonContent);
      const chapterIdNum = parseInt(selectedChapterId, 10);
      
      const newQuestions: Question[] = parsedJson.questions.map((q) => {
        const type = q.type === "multiple_choice" ? "MCQ" : "T/F";
        let choices: string[] = [];
        let correctAnswer: string = "";

        if(type === 'T/F'){
            choices = ['True', 'False'];
            correctAnswer = q.correct_answer;
        } else if (q.options) {
            choices = q.options;
            const correctIndex = "ABCDE".indexOf(q.correct_answer.toUpperCase());
            if (correctIndex !== -1 && q.options[correctIndex]) {
                correctAnswer = q.options[correctIndex];
            } else {
                throw new Error(`Invalid correct_answer '${q.correct_answer}' for question id ${q.id}`);
            }
        }

        return {
          id: `${chapterIdNum}-${q.id}`,
          type: type,
          statement: q.question,
          choices: choices,
          correctAnswer: correctAnswer,
          explanation: q.explanation ?? "No explanation provided.",
          difficulty: q.difficulty,
          reference: q.reference,
          keyConcepts: q.category.split(" | "),
          msc: q.type_label,
        };
      });

      onImport(chapterIdNum, newQuestions);
      toast({
        title: "Success",
        description: `Successfully imported ${newQuestions.length} questions into Chapter ${chapterIdNum}.`,
      });
      onOpenChange(false);
      setJsonContent("");
      setSelectedChapterId("");
    } catch (error) {
      console.error("Import failed:", error);
      toast({
        title: "Import Failed",
        description: error instanceof Error ? error.message : "Could not parse JSON or map questions.",
        variant: "destructive",
      });
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Import Questions</DialogTitle>
          <DialogDescription>
            Select a chapter and paste the JSON content of the questions you want to import.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="chapter" className="text-right">
              Chapter
            </Label>
            <Select value={selectedChapterId} onValueChange={setSelectedChapterId}>
                <SelectTrigger className="col-span-3">
                    <SelectValue placeholder="Select a chapter" />
                </SelectTrigger>
                <SelectContent>
                    {chapters.map((chapter) => (
                    <SelectItem key={chapter.id} value={String(chapter.id)}>
                        {chapter.id}: {chapter.title}
                    </SelectItem>
                    ))}
                </SelectContent>
            </Select>
          </div>
          <div className="grid grid-cols-4 items-start gap-4">
            <Label htmlFor="json-content" className="text-right pt-2">
              JSON Content
            </Label>
            <Textarea
              id="json-content"
              className="col-span-3 min-h-[200px]"
              value={jsonContent}
              onChange={(e) => setJsonContent(e.target.value)}
              placeholder='Paste your JSON here...'
            />
          </div>
        </div>
        <DialogFooter>
          <Button onClick={handleImport}>Import Questions</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
