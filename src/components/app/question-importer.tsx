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
import { Loader2 } from "lucide-react";

interface QuestionImporterProps {
  chapters: Chapter[];
  onImport: (chapterId: number, questions: Question[]) => void;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  isPending: boolean;
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
  isPending
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
                // If correct_answer is not a letter, assume it's the answer text itself
                if(q.options.includes(q.correct_answer)) {
                    correctAnswer = q.correct_answer;
                } else {
                    throw new Error(`Invalid correct_answer '${q.correct_answer}' for question id ${q.id}`);
                }
            }
        }

        return {
          id: `${chapterIdNum}-${q.id}`,
          type: type,
          statement: q.question.replace(/\$(\d+(\.\d+)?)\s*\\times\s*10\^({-?\d+})\$/g, (_, base, __, exp) => `${base} × 10^${exp.replace(/[{}]/g, '')}`),
          choices: choices.map(c => c.replace(/\$(\d+(\.\d+)?)\s*\\times\s*10\^({-?\d+})\$/g, (_, base, __, exp) => `${base} × 10^${exp.replace(/[{}]/g, '')}`)),
          correctAnswer: correctAnswer,
          explanation: (q.explanation ?? "No explanation provided.").replace(/\$(\d+(\.\d+)?)\s*\\times\s*10\^({-?\d+})\$/g, (_, base, __, exp) => `${base} × 10^${exp.replace(/[{}]/g, '')}`),
          difficulty: q.difficulty,
          reference: q.reference,
          keyConcepts: q.category.split(" | "),
          msc: q.type_label,
        };
      });

      onImport(chapterIdNum, newQuestions);
      // We don't close the dialog or show success here, we let the parent component handle it
      // after the async operation is complete.
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
            Select a chapter and paste the JSON content of the questions you want to import. The data will be saved permanently.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="chapter" className="text-right">
              Chapter
            </Label>
            <Select value={selectedChapterId} onValueChange={setSelectedChapterId} disabled={isPending}>
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
              disabled={isPending}
            />
          </div>
        </div>
        <DialogFooter>
          <Button onClick={handleImport} disabled={isPending || !selectedChapterId || !jsonContent}>
            {isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Import Questions
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
