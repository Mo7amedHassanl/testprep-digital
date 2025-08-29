
"use client";

import { useState, useTransition } from "react";
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
import { useToast } from "@/hooks/use-toast";
import { Loader2, Sparkles } from "lucide-react";
import { extractQuestionsFromText } from "@/app/actions";
import { ScrollArea } from "../ui/scroll-area";

interface QuestionExtractorProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function QuestionExtractor({
  open,
  onOpenChange,
}: QuestionExtractorProps) {
  const [rawText, setRawText] = useState("");
  const [jsonResult, setJsonResult] = useState("");
  const [isPending, startTransition] = useTransition();
  const { toast } = useToast();

  const handleExtract = () => {
    if (!rawText.trim()) {
      toast({
        title: "Error",
        description: "Please paste the text you want to extract questions from.",
        variant: "destructive",
      });
      return;
    }

    startTransition(async () => {
      try {
        setJsonResult("");
        const result = await extractQuestionsFromText({ text: rawText });
        // The result now contains a 'questions' property
        const jsonString = JSON.stringify({ questions: result.questions }, null, 2);
        setJsonResult(jsonString);
        toast({
          title: "Extraction Successful",
          description: "The JSON has been generated. You can now copy it.",
        });
      } catch (error) {
        console.error("Extraction failed:", error);
        const errorMessage = error instanceof Error ? error.message : "An unknown error occurred.";
        toast({
          title: "Extraction Failed",
          description: `AI failed to process the text. ${errorMessage}`,
          variant: "destructive",
        });
      }
    });
  };

  const handleCopy = () => {
    if (!jsonResult) return;
    navigator.clipboard.writeText(jsonResult);
    toast({
      title: "Copied to Clipboard",
      description: "You can now paste the JSON into the Question Importer.",
    });
  };
  
  const handleClose = (isOpen: boolean) => {
    if (!isOpen) {
        setRawText("");
        setJsonResult("");
    }
    onOpenChange(isOpen);
  }

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[800px] h-[80vh] flex flex-col">
        <DialogHeader>
          <DialogTitle>Extract Questions from Text</DialogTitle>
          <DialogDescription>
            Paste text from a PDF or other source, and the AI will convert it into the required JSON format.
          </DialogDescription>
        </DialogHeader>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-1 overflow-hidden">
            <div className="flex flex-col gap-2 h-full">
                <Label htmlFor="raw-text" className="font-semibold">
                    Paste Your Text Here
                </Label>
                <Textarea
                    id="raw-text"
                    className="flex-1 resize-none"
                    value={rawText}
                    onChange={(e) => setRawText(e.target.value)}
                    placeholder="Paste the entire text block containing questions..."
                    disabled={isPending}
                />
            </div>
            <div className="flex flex-col gap-2 h-full">
                <Label htmlFor="json-result" className="font-semibold">
                    Generated JSON
                </Label>
                <ScrollArea className="flex-1 border rounded-md bg-secondary/50">
                    <pre className="p-4 text-xs whitespace-pre-wrap">
                      {jsonResult || "JSON output will appear here..."}
                    </pre>
                </ScrollArea>
            </div>
        </div>
        <DialogFooter>
          <Button onClick={handleCopy} variant="secondary" disabled={!jsonResult}>
            Copy JSON
          </Button>
          <Button onClick={handleExtract} disabled={isPending || !rawText}>
            {isPending ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              <Sparkles className="mr-2 h-4 w-4" />
            )}
            Extract Questions
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
