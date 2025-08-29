"use client";

import type { Question } from "@/lib/types";
import type { ImmediateFeedbackOutput } from "@/ai/flows/immediate-feedback-with-reasoning";
import { useState, useTransition } from "react";
import { getFeedback } from "@/app/actions";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { Badge } from "../ui/badge";
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "../ui/alert";
import { CheckCircle2, Info, Lightbulb, Loader2, XCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { LatexRenderer } from "./latex-renderer";
import { BlockMath } from "react-katex";
import Image from "next/image";

interface QuestionCardProps {
  question: Question;
  questionNumber: number;
  onAnswer: (isCorrect: boolean) => void;
}

export function QuestionCard({ question, questionNumber, onAnswer }: QuestionCardProps) {
  const [selectedChoice, setSelectedChoice] = useState<string | null>(null);
  const [feedback, setFeedback] = useState<ImmediateFeedbackOutput | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isPending, startTransition] = useTransition();
  const { toast } = useToast();

  const handleSubmit = () => {
    if (!selectedChoice) {
      toast({
        title: "No Answer Selected",
        description: "Please select an answer before submitting.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitted(true);
    startTransition(async () => {
      const result = await getFeedback({
        question: question.statement,
        choices: question.choices,
        submittedAnswer: selectedChoice,
        correctAnswer: question.correctAnswer,
        explanation: question.explanation,
      });
      setFeedback(result);
      onAnswer(result.isCorrect);
    });
  };

  const getChoiceClass = (choice: string) => {
    if (!isSubmitted) return "";
    if (choice === question.correctAnswer) return "bg-accent/30 border-accent-foreground/50";
    if (choice === selectedChoice && choice !== question.correctAnswer) return "bg-destructive/20 border-destructive/50";
    return "";
  };
  
  const getChoiceIcon = (choice: string) => {
      if (!isSubmitted) return null;
      if (choice === question.correctAnswer) return <CheckCircle2 className="h-5 w-5 text-green-600" />;
      if (choice === selectedChoice && choice !== question.correctAnswer) return <XCircle className="h-5 w-5 text-destructive" />;
      return <div className="h-5 w-5" />;
  }

  return (
    <Card className="overflow-hidden shadow-md transition-all hover:shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-start gap-4">
            <span className="flex-shrink-0 text-primary font-headline text-2xl">
                {questionNumber}.
            </span>
            <div className="flex-1 pt-0.5">
              <LatexRenderer content={question.statement} />
              {question.table && <BlockMath math={question.table} />}
              {question.imageUrl && (
                <div className="mt-4">
                  <Image
                    src={question.imageUrl}
                    alt={`Question ${questionNumber} image`}
                    width={400}
                    height={300}
                    className="rounded-md"
                    data-ai-hint="scientific illustration"
                  />
                </div>
              )}
            </div>
        </CardTitle>
        <CardDescription>
          {question.type === "MCQ"
            ? "Select one of the following options."
            : "Select True or False."}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <RadioGroup
          value={selectedChoice ?? undefined}
          onValueChange={setSelectedChoice}
          disabled={isSubmitted || isPending}
        >
          <div className="space-y-3">
            {question.choices.map((choice, index) => (
              <Label
                key={`${question.id}-choice-${index}`}
                htmlFor={`${question.id}-${choice}-${index}`}
                className={cn(
                  "flex items-center gap-4 rounded-lg border p-4 transition-colors cursor-pointer hover:bg-secondary/50",
                  getChoiceClass(choice)
                )}
              >
                <RadioGroupItem value={choice} id={`${question.id}-${choice}-${index}`} />
                <span className="flex-1"><LatexRenderer content={choice} /></span>
                {getChoiceIcon(choice)}
              </Label>
            ))}
          </div>
        </RadioGroup>
      </CardContent>
      <CardFooter className="flex flex-col items-stretch gap-4">
        {!isSubmitted && (
            <Button onClick={handleSubmit} disabled={isPending || !selectedChoice}>
                {isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                Check Answer
            </Button>
        )}
        {isSubmitted && feedback && (
            <Alert variant={feedback.isCorrect ? 'default' : 'destructive'} className={cn(feedback.isCorrect && 'border-green-400 bg-green-50 dark:bg-green-900/20')}>
                {feedback.isCorrect ? (
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                ) : (
                    <XCircle className="h-4 w-4" />
                )}
                <AlertTitle className="font-headline">
                    {feedback.isCorrect ? "Correct!" : "Incorrect"}
                </AlertTitle>
                <AlertDescription><LatexRenderer content={feedback.feedback} /></AlertDescription>
            </Alert>
        )}
        <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="metadata" className="border-t">
                <AccordionTrigger className="text-sm font-semibold">
                    <div className="flex items-center gap-2">
                        <Info className="h-4 w-4" />
                        <span>Question Details</span>
                    </div>
                </AccordionTrigger>
                <AccordionContent className="space-y-4 pt-2 text-sm">
                    <div className="flex flex-wrap gap-2">
                        <Badge variant="outline">Difficulty: {question.difficulty}</Badge>
                        <Badge variant="outline">MSC: {question.msc}</Badge>
                    </div>
                    <div>
                        <h4 className="font-semibold text-muted-foreground">Key Concepts</h4>
                        <p>{question.keyConcepts.join(", ")}</p>
                    </div>
                    <div>
                        <h4 className="font-semibold text-muted-foreground">Reference</h4>
                        <p className="italic">{question.reference}</p>
                    </div>
                </AccordionContent>
            </AccordionItem>
        </Accordion>
      </CardFooter>
    </Card>
  );
}
